import CustomizableHeading from "../CustomizableHeading";
import Button from "../Button";
import { ArrowRight } from "lucide-react";

interface CustomizableHeaderContainerProps {
  heading1?: string;
  heading2?: string;
  subHeading?: string;
  button?: string;
}

const CustomizableHeaderContainer = (
  props: CustomizableHeaderContainerProps,
) => {
  const { heading1, heading2, subHeading, button } = props;
  return (
    <>
      <div className="flex flex-wrap justify-between items-end">
        <div>
          <CustomizableHeading
            firstTxt={heading1 && heading1}
            secondTxt={heading2}
            MainStyle="text-3xl font-bold text-yellow"
            SpecialCharacterStyle="text-white font-thin"
          />
          <p className="sm:w-[460px] mt-2  text-offWhite">{subHeading}</p>
        </div>
        <Button style="xs:mt-4 md:mt-0" variant="contained">
          {button} <ArrowRight />
        </Button>
      </div>
    </>
  );
};

export default CustomizableHeaderContainer;
