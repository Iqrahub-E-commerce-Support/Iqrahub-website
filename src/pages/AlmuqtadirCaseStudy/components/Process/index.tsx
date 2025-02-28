import CustomizableHeading from "@/components/CustomizableHeading";
import process from "@/assets/images/almuqtadir/process.png";
import leftDesign from "@/assets/images/almuqtadir/leftDesign.png";
import rightDesign from "@/assets/images/almuqtadir/sideDesign.png";
import PrecessCal from "@/assets/images/almuqtadir/ProcessBg.png";
const Process = () => {
  return (
    <>
      <div
        className="relative custom-container border-x-2 border-gold-900  "
        style={{
          boxShadow:
            "4px 0px 0px rgba(193,149,53,0.4), -4px 0px 0px rgba(193,149,53,0.4)",
        }}
      >
        <img
          src={PrecessCal}
          alt="Background"
          className="absolute top-0 xs:left-[50%] md:left-[74%] transform -translate-x-1/2 w-full xs:h-[110%] sm:h-full object-cover opacity-60 z-0"
        />
        <img
          src={leftDesign}
          alt="leftDesign"
          className="relatvie xs:h-[450px] sm:h-[350px] xs:pt-60 sm:pt-16"
        />
        <div className="xs:-mt-[410px] sm:-mt-[330px]">
          <div className="flex flex-col sm:items-center xs:px-3">
            <CustomizableHeading
              firstTxt="THE PROCESS"
              secondTxt="OF MUQTADIR"
              MainStyle="text-gold font-black md:text-[48px] xs:text-center "
              SpecialCharacterStyle="font-thin text-white"
            />
            <p className=" mt-2 md:w-[720px] text-center text-[18px]">
              Recognizing that their main customers were wedding buyers
              purchasing over 40 grams of gold in advance, we analyzed their
              sales process and identified key challenges.
            </p>
          </div>
          <div className="xs:mt-8 sm:mt-20 grid xs:grid-cols-1 md:grid-cols-[2fr_1.5fr] gap-4  xs:px-4 sm:px-9 ">
            <div className="grid grid-row-3 gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glassy-bg flex flex-col justify-center border-2 border-gold rounded-[20px] px-8 xs:py-2 ">
                  <h6 className="font-black text-gold text-[20px] capitalize ">
                    Complex decision-making: 
                  </h6>
                  <p className="text-[14px] mt-2 capitalize">
                    Customers needed detailed information before making a
                    purchase.
                  </p>
                </div>
                <div className="glassy-bg flex flex-col justify-center border-2 border-gold rounded-[20px] px-8 xs:py-2 ">
                  <h6 className="font-black text-gold text-[20px] capitalize">
                    Overwhelmed sales staff: 
                  </h6>
                  <p className="text-[14px] mt-2 capitalize">
                    In-store teams were struggling to manage walk-ins, leading
                    to lost sales opportunities.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glassy-bg flex flex-col justify-center border-2 border-gold rounded-[20px] px-8 xs:py-2 ">
                  <h6 className="font-black text-gold text-[20px] capitalize">
                    No digital engagement:
                  </h6>
                  <p className="text-[14px] mt-2 capitalize">
                    Customers lacked online resources to research products or
                    interact with the Brand.
                  </p>
                </div>
                <div className="glassy-bg flex flex-col justify-center border-2 border-gold rounded-[20px] px-8 xs:py-2 ">
                  <h6 className="font-black text-gold text-[20px] capitalize">
                    Expensive, untrack able ads: 
                  </h6>
                  <p className="text-[14px] mt-2 capitalize">
                    Newspaper ads were effective but hard to measure and too
                    expensive for long-term growth.
                  </p>
                </div>
              </div>
              <div className="glassy-bg flex flex-col justify-center border-2 border-gold rounded-[20px] px-8 xs:py-2 ">
                <h6 className="font-black text-gold text-[20px] capitalize">
                  Inconsistent branding: 
                </h6>
                <p className="text-[14px] mt-2 capitalize">
                  Each store had different visuals, creating a perception of low
                  quality among buyers.
                </p>
              </div>
            </div>

            <img
              src={process}
              alt="process"
              className="xs:-mt-8 sm:-mt-16 md:mt-[30px] lg:-mt-16 z-10 xs:h-[400px] sm:h-full md:h-[90%] lg:h-full  xs:object-cover sm:object-cover  "
            />
          </div>
        </div>
        <img
          src={rightDesign}
          alt="rightDesign"
          className=" xs:h-[450px] sm:h-[350px] place-self-end -mt-80"
        />
      </div>
    </>
  );
};

export default Process;
