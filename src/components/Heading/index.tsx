interface HeadingProps {
  normalText: string;
  specialText: string;
}
const Heading = (props: HeadingProps) => {
  const { normalText, specialText } = props;
  return (
    <>
      <h3 className="font-bold text-5xl">
        {normalText} <span className="text-yellow">{specialText}</span>
      </h3>
    </>
  );
};

export default Heading;
