const HappyEmojiIcon = ({
  width = 28,
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
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.75 17.6411C24.75 17.6411 18.9728 23.6411 14.25 23.6411C9.52724 23.6411 3.75 17.6411 3.75 17.6411"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect
        x="1.75"
        y="0.641113"
        width="8"
        height="8"
        rx="4"
        fill={color}
      />
      <rect
        x="18.75"
        y="0.641113"
        width="8"
        height="8"
        rx="4"
        fill={color}
      />
    </svg>
  );
};

export default HappyEmojiIcon;
