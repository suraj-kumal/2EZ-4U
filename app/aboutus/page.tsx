"use client";
import Image from "next/image";
import Data from "@/app/aboutus/Team.json";
import TeamCard from "@/app/component/TeamCard";
import { Splide, SplideSlide } from "react-splide-async";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Page = () => {
  return (
    <div className="px-8 py-8">
      <div className="upperSection">
        <div className="flex items-center justify-center sm:flex-row flex-col-reverse p-4 sm:p-8 md:p-12 max-w-4xl mx-auto text-center mb-4 sm:mb-8">
          <p
            className="text-xs sm:text-sm md:text-base text-gray-700 px-2 sm:px-4"
            style={{ textAlign: "justify" }}
          >
            Explore the vast world of computer science with our comprehensive
            tutorials and resources. Whether you're a beginner taking your first
            steps into coding or an experienced programmer seeking advanced
            knowledge, our curated content covers a wide range of computer
            science-related subjects. Dive into programming languages,
            algorithms, data structures, artificial intelligence, machine
            learning, web development, and more. Stay curious, keep coding, and
            empower yourself with the skills to thrive in the dynamic field of
            computer science. Happy learning!
          </p>
        </div>

        {/* Image About 1st section */}
        <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
            <div className="w-full md:w-1/2 items-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left mb-4 md:mb-6 relative z-10">
                Our Mission
              </h1>

              <div className="mb-6 md:mb-0">
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-700 text-center sm:text-left"
                  style={{ textAlign: "justify" }}
                >
                  Explore the vast world of computer science with our
                  comprehensive tutorials and resources. Whether you're a
                  beginner taking your first steps into coding or an experienced
                  programmer seeking advanced knowledge, our curated content
                  covers a wide range of computer science-related subjects. Dive
                  into programming languages, algorithms, data structures,
                  artificial intelligence, machine learning, web development,
                  and more. Stay curious, keep coding, and empower yourself with
                  the skills to thrive in the dynamic field of computer science.
                  Happy learning!
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center md:justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <Image
                  draggable={false}
                  src="/images/About-1.png"
                  alt="About Us"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Image About 2nd section */}
        <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
            <div className="md:w-1/2 flex justify-center md:justify-center items-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <Image
                  draggable={false}
                  src="/images/About-3.png"
                  alt="About Us"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left mb-4 md:mb-6 relative z-10">
                Who We Are
              </h1>

              <div className="mb-6 md:mb-0">
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-700 text-justify sm:text-left"
                  style={{ textAlign: "justify" }}
                >
                  EasyExplanation is more than just a learning platform — we're
                  a team of passionate educators, developers, and lifelong
                  learners who are dedicated to making knowledge easy, clear,
                  and practical. We understand that learning new topics,
                  especially in tech and programming, can feel overwhelming.
                  That’s why we’ve created a space where complex ideas are
                  broken down into simple, step-by-step explanations anyone can
                  understand.Founded with the vision to simplify education, our
                  platform serves as a go-to resource for students,
                  professionals, and curious minds looking to build strong
                  foundational skills and stay ahead in a fast-changing digital
                  world. From beginners exploring coding for the first time to
                  advanced learners refining their skills, EasyExplanation
                  offers something for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image About 3rd section */}
        {/* <div className="container mx-4 my-4 px-4 py-6 sm:py-8 md:py-12 sm:mx-0"> */}
        <div className="container mx-0 my-0 px-4 py-6 sm:py-8 md:py-12 sm:mx-0 md:mx-4 md:my-4">
          <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start gap-4 md:gap-8 ">
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left mb-4 md:mb-6 relative z-10">
                Our Vision
              </h1>

              <div className="mb-6 md:mb-0">
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-700 text-justify sm:text-left"
                  style={{ textAlign: "justify" }}
                >
                  At EasyExplanation, our vision is to transform the way people
                  learn by making education accessible, practical, and engaging
                  for everyone, regardless of their background or experience
                  level. We believe that everyone has the potential to succeed,
                  and our goal is to be a guiding light on that journey.We aim
                  to be the go-to resource for learners who want to gain real,
                  hands-on skills in technology and programming. In a world
                  where knowledge is evolving rapidly, we want to empower our
                  community with up-to-date content that not only prepares them
                  for today’s challenges but also equips them with the tools to
                  innovate and excel in the future.Our vision goes beyond just
                  providing tutorials — we strive to create a global learning
                  community where anyone, anywhere, can access top-tier
                  educational resources that make complex ideas simple and
                  attainable.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center md:justify-center items-center h-full">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <Image
                  draggable={false}
                  src="/images/About-2.png"
                  alt="About Us"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="MeetOurTeam">
        <div
          className="lowerSection"
          style={{
            backgroundColor: "white",
          }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 text-center md:text-center mb-4 md:mb-0 relative z-10">
            Contributers
          </h1>
        </div>
        <Splide
          options={{
            type: "start",
            perPage: 4,
            perMove: 1,
            gap: "1rem",
            pagination: false,
            arrows: true,
            breakpoints: {
              1280: { perPage: 3 },
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
          className="p-4"
        >
          {Data.map((member, index) => (
            <SplideSlide key={index}>
              <TeamCard
                image={member.image}
                Name={member.Name}
                position={member.position}
                description={member.description}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Page;
