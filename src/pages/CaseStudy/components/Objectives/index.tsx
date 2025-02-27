import sampleVideo from "@/assets/images/video/sample_vid.mp4";
const Objectives = () => {
  return (
    <div className="xs:block md:grid xs:grid=cols-1 sm:grid-cols-[1fr_2fr] 3xl:grid-cols-[0.5fr_2fr] md:gap-8 lg:gap-0">
      <video
        className="xs:w-[100%] lg:w-[89%] xs:h-[300px] sm:h-[140%] md:h-full lg:h-[136%] xl:h-[140%] 2xl:h-[160%]   xs:object-cover sm:object-fill"
        loop
        autoPlay
        muted
        src={sampleVideo}
      />
      <div className="xs:h-full sm:h-[140%] flex flex-col md:justify-start lg:justify-center ">
        <h6 className="font-bold xs:mt-3 md:mt-0 xs:text-[29px] sm:text-[32px] md:text-[36px] text-yellow">
          Elevating Parcel Delivery
        </h6>
        <h3 className="xs:mt-4 md:mt-[20px] xs:text-[40px] sm:text-[52px] md:text-[64px] font-bold xs:leading-[45px] sm:leading-[60px]  lg:leading-[45px]">
          How Drones Are
          <span className="xs:hidden  lg:block">
            {"  "}
            <br />
          </span>{" "}
          Transforming Logistics
        </h3>
        <h6 className="xs:mt-6 md:mt-[24px] lg:mt-[18px] xs:text-[29px] sm:text-[32px] md:text-[36px] font-medium">
          OBJECTIVE
        </h6>
        <p className="mt-[18px] text-[18px] xs:mr-0 sm:mr-[59px]">
          The goal of the SkySwift project was to create a{" "}
          <span className="font-bold">strong brand identity</span>
          for a cutting-edge drone delivery system. We aimed to position
          SkySwift as an{" "}
          <span className="font-bold">innovative, high-tech solution</span> that
          could redefine efficiency in delivery services, particularly within
          the UK market. By combining{" "}
          <span className="font-bold">futuristic visuals</span> and{" "}
          <span className="font-bold">compelling storytelling</span>, we sought
          to demonstrate how drones could solve logistical challenges and set a
          new standard for delivery systems.  
        </p>
      </div>
    </div>
  );
};

export default Objectives;
