import bg from "@/assets/images/Media.png";
import Hero from "./components/Hero";
import CustomizedVideoWithFrame from "@/components/CustomizedVideoWithFrame";
import StorySection from "./components/StorySection";
import VideoSection from "./components/VideoSection";
const MediaStory = () => {
  return (
    <>
      <section
        className="h-[450px] bg-cover flex flex-col justify-center items-center gap-9 xs:px-2 sm:px-7 md:px-16     3xl:container 3xl:mx-auto "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <Hero />
      </section>
      <section className=" xs:mt-0 sm:mt-[5px]  xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto ">
        <CustomizedVideoWithFrame />
      </section>
      <section className="xs:mt-[100%] sm:mt-[121px]   xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto">
        <StorySection />
      </section>
      <section className="mt-[75px] xs:mt-14 md:mt-20 xs:mx-6  sm:mx-7 md:ml-16 3xl:container 3xl:mx-auto ">
        <VideoSection />
      </section>
    </>
  );
};

export default MediaStory;
