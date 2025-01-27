import AsterRiskIcon from "@/components/icons/AsterRiskIcon";
import Marquee from "react-fast-marquee";
import img1 from "@/assets/images/clients/img-1.png";
import img2 from "@/assets/images/clients/img-2.png";
import img3 from "@/assets/images/clients/img-3.png";
import img4 from "@/assets/images/clients/img-4.png";
import img5 from "@/assets/images/clients/img-5.png";
import Heading from "@/components/Heading";

const Clients = () => {
  const items = [img1, img2, img3, img4, img5];
  return (
    <>
      <div className="flex flex-col items-center mt-10 gap-7">
        <div className="flex justify-center items-center gap-3 bg-yellow bg-opacity-15 py-1 px-3 rounded-full">
          <AsterRiskIcon />
          <p className="text-yellow">Award Winning Agency</p>
        </div>
        <Heading normalText="They Trust" specialText="Us" />
        {/* <Marquee/> */}
        <Marquee autoFill className="overflow-hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#1B1B1B] transform transition-all duration-300 hover:border-yellow px-3 py-1 rounded-full mr-3 hover:bg-gradient-to-l hover:from-yellow-opacity hover:to-transparent hover:scale-105"
            >
              <img
                className="h-[30px] w-[80px] object-contain transition-all duration-300 "
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
