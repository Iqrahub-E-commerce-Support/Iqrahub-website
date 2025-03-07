import Heading from "@/components/Heading";
import ArrowIcon from "@/components/icons/ArrowIcon";
import CameraIcon from "@/components/icons/CameraIcon";
import ServiceIcon from "@/components/icons/ServicesIcon";
import { Link } from "react-router-dom";

const FeaturedService = () => {
  const services = [
    {
      icon: <CameraIcon width={70} height={70} />,
      heading: "Story Media Services",
      subHeading:
        "We’re a small but passionate team with a broad range of skills and experience. We believe in the power of creativity to solve complex problems.",
    },
    {
      icon: <ServiceIcon width={70} height={70} />,
      heading: "Tech Services",
      subHeading:
        "Physical, digital, meta-physical – We’ll find a creative solution for all your business problems.",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading normalText="Featured" specialText="Service" />
        <Link to={"./service"} style={{ textDecoration: "underline" }}>
          Explore All
        </Link>
      </div>
      <div className="mt-8 ">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2  gap-[40px] ">
          {services.map((service, index) => (
            <div
              key={index}
              className="glassy-bg flex flex-col justify-between gap-10 border-2 transform transition-all duration-300 rounded-xl cursor-pointer px-6 py-[30px] relative overflow-hidden hover:bg-gradient-to-tl from-yellow-opacity0.2 to-transparent  "
            >
              <div className="flex justify-between relative z-10 ">
                {service.icon}
                <ArrowIcon />
              </div>
              <div className="relative z-10 mt-[24px]">
                <h4 className="font-semibold text-[24px]">{service.heading}</h4>
                <p className="font-thin text-[16px] xs:mt-[6px] sm:mt-0">
                  {service.subHeading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
