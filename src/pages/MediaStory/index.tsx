import bg from "@/assets/images/caligraphy.png";
import Hero from "./components/Hero";
import CustomizedVideoWithFrame from "@/components/CustomizedVideoWithFrame";
import StorySection from "./components/StorySection";
import VideoSection from "./components/VideoSection";
const MediaStory = () => {
  return (
    <>
      <section
        className="h-[450px] bg-center   xs:pt-[13.2rem] sm:pt-[5%] container mx-auto "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <Hero />
      </section>
      <section className="mt-[5px]  xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto ">
        <CustomizedVideoWithFrame />
      </section>
      <section className="mt-[121px]   xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto">
        <StorySection />
      </section>
      <section className="mt-[75px] xs:mt-14 md:mt-20 xs:mx-6  sm:mx-7 md:ml-16 3xl:container 3xl:mx-auto ">
        <VideoSection />
      </section>
    </>
  );
};

export default MediaStory;
