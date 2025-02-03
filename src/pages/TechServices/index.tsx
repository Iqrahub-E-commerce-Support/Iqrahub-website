import bg from "@/assets/images/caligraphy.png";
import Hero from "./Components/Hero";
const TechSerivces = () => {
  return (
    <>
    <section
     className="h-[550px] bg-center   xs:pt-[13.2rem] sm:pt-[5%] "
     style={{ backgroundImage: `url(${bg}) ` }}
    >
        <Hero/>
    </section>
    </>
  )
}

export default TechSerivces