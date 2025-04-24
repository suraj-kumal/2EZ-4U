import fetchSubjects from "@/app/neclicense/data/fetchSubjects";
import Image from "next/image";
import Link from "next/link";

async function Neclicenseui() {
  let subjectList;
  let error = null;

  try {
    subjectList = await fetchSubjects();
  } catch (err) {
    error = err;
  }

  if (error) {
    return (
      <div className="col-span-full text-center py-10 text-red-500">
        Failed to load subjects
      </div>
    );
  }

  return (
    <>
      <div className="allneccourses flex justify-center items-center h-48vh">
        <div className="px-4 py-4 max-w-md mx-auto">
          {!subjectList ? (
            <div className="text-center py-10">Loading...</div>
          ) : subjectList && subjectList.length > 0 ? (
            <a
              href={`/neclicense/description/${subjectList[0].slug}`}
              draggable="false"
              className="block"
            >
              <div className="flex items-center px-4 py-4 gap-6 mx-auto border-[4px] border-[#c8cdd0] rounded-2xl">
                <Image
                  draggable="false"
                  src={subjectList[0].logo}
                  width={150}
                  height={150}
                  className="w-24 h-24 rounded-2xl object-cover"
                  alt={`${subjectList[0].title} image`}
                />
                <div className="flex flex-col justify-center h-full">
                  <h2 className="font-bold text-xs">{subjectList[0].title}</h2>
                </div>
              </div>
            </a>
          ) : (
            <div className="text-center py-10">No subjects available</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Neclicenseui;
