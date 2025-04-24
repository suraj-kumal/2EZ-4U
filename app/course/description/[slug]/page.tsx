import fetchSubjects from "@/app/Data/fetchsubjects";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Page(props: any) {
  return <Content {...props} />;
}

async function Content(props: any) {
  const params =
    props.params instanceof Promise ? await props.params : props.params;
  const slug = params.slug;

  const subjects = await fetchSubjects();
  const subject = subjects.find((s: { slug: string }) => s.slug === slug);

  if (!subject) return <div>Subject not found</div>;

  return (
    <div className="px-8 py-8 sm:py-12 sm:px-12">
      <div className="w-full flex justify-center items-center mx-0 my-4 sm:mx-12 sm:my-12">
        <Link
          href={`/course/${slug}`}
          className="group flex justify-center items-center gap-2 px-5 py-3 mt-6 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Dive Into {subject.title}
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: subject.description }}
      />
    </div>
  );
}
