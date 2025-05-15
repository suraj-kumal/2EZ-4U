"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/app/neclicense/ui/sidebar";
import {
  TbLayoutSidebarLeftExpandFilled,
  TbLayoutSidebarRightExpandFilled,
} from "react-icons/tb";

interface Props {
  chapters: any[];
  topics: any[];
  subject: string;
  children: React.ReactNode;
}

const SidebarWrapper: React.FC<Props> = ({
  chapters,
  topics,
  subject,
  children,
}) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => {
    // Toggle sidebar visibility
    setSidebarVisible((prev) => !prev);

    // Toggle sidebar expanded state
    setIsSidebarExpanded((prev) => !prev);
  };

  return (
    <div className="flex h-screen relative">
      {/* Sidebar with desktop toggle control */}
      <div
        className={`absolute top-18 left-0 h-full z-20 transition-transform duration-300 ease-in-out ${
          isMobileView
            ? ""
            : sidebarVisible
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <Sidebar chapters={chapters} topics={topics} subject={subject} />
      </div>

      {/* Main content */}
      <main
        className={`flex-1 h-screen overflow-y-auto transition-all duration-300 ${
          !isMobileView && sidebarVisible ? "sm:ml-64" : "sm:ml-0"
        }`}
      >
        {/* Toggle Button - only on desktop */}
        {!isMobileView && (
          <div className="pl-4 pt-4">
            <button
              onClick={toggleSidebar}
              style={{ color: "#666666" }}
              className="ml-12"
            >
              {isSidebarExpanded ? (
                <TbLayoutSidebarLeftExpandFilled size={36} />
              ) : (
                <TbLayoutSidebarRightExpandFilled size={36} />
              )}
            </button>
          </div>
        )}

        <div className="px-4 sm:px-8">{children}</div>
      </main>
    </div>
  );
};

export default SidebarWrapper;
