interface ButtonProps {
  children: React.ReactNode;
  style?: string;
  variant?: "outlined" | "contained" | "rounded";
}

const Button = (props: ButtonProps) => {
  const { children, style = "", variant } = props;
  const defaultStyles = "px-7 py-2 rounded-3xl text-white";
  const contained = "px-7 py-2 rounded-3xl bg-white text-black";
  const outlined = "border px-7 py-2 rounded-3xl";
  const rounded = "border px-3 py-3 rounded-full";
  const variantStyle =
    variant === "contained"
      ? contained
      : variant === "outlined"
        ? outlined
        : variant === "rounded"
          ? rounded
          : defaultStyles;
  return (
    <button type="button" className={`${variantStyle} ${style}`}>
      <div className="flex gap-2 items-center">{children}</div>
    </button>
  );
};

export default Button;
