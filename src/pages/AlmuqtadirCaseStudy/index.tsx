import bg from "@/assets/images/almuqtadir/heroCaligraphy.png";
import Challenges from "./components/Challenges";
import Process from "./components/Process";
import PrecessCal from "@/assets/images/almuqtadir/ProcessBg.png";
import DigitalEcosystem from "./components/DigitalEcosystem";
import Hero from "./components/Hero";
import EcoBg from "@/assets/images/almuqtadir/Ecosystembg.png";
import Outcome from "./components/Outcome";
import VideoSection from "./components/VideoSection";
import Impact from "./components/Impact";
import OverView from "./components/OverView";
const AlmuqtadirCaseStudy = () => {
  return (
    <>
      <section
        className="h-full bg-cover     xs:pt-[1.2rem] sm:pt-[5%]   "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Hero />
      </section>
      <section className="h-full bg-cover -mt-16">
        <Challenges />
      </section>
      <section>
        <Process />
      </section>
      <section
        className="h-full bg-cover relative"
        style={{ backgroundImage: `url(${EcoBg})` }}
      >
        <img
          src={PrecessCal}
          alt="Background"
          className="absolute inset-x-96 inset-y-64  h-[700px] w-[2500px]   object-cover opacity-60  z-0"
        />
        <DigitalEcosystem />
      </section>
      <section className="">
        <Outcome />
      </section>
      <section>
        <VideoSection />
      </section>
      <section>
        <Impact />
      </section>
      <section>
        <OverView />
      </section>
    </>
  );
};

export default AlmuqtadirCaseStudy;
