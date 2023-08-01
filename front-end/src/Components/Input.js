import React from "react";

const Input = ({ label, inputProps }) => {
  return (
    <div className="relative h-11 w-full min-w-[300px]">
      <input
        className="peer h-full w-full border-b border-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-gray-200 focus:border-primary-500 focus:outline-0 disabled:border-0 disabled:bg-gray-50"
        placeholder=" "
        {...inputProps}
      />
      <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-500 peer-focus:after:scale-x-100 peer-focus:after:border-primary-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
        {label}
      </label>
    </div>
  );
};

export default Input;
