import GradientButton from "@/components/GradientButton";
import Heading from "@/components/Heading";
import StarIcon from "@/components/icons/StarIcon";
import { MdArrowForward } from "react-icons/md";

const WayOfExecution = () => {
  return (
    <div className="my-14 grid grid-cols-[1.5fr_2fr] w-full gap-4">
      <div>
        <div className="flex gap-2 mb-6">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <Heading
          normalText="Turning Ideas Into Impactful"
          specialText="Brands."
        />
        <p className="font-extralight mt-3 mb-7">
          We empower businesses with branding solutions that resonate and
          inspire, helping you stand out in a competitive world.
        </p>
        <GradientButton>
          Get in Touch <MdArrowForward />
        </GradientButton>
      </div>
      <div className="bg-red ">Second Div (2/3 width)</div>
    </div>
  );
};

export default WayOfExecution;
