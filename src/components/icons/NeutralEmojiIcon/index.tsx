const NeutralEmojiIcon = ({
  width = 28,
  height = 29,
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
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 23.0985C3.5 23.0985 6.81764 22.1551 9 22.0985C13.2632 21.9881 15.2945 25.8057 19.5 25.0984C21.5739 24.7496 24.5 23.0985 24.5 23.0985"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect
        x="1.5"
        y="0.0961914"
        width="8"
        height="8"
        rx="4"
        fill={color}
      />
      <rect
        x="18.5"
        y="0.0961914"
        width="8"
        height="8"
        rx="4"
        fill={color}
      />
    </svg>
  );
};

export default NeutralEmojiIcon;
