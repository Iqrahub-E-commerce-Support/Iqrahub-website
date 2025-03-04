import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import footerbg from "@/assets/images/footerbg.png";
const Footer = () => {
  return (
    <div
      className="bg-cover h-[100%] opacity-100"
      style={{ backgroundImage: `url(${footerbg}) ` }}
    >
      {/* <img
        src={footerbg}
        alt="Background"
        className="absolute top-0 xs:left-[50%] :left-[34%] transform -translate-x-1/2 w-full h-[140%] -mt-36 object-cover opacity-100 z-0"
      /> */}
      <div className="flex flex-wrap justify-between gap-6 border-b pb-[40px] xs:mx-6 sm:mx-7 md:mx-16 lg:mx-[100px] 3xl:container 3xl:mx-auto z-30">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
      <div className="xs:mx-6 sm:mx-7 md:mx-16 3xl:container 3xl:mx-auto flex flex-wrap justify-center py-9 gap-2">
        <p className="opacity-50">
          Copyright © {new Date().getFullYear()} Iqrahub story Media | All
          Rights Reserved |
        </p>
        <a className="underline" href="">
          Terms and Conditions |{" "}
        </a>
        <a className="underline" href="">
          Privacy Policy{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
