import sampleVideo from "@/assets/images/video/sample_vid.mp4";
const Objectives = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr]">
      <video className="w-[89%] h-[140%] object-fill" loop autoPlay muted src={sampleVideo} />
      <div className="h-[140%] flex flex-col justify-center">
        <h6 className="font-bold text-[36px] text-yellow">
          Elevating Parcel Delivery
        </h6>
        <h3 className="mt-[20px] text-[64px] font-bold  leading-[75px]">
          How Drones Are <br />
          Transforming Logistics
        </h3>
        <h6 className="mt-[18px] text-[36px] font-bold">OBJECTIVE</h6>
        <p className="mt-[18px] text-[18px] mr-[59px]">
          The goal of the SkySwift project was to create a strong brand identity
          for a cutting-edge drone delivery system. We aimed to position
          SkySwift as an innovative, high-tech solution that could redefine
          efficiency in delivery services, particularly within the UK market. By
          combining futuristic visuals and compelling storytelling, we sought to
          demonstrate how drones could solve logistical challenges and set a new
          standard for delivery systems.  
        </p>
      </div>
    </div>
  );
};

export default Objectives;
