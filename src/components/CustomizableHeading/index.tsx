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
    MainStyle = "text-3xl font-bold",
    SpecialCharacterStyle = "font-thin",
    thirdTextStyle = "",
  } = props;

  return (
    <h1 className={MainStyle}>
      {firstTxt}
      <span className={SpecialCharacterStyle}> {secondTxt} </span>
      <span className={thirdTextStyle}>{thirdTxt}</span>
    </h1>
  );
};

export default CustomizableHeading;
