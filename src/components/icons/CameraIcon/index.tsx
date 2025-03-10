import clsx from "clsx";

interface CameraIconProps {
  className?: string;
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

const CameraIcon: React.FC<CameraIconProps> = ({
  className,
  width = 70,
  height = 70,
  strokeColor = "white",
  strokeWidth = 3.9375,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        d="M13.125 62.7091L24.7917 51.0424M30.625 51.0424L42.2917 62.7091M27.7083 51.0424V65.6258"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83154 34.6354C5.83154 28.6201 5.83154 25.6124 8.82151 23.7437C11.8114 21.875 16.6237 21.875 26.2482 21.875H29.1649C38.7893 21.875 43.6015 21.875 46.5917 23.7437C49.5815 25.6124 49.5815 28.6201 49.5815 34.6354V38.2812C49.5815 44.2966 49.5815 47.3043 46.5917 49.173C43.6015 51.0417 38.7893 51.0417 29.1649 51.0417H26.2482C16.6237 51.0417 11.8114 51.0417 8.82151 49.173C5.83154 47.3043 5.83154 44.2966 5.83154 38.2812V34.6354Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M49.5815 29.894L49.9488 29.6737C56.1198 25.9706 59.2054 24.1191 61.6851 25.0131C64.1649 25.9071 64.1649 28.871 64.1649 34.7989V38.116C64.1649 44.0439 64.1649 47.0078 61.6851 47.9017C59.2054 48.7957 56.1198 46.9442 49.9488 43.2412L49.5815 43.0207"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M36.4601 21.8758C40.4872 21.8758 43.7518 18.6112 43.7518 14.5841C43.7518 10.557 40.4872 7.29242 36.4601 7.29242C32.433 7.29242 29.1685 10.557 29.1685 14.5841C29.1685 18.6112 32.433 21.8758 36.4601 21.8758Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M20.4185 21.875C25.2509 21.875 29.1685 17.9575 29.1685 13.125C29.1685 8.29251 25.2509 4.375 20.4185 4.375C15.586 4.375 11.6685 8.29251 11.6685 13.125C11.6685 17.9575 15.586 21.875 20.4185 21.875Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default CameraIcon;
