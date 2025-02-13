import bg from "@/assets/images/Vionex Skyswift.png";
import challengesbg from "@/assets/images/vionex/challengesbg.png";
import Hero from "./components/Hero";
import Detials from "./components/Details";
import Speciality from "./components/Speciality";
import Insights from "./components/Insights";
import Objectives from "./components/Objectives";
import Challenges from "./components/Challenges";
import KeyInsights from "./components/KeyInsights";
import Solutions from "./components/Solutions";
import VideoSection from "./components/VideoSection";
const CaseStudy = () => {
  return (
    <>
      <section
        className="xs:h-[100%] sm:h-full  w-full   flex flex-col  items-center justify-between gap-9  xs:pt-[4.2rem] sm:pt-[5%]  3xl:container 3xl:mx-auto "
        style={{ backgroundImage: `url(${bg}) `, backgroundSize: "cover" }}
      >
        <Hero />
      </section>
      <section className="xs:mx-6 sm:mx-7 md:mx-0">
        <Objectives />
      </section>
      <section
        className="xs:mt-4 sm:mt-[165px] xs:bg-cover xl:bg-contain 2xl:mt-[245px] 3xl:mt-[230px] md:mt-0 lg:mt-[165px] xs:h-[100%] sm:h-[120vh]"
        style={{
          backgroundImage: `url(${challengesbg}) `,
          // backgroundSize: "contain",
        }}
      >
        <Challenges />
      </section>
      <section>
        <Detials />
      </section>
      <section className=" mt-14">
        <Speciality />
      </section>
      <section className="custom-container mt-16">
        <Insights />
      </section>
      <section className="custom-container mt-28">
        <KeyInsights />
      </section>
      <section className="custom-container mt-20">
        <Solutions />
      </section>
      <section className="custom-container mt-20">
        <VideoSection/>
      </section>
    </>
  );
};

export default CaseStudy;
