import React, { forwardRef } from "react";

interface SwitchProps {
  label: string;
}
const Switch: React.FC<SwitchProps> = forwardRef((props, forwardedRef) => {
  const { label, checked } = props;
  return (
    <label className="cursor-pointer flex items-center gap-4 mb-6">
      <input type="checkbox" className="hidden" ref={forwardedRef} {...props} />
      <div
        className={`xs:w-[5.6rem] md:w-[4.5rem] lg:w-[5.6rem] p-1 rounded-full border ${checked ? "border-yellow" : "border-white"}`}
      >
        <div
          className={`w-8 h-8 p-0.5 shadow-sm rounded-full transition-all duration-300 text-white ${props.checked ? "bg-yellow xs:translate-x-12  md:translate-x-7 lg:translate-x-12 rotate-0" : "bg-white -rotate-180"}`}
        ></div>
      </div>
      <span className="sm:text-[14px] lg:text-[16px]">{label}</span>
    </label>
  );
});

export default Switch;
