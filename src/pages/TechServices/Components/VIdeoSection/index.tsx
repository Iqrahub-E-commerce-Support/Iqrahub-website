import CustomizableHeaderContainer from "@/components/CustomizableHeaderContainer";
import CustomizedVideoWithFrame from "@/components/CustomizedVideoWithFrame";

const VideoSection = () => {
  return (
    <>
      <div className="mx-[75px]">
        <CustomizableHeaderContainer
          heading1="DISCOVER"
          heading2="YOUR BRAND'S STORY"
          subHeading="We artfully craft highly creative, one of a kind work, for brands
            and agencies that strive for ownable originality."
          button="Get Started Today"
        />
      </div>
      <div className="mt-12">
        <CustomizedVideoWithFrame />
      </div>
    </>
  );
};

export default VideoSection;
