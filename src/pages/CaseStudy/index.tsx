import bg from "@/assets/images/Vionex Skyswift.png";
import Hero from "./components/Hero";
import Detials from "./components/Details";
import Speciality from "./components/Speciality";
import Insights from "./components/Insights";
const CaseStudy = () => {
  return (
    <>
      <section
        className="xs:h-[100%] sm:h-[120vh]  w-full   flex flex-col  items-center justify-between gap-9  xs:pt-[4.2rem] sm:pt-[5%]  3xl:container 3xl:mx-auto "
        style={{ backgroundImage: `url(${bg}) `, backgroundSize:'cover',}}
      >
        <Hero />
      </section>
      <section >
        <Detials />
      </section>
      <section className=" mt-14">
        <Speciality />
      </section>
      <section className="custom-container">
        <Insights />
      </section>
    </>
  );
};

export default CaseStudy;
