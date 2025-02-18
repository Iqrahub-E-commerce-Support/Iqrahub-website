import CustomizableHeading from "@/components/CustomizableHeading";
import process from "@/assets/images/almuqtadir/process.png";
import leftDesign from "@/assets/images/almuqtadir/leftDesign.png";
import rightDesign from "@/assets/images/almuqtadir/sideDesign.png";
const Process = () => {
  return (
    <>
    <div className="custom-container border-x-2 border-gold-900 ">
    <img src={leftDesign} alt="" className="relatvie h-[350px] pt-16" />
    <div className="-mt-[330px]">
      <div className="flex flex-col items-center">
        <CustomizableHeading
          firstTxt="THE PROCESS"
          secondTxt="OF MUQTADIR"
          MainStyle="text-gold font-extrabold text-[48px] "
          SpecialCharacterStyle="font-thin text-white"
        />
        <p className=" mt-1 w-[720px] text-center text-[18px]">
          Recognizing that their main customers were wedding buyers purchasing
          over 40 grams of gold in advance, we analyzed their sales process and
          identified key challenges.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-[2fr_1.5fr] gap-4 px-10">
        <div className="grid grid-row-3 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="glassy-bg flex flex-col justify-center border-2 border-gold rounded-[20px] px-8 ">
              <h6 className="font-black text-gold text-[20px] capitalize ">
                Complex decision-making: 
              </h6>
              <p className="text-[14px] mt-2 capitalize">
                Customers needed detailed information before making a purchase.
              </p>
            </div>
            <div className="glassy-bg flex flex-col justify-center border-2 border-gold rounded-[20px] px-8 ">
              <h6 className="font-black text-gold text-[20px] capitalize">
                Overwhelmed sales staff: 
              </h6>
              <p className="text-[14px] mt-2 capitalize">
                In-store teams were struggling to manage walk-ins, leading to
                lost sales opportunities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glassy-bg flex flex-col justify-center border-2 border-gold rounded-[20px] px-8 ">
              <h6 className="font-black text-gold text-[20px] capitalize">
                No digital engagement:
              </h6>
              <p className="text-[14px] mt-2 capitalize">
                Customers lacked online resources to research products or
                interact with the Brand.
              </p>
            </div>
            <div className="glassy-bg flex flex-col justify-center border-2 border-gold rounded-[20px] px-8 ">
              <h6 className="font-black text-gold text-[20px] capitalize">
                Expensive, untrack able ads: 
              </h6>
              <p className="text-[14px] mt-2 capitalize">
                Newspaper ads were effective but hard to measure and too
                expensive for long-term growth.
              </p>
            </div>
          </div>
          <div className="glassy-bg flex flex-col justify-center border-2 border-gold rounded-[20px] px-8 ">
            <h6 className="font-black text-gold text-[20px] capitalize">
              Inconsistent branding: 
            </h6>
            <p className="text-[14px] mt-2 capitalize">
              Each store had different visuals, creating a perception of low
              quality among buyers.
            </p>
          </div>
        </div>

        <img src={process} alt="process" className=" -mt-16 z-10 " />
      </div>
    </div>
    <img src={rightDesign} alt="" className="h-[350px] place-self-end -mt-80" />
    </div>
    </>
  );
};

export default Process;
