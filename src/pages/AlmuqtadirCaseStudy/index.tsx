import bg from "@/assets/images/almuqtadir/heroCaligraphy.png";
import Challenges from "./components/Challenges";
import Process from "./components/Process";

import DigitalEcosystem from "./components/DigitalEcosystem";
import Hero from "./components/Hero";
import Outcome from "./components/Outcome";
import VideoSection from "./components/VideoSection";
import Impact from "./components/Impact";
import OverView from "./components/OverView";
import CustomerReview from "./components/CustomerReview";
import useSmoothScrollUp from "@/hooks/useSmoothScrollUP";
const AlmuqtadirCaseStudy = () => {
  useSmoothScrollUp();
  return (
    <>
      <section
        className="xs:h-full sm:h-full xs:bg-cover sm:bg-cover     xs:pt-[13%] sm:pt-[5%] lg:pt-[8%] xl:pt-[5%]  4xl:container 4xl:mx-auto"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Hero />
      </section>
      <section className=" lg:-mt-16 3xl:-mt-24">
        <Challenges />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <DigitalEcosystem />
      </section>
      <section>
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
      <section>
        <CustomerReview />
      </section>
    </>
  );
};

export default AlmuqtadirCaseStudy;
