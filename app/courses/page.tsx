import Course from "@/app/courses/ui/course";
const page = () => {
  return (
    <>
      <div className="bg-[#6AAAD0] w-full px-8 py-8 z-0">
        <h1 className="title text-center text-3xl font-bold mx-8 my-8 text-white">
          Courses
        </h1>
        <Course />
      </div>
    </>
  );
};

export default page;
