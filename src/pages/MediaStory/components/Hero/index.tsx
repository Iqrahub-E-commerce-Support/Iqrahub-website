import Heading from "@/components/Heading";
import CameraIcon from "@/components/icons/CameraIcon";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-[85px] gap-3">
      <div className="flex gap-[25px] items-center">
        <p className="font-thin text-[18px]">Precision</p>
        <CameraIcon width={38} height={38} />
        <p className="font-thin text-[18px]">Impactful</p>
      </div>
      <Heading
        className="md:text-[55px]"
        normalText="MEDIA"
        specialText="STORY"
      />
      <p className="text-[17px] text-center w-[500px]">
        We are a passionate team of storytellers, creating visually stunning
        videos that bring your brand to life.
      </p>
    </div>
  );
};

export default Hero;
