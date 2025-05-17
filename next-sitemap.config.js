import axios from "axios";

// Export the configuration as default export (ESM style)
export default {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,

  // Add custom paths for course pages and NEC license pages
  additionalPaths: async (config) => {
    const base_url = process.env.NEXT_PUBLIC_BASE_URL;
    const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
    const sitemapEntries = [];

    // Add static pages with high priority
    const staticPages = [
      {
        loc: `/`, // Home page
        priority: 1.0,
      },
      {
        loc: `/courses`,
        priority: 0.9,
      },
      {
        loc: `/aboutus`,
        priority: 0.9,
      },
    ];

    // Add all static pages to sitemap entries
    sitemapEntries.push(...staticPages);

    try {
      // Part 1: Handle course pages
      // Fetch all subjects using the API
      const subjectsResponse = await axios.get(
        `${base_url}/api/list/subjects`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const subjects = subjectsResponse.data;

      // Add subject description pages to sitemap
      subjects.forEach((subject) => {
        sitemapEntries.push({
          loc: `/course/description/${subject.slug}`,
          priority: 1.0,
        });
      });

      // For each subject, fetch its topics and add them to sitemap
      for (const subject of subjects) {
        try {
          const topicsResponse = await axios.get(
            `${base_url}/api/topic/by/subject/${subject.slug}`,
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );

          const chapters = topicsResponse.data;

          // Process each chapter and its topics
          chapters.forEach((chapter) => {
            chapter.topic.forEach((topic) => {
              sitemapEntries.push({
                loc: `/course/${subject.slug}/${topic.slug}`,
                priority: 0.8,
              });
            });
          });
        } catch (topicError) {
          console.error(
            `Error fetching topics for subject ${subject.slug}:`,
            topicError
          );
        }
      }

      // Part 2: Handle NEC license pages
      // Fetch all NEC license programs
      const necLicenseResponse = await axios.get(
        `${base_url}/api/nec/exam/program/list/all/`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const necLicenses = necLicenseResponse.data;

      // Add NEC license description pages to sitemap
      necLicenses.forEach((necLicense) => {
        sitemapEntries.push({
          loc: `/neclicense/description/${necLicense.slug}`,
          priority: 0.8,
        });
      });

      // For each NEC license, fetch its topics and add them to sitemap
      for (const necLicense of necLicenses) {
        try {
          const necTopicsResponse = await axios.get(
            `${base_url}/api/nec/exam/topic/list/${necLicense.slug}`,
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );

          // The data structure is an array of arrays containing topic objects
          const topicGroups = necTopicsResponse.data;

          // Process each topic group (which is an array)
          topicGroups.forEach((topicGroup) => {
            // Each topic group contains multiple topics
            topicGroup.forEach((topic) => {
              sitemapEntries.push({
                loc: `/neclicense/${necLicense.slug}/${topic.slug}`,
                priority: 0.8,
              });
            });
          });
        } catch (necTopicError) {
          console.error(
            `Error fetching topics for NEC license ${necLicense.slug}:`,
            necTopicError
          );
        }
      }

      return sitemapEntries;
    } catch (error) {
      console.error("Error fetching data for sitemap:", error);
      return [];
    }
  },
};
