import Link from "next/link";
import { FC } from "react";

interface Topic {
  title: string;
  slug: string;
  chapterSlug: string;
}

interface Chapter {
  title: string;
  slug: string;
}

interface SidebarProps {
  chapters: Chapter[];
  topics: Topic[];
  subject: any;
}

const Sidebar: FC<SidebarProps> = ({ chapters, topics, subject }) => {
  return (
    <div className="sidebar bg-[#d9d9d9d9] w-80 px-2 py-8">
      {chapters.map((chapter) => (
        <div className="chapter_n_topic mx-2 my-2" key={chapter.slug}>
          <h3 className="px-4 py-2 cursor-pointer font-bold">
            {chapter.title}
          </h3>
          <ul className="pl-6 pb-3">
            {topics
              .filter((topic) => topic.chapterSlug === chapter.slug)
              .map((topic) => (
                <li key={topic.slug} className="my-4">
                  <Link
                    href={`/course/${subject}/${topic.slug}`}
                    className="py-1 cursor-pointer my-4"
                  >
                    {" "}
                    {topic.title}{" "}
                  </Link>
                </li>
              ))}
          </ul>
          <div className="border-t border-black mx-4 my-2"></div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
