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
import Conclusion from "./components/Conclusion";
const CaseStudy = () => {
  return (
    <>
      <section
        className="xs:h-[100%] sm:h-[70%] md:h-full xl:h-screen bg-cover  xs:w-screen  flex flex-col  items-center justify-between gap-9  xs:pt-[4.2rem] sm:pt-[5%]   "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <Hero />
      </section>
      <section className="xs:mx-6 sm:mx-7 md:mx-0">
        <Objectives />
      </section>
      <section
        className="xs:mt-4 xs:bg-cover xl:bg-contain 2xl:mt-[245px] 3xl:mt-[230px] md:mt-0 lg:mt-[165px] xs:h-[520px] sm:h-[650px] lg:h-[120vh]"
        style={{
          backgroundImage: `url(${challengesbg}) `,
          // backgroundSize: "contain",
        }}
      >
        <Challenges />
      </section>
      <section className="xs:mx-4 sm:mx-0">
        <Detials />
      </section>
      <section className="xs:mt-[80px] sm:mt-14 xs:mx-4 sm:mx-0">
        <Speciality />
      </section>
      <section className="custom-container mt-16">
        <Insights />
      </section>
      <section className="custom-container xs:mt-16 sm:mt-28">
        <KeyInsights />
      </section>
      <section className="custom-container xs:mt-16 mt-20">
        <Solutions />
      </section>
      <section className="xs:mx-6  3xl:container 3xl:mx-auto mt-20">
        <VideoSection />
      </section>
      <section className="custom-container xs:mt-[350px] sm:mt-20 mb-16">
        <Conclusion />
      </section>
    </>
  );
};

export default CaseStudy;
