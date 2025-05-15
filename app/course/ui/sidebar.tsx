// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   FC,
//   useState,
//   useEffect,
//   Key,
//   JSXElementConstructor,
//   ReactElement,
//   ReactNode,
//   ReactPortal,
// } from "react";
// import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
// import { FiX } from "react-icons/fi";

// interface Topic {
//   id: Key | null | undefined;

//   title: string;
//   slug: string;
//   chapterSlug: string;
// }

// interface Chapter {
//   id: Key | null | undefined;
//   title: string;
//   slug: string;
// }

// interface SidebarProps {
//   chapters: Chapter[];
//   topics: Topic[];
//   subject: any;
// }

// const Sidebar: FC<SidebarProps> = ({ chapters, topics, subject }) => {
//   const pathname = usePathname();
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       const isMobile = window.innerWidth < 768; // md breakpoint
//       setIsMobileView(isMobile);
//     };

//     const handleScroll = () => {
//       if (isMobileView && isMobileOpen) {
//         setIsMobileOpen(false);
//       }
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("resize", checkMobile);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isMobileOpen, isMobileView]);

//   const toggleSidebar = () => {
//     setIsMobileOpen(!isMobileOpen);
//   };

//   return (
//     <>
//       <div
//         className={`
//         fixed md:static top-18 left-0 h-[calc(100vh-0.001rem)] w-80
//         ${
//           isMobileView
//             ? `transform transition-transform duration-300 ease-in-out z-40
//            ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`
//             : ""
//         }
//       `}
//       >
//         {isMobileView && (
//           <button
//             onClick={toggleSidebar}
//             style={{ color: "#333333" }}
//             className={`
//               absolute -right-8 top-0 p-0 rounded-r-md
//               ${isMobileOpen ? "hidden" : ""}
//             `}
//           >
//             <TbLayoutSidebarLeftExpandFilled size={32} />
//           </button>
//         )}
//         {isMobileView && isMobileOpen && (
//           <button
//             onClick={toggleSidebar}
//             className="absolute top-2 right-2 p-1 text-black"
//           >
//             <FiX size={24} />
//           </button>
//         )}
//         <div className="sidebar bg-[#d3d3d3] w-full h-full px-2 py-4 overflow-y-auto">
//           {chapters.map(
//             (chapter: {
//               id: Key | null | undefined;
//               title:
//                 | boolean
//                 | Key
//                 | ReactElement<unknown, string | JSXElementConstructor<any>>
//                 | Iterable<ReactNode>
//                 | Promise<
//                     | string
//                     | number
//                     | bigint
//                     | boolean
//                     | ReactPortal
//                     | ReactElement<unknown, string | JSXElementConstructor<any>>
//                     | Iterable<ReactNode>
//                     | null
//                     | undefined
//                   >
//                 | null
//                 | undefined;
//               slug: string;
//             }) => (
//               <div className="chapter_n_topic mx-2 my-2" key={chapter.id}>
//                 <h3 className="px-4 py-2 cursor-pointer font-bold">
//                   {chapter.title}
//                 </h3>
//                 <ul className="pl-3 pb-3">
//                   {topics
//                     .filter((topic) => topic.chapterSlug === chapter.slug)
//                     .map((topic) => {
//                       const topicPath = `/course/${subject}/${topic.slug}`;
//                       const isActive = pathname === topicPath;

//                       return (
//                         <li key={topic.title} className="my-4">
//                           <Link
//                             href={topicPath}
//                             className={`py-1 cursor-pointer my-4 ${
//                               isActive
//                                 ? "text-[#1675ab] font-semibold text-pretty"
//                                 : "text-black"
//                             }`}
//                             onClick={() => {
//                               if (isMobileView) {
//                                 setIsMobileOpen(false);
//                               }
//                               // Scroll to the top of the page
//                               window.scrollTo({ top: 0, behavior: "smooth" });
//                             }}
//                           >
//                             {topic.title}
//                           </Link>
//                           {/* <Link
//                           href={topicPath}
//                           className={`py-1 cursor-pointer my-4 ${
//                             isActive
//                               ? "text-[#1675ab] font-semibold text-pretty"
//                               : "text-black"
//                           }`}
//                           onClick={() => isMobileView && setIsMobileOpen(false)}
//                         >
//                           {topic.title}
//                         </Link> */}
//                         </li>
//                       );
//                     })}
//                 </ul>
//                 <div className="border-t border-black mx-4 my-2"></div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//       {isMobileView && isMobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-30 md:hidden"
//           onClick={toggleSidebar}
//         />
//       )}
//     </>
//   );
// };

// export default Sidebar;
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FC,
  useState,
  useEffect,
  Key,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { FiX } from "react-icons/fi";

interface Topic {
  id: Key | null | undefined;
  title: string;
  slug: string;
  chapterSlug: string;
}

interface Chapter {
  id: Key | null | undefined;
  title: string;
  slug: string;
}

interface SidebarProps {
  chapters: Chapter[];
  topics: Topic[];
  subject: any;
}

const Sidebar: FC<SidebarProps> = ({ chapters, topics, subject }) => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768; // md breakpoint
      setIsMobileView(isMobile);
    };

    const handleScroll = () => {
      // Get current scroll position
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Close sidebar on scroll if mobile view and sidebar is open
      if (isMobileView && isMobileOpen) {
        setIsMobileOpen(false);
      }

      // Determine if navbar is visible based on scroll direction
      if (scrollTop > lastScrollTop && scrollTop > 10) {
        // Scrolling down - hide navbar
        setIsNavbarVisible(false);
      } else {
        // Scrolling up or at the top - show navbar
        setIsNavbarVisible(true);
      }

      // Save current scroll position
      setLastScrollTop(scrollTop);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileOpen, isMobileView, lastScrollTop]);

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Determine sidebar top position based on navbar visibility (only affects mobile)
  const sidebarTopPosition = isMobileView
    ? isNavbarVisible
      ? "top-18"
      : "top-0"
    : "top-18";

  return (
    <>
      <div
        className={`
        fixed md:static ${sidebarTopPosition} left-0 h-[calc(100vh-0.001rem)] w-80
        ${
          isMobileView
            ? `transform transition-transform duration-300 ease-in-out z-40
           ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`
            : ""
        }
      `}
      >
        {isMobileView && (
          <button
            onClick={toggleSidebar}
            style={{ color: "#333333" }}
            className={`
              absolute -right-8 top-0 p-0 rounded-r-md
              ${isMobileOpen ? "hidden" : ""}
            `}
          >
            <TbLayoutSidebarLeftExpandFilled size={32} />
          </button>
        )}
        {isMobileView && isMobileOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-2 right-2 p-1 text-black"
          >
            <FiX size={24} />
          </button>
        )}
        <div className="sidebar bg-[#d3d3d3] w-full h-full px-2 py-4 overflow-y-auto">
          {chapters.map(
            (chapter: {
              id: Key | null | undefined;
              title:
                | boolean
                | Key
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactPortal
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
              slug: string;
            }) => (
              <div className="chapter_n_topic mx-2 my-2" key={chapter.id}>
                <h3 className="px-4 py-2 cursor-pointer font-bold">
                  {chapter.title}
                </h3>
                <ul className="pl-3 pb-3">
                  {topics
                    .filter((topic) => topic.chapterSlug === chapter.slug)
                    .map((topic) => {
                      const topicPath = `/course/${subject}/${topic.slug}`;
                      const isActive = pathname === topicPath;

                      return (
                        <li key={topic.title} className="my-4">
                          <Link
                            href={topicPath}
                            className={`py-1 cursor-pointer my-4 ${
                              isActive
                                ? "text-[#1675ab] font-semibold text-pretty"
                                : "text-black"
                            }`}
                            onClick={() => {
                              if (isMobileView) {
                                setIsMobileOpen(false);
                              }
                              // Scroll to the top of the page
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            {topic.title}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
                <div className="border-t border-black mx-4 my-2"></div>
              </div>
            )
          )}
        </div>
      </div>
      {isMobileView && isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
