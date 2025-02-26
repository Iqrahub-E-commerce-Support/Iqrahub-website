import AsterRiskIcon from "@/components/icons/AsterRiskIcon";
import Marquee from "react-fast-marquee";
import img1 from "@/assets/images/clients/img-1.png";
import img2 from "@/assets/images/clients/img-2.png";
import img3 from "@/assets/images/clients/img-3.png";
import img4 from "@/assets/images/clients/img-4.png";
import img5 from "@/assets/images/clients/img-5.png";
import img6 from "@/assets/images/clients/img-6.png";
import img7 from "@/assets/images/clients/img-7.png";
import img8 from "@/assets/images/clients/img-8.png";
import img9 from "@/assets/images/clients/img-9.png";
import img10 from "@/assets/images/clients/img-10.png";
import Heading from "@/components/Heading";

const Clients = () => {
  const items = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <>
      <div className="flex flex-col items-center mt-10 gap-8">
        <div className="flex justify-center items-center gap-3 bg-yellow bg-opacity-15 py-1 px-3 rounded-full ">
          <AsterRiskIcon />
          <p className="text-yellow">Award Winning Agency</p>
        </div>
        <Heading normalText="They Trust" specialText="Us" />
        {/* <Marquee/> */}
        <Marquee autoFill className="overflow-hidden py-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#1B1B1B] transform transition-all duration-300 hover:border-yellow py-2 px-10 scroll-py-1  rounded-full mr-5 hover:bg-gradient-to-l hover:from-yellow-opacity hover:to-transparent hover:scale-105"
            >
              <img
                className="xs:h-[30px] md:h-[50px] xs:w-[120px] md:w-[140px] object-contain transition-all duration-300 "
                src={item}
                alt="img"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Clients;
