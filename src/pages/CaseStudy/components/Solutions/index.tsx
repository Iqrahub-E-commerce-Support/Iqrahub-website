import CustomizableHeading from "@/components/CustomizableHeading";
import solutins from "@/assets/images/vionex/solutions.png";
import CalenderIcon from "@/components/icons/CalenderIcon";
import SaveMoneyIcon from "@/components/icons/SaveMoneyIcon";
import RecycleIcon from "@/components/icons/RecycleIcon";
import UserGroupIcon from "@/components/icons/UserGroupIcon";

const Solutions = () => {
  return (
    <>
      <p className="font-bold text-base sm:text-lg md:text-[20px]">
        Through Extensive Research
      </p>
      <CustomizableHeading
        firstTxt="Conclusion"
        secondTxt="And Solutions"
        MainStyle="text-3xl sm:text-4xl md:text-[54px] text-yellow mt-2 sm:mt-4"
        SpecialCharacterStyle="font-thin text-white"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 sm:mt-8 md:mt-10 gap-4 sm:gap-5">
        <img
          src={solutins}
          alt="Drone Delivery System"
          className="xs:object-contain sm:object-fill lg:object-contain w-full h-full   rounded-[20px] sm:rounded-[34px]"
        />
        <div className="grid grid-rows-[auto_auto_1fr] gap-4 sm:gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="bg-grey rounded-[20px] sm:rounded-[34px] p-3 sm:p-4 font-medium">
              <div className="w-8 sm:w-10 md:w-12">
                <CalenderIcon />
              </div>
              <h6 className="mt-3 sm:mt-5 font-bold text-base sm:text-lg md:text-[19px]">
                Cut Down Delivery Times
              </h6>
              <p className="mt-1 font-medium text-sm sm:text-base md:text-[16px]">
                By Flying Directly To Destinations,Avoiding Road Traffic.
              </p>
            </div>
            <div className="bg-grey rounded-[20px] sm:rounded-[34px] p-3 sm:p-4 font-medium">
              <div className="w-8 sm:w-10 md:w-12">
                <SaveMoneyIcon />
              </div>
              <h6 className="mt-3 sm:mt-5 font-bold text-base sm:text-lg md:text-[19px]">
                Reduce Costs
              </h6>
              <p className="mt-1 font-medium text-sm sm:text-base md:text-[16px]">
                Through automation, eliminating fuel and labor expenses
                associated with traditional deliveries.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="bg-grey rounded-[20px] sm:rounded-[34px] p-3 sm:p-4 font-medium">
              <div className="w-8 sm:w-10 md:w-12">
                <RecycleIcon />
              </div>
              <h6 className="mt-3 sm:mt-5 font-bold text-base sm:text-lg md:text-[19px]">
                Enhance Sustainability
              </h6>
              <p className="mt-1 font-medium text-sm sm:text-base md:text-[16px]">
                by operating on clean energy, reducing environmental impact.
              </p>
            </div>
            <div className="bg-grey rounded-[20px] sm:rounded-[34px] p-3 sm:p-4 font-medium">
              <div className="w-8 sm:w-10 md:w-12">
                <UserGroupIcon />
              </div>
              <h6 className="mt-3 sm:mt-5 font-bold text-base sm:text-lg md:text-[19px]">
                Expand Accessibility
              </h6>
              <p className="mt-1 font-medium text-sm sm:text-base md:text-[16px]">
                by reaching remote and hard-to-access locations with ease.
              </p>
            </div>
          </div>
          <div className="bg-grey rounded-[20px] sm:rounded-[34px] p-3 sm:p-4 font-medium">
            <h6 className="mt-3 sm:mt-5 font-bold text-base sm:text-lg md:text-[19px]">
              Sustainability benefits
            </h6>
            <p className="mt-1 font-medium text-sm sm:text-base md:text-[16px]">
              To bring this vision to life, we created a **video campaign** that
              illustrated the benefits of SkySwift's drone delivery system. The
              core message focused on how drones could:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
