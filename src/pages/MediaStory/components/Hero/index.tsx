import Heading from "@/components/Heading";
import CameraIcon from "@/components/icons/CameraIcon";

const Hero = () => {
  return (
    <div className="flex flex-col items-center xs:-mt-[85px] sm:-mt-[65px] md:mt-0 gap-3">
      <div className="flex gap-[25px] items-center">
        <p className="font-thin xs:text-[15px] sm:text-[18px]">Precision</p>
        <CameraIcon width={38} height={38} />
        <p className="font-thin xs:text-[15px] sm:text-[18px] text-[18px]">
          Impactful
        </p>
      </div>
      <Heading
        className="md:text-[80px]"
        normalText="MEDIA"
        specialText="STORY"
      />
      <p className="xs:text-[14px] sm:text-[17px] text-center xs:w-full sm:w-[500px]">
        We are a passionate team of storytellers, creating visually stunning
        videos that bring your brand to life.
      </p>
    </div>
  );
};

export default Hero;
