import React from "react";
import fetchTopics from "@/app/neclicense/data/fetchTopics";
import SidebarWrapper from "@/app/neclicense/[slug]/SidebarWrapper";

export const metadata = {
  title: "EasyExplanation",
  icons: {
    icon: [
      { url: "/faviconico/favicon.ico", type: "image/x-icon" },
      {
        url: "/faviconico/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/faviconico/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

const Layout = async (props: any) => {
  const { params, children } = props;

  const resolvedParams = params instanceof Promise ? await params : params;
  const { slug } = resolvedParams;

  // Fetch the topics data - this returns array of arrays with topic objects
  const topicsData = await fetchTopics(slug);

  if (!topicsData || !Array.isArray(topicsData) || topicsData.length === 0) {
    // Handle empty or invalid data
    console.error("Invalid topics data received:", topicsData);
    return (
      <SidebarWrapper chapters={[]} topics={[]} subject={slug}>
        {children}
      </SidebarWrapper>
    );
  }

  // Prepare chapters and topics arrays from the nested structure
  const chapters: any[] = [];
  const topics: any[] = [];

  // Process each chapter array
  topicsData.forEach((chapterTopics, index) => {
    if (Array.isArray(chapterTopics) && chapterTopics.length > 0) {
      // Get the first topic from the chapter to extract chapter info
      const firstTopic = chapterTopics[0];

      if (firstTopic && firstTopic.chapter) {
        // Create a chapter entry
        const chapter = {
          id: firstTopic.chapter.uid,
          title: firstTopic.chapter.title,
          slug: firstTopic.chapter.slug,
        };
        chapters.push(chapter);

        // Create topics entries for this chapter
        chapterTopics.forEach((topic) => {
          if (topic) {
            topics.push({
              id: topic.uid,
              title: topic.title,
              slug: topic.slug,
              chapterSlug: firstTopic.chapter.slug,
            });
          }
        });
      }
    }
  });

  return (
    <SidebarWrapper chapters={chapters} topics={topics} subject={slug}>
      {children}
    </SidebarWrapper>
  );
};

export default Layout;
