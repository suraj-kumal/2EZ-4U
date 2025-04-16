import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="py-8 md:py-12 flex justify-center items-center">
      <div className="w-full max-w-7xl px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12">
          <div className="flex items-center order-2 md:order-1 mt-6 md:mt-0">
            <div className="w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                Empowering Knowledge, One Step at a Time
              </h1>
              <p className="text-lg md:text-xl text-center">
                Unlock your potential with expert-led tutorials designed for
                every skill level.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center order-1 md:order-2">
            <Image
              src="/banner/BannerHome.png"
              width={600}
              height={525}
              alt="EasyExplanation"
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
