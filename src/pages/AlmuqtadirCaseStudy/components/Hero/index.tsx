import almuqtadirLogo from "@/assets/images/almuqtadir/muqtadirLogo.png";
import leftDesign from "@/assets/images/almuqtadir/leftDesign.png";
import rightDesign from "@/assets/images/almuqtadir/sideDesign.png";
import heroImage from "@/assets/images/almuqtadir/HeroImage.png";
const Hero = () => {
  const data = [
    "Brand Story",
    "video Production",
    "Documentry",
    "Demo Video",
    "Promotional Video",
    "Product Video",
  ];
  return (
    <>
      <div className="border-2 mt-8 custom-container h-full border-b-0 border-gold-900 rounded-tr-[14px] rounded-tl-[14px]">
        <div className="flex justify-between items-start mt-7 xs:px-3 sm:px-4 md:px-7 lg:px-14">
          <img src={almuqtadirLogo} alt="logo" className="xs:h-8 sm:h-14" />
          <p className="uppercase font-bold xs:text-[14px] sm:text-[20px] font-thuce -ml-11">
            jewelry
          </p>
          <p className="uppercase  xs:text-[14px] sm:text-[20px]  font-thunder">
            2024
          </p>
        </div>

        {/* <div className="flex justify-center items-center xs:-mt-0 sm:-mt-[100px] ">
            <img
              src={heroLeft}
              alt="hero1"
              className="xs:h-[82px] sm:h-[179px] -mt-10 xs:ml-[50px]  sm:-mr-[230px]"
            />
            <img src={heroMain} alt="hero1" className="xs:h-[180px] sm:h-[670px] z-10 xs:-ml-[100px] sm:-ml-0" />
            <img
              src={heroRight}
              alt="hero1"
              className="xs:h-[82px] sm:h-[179px] -mt-10 -ml-[230px]"
            />
          </div> */}
        {/* <div className="flex justify-between -mt-[350px] ">
            <h5 className="text-[180px] uppercase font-thunder font-medium ml-16 text-gold">
              muqtadir
            </h5>
            <h5 className="text-[180px]  uppercase font-thunder font-medium mr-20 z-20">
              Jewelry
            </h5>
          </div> */}
        <img
          src={heroImage}
          alt="heroPic"
          className="xs:px-[5%] md:px-16 md:-mt-12 xl:-mt-16  2xl:-mt-24 object-top"
        />

        <div className="flex xs:-mt-2 sm:-mt-10 md:-mt-16 lg:-mt-20 xl:-mt-28 2xl:-mt-32 3xl:-mt-40 ">
          <img
            src={leftDesign}
            alt=""
            className="md:h-[280px] 2xl:h-[350px] xs:hidden md:block"
          />
          <div className="sm:flex flex-col items-center px-2">
            <h6 className="uppercase xs:text-[14px] sm:text-[24px] xs:text-center md:text-start. font-bold text-gold">
              Al Muqtadir’s Journey to 100 Stores
            </h6>
            <p className="text-center 2xl:mx-[100px] mt-2">
              Al Muqtadir Jewelry grew from one to seven showrooms (2019–2022),
              building a strong market presence and loyal customers. Its 0%
              making charge and advance booking offers drew crowds. With its own
              manufacturing unit and unique designer collection, the brand stood
              out.
            </p>
            <div className="flex flex-wrap justify-center  xs:gap-2 sm:gap-4 xs:mt-5 md:mt-6">
              {data.map((data, index) => (
                <div
                  className="border rounded-full xs:px-2 sm :px-4 py-2 text-gold border-gold"
                  key={index}
                >
                  {data}
                </div>
              ))}
            </div>
          </div>
          <img
            src={rightDesign}
            alt=""
            className="md:h-[280px] 2xl:h-[350px]  xs:hidden md:block"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
