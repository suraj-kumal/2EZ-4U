import Course from "@/app/ui/course";
import Link from "next/link";
import { roboto } from "@/app/ui/fonts";
const Courses = () => {
  return (
    <>
      <div className="relative bg-[#6AAAD0] w-full px-8 py-8">
        <h1 className="text-black text-center text-3xl font-bold mx-8 my-8 underline underline-offset-4">
          Courses
        </h1>

        <div className="relative z-10">
          <Course />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#D9D9D9] from-0% via-[#D9D9D9] via-5% to-transparent to-15% md:to-30% z-20 pointer-events-none" />
        <div className="relative z-30 mt-4 text-center">
          <Link
            href="/courses"
            className={`${roboto.className} antialiased font-semibold underline underline-offset-4 transition-colors duration-200`}
          >
            See More &gt;&gt;
          </Link>
        </div>
      </div>
    </>
  );
};

export default Courses;
