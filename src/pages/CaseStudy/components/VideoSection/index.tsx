import CustomizableHeading from "@/components/CustomizableHeading";
import CustomizedVideoWithFrame from "@/components/CustomizedVideoWithFrame";

const VideoSection = () => {
  return (
    <>
      <CustomizableHeading
        firstTxt="3D ANIMATIONS"
        secondTxt="MOTION GRAPHICS"
        MainStyle="xs:text-[35px] sm:text-[45px] md:text-[64px] xs:text-center sm:'text-start  text-yellow  font-black xs:leading-[40px] md:leading-[55px]"
        SpecialCharacterStyle="text-white font-thin"
      />
      <p className="mt-2 text-center text-[18px]">
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
