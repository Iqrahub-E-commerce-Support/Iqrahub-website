import CustomizableHeading from "@/components/CustomizableHeading";
import swiftlink from "@/assets/images/vionex/swiftlink.png";
import swiftmini from "@/assets/images/vionex/swiftmini.png";

const Speciality = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center px-4 lg:px-0">
        <CustomizableHeading
          firstTxt="SKYSWIFT DRONE"
          secondTxt="SPECIALITIES"
          MainStyle="xs:text-[35px] xs:text-center sm:'text-start md:text-[45px] text-yellow  font-black"
          SpecialCharacterStyle="text-white font-thin"
        />
        <p className="w-full max-w-2xl text-center text-sm md:text-base">
          SkySwift envisions a diverse fleet of drones, each tailored to
          specific logistical needs. The drones are categorized based on payload
          capacity and range:
        </p>
      </div>

      <div className="grid grid-rows-2 gap-6 mt-6">
        {/* SwiftLink Drone */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div className="flex flex-col items-center justify-center px-4 md:px-0">
            <CustomizableHeading
              firstTxt="SwiftLink"
              secondTxt="Drone"
              MainStyle="text-yellow text-2xl md:text-[45px]"
              SpecialCharacterStyle="text-white"
            />
            <p className="text-center w-full max-w-lg mt-4 text-sm md:text-base">
              The parcel delivery industry faces challenges such as delays, lack
              of transparency, high competition, and environmental impact.
            </p>
          </div>
          <img src={swiftlink} alt="SwiftLink Drone" className="w-full max-w-md mx-auto" />
        </div>

        {/* SwiftMini Drone */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <img src={swiftmini} alt="SwiftMini Drone" className="w-full max-w-md mx-auto order-1 md:order-none" />
          <div className="flex flex-col items-center justify-center px-4 md:px-0">
            <CustomizableHeading
              firstTxt="SwiftMini"
              secondTxt="Drone"
              MainStyle="text-yellow text-2xl md:text-[45px]"
              SpecialCharacterStyle="text-white"
            />
            <p className="text-center w-full max-w-lg mt-4 text-sm md:text-base">
              The parcel delivery industry faces challenges such as delays, lack
              of transparency, high competition, and environmental impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speciality;
