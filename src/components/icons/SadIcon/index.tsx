const SadIcon = ({
  width = 27,
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
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 23.1411C3 23.1411 8.77724 17.1411 13.5 17.1411C18.2228 17.1411 24 23.1411 24 23.1411"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect
        x="1"
        y="0.141113"
        width="8"
        height="8"
        rx="4"
        fill={color}
      />
      <rect
        x="18"
        y="0.141113"
        width="8"
        height="8"
        rx="4"
        fill={color}
      />
    </svg>
  );
};

export default SadIcon;
