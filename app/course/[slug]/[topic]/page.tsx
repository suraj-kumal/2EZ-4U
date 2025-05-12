import "@/app/course/[slug]/[topic]/content.css";
import fetchMaterials from "@/app/course/data/fetchMaterials";
//import { JSDOM } from "jsdom";
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
  const topic = params.topic;

  const topiccontent = await fetchMaterials(topic);

  const cleanedHtml = topiccontent.content
    ? stripInlineStyles(topiccontent.content)
    : "";
  const title = topiccontent.title;
  return (
    <>
      <h1 className="font-bold px-8 text-2xl underline underline-offset-2 text-center my-4">
        {title}
      </h1>
      <div className="flex">
        <div></div>
        <div
          className="prose max-w-none px-4 py-8 md:px-16 content
    [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6
    [&>p:last-child]:mb-0 [&>ul:last-child]:mb-0 [&>ol:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: cleanedHtml }}
        />
      </div>
    </>
  );
};
