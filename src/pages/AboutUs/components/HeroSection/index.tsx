import Heading from "@/components/Heading";
import NanoTechnologyIcon from "@/components/icons/NanoTechnologyIcon";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-[20px] gap-3">
      <div className="flex  gap-[25px] items-center justify-center">
        <p className="font-medium text-[18px]">Project</p>
        <NanoTechnologyIcon />
        <p className="font-medium text-[18px]">Showcase</p>
      </div>
      <Heading className="md:text-[80px]" normalText="ABOUT" specialText="US" />
      <p className="xs:text-[14px] sm:text-[18px] text-center">
        Creative solutions for modern brands
      </p>
    </div>
  );
};

export default HeroSection;
