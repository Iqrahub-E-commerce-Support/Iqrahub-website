import bg from "@/assets/images/caligraphy.png";
import Hero from "./Components/Hero";
import Processes from "./Components/Processes";
const TechSerivces = () => {
  return (
    <>
      <section
        className="h-[450px] bg-center   xs:pt-[13.2rem] sm:pt-[5%] "
        style={{ backgroundImage: `url(${bg}) ` }}
      >
        <Hero />
      </section>
      <section className="h-screen">
        <Processes />
      </section>
      {/* <section className="pt-[120px] my-[120px]">
sdfa
    </section> */}
    </>
  );
};

export default TechSerivces;
