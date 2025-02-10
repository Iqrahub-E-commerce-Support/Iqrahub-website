import bg from "@/assets/images/Vionex Skyswift.png";
import Hero from "./components/Hero";
import Detials from "./components/Details";
import Speciality from "./components/Speciality";
const CaseStudy = () => {
  return (
    <>
      <section
        className="h-[120vh]  w-full bg-cover  flex flex-col  items-center justify-between gap-9  xs:pt-[15.2rem] sm:pt-[5%]  3xl:container 3xl:mx-auto "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <Hero />
      </section>
      <section className="custom-container">
        <Detials />
      </section>
      <section className=" mt-11">
        <Speciality/>
      </section>
      <section className="custom-container">
        
      </section>
    </>
  );
};

export default CaseStudy;
