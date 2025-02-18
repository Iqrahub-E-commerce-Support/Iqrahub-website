import bg from "@/assets/images/almuqtadir/heroCaligraphy.png";
import Challenges from "./components/Challenges";
import Process from "./components/Process";
import PrecessCal from "@/assets/images/almuqtadir/ProcessBg.png";
import DigitalEcosystem from "./components/DigitalEcosystem";
import Hero from "./components/Hero";
import EcoBg from "@/assets/images/almuqtadir/Ecosystembg.png";
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
      <section className="relative">
        <img
          src={PrecessCal}
          alt="Background"
          className="absolute inset-x-64  h-[700px] w-[2500px] mt-[140px]  object-cover opacity-60  z-0"
        />
        <Process />
      </section>
      <section
        className="h-full bg-cover"
        style={{ backgroundImage: `url(${EcoBg})` }}
      >
        <DigitalEcosystem />
      </section>
    </>
  );
};

export default AlmuqtadirCaseStudy;
