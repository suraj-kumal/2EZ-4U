import "@/app/neclicense/[slug]/[topic]/content.css";
import fetchMaterials from "@/app/neclicense/data/fetchMaterials";
import fetchTopics from "@/app/neclicense/data/fetchTopics";
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

  const topiccontent = await fetchMaterials(topic);

  const cleanedHtml = topiccontent.content
    ? stripInlineStyles(topiccontent.content)
    : "";
  const title = topiccontent.title;

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
          className="prose text-justify lg:max-w-screen-lg md:max-w-screen-lg sm:max-w-screen-sm px-4 py-8 md:px-12 sm:w-screen
          content
          [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6
          [&>p:last-child]:mb-0 [&>ul:last-child]:mb-0 [&>ol:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: cleanedHtml }}
        />
      </div>

      <div className="block md:flex md:justify-evenly md:items-center w-full px-0 py-6 border-t">
        <div className="prev mb-4 md:mb-0 text-left">
          {previousTopic && (
            <Link
              href={`/neclicense/${slug}/${previousTopic.slug}`}
              className="flex flex-col items-start px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded transition w-72 md:w-80"
            >
              <span className="text-sm text-gray-600 mb-1">
                {previousTopic.chapterTitle}
              </span>
              <span className="font-medium">← {previousTopic.title}</span>
            </Link>
          )}
        </div>

        <div className="next flex justify-end md:justify-start text-right">
          {nextTopic && (
            <Link
              href={`/neclicense/${slug}/${nextTopic.slug}`}
              className="flex flex-col items-end px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded transition w-72 md:w-80"
            >
              <span className="text-sm text-gray-600 mb-1">
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

  const allTopics: Array<{
    uid: string;
    title: string;
    slug: string;
    chapterTitle: string;
    chapterUid: string;
  }> = [];

  // Handle the nested array structure from fetchTopics
  chapters.forEach((chapterGroup) => {
    if (Array.isArray(chapterGroup)) {
      chapterGroup.forEach((topic: any) => {
        allTopics.push({
          uid: topic.uid,
          title: topic.title,
          slug: topic.slug,
          chapterTitle: topic.chapter.title,
          chapterUid: topic.chapter.uid,
        });
      });
    }
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
