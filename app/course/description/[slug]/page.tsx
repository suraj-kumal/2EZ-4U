// app/course/description/[slug]/page.tsx
import { redirect } from "next/navigation";
import fetchSubjects from "@/app/Data/fetchsubjects";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

// Define a helper function to generate static paths
export async function generateStaticParams() {
  const subjects = await fetchSubjects();
  return subjects.map((subject: any) => ({
    slug: subject.slug,
  }));
}

// Create the page component without async keyword
export default function SubjectPage({ params }: { params: { slug: string } }) {
  // Use a synchronous approach for the main component
  return <SubjectPageContent slug={params.slug} />;
}

// Create a separate component to handle the async logic
function SubjectPageContent({ slug }: { slug: string }) {
  // Use React's useEffect or similar for client-side data fetching if needed
  // For server-side rendering, you'll need to adapt this approach

  // This is a placeholder for the actual implementation
  return (
    <div className="px-4 py-4 sm:py-12 sm:px-12">
      <div className="w-full flex justify-center items-center mx-0 my-4 sm:mx-12 sm:my-12">
        <Link
          href={`/course/${slug}`}
          className="group flex justify-center items-center gap-2 px-5 py-3 mt-6 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Dive Into Content
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="prose max-w-none">Loading content...</div>
    </div>
  );
}
