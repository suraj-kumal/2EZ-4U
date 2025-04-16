import HomeCourses from "../Data/HomeCourses";
import Image from "next/image";
import Link from "next/link";
const course = () => {
  const hc = HomeCourses();
  return (
    <div className="allhomecourses">
      <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
        {hc.map((course, index) => (
          <Link href="/" key={index} draggable="false">
            <div className="flex items-center px-4 py-4 gap-6 mx-2 my-2 w-90 border-[4px] border-[#3F80B7] rounded-2xl">
              <Image
                draggable="false"
                src={course.image}
                width={150}
                height={150}
                className="w-24 h-24 rounded-2xl object-cover"
                alt={course.description}
              />
              <div className="flex flex-col justify-center h-full">
                <h2 className="font-bold sm:text-xs md:text-lg">
                  {course.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default course;
