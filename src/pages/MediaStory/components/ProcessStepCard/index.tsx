interface ProcessStepCardProps {
  icon: any;
  number: number;
  title: string;
  description: string;
}

const ProcessStepCard = (props: ProcessStepCardProps) => {
  const { icon, number, title, description } = props;
  return (
    <div className="border shadow-lg py-6 px-4 rounded-2xl transition-all duration-300 hover:border-yellow hover:bg-gradient-to-tl from-yellow-opacity0.2 to-black">
      <div className="flex justify-between items-center">
        {icon}
        <h1 className="text-[56px] font-bold opacity-50">{number}</h1>
      </div>
      <h4 className="mt-2 font-bold">{title}</h4>
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default ProcessStepCard;
