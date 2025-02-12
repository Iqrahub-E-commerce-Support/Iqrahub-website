import vionex from "@/assets/images/vionex/Vionex.png";
import logo from "@/assets/images/vionex/logo.png";

const Detials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[0.9fr_2fr] gap-8 xs:mr-0  lg:mr-8">
      {/* Image Section */}
      <div className="flex justify-center">
        <img src={vionex} alt="vionex" className="max-w-full w-full md:w-auto" />
      </div>

      {/* Content Section */}
      <div className="grid grid-rows-[auto_auto_auto_auto] gap-5 md:mr-10">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="logo" className="max-w-full w-36 md:w-48 object-center" />
        </div>

        {/* SkySwift Description */}
        <div className="bg-grey p-5 rounded-2xl">
          <h4 className="text-lg md:text-2xl font-bold">
            How the SkySwift Logo Was Born?
          </h4>
          <p className="mt-2 text-sm md:text-base">
            The SkySwift logo embodies speed, innovation, and air-based solutions. 
            Its angled, sharp "SWIFT" font suggests motion and progress in drone 
            logistics, while its futuristic design evokes aerial transport without 
            clichés, positioning SkySwift as a high-tech leader.
          </p>
        </div>

        {/* Typography Section */}
        <div className="relative bg-grey p-5 rounded-2xl">
          <div className="absolute -inset-5 h-16 w-16 md:h-20 md:w-20 bg-black rounded-full flex items-center justify-center">
            <div className="h-12 w-12 md:h-16 md:w-16 border-2 border-grey rounded-full flex items-center justify-center p-2">
              <p className="text-xs md:text-sm text-center">
                Aa <br /> Text
              </p>
            </div>
          </div>
          <h4 className="text-lg md:text-2xl font-bold  ml-16">Gabarito</h4>
          <p className="mt-2 text-sm md:text-base">
            Gabarito Font is a modern typeface that elevates our video UI design 
            with its clean lines and contemporary style. It delivers engaging, 
            readable text that enhances the overall visual experience.
          </p>
        </div>

        {/* Color & Typography Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Typography Card */}
          <div className="bg-grey rounded-2xl p-5 flex justify-center items-center">
            <h2 className="text-5xl md:text-[10rem] font-bold">Aa</h2>
          </div>

          {/* Color Cards */}
          <div className="grid grid-rows-2 gap-5">
            <div
              className="rounded-2xl px-4 py-3 flex flex-col justify-end leading-6"
              style={{ backgroundColor: "#FF4D00" }}
            >
              <h2 className="text-lg md:text-2xl font-bold">#FF4D00</h2>
              <p className="text-base md:text-lg font-bold">Orange</p>
            </div>
            <div
              className="rounded-2xl px-4 py-3 flex flex-col justify-end leading-6"
              style={{ backgroundColor: "#FEBE03" }}
            >
              <h2 className="text-lg md:text-2xl font-bold text-black">#FEBE03</h2>
              <p className="text-base md:text-lg font-bold text-black">Yellow</p>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-5">
            <div
              className="rounded-2xl px-4 py-3 flex flex-col justify-end leading-6"
              style={{ backgroundColor: "#202020" }}
            >
              <h2 className="text-lg md:text-2xl font-bold text-white">#202020</h2>
              <p className="text-base md:text-lg font-bold text-white">Black</p>
            </div>
            <div
              className="rounded-2xl px-4 py-3 flex flex-col justify-end leading-6"
              style={{ backgroundColor: "#E2E2E2" }}
            >
              <h2 className="text-lg md:text-2xl font-bold text-black">#E2E2E2</h2>
              <p className="text-base md:text-lg font-bold text-black">Off White</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detials;
