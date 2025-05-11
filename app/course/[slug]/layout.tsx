// "use client";
// import React from "react";
// import fetchTopics from "@/app/course/data/fetchTopics";
// import Sidebar from "@/app/course/ui/sidebar";

// import { useState } from "react";

// const Layout = async (props: any) => {
//   const { params, children } = props;

//   const resolvedParams = params instanceof Promise ? await params : params;
//   const { slug } = resolvedParams;

//   const chaptersWithTopics = await fetchTopics(slug);

//   const chapters = chaptersWithTopics.map((chapter: any) => ({
//     id: chapter.id,
//     title: chapter.title,
//     slug: chapter.slug,
//   }));

//   const topics = chaptersWithTopics.flatMap((chapter: any) =>
//     chapter.topics.map((topic: any) => ({
//       id: topic.id,
//       title: topic.title,
//       slug: topic.slug,
//       chapterSlug: chapter.slug,
//     }))
//   );

//   return (
//     <div className="flex h-screen">
//       <div className="sidenav h-screen overflow-y-auto ">
//         <Sidebar chapters={chapters} topics={topics} subject={slug} />
//       </div>
//       <div>
//         <button >toggle</button>
//       </div>
//       <main className="flex-1 h-screen overflow-y-auto">{children}</main>
//     </div>
//   );
// };

// export default Layout;
// app/course/layout.tsx or appropriate layout path
import React from "react";
import fetchTopics from "@/app/course/data/fetchTopics";
import SidebarWrapper from "./SidebarWrapper"; // We'll create this next

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
