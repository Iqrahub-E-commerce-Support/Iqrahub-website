import CustomizableHeading from "@/components/CustomizableHeading";
import CustomizedVideoWithFrame from "@/components/CustomizedVideoWithFrame";

const VideoSection = () => {
  return (
    <>
      <CustomizableHeading
        firstTxt="3D ANIMATIONS"
        secondTxt="MOTION GRAPHICS"
        MainStyle="xs:text-[35px] xs:text-center sm:'text-start md:text-[45px] text-yellow  font-black"
        SpecialCharacterStyle="text-white font-thin"
      />
      <p className="mt-2 text-center text-sm md:text-base">
        we demonstrated how SkySwift drones could redefine logistics, making
        deliveries faster, smarter, and more efficient.
      </p>
      <div className="mt-16">
        <CustomizedVideoWithFrame />
      </div>
    </>
  );
};

export default VideoSection;
