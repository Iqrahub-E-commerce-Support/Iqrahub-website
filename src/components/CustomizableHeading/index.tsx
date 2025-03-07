interface CustomizableHeadingProps {
  firstTxt?: string;
  secondTxt?: string;
  thirdTxt?: string;
  MainStyle?: string;
  SpecialCharacterStyle?: string;
  thirdTextStyle?: string;
}
const CustomizableHeading = (props: CustomizableHeadingProps) => {
  const {
    firstTxt,
    secondTxt,
    thirdTxt,
    MainStyle = "xs:text-[24px] sm:text-3xl font-bold",
    SpecialCharacterStyle = "font-thin ",
    thirdTextStyle = "",
  } = props;

  return (
    <h1 className={`text-[24px] sm:text-3xl font-black ${MainStyle}`}>
      {firstTxt}
      <span className={`${SpecialCharacterStyle}`}> {secondTxt} </span>
      <span className={thirdTextStyle}>{thirdTxt}</span>
    </h1>
  );
};

export default CustomizableHeading;
