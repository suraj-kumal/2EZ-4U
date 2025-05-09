import React from "react";
import fetchMaterials from "@/app/course/data/fetchMaterials";
import { JSDOM } from "jsdom";

function stripInlineStyles(html: any) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const elementsWithStyle = document.querySelectorAll("*[style]");
  elementsWithStyle.forEach(
    (element: { removeAttribute: (arg0: string) => void }) => {
      element.removeAttribute("style");
    }
  );

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

  return (
    <>
      <div
        className="prose max-w-none px-8 py-8 
             [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6 
             [&>p:last-child]:mb-0 [&>ul:last-child]:mb-0 [&>ol:last-child]:mb-0
             [&>table]:mb-6 [&>table:last-child]:mb-0 [&>table]:border-collapse
             [&>table>tbody>tr]:border-b [&>table>tbody>tr]:border-solid [&>table>tbody>tr]:border-gray-300
             [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-solid [&>table>tbody>tr>td]:border-gray-300 [&>table>tbody>tr>td]:p-2"
        dangerouslySetInnerHTML={{ __html: cleanedHtml }}
      />
    </>
  );
};
