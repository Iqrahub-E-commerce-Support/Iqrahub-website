import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "reset" | "submit";
  onClick?:()=>void
}
const GradientButton = (props: GradientButtonProps) => {
  const { children, className, type = "button",onClick } = props;
  return (
    <button
    onClick={onClick}
      type={type}
      className={`group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red  via-brown  to-yellow p-[2.5px] text-white transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50 hover:bg-gradient-to-r hover:from-yellow hover:via-brown hover:to-red ${className}`}
    >
      <div className="flex h-full items-center justify-center rounded-full bg-black   px-3 py-3 transition duration-500 ease-in-out ">
        {children}
      </div>
    </button>
  );
};

export default GradientButton;
