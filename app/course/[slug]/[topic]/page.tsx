import "@/app/course/[slug]/[topic]/content.css";
import fetchMaterials from "@/app/course/data/fetchMaterials";
import { JSDOM } from "jsdom";

export const revalidate = 600;

function stripInlineStyles(html: string) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Remove inline styles
  const elementsWithStyle = document.querySelectorAll("*[style]");
  elementsWithStyle.forEach((element) => {
    element.removeAttribute("style");
  });

  // Remove empty <li> and those with only &nbsp;
  const listItems = document.querySelectorAll("li");
  listItems.forEach((li) => {
    const content = li.innerHTML.replace(/\u00A0|&nbsp;/g, "").trim();
    if (!content) {
      li.remove();
    }
  });

  return document.body.innerHTML;
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
      <h1 className="font-bold text-2xl underline underline-offset-2 text-center my-8">
        {title}
      </h1>
      <div
        className="prose max-w-none px-8 py-8 content
    [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6
    [&>p:last-child]:mb-0 [&>ul:last-child]:mb-0 [&>ol:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: cleanedHtml }}
      />
    </>
  );
};
