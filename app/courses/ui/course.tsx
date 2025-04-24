import fetchSubjects from "@/app/Data/fetchsubjects";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Course = async () => {
  let subjectList;

  try {
    subjectList = await fetchSubjects();
  } catch (error) {
    return (
      <div className="col-span-full text-center py-10 text-red-500">
        Failed to load subjects
      </div>
    );
  }

  return (
    <div className="allcourses">
      <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
        {subjectList.map(
          (
            item: {
              slug: string;
              logo: string | StaticImport;
              title: string;
            },
            index: number
          ) => (
            <a
              href={`/course/description/${item.slug}`}
              key={item.slug}
              draggable="false"
            >
              <div className="flex w-auto items-center px-4 py-4 gap-6 mx-2 my-2 w-90 border-[4px] border-[#ffffff] rounded-2xl">
                <Image
                  draggable="false"
                  src={item.logo}
                  width={150}
                  height={150}
                  className="w-24 h-24 rounded-2xl object-cover"
                  alt={`${item.title} image`}
                  priority={true}
                />
                <div className="flex flex-col justify-center h-full">
                  <h2 className="font-bold text-xs">{item.title}</h2>
                </div>
              </div>
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Course;
