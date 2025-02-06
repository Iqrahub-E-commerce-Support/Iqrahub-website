interface SuccessCardProps {
  number: string;
  title: string;
  description: string;
}
const SuccessCard = ({ number, title, description }: SuccessCardProps) => {
  return (
    <div className="xs:h-44 md:h-40 w-66 rounded-[10px] border flex flex-col justify-center items-center px-[10px] bg-white bg-opacity-10 transition-all duration-500 hover:bg-yellow hover:text-black">
      <p className="font-bold  text-3xl">{number}</p>
      <p className="font-semibold xs:text-[12px] md:text-md ">{title}</p>
      <p className="font-semibold xs:text-[10px] md:text-sm text-center mt-2">
        {description}
      </p>
    </div>
  );
};

export default SuccessCard;
