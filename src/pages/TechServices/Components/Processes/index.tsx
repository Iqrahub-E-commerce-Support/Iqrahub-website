import process from "@/assets/images/Processes_img.png";

const Processes = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">
          WEBSITE<span className="font-thin"> Design & Development</span>
        </h1>
        <p className="w-[500px] mt-2 text-center">
          We design and develop interactive digital experiences that delight
          your audiences and boost engagement
        </p>
      </div>
      <img className="w-full h-full mt-12" src={process} alt="" />
    </>
  );
};

export default Processes;
