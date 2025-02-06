import Heading from "@/components/Heading";
import ArtIcon from "@/components/icons/ArtIcon";
import ColorIcon from "@/components/icons/ColorIcon";
import ComponentIcon from "@/components/icons/ComponentIcon";
import NanoTechnologyIcon from "@/components/icons/NanoTechnologyIcon";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-[85px] gap-3">
        <div className="flex  gap-[25px] items-center">
          <p className="font-thin">Project</p>
          <NanoTechnologyIcon />
          <p>Showcase</p>
        </div>
        <Heading
          className="md:text-[55px]"
          normalText="TECH"
          specialText="SERVICES"
        />
        <p className="text-[17px]">Creative solutions for modern brands</p>
        <div className="glassy-bg flex xs:justify-start justify-between items-center xs:gap-4 gap-12   border rounded-full xs:px-2 md:px-5 xs:py-2 md:py-2 xs:mx-8 sm:mx-0 ">
          <div className="flex items-center xs:gap-2 smgap-[15px]">
            <ComponentIcon />
            <p className="xs:text-[13px] sm:text-[15px]">Web Design & Build</p>
          </div>
          <div className="xs:ml-2 sm:ml-[30px]">
            <ArtIcon />
          </div>
          <div className="xs:ml-0 sm:ml-[30px]">
            <ColorIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
