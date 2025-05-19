import ImagePriority from "next/image";

const HomeBanner = () => {
  return (
    // <div className="py-8 md:py-12 flex justify-center items-center">
    //   <div className="w-full max-w-7xl px-4">
    //     <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12">
    //       <div className="flex items-center order-2 md:order-1 mt-6 md:mt-0">
    //         <div className="w-full">
    //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
    //             Empowering Knowledge, One Step at a Time
    //           </h1>
    //           <p className="text-lg md:text-xl text-center">
    //             Unlock your potential with expert-led tutorials designed for
    //             every skill level.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="flex justify-center items-center order-1 md:order-2">
    //         <Image
    //           src="/banner/BannerHome.png"
    //           width={600}
    //           height={525}
    //           alt="EasyExplanation"
    //           className="object-cover w-full h-auto"
    //           priority
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col md:flex-row bg-[#F5FBEF] justify-center items-center gap-4 md:gap-6 pb-8 md:m-0 md:pb-0 md:mb-0 p-3 md:p-0 rounded-lg">
      <div className="banner w-full md:w-1/2 order-2 md:order-1">
        <h1 className="text-[#649578] text-2xl md:text-3xl font-bold text-center m-2 md:m-3">
          <span className="text-[#78C6FD] italic">EASY</span>
          &nbsp;&nbsp;EXPLANATION
        </h1>
        <h2 className="font-bold text-xl md:text-2xl text-center m-2 md:m-3">
          Best Platform for Education
        </h2>
        <p className="px-3 py-2 md:p-4 text-sm md:text-base text-center md:text-pretty">
          "Enhance your learning experience with engaging and interactive
          questions designed to challenge your understanding and improve your
          skills. Practice consistently, track your progress, and build
          confidence with each step. Stay curious, keep exploring new concepts,
          and make learning a rewarding journey toward success!"
        </p>
        <div className="w-full flex justify-center items-center mt-3 md:mt-4 mb-2">
          <button className="bg-indigo-600 text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-lg">
            Get Started
          </button>
        </div>
      </div>

      <div className="bannerimage w-3/4 md:w-auto order-1 md:order-2 pt-4 md:pt-0">
        <ImagePriority
          src="/banner/main.png"
          alt="easy explanation"
          width={456}
          height={442}
          className="md:w-auto"
          loading="eager" // <-- disables lazy loading
        />
      </div>
    </div>
  );
};

export default HomeBanner;
