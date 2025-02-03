import process from "@/assets/images/Processes_img.png";
import CustomizableHeading from "@/components/CustomizableHeading";

const Processes = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <CustomizableHeading
          firstTxt="WEBSITE"
          secondTxt="Design & Development"
        />
        <p className="w-[500px] mt-2 text-center text-offWhite">
          We design and develop interactive digital experiences that delight
          your audiences and boost engagement
        </p>
      </div>
      <div className="w-full h-full mt-14">
        <img className="object-contain" src={process} alt="" />
      </div>
    </>
  );
};

export default Processes;
