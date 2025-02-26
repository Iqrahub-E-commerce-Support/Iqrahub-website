const ServiceIcon = ({
  width = 70,
  height = 70,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.29346 35.0008C7.29346 21.9389 7.29346 15.408 11.3512 11.3502C15.4091 7.29242 21.94 7.29242 35.0018 7.29242C48.0635 7.29242 54.5945 7.29242 58.6525 11.3502C62.7101 15.408 62.7101 21.9389 62.7101 35.0008C62.7101 48.0625 62.7101 54.5935 58.6525 58.6514C54.5945 62.7091 48.0635 62.7091 35.0018 62.7091C21.94 62.7091 15.4091 62.7091 11.3512 58.6514C7.29346 54.5935 7.29346 48.0625 7.29346 35.0008Z"
        stroke="white"
        strokeWidth="3.9375"
      />
      <path
        d="M7.29346 26.25H62.7101"
        stroke="white"
        strokeWidth="3.9375"
        strokeLinejoin="round"
      />
      <path
        d="M37.9185 37.9174H49.5851"
        stroke="white"
        strokeWidth="3.9375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.9185 49.5826H43.7518"
        stroke="white"
        strokeWidth="3.9375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4185 17.5H20.4446"
        stroke="white"
        strokeWidth="5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.0815 17.5H32.1078"
        stroke="white"
        strokeWidth="5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.25 26.25V62.7083"
        stroke="white"
        strokeWidth="3.9375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ServiceIcon;
