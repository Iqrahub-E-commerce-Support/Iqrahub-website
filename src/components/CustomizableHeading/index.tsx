interface CustomizableHeadingProps {
  firstTxt: string;
  secondTxt?: string;
  thirdTxt?: string;
  MainStyle?: string;
  SpecialCharacterStyle?: string;
}
const CustomizableHeading = (props: CustomizableHeadingProps) => {
  const {
    firstTxt,
    secondTxt,
    thirdTxt,
    MainStyle = "text-3xl font-bold",
    SpecialCharacterStyle = "font-thin",
  } = props;

  return (
    <h1 className={MainStyle}>
      {firstTxt}
      <span className={SpecialCharacterStyle}> {secondTxt} </span>
      {thirdTxt}
    </h1>
  );
};

export default CustomizableHeading;
