import Courses from "./component/HomeBanner/Courses";
import HomeBanner from "./component/HomeBanner/HomeBanner";
import HomeYoutube from "./component/HomeBanner/HomeYoutube";
const page = () => {
  return (
    <div className="">
      <HomeBanner />
      <Courses />
      <HomeYoutube />
    </div>
  );
};

export default page;
