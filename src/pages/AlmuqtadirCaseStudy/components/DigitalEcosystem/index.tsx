import CustomizableHeading from "@/components/CustomizableHeading";

const DigitalEcosystem = () => {
  return (
    <div className="flex flex-col items-center pt-9">
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
  );
};

export default DigitalEcosystem;
