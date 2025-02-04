import React from "react";

interface TestimonialCardProps {
  img: string;
  name: string;
  designation: string;
  clientImg: string;
  content: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  img,
  name,
  designation,
  clientImg,
  content,
}) => {
  return (
    <div className="relative xs:flex sm:block xs:items-center xs:justify-center sm:items-start sm:justify-start xs:p-0 sm:p-6 sm:h-full xs:w-[100%] sm:w-[95%] md:w-[88%] xl:w-[600px]">
      <img
        src={img}
        className="h-[400px] xs:w-full sm:w-[100%] xs:object-fill sm:object-fill sm:pl-8 md:pl-5 lg:pl-0"
        alt={name}
      />
      <div className="absolute  xs:top-[200px] sm:top-[250px]  sm:-right-[20px]  lg:-right-[30px]  flex items-center justify-center ">
        <div className="h-[330px] bg-white xs:w-[300px]  flex flex-col items-center justify-center p-5 shadow-lg">
          <img className="mb-4" src={clientImg} alt="" />
          <p className="text-[#0D0D0D] text-[12px] font-extralight">
            {designation}
          </p>
          <h1 className="text-[#0D0D0D] text-[20px] font-bold">{name}</h1>
          <p className="text-[#0D0D0D] text-[16px] font-medium text-center">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
