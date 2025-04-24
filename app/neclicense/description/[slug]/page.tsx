import fetchSubjects from "@/app/neclicense/data/fetchSubjects";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface Subject {
  logo: string;
  title: string;
  slug: string;
  description: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const subjects = await fetchSubjects();
  const subject = subjects.find((s: Subject) => s.slug === slug);

  if (!subject) return <div>Subject not found</div>;

  return (
    <div className="px-4 py-4 sm:py-12 sm:px-12">
      {/* Your component JSX */}
      <div className="w-full flex justify-center items-center mx-0 my-4 sm:mx-12 sm:my-12">
        <Link
          href={`/course/${params.slug}`}
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
