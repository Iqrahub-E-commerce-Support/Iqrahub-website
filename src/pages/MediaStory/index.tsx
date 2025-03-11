import bg from "@/assets/images/Media.png";
import Hero from "./components/Hero";
import CustomizedVideoWithFrame from "@/components/CustomizedVideoWithFrame";
import StorySection from "./components/StorySection";
import VideoSection from "./components/VideoSection";
const MediaStory = () => {
  return (
    <>
      <section
        className="h-[450px] bg-cover flex flex-col justify-center items-center gap-9 xs:px-6 sm:px-7 md:px-16      "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <Hero />
      </section>
      <section className=" xs:-mt-[150px] sm:-mt-[130px] md:-mt-[90px]   xs:mx-6 sm::mx-[26px] 4xl:container 4xl:mx-auto ">
        <CustomizedVideoWithFrame />
      </section>
      <section className="xs:mt-[70%] sm:mt-[80%] md:mt-[171px]   xs:mx-6 sm:mx-7 md:mx-[100px] 4xl:container 4xl:mx-auto">
        <StorySection />
      </section>
      <section className="sm:mt-[75px] xs:mt-14 md:mt-20 xl:mt-24 xs:mx-6  sm:mx-7 md:ml-[97px] 4xl:container 4xl:mx-auto md:mb-20 ">
        <VideoSection />
      </section>
    </>
  );
};

export default MediaStory;
