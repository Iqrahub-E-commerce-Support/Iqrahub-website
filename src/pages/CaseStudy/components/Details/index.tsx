import vionex from "@/assets/images/vionex/Vionex.png";
import logo from "@/assets/images/vionex/logo.png";
const Detials = () => {
  return (
    <div className="grid grid-cols-[0.9fr_2fr] gap-12 ]">
      <img src={vionex} alt="vionex" />
      <div className="grid grid-rows-[0.5fr_1fr_1fr_1.6fr] gap-5 ">
        <img src={logo} alt="logo" />

        <div className="bg-grey p-5 rounded-[20px]">
          <h4 className="text-[24px] font-bold">
            How the SkySwift Logo Was Born?
          </h4>
          <p className="mt-2">
            The SkySwift logo embodies speed, innovation, and air-based
            solutions. Its angled, sharp "SWIFT" font suggests motion and
            progress in drone logistics, while its futuristic design evokes
            aerial transport without clichés, positioning SkySwift as a
            high-tech leader.
          </p>
        </div>
        <div className="relative bg-grey p-5 rounded-[20px]">
          <div className="absolute -inset-4 h-20 w-20 bg-black rounded-full flex items-center justify-center ">
            <div className=" h-14 w-14 border rounded-full flex items-center justify-center p-3">
              <p className="text-center">
                Aa <br />
                Text
              </p>
            </div>
          </div>
          <h4 className="text-[24px] font-bold ml-14">Gabarito</h4>
          <p className="mt-2">
            Gabarito Font is a modern typeface that elevates our video UI design
            with its clean lines and contemporary style. It delivers engaging,
            readable text that enhances the overall visual experience.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-grey rounded-[20px] p-5 flex justify-center items-center">
            <h2 className="text-lg font-bold text-[150px]">Aa</h2>
          </div>

          {/* Column 2 with 2 rows */}
          <div className="grid grid-rows-2 gap-5">
            <div
              style={{ backgroundColor: "#FF4D00" }}
              className="rounded-[20px] px-4 py-3 flex flex-col justify-end leading-6"
            >
              <h2 className="text-[24px] font-bold">#FF4D00</h2>
              <p className="text-[18px] font-bold">Orange</p>
            </div>
            <div
              style={{ backgroundColor: "#FEBE03" }}
              className="rounded-[20px] px-4 py-3 flex flex-col justify-end leading-6"
            >
              <h2 className="text-[24px] font-bold text-black">#FEBE03</h2>
              <p className="text-[18px] font-bold text-black">Yellow</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="grid grid-rows-2 gap-5">
            <div
              style={{ backgroundColor: "#202020" }}
              className="rounded-[20px] px-4 py-3 flex flex-col justify-end leading-6"
            >
              <h2 className="text-[24px] font-bold">#202020</h2>
              <p className="text-[18px] font-bold">Black</p>
            </div>
            <div
              style={{ backgroundColor: "#E2E2E2" }}
              className="rounded-[20px] px-4 py-3 flex flex-col justify-end leading-6"
            >
              <h2 className="text-[24px] font-bold text-black">#E2E2E2</h2>
              <p className="text-[18px] font-bold text-black">Off White</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detials;
