import Heading from "@/components/Heading";
import ImgIcon from "@/components/icons/ImgIcon";
import SuccessCard from "../SuccessCard";

const OurSuccess = () => {
  const stats = [
    {
      number: "200 +",
      title: "Website build",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      number: "99%",
      title: "Client satisfaction",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      number: "34 +",
      title: "Team members",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      number: "100 +",
      title: "Amazing clients",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
  ];
  return (
    <div className="grid  xs:grid-cols-1 md:grid-cols-2 gap-14">
      <div className="flex flex-col gap-4">
        <ImgIcon />
        <Heading normalText="Numbers That Showcase Our" specialText="Success" />
        <p className="font-extralight mb-7 text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 mt-9">
          {stats.slice(0, 2).map((stat, index) => (
            <SuccessCard
              key={index}
              number={stat.number}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {stats.slice(2, 4).map((stat, index) => (
            <SuccessCard
              key={index}
              number={stat.number}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSuccess;
