interface HeadingProps {
  normalText: string;
  specialText: string;
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
    <h3 className={`font-bold xs:text-4xl md:text-5xl ${className}`}>
      {normalText} <span className={specialTextClassName}>{specialText}</span>
      {optionalNormalText}
    </h3>
  );
};

export default Heading;
