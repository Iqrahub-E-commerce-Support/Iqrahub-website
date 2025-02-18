import CustomizableHeading from "@/components/CustomizableHeading";
import ecopic1 from "@/assets/images/almuqtadir/EcoGridPic1.png";
import ecopic2 from "@/assets/images/almuqtadir/ecogridpic2.png";
import ecopic3 from "@/assets/images/almuqtadir/ecogridpic3.png";
import rightDesign from "@/assets/images/almuqtadir/sideDesign.png";
const DigitalEcosystem = () => {
  return (
    <div className="custom-container border-x-2 border-gold-900 px-9">
      <div className="flex flex-col items-center pt-9 ">
        <CustomizableHeading
          firstTxt="building the"
          secondTxt="digital ecosystem"
          MainStyle="text-gold font-extrabold text-[48px] uppercase "
          SpecialCharacterStyle="font-thin text-white"
        />
        <p className=" mt-1 w-[720px] text-center text-[18px]">
          With this data, we designed a comprehensive digital strategy. That
          lead to a more streamlined customer engagement and optimizing their
          marketing efforts.
        </p>
      </div>
      <div className="grid grid-cols-3 mt-11 gap-4">
        <div className="grid grid-rows-[1fr_1fr_1.3fr] gap-4">
          <div className="glassy-bg flex flex-col justify-center items-center border-2 border-gold rounded-[20px] px-8 py-4">
            <h6 className="font-black text-gold text-[20px] capitalize ">
              Branded Content Creation 
            </h6>
            <p className="text-[14px] mt-2 capitalize text-center">
              Every piece of content was aligned with the new identity to ensure
              consistency.
            </p>
          </div>
          <div className="glassy-bg flex flex-col justify-center items-center border-2 border-gold rounded-[20px] px-8 py-4">
            <h6 className="font-black text-gold text-[20px] capitalize ">
              Digital Customer Journey
            </h6>
            <p className="text-[14px] mt-2 capitalize text-center">
              We implemented systems that allowed customers to engage with the
              brand online before visiting a showroom.
            </p>
          </div>
          <img src={ecopic1} alt="pic1" />
        </div>

        <img
          src={ecopic2}
          alt="pic2"
          className="border-2 border-gold rounded-[15px] h-full"
        />

        <div className="grid grid-rows-[1.3fr_1fr_1fr] gap-4">
          <img
            src={ecopic3}
            alt="pic1"
            className="border-2 border-gold rounded-[15px] "
          />

          <div className="glassy-bg flex flex-col justify-center items-center border-2 border-gold rounded-[20px] px-8 py-4 ">
            <h6 className="font-black text-gold text-[20px] capitalize ">
              Rebranding & Visual Identity
            </h6>
            <p className="text-[14px] mt-2 capitalize text-center">
              We standardized the brand's visuals, messaging, and tone across
              all platforms.
            </p>
          </div>
          <div className="glassy-bg flex flex-col justify-center items-center border-2 border-gold rounded-[20px] px-8 py-4">
            <h6 className="font-black text-gold text-[20px] capitalize ">
              Rebranding & Visual Identity
            </h6>
            <p className="text-[14px] mt-2 capitalize text-center">
              We standardized the brand's visuals, messaging, and tone across
              all platforms.
            </p>
          </div>
        </div>
      </div>
      <img
        src={rightDesign}
        alt="rightdesign"
        className="h-[350px] place-self-end -mr-8 -mt-[100px]"
      />
    </div>
  );
};

export default DigitalEcosystem;
