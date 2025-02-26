interface HeadingProps {
  normalText: string;
  specialText?: string;
  optionalNormalText?: string;
  className?: string; // Accepting className as a prop
  specialTextClassName?: string; // Optional class for the special text
}

const Heading = ({
  normalText,
  specialText,
  optionalNormalText,
  className = "",
  specialTextClassName = "text-yellow", // Default class for special text
}: HeadingProps) => {
  return (
    <h3
      className={`font-black xs:text-4xl md:text-[56px] md:leading-[0.9] ${className}`}
    >
      {normalText} <span className={specialTextClassName}>{specialText}</span>
      {optionalNormalText}
    </h3>
  );
};

export default Heading;
