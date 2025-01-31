import React from "react";
import TickIcon from "../icons/TickIcon";

interface RadioProps {
  checked?: boolean;
  label: string;
  onChange?: (checked: boolean) => void; // Callback for toggling
}

const Radio: React.FC<RadioProps> = ({ checked = false, label, onChange }) => {
  const handleClick = () => {
    if (onChange) {
      onChange(!checked); // Toggle the checked state
    }
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer gap-2">
      <input
        type="radio"
        checked={checked}
        onChange={() => {}} // Empty handler to avoid warnings
        className="hidden"
      />
      <div
        onClick={handleClick} // Add onClick handler to toggle
        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          checked ? "bg-yellow border-none" : "border-gray-300"
        }`}
      >
        {checked && (
          <div>
            <TickIcon />
          </div>
        )}
      </div>
      <span className="text-[16px]">{label}</span>
    </label>
  );
};

export default Radio;
