import CustomizableHeading from "@/components/CustomizableHeading";
import swiftlink from "@/assets/images/vionex/swiftlink.png";
import swiftmini from "@/assets/images/vionex/swiftmini.png";

const Speciality = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center">
        <CustomizableHeading
          firstTxt="SKYSWIFT DRONE"
          secondTxt="SPECIALITIES"
          MainStyle="md:text-[45px] text-yellow"
          SpecialCharacterStyle="text-white font-thin"
        />
        <p className="w-[47%] text-center">
          SkySwift envisions a diverse fleet of drones, each tailored to
          specific logistical needs. The drones are categorized based on payload
          capacity and range:  
        </p>
      </div>
      <div className="grid grid-rows-2 mt-6">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <CustomizableHeading
              firstTxt="SwiftLink"
              secondTxt="Drone"
              MainStyle="md:text-[45px] text-yellow"
              SpecialCharacterStyle="text-white"
            />
            <p className="text-center w-[430px] mt-4">
              The parcel delivery industry faces challenges such as delays, lack
              of transparency, high competition, environmental impact,{" "}
            </p>
          </div>
          <img src={swiftlink} alt="swiftlink" />
        </div>
        <div className="grid grid-cols-2">
          <img src={swiftmini} alt="swiftmini" />
          <div className="flex flex-col items-center justify-center">
            <CustomizableHeading
              firstTxt="SwiftMini"
              secondTxt="Drone"
              MainStyle="md:text-[45px] text-yellow"
              SpecialCharacterStyle="text-white"
            />
            <p className="text-center w-[430px] mt-4">
              The parcel delivery industry faces challenges such as delays, lack
              of transparency, high competition, environmental impact,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speciality;
