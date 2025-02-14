import { forwardRef, InputHTMLAttributes, ChangeEvent } from "react";

type BaseInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "checked"
>;

interface SwitchProps extends BaseInputProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const { label, checked, onChange, ...rest } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="cursor-pointer flex items-center gap-4 mb-6">
      <input
        type="checkbox"
        className="hidden"
        ref={ref}
        checked={checked}
        onChange={handleChange}
        {...rest}
      />
      <div
        className={`xs:w-[5.6rem] md:w-[4.5rem] lg:w-[5.6rem] p-1 rounded-full border ${checked ? "border-yellow" : "border-white"}`}
      >
        <div
          className={`w-8 h-8 p-0.5 shadow-sm rounded-full transition-all duration-300 text-white ${checked ? "bg-yellow xs:translate-x-12  md:translate-x-7 lg:translate-x-12 rotate-0" : "bg-white -rotate-180"}`}
        ></div>
      </div>
      <span className="sm:text-[14px] lg:text-[16px]">{label}</span>
    </label>
  );
});

Switch.displayName = "Switch";

export default Switch;
