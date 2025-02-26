import Heading from "@/components/Heading";
import ArrowIcon from "@/components/icons/ArrowIcon";
import CameraIcon from "@/components/icons/CameraIcon";
import ServiceIcon from "@/components/icons/ServicesIcon";
import { Link } from "react-router-dom";

const FeaturedService = () => {
  const services = [
    {
      icon: <CameraIcon width={55} height={55} />,
      heading: "Story Media Services",
      subHeading:
        "We’re a small but passionate team with a broad range of skills and experience. We believe in the power of creativity to solve complex problems.",
    },
    {
      icon: <ServiceIcon width={55} height={55} />,
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
        <div className="grid xs:grid-cols-1 sm:grid-cols-2  gap-4">
          {services.map((service, index) => (
            <>
              <div className="flex flex-col gap-10 border-2 rounded-xl cursor-pointer p-4">
                <div className="flex justify-between ">
                  {service.icon}
                  <ArrowIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{service.heading}</h4>
                  <p className="font-thin text-sm xs:mt-[6px] sm:mt-0">
                    {service.subHeading}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
