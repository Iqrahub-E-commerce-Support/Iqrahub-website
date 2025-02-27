import CustomizableHeading from "@/components/CustomizableHeading";
import swiftlink from "@/assets/images/vionex/swiftlink.png";
import swiftmini from "@/assets/images/vionex/swiftmini.png";

const Speciality = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center ">
        <CustomizableHeading
          firstTxt="SKYSWIFT DRONE"
          secondTxt="SPECIALITIES"
          MainStyle="xs:text-[35px] xs:text-center lg:text-start sm:text-[45px] md:text-[64px] text-yellow  font-black  xs:leading-[40px] md:leading-[55px]"
          SpecialCharacterStyle="text-white font-thin"
        />
        <p className="w-full max-w-2xl text-center text-[18px]">
          SkySwift envisions a diverse fleet of drones, each tailored to
          specific logistical needs. The drones are categorized based on payload
          capacity and range:
        </p>
      </div>

      <div className="grid grid-rows-2  mt-6">
        {/* SwiftLink Drone */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className="flex flex-col items-center justify-center mt-6 sm:mt-0">
            <CustomizableHeading
              firstTxt="SwiftLink"
              secondTxt="Drone"
              MainStyle="text-yellow xs:text-[35px] sm:text-[45px] md:text-[64px] md:leading-[55px] "
              SpecialCharacterStyle="text-white"
            />
            <p className="text-center w-full max-w-lg my-4 text-[18px]">
              The parcel delivery industry faces challenges such as delays, lack
              of transparency, high competition, and environmental impact.
            </p>
          </div>
          <img src={swiftlink} alt="SwiftLink Drone" />
        </div>

        {/* SwiftMini Drone */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center xs:mt-8 sm:mt-0">
          <img src={swiftmini} alt="SwiftMini Drone" />
          <div className="flex flex-col items-center justify-center px-4 md:px-0">
            <CustomizableHeading
              firstTxt="SwiftMini"
              secondTxt="Drone"
               MainStyle="text-yellow xs:text-[35px] sm:text-[45px] md:text-[64px] md:leading-[55px]"
              SpecialCharacterStyle="text-white"
            />
            <p className="text-center w-full max-w-lg mt-4 text-[18px]">
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
