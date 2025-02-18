import bg from "@/assets/images/almuqtadir/heroCaligraphy.png";
import Challenges from "./components/Challenges";
import Process from "./components/Process";
import cal from "@/assets/images/cal.png";
import DigitalEcosystem from "./components/DigitalEcosystem";
import Hero from "./components/Hero";
const AlmuqtadirCaseStudy = () => {
  return (
    <>
      <section
        className="h-[950px] bg-cover     xs:pt-[1.2rem] sm:pt-[5%]   "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Hero />
      </section>
      <section className="custom-container border-x-2 border-gold-900">
        <Challenges />
      </section>
      <section className="relative custom-container border-x border-gold-900">
        <img
          src={cal}
          alt="Background"
          className="absolute inset-x-[60%] h-96 mt-[66px]  object-cotain opacity-75 z-0"
        />
        <Process />
      </section>
      <section className="custom-container  border-x border-gold-900">
        <DigitalEcosystem />
      </section>
    </>
  );
};

export default AlmuqtadirCaseStudy;
