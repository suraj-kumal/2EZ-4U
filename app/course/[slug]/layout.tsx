import React from "react";
import fetchTopics from "@/app/course/data/fetchTopics";
import SidebarWrapper from "@/app/course/[slug]/SidebarWrapper";

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

  const chaptersWithTopics = await fetchTopics(slug);

  const chapters = chaptersWithTopics.map((chapter: any) => ({
    id: chapter.id,
    title: chapter.title,
    slug: chapter.slug,
  }));

  const topics = chaptersWithTopics.flatMap((chapter: any) =>
    chapter.topics.map((topic: any) => ({
      id: topic.id,
      title: topic.title,
      slug: topic.slug,
      chapterSlug: chapter.slug,
    }))
  );

  return (
    <SidebarWrapper chapters={chapters} topics={topics} subject={slug}>
      {children}
    </SidebarWrapper>
  );
};

export default Layout;
