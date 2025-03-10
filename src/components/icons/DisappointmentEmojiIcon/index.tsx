const DisappointmentEmojiIcon = ({
  width = 29,
  height = 27,
  color = "currentColor",
}: {
  width?: any;
  height?: any;
  color?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.25 23.1411L13.25 20.6411L25.75 17.6411"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect x="1.25" y="0.141113" width="8" height="8" rx="4" fill={color} />
      <rect x="18.25" y="0.141113" width="8" height="8" rx="4" fill={color} />
    </svg>
  );
};

export default DisappointmentEmojiIcon;
