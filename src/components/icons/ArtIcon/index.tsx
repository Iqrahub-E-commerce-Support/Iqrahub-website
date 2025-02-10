const ArtIcon = ({
  width = "40",
  height = "40",
  color = "white",
  opacity = "0.6",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M4.16797 19.9993C4.16797 12.5354 4.16797 8.8035 6.4867 6.48475C8.80545 4.16602 12.5374 4.16602 20.0013 4.16602C27.4651 4.16602 31.1971 4.16602 33.516 6.48475C35.8346 8.8035 35.8346 12.5354 35.8346 19.9993C35.8346 27.4632 35.8346 31.1952 33.516 33.514C31.1971 35.8327 27.4651 35.8327 20.0013 35.8327C12.5374 35.8327 8.80545 35.8327 6.4867 33.514C4.16797 31.1952 4.16797 27.4632 4.16797 19.9993Z"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      <path
        d="M18.332 11.666L19.9987 14.4438M28.332 28.3327L22.332 18.3327"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.668 11.666L11.668 28.3327"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.832 23.334H20.832M29.1654 23.334H25.832"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArtIcon;
