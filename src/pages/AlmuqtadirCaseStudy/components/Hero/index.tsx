import almuqtadirLogo from "@/assets/images/almuqtadir/muqtadirLogo.png";
import heroLeft from "@/assets/images/almuqtadir/heropic1.png";
import heroRight from "@/assets/images/almuqtadir/heropic2.png";
import heroMain from "@/assets/images/almuqtadir/mainHeropic.png";
import leftDesign from "@/assets/images/almuqtadir/leftDesign.png";
import rightDesign from "@/assets/images/almuqtadir/sideDesign.png";
const Hero = () => {
  const data = [
    "Brand Story",
    "video Production",
    "Product Video",
    "Promotional Video",
    "Documentry",
    "Demo Video",
  ];
  return (
    <>
      <div className="border-2 mt-8 custom-container h-full border-b-0 border-gold-900 rounded-tr-[14px] rounded-tl-[14px]">
        <div className="flex justify-between items-start mt-7 px-14">
          <img src={almuqtadirLogo} alt="logo" className="h-14" />
          <p className="uppercase font-bold text-[20px] font-thuce -ml-11">
            jewelry
          </p>
          <p className="uppercase  text-[20px] font-thunder">2024</p>
        </div>
        <div className="mt-4">
          <div className="flex justify-center items-center -mt-[100px] ">
            <img
              src={heroLeft}
              alt="hero1"
              className="h-[179px] -mt-40 -mr-[230px]"
            />
            <img src={heroMain} alt="hero1" className="h-[670px] z-10" />
            <img
              src={heroRight}
              alt="hero1"
              className="h-[179px] -mt-40 -ml-[230px]"
            />
          </div>
          <div className="flex justify-between -mt-[350px] ">
            <h5 className="text-[180px] uppercase font-thunder font-medium ml-16 text-gold">
              muqtadir
            </h5>
            <h5 className="text-[180px]  uppercase font-thunder font-medium mr-20 z-20">
              Jewelry
            </h5>
          </div>
        </div>
        <div className="flex">
          <img src={leftDesign} alt="" className="h-[350px]" />
          <div className="flex flex-col items-center ">
            <h6 className="uppercase text-[24px] font-bold text-gold">
              Al Muqtadir’s Journey to 100 Stores
            </h6>
            <p className="text-center mx-[100px] mt-2">
              Al Muqtadir Jewelry grew from one to seven showrooms (2019–2022),
              building a strong market presence and loyal customers. Its 0%
              making charge and advance booking offers drew crowds. With its own
              manufacturing unit and unique designer collection, the brand stood
              out.
            </p>
            <div className="flex gap-4 mt-3">
              {data.map((data, index) => (
                <div
                  className="border rounded-full px-4 py-2 text-gold border-gold"
                  key={index}
                >
                  {data}
                </div>
              ))}
            </div>
          </div>
          <img src={rightDesign} alt="" className="h-[350px]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
