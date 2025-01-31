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
    <div className="p-6 h-full w-[650px]">
      <img src={img} className="h-full w-full object-fill" alt={name} />
      <div className="absolute right-4 top-60 ">
        <div className="h-[330px] bg-white w-[400px] flex flex-col items-center justify-center p-5">
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
