import Button from "@/components/Button";
import CustomizableHeading from "@/components/CustomizableHeading";
import CustomizedVideoWithFrame from "@/components/CustomizedVideoWithFrame";
import { ArrowRight } from "lucide-react";

const VideoSection = () => {
  return (
    <>
      <div className="flex justify-between items-end">
        <div>
          <CustomizableHeading
            firstTxt="DISCOVER"
            secondTxt="YOUR BRAND'S STORY"
            MainStyle="text-3xl font-bold text-yellow"
            SpecialCharacterStyle="text-white font-thin"
          />
          <p className="w-[460px] mt-2  text-offWhite">
            We artfully craft highly creative, one of a kind work, for brands
            and agencies that strive for ownable originality.
          </p>
        </div>
        <Button variant="contained">
          Get Started Today <ArrowRight />
        </Button>
      </div>
      <div className="mt-16">
        <CustomizedVideoWithFrame />
      </div>
    </>
  );
};

export default VideoSection;
