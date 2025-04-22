"use client";
import useSWR from "swr";
import Subjects from "../Data/Subjects";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const fetchSubjects = async () => {
  const data = await Subjects();
  const base_url = process.env.NEXT_PUBLIC_BASE_URL || "";

  return data.slice(0, 8).map((subject: any) => ({
    logo: base_url + subject.logo,
    title: subject.title,
    slug: subject.slug,
  }));
};

const Course = () => {
  const {
    data: subjectList,
    error,
    isLoading,
  } = useSWR("subjects", fetchSubjects);

  const SkeletonSubject = () => (
    <div className="flex items-center px-4 py-4 gap-6 mx-2 my-2 w-90 border-[4px] border-[#ffffff] rounded-2xl">
      <div className="w-24 h-24 rounded-2xl bg-gray-200 animate-pulse"></div>
      <div className="flex flex-col justify-center h-full w-full">
        <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="col-span-full text-center py-10 text-red-500">
        Failed to load subjects
      </div>
    );
  }

  return (
    <div className="allhomecourses">
      <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
        {isLoading || !subjectList ? (
          Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={`skeleton-${index}`}>
                <SkeletonSubject />
              </div>
            ))
        ) : subjectList.length > 0 ? (
          subjectList.map(
            (
              item: {
                slug: any;
                logo: string | StaticImport;
                title:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactPortal
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              },
              index: Key | null | undefined
            ) => (
              <Link
                href={`/subject/${item.slug}`}
                key={index}
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
                  />
                  <div className="flex flex-col justify-center h-full">
                    <h2 className="font-bold text-xs">{item.title}</h2>
                  </div>
                </div>
              </Link>
            )
          )
        ) : (
          <div className="col-span-full text-center py-10">
            No subjects available
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
