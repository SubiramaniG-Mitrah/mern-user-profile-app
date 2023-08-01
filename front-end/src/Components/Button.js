import React from "react";

const Button = ({ buttonProps, label }) => {
  return (
    <div className="w-full">
      <button
        className="middle none center rounded-lg border border-primary-500 py-2 px-6 font-sans text-xs w-full font-bold uppercase text-primary-500 transition-all hover:opacity-75 focus:ring focus:ring-primary-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-dark="true"
        {...buttonProps}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
