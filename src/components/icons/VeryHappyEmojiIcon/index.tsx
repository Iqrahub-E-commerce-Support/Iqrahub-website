const VeryHappyEmojiIcon = ({
  width = 33,
  height = 30,
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
      viewBox="0 0 33 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5358 28.4014C17.6474 29.4018 15.3955 29.3166 13.5469 28.2445C11.4583 27.0332 8.73206 25.3506 7 23.8911C5.53212 22.6542 4.00596 20.9269 2.79939 19.4416C1.78009 18.1869 2.69571 16.3911 4.31229 16.3911L28.5241 16.3911C30.1717 16.3911 31.0904 18.2533 30.0409 19.5234C28.5354 21.3452 26.6019 23.5413 25 24.8911C23.4234 26.2196 21.2772 27.4789 19.5358 28.4014Z"
        fill={color}
      />
      <rect x="4.52148" y="0.391113" width="8" height="8" rx="4" fill={color} />
      <rect x="21.5215" y="0.391113" width="8" height="8" rx="4" fill={color} />
    </svg>
  );
};

export default VeryHappyEmojiIcon;
