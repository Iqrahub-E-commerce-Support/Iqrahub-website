import CustomizableHeading from "@/components/CustomizableHeading";
import TabletFrame from "@/components/TabletFrame";

const OverView = () => {
  return (
    <div
      className="custom-container border-x-2 border-gold-900 px-4 sm:px-9 xs:pt-[0px] sm:pt-[55px] md:pt-[95px]"
      style={{
        boxShadow:
          "4px 0px 0px rgba(193,149,53,0.4), -4px 0px 0px rgba(193,149,53,0.4)",
      }}
    >
      <div className="flex flex-col justify-end xs:hidden md:block lg:hidden">
        <CustomizableHeading
          firstTxt="major"
          secondTxt="overview"
          MainStyle="uppercase md:text-[48px] text-gold text-center "
          SpecialCharacterStyle="font-thin text-white"
        />
        <p className=" mt-2  capitalize text-[18px] z-10 mb-8 text-center ">
          A detailed account of Al Muqtadir Jewellery's growth and digital
          transformation.
        </p>
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-8">
        <div className="grid grid-rows-[1fr_1fr_1fr] gap-3">
          <div className="flex flex-col justify-end md:hidden xl:block 2xl:place-self-end">
            <CustomizableHeading
              firstTxt="major"
              secondTxt="overview"
              MainStyle="uppercase md:text-[48px] text-gold text-center md:text-start"
              SpecialCharacterStyle="font-thin text-white"
            />
            <p className=" mt-2  capitalize text-[18px] z-10 mb-8 text-center md:text-start">
              A detailed account of Al Muqtadir Jewellery's growth and digital
              transformation.
            </p>
          </div>
          <div className="glassy-bg  border-2 border-gold  rounded-[20px] py-5 px-6 ">
            <p className="font-bold text-[20px] text-center text-gold uppercase">
              Major Milestone Achieved
            </p>
            <p className="text-[14px] capitalize text-center mt-2 ">
              By the end of Year 4, Al Muqtadir Jewellery had become a household
              name in the UAE and India. We successfully grew their social media
              following from 0 to 50K, making them one of the most recognized
              jewelry brands in the region.
            </p>
          </div>
          <div className="glassy-bg  border-2 border-gold  rounded-[20px] py-5 px-6 ">
            <p className="font-bold text-[20px] text-center text-gold uppercase">
              Digital Transformation:
            </p>
            <p className="text-[14px] capitalize text-center mt-2 ">
              Through strategic digital transformation, Al Muqtadir Jewellery
              transitioned from a traditionally marketed business to a global
              brand. Now, with a strong digital presence, they are setting the
              foundation for continued expansion
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start md:pt-9 lg:pt-0 ">
          <TabletFrame />
        </div>
      </div>
    </div>
  );
};

export default OverView;
