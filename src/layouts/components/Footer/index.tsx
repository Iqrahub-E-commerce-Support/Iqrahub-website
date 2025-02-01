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
    </>
  );
};

export default Footer;
