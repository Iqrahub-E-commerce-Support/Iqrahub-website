import CustomizableHeading from "@/components/CustomizableHeading";
import PrecessCal from "@/assets/images/almuqtadir/ProcessBg.png";
import CustomizedVideoWithFrame from "@/components/CustomizedVideoWithFrame";
const VideoSection = () => {
  return (
    <div className="relative custom-container border-x-2 border-gold-900 px-4 sm:px-9 sm:pt-3 md:pt-0 2xl:pt-8 3xl:pt-11"
    style={{
      boxShadow:
        "4px 0px 0px rgba(193,149,53,0.4), -4px 0px 0px rgba(193,149,53,0.4)",
    }}
    >
      <img
        src={PrecessCal}
        alt="Background"
        className="absolute top-0 left-[50%] transform -translate-x-1/2 w-full h-full object-cover opacity-60 z-0 sm:-mt-72"
      />
      <div className="flex flex-col items-center pt-16 z-10 2xl:pb-5">
        <CustomizableHeading
          firstTxt="al muqtadir"
          secondTxt="jewelry today"
          MainStyle="uppercase md:text-[48px] text-gold z-10 text-center"
          SpecialCharacterStyle="font-thin text-white"
        />
        <p className=" mt-2 text-center capitalize  text-[18px] z-10 mb-8">
          is a premier gold and diamond jewelry brand with 40 showrooms
          worldwide. Known for its exquisite craftsmanship and exclusive
          promotions. Especially their 0% making charges on advance orders, the
          brand has cemented its position as a market leader.
        </p>
      </div>
      <CustomizedVideoWithFrame />
    </div>
  );
};

export default VideoSection;
