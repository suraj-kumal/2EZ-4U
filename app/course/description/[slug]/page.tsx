import fetchSubjects from "@/app/Data/fetchsubjects";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { JSDOM } from "jsdom";

function stripInlineStyles(html: any) {
  const dom = new JSDOM(html);
  const document = dom.window.document;


  const elementsWithStyle = document.querySelectorAll("*[style]");

  elementsWithStyle.forEach((element: { removeAttribute: (arg0: string) => void; }) => {
    element.removeAttribute("style");
  });

  return document.body.innerHTML;
}

export default function Page(props: any) {
  return <Content {...props} />;
}

async function Content(props: { params: any; }) {
  const params =
    props.params instanceof Promise ? await props.params : props.params;
  const slug = params.slug;

  const subjects = await fetchSubjects();
  const subject = subjects.find((s: { slug: any; }) => s.slug === slug);

  if (!subject) return <div>Subject not found</div>;
  const cleanedHtml = subject.description
    ? stripInlineStyles(subject.description)
    : "";

  return (
    <div className="px-8 py-8 sm:py-12 sm:px-12">
      <div className="w-full flex justify-center items-center mx-0 my-4 sm:mx-4 sm:my-8">
        <Link
          href={`/course/${slug}`}
          className="group flex justify-center items-center gap-2 px-5 py-3 mt-0 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Dive Into {subject.title}
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      <div
        className="prose max-w-none [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6 [&>p:last-child]:mb-0 [&>ul:last-child]:mb-0 [&>ol:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: cleanedHtml }}
      />
    </div>
  );
}
