import CustomizableHeading from "../CustomizableHeading";
import Button from "../Button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CustomizableHeaderContainerProps {
  heading1?: string;
  heading2?: string;
  subHeading?: string;
  button?: string;
  link?: any;
}

const CustomizableHeaderContainer = (
  props: CustomizableHeaderContainerProps,
) => {
  const { heading1, heading2, subHeading, button, link } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap justify-between items-end">
        <div>
          <CustomizableHeading
            firstTxt={heading1 && heading1}
            secondTxt={heading2}
            MainStyle="xs:text-center sm:text-start md:text-[48px] font-black text-yellow md:leading-[50px]"
            SpecialCharacterStyle="text-white font-thin"
          />
          <p className="sm:w-[460px] mt-2  text-offWhite text-center sm:text-start">
            {subHeading}
          </p>
        </div>
        {button && (
          <Button
            onClick={() => navigate(link)}
            style="xs:mt-8  xl:mt-0 "
            variant="contained"
          >
            {button} <ArrowRight />
          </Button>
        )}
      </div>
    </>
  );
};

export default CustomizableHeaderContainer;
