import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-6 border-b pb-[40px] xs:mx-6 md:mx-0">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
      <div className="flex justify-center py-9 gap-2">
        <p className="opacity-50">

      Copyright © {new Date().getFullYear()} Iqrahub story Media | All Rights Reserved | 
        </p>
        <a className="underline" href="">Terms and Conditions | </a>
        <a className="underline" href="">Privacy Policy </a>
      </div>
    </>
  );
};

export default Footer;
