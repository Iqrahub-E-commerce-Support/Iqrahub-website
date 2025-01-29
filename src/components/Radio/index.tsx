import TickIcon from "../icons/TickIcon";

const Radio = ({ checked = true }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        // name={name}
        // value={value}
        checked={checked}
        // onChange={() => onChange(value)}
        className="hidden"
      />
      <div
        className={`w-10 h-10 rounded-full border-2  flex items-center justify-center ${checked && "bg-yellow border-none"}`}
      >
        {checked && (
          <div>
            <TickIcon />
          </div>
        )}
      </div>
      <span className="text-gray-700">text</span>
    </label>
  );
};

export default Radio;
