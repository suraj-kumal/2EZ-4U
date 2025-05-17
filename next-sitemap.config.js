import axios from "axios";

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,

  additionalPaths: async (config) => {
    const base_url = process.env.NEXT_PUBLIC_BASE_URL;
    const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
    const sitemapEntries = [];

    const staticPages = [
      {
        loc: `/`,
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

    sitemapEntries.push(...staticPages);

    try {
      const subjectsResponse = await axios.get(
        `${base_url}/api/list/subjects`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const subjects = subjectsResponse.data;

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
                priority: 1.0,
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
      const necLicenseResponse = await axios.get(
        `${base_url}/api/nec/exam/program/list/all/`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const necLicenses = necLicenseResponse.data;

      necLicenses.forEach((necLicense) => {
        sitemapEntries.push({
          loc: `/neclicense/description/${necLicense.slug}`,
          priority: 0.9,
        });
      });

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

          const topicGroups = necTopicsResponse.data;

          topicGroups.forEach((topicGroup) => {
            topicGroup.forEach((topic) => {
              sitemapEntries.push({
                loc: `/neclicense/${necLicense.slug}/${topic.slug}`,
                priority: 0.9,
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
