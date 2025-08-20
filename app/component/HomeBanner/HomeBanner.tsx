import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link";
import "./homebanner.css";
const HomeBanner = () => {
  return (

    <div className="w-full bg-white overflow-hidden">
      {/* Desktop Layout - Image Left, Text Right */}
      <div className="hidden lg:flex items-center justify-between px-8 lg:px-16">
        {/* Image Section - Left */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <img
              width={2008 / 4.5}
              height={2840 / 4.5}
              src="/banner/wegraduate.png"
              alt="Graduation Success"
              className=""
            />
          </div>
        </div>

        {/* Text Section - Right */}
        <div className="flex-1 max-w-xl px-8">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            Your Success
            <br />
            Starts Here
          </h1>
          <p className="text-md text-gray-700 leading-relaxed mb-8 text-justify">
            Get easy-to-understand notes, past papers, and exam prep tools — all
            in one place. Join thousands of students reaching their goals faster
            with smarter study resources.
          </p>
          <Link href={"/courses"}>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 text-sm rounded-lg transition-colors">
              EXPLORE NOTES
            </button>
          </Link>
        </div>
      </div>

      {/* Tablet and Mobile Layout - Text Top, Image Bottom */}
      <div className="lg:hidden flex flex-col ">
        {/* Text Section - Top */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Your Success
            <br />
            Start Here
          </h1>
          <p className="text-x md:text-lg text-gray-700 leading-relaxed mb-8 max-w-md text-justify">
            Get easy-to-understand notes, past papers, and exam prep tools — all
            in one place. Join thousands of students reaching their goals faster
            with smarter study resources.
          </p>
          <Link href={"/courses"}>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 text-xs rounded-lg transition-colors">
              EXPLORE NOTES
            </button>
          </Link>
        </div>

        {/* Image Section - Bottom */}
        <div className="flex-1 flex justify-center items-center px-6 pb-0">
          <div className="relative">
            <img
              width={2008}
              height={2840}
              src="/banner/wegraduatemobile.png"
              alt="Graduation Success"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
