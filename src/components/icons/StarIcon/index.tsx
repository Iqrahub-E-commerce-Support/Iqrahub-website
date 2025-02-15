const StarIcon = ({
  width = "26",
  height = "24",
  color = "#FFC506",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.6175 0L15.5961 9.16718H25.2351L17.437 14.8328L20.4156 24L12.6175 18.3344L4.81947 24L7.79807 14.8328L0 9.16718H9.63895L12.6175 0Z"
        fill={color}
      />
    </svg>
  );
};

export default StarIcon;
