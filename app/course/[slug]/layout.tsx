import React from "react";
import fetchTopics from "@/app/course/data/fetchTopics";
import Sidebar from "@/app/course/ui/sidebar";

const Layout = async (props: any) => {
  const { params, children } = props;

  const resolvedParams = params instanceof Promise ? await params : params;
  const { slug } = resolvedParams;

  const chaptersWithTopics = await fetchTopics(slug);

  const chapters = chaptersWithTopics.map((chapter: any) => ({
    title: chapter.title,
    slug: chapter.slug,
  }));

  const topics = chaptersWithTopics.flatMap((chapter: any) =>
    chapter.topics.map((topic: any) => ({
      title: topic.title,
      slug: topic.slug,
      chapterSlug: chapter.slug,
    }))
  );

  return (
    <div className="flex">
      <Sidebar chapters={chapters} topics={topics} subject={slug} />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
