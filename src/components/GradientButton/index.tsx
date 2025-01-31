import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
}
const GradientButton = (props: GradientButtonProps) => {
  const { children } = props;
  return (
    <button
      type="button"
      className="transition group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red via-yellow to-red p-[2.5px] text-white duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50 hover:bg-gradient-to-r hover:from-yellow hover:via-brown hover:to-red"
    >
      <div className="flex h-full items-center justify-center rounded-full bg-black   px-3 py-3 transition duration-300 ease-in-out ">
        {children}
      </div>
    </button>
  );
};

export default GradientButton;
