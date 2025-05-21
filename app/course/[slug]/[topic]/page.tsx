// import "@/app/course/[slug]/[topic]/content.css";
// import fetchMaterials from "@/app/course/data/fetchMaterials";
// import fetchTopics from "@/app/course/data/fetchTopics";
// //import { JSDOM } from "jsdom";
// export const revalidate = 600;

// function stripInlineStyles(html: any) {
//   const cheerio = require("cheerio");
//   const $ = cheerio.load(html);

//   $("*[style]").removeAttr("style");

//   $("li").each((i: any, el: any) => {
//     const content = $(el)
//       .html()
//       .replace(/\u00A0|&nbsp;/g, "")
//       .trim();
//     if (!content) {
//       $(el).remove();
//     }
//   });

//   return $("body").html();
// }
// const page = (props: any) => {
//   return <Content {...props} />;
// };

// export default page;

// const Content = async (props: any) => {
//   const params =
//     props.params instanceof Promise ? await props.params : props.params;
//   const topic = await params.topic;

//   const topiccontent = await fetchMaterials(topic);

//   const cleanedHtml = topiccontent.content
//     ? stripInlineStyles(topiccontent.content)
//     : "";
//   const title = topiccontent.title;
//   return (
//     <>
//       <h1 className="font-bold px-8 text-2xl underline underline-offset-2 text-center my-4">
//         {title}
//       </h1>
//       <div className="flex justify-center items-center">
//         <div></div>
//         <div
//           className="prose lg:max-w-screen-lg md:max-w-screen-lg sm:max-w-screen-sm px-4 py-8 md:px-12 sm:w-screen
//           content
//     [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6
//     [&>p:last-child]:mb-0 [&>ul:last-child]:mb-0 [&>ol:last-child]:mb-0"
//           dangerouslySetInnerHTML={{ __html: cleanedHtml }}
//         />
//       </div>
//     </>
//   );
// };
import "@/app/course/[slug]/[topic]/content.css";
import fetchMaterials from "@/app/course/data/fetchMaterials";
import fetchTopics from "@/app/course/data/fetchTopics";
import Link from "next/link";
export const revalidate = 600;

function stripInlineStyles(html: any) {
  const cheerio = require("cheerio");
  const $ = cheerio.load(html);

  $("*[style]").removeAttr("style");

  $("li").each((i: any, el: any) => {
    const content = $(el)
      .html()
      .replace(/\u00A0|&nbsp;/g, "")
      .trim();
    if (!content) {
      $(el).remove();
    }
  });

  return $("body").html();
}

const page = (props: any) => {
  return <Content {...props} />;
};

export default page;

const Content = async (props: any) => {
  const params =
    props.params instanceof Promise ? await props.params : props.params;
  const { slug, topic } = params;

  const topicContent = await fetchMaterials(topic);
  const cleanedHtml = topicContent.content
    ? stripInlineStyles(topicContent.content)
    : "";
  const title = topicContent.title;

  const chapters = await fetchTopics(slug);

  const { previousTopic, nextTopic } = findAdjacentTopics(chapters, topic);

  return (
    <>
      <h1 className="font-bold px-8 text-2xl underline underline-offset-2 text-center my-4">
        {title}
      </h1>
      <div className="flex justify-center items-center">
        <div></div>
        <div
          className="prose lg:max-w-screen-lg md:max-w-screen-lg sm:max-w-screen-sm px-4 py-8 md:px-12 sm:w-screen
          content
          [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6
          [&>p:last-child]:mb-0 [&>ul:last-child]:mb-0 [&>ol:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: cleanedHtml }}
        />
      </div>

      <div className="flex justify-between items-center px-8 py-6 border-t">
        <div>
          {previousTopic && (
            <Link
              href={`/course/${slug}/${previousTopic.slug}`}
              className="flex flex-col items-start px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded transition"
            >
              <span className="text-sm text-gray-600">
                {previousTopic.chapterTitle}
              </span>
              <span className="font-medium">← {previousTopic.title}</span>
            </Link>
          )}
        </div>
        <div>
          {nextTopic && (
            <Link
              href={`/course/${slug}/${nextTopic.slug}`}
              className="flex flex-col items-end px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded transition"
            >
              <span className="text-sm text-gray-600">
                {nextTopic.chapterTitle}
              </span>
              <span className="font-medium">{nextTopic.title} →</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

function findAdjacentTopics(chapters: any[], currentTopicSlug: string) {
  let previousTopic = null;
  let nextTopic = null;
  let foundCurrent = false;

  const allTopics: Array<{
    id: string;
    title: string;
    slug: string;
    chapterTitle: string;
    chapterId: string;
  }> = [];

  chapters.forEach((chapter) => {
    chapter.topics.forEach((topic: any) => {
      allTopics.push({
        id: topic.id,
        title: topic.title,
        slug: topic.slug,
        chapterTitle: chapter.title,
        chapterId: chapter.id,
      });
    });
  });

  const currentIndex = allTopics.findIndex(
    (topic) => topic.slug === currentTopicSlug
  );

  if (currentIndex > 0) {
    previousTopic = allTopics[currentIndex - 1];
  }

  if (currentIndex < allTopics.length - 1) {
    nextTopic = allTopics[currentIndex + 1];
  }

  return { previousTopic, nextTopic };
}
