import Heading from "@/components/Heading";
import ArtIcon from "@/components/icons/ArtIcon";
import ColorIcon from "@/components/icons/ColorIcon";
import ComponentIcon from "@/components/icons/ComponentIcon";
import NanoTechnologyIcon from "@/components/icons/NanoTechnologyIcon";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-[85px] gap-3">
        <div className="flex gap-[25px] items-center">
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
        <div className="glassy-bg flex  xs:gap-2 mt-[30px]  border rounded-full xs:px-2 md:px-5 xs:py-2 md:py-2 xs:mx-8 sm:mx-0">
          <div className="flex items-center gap-[15px]">
            <ComponentIcon />
            <h5>Web Design & Build</h5>
          </div>
          <div className="ml-[30px]">
            <ArtIcon />
          </div>
          <div className="ml-[30px]">
            <ColorIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
