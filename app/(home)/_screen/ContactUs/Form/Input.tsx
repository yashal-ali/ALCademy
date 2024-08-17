"use client";

import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string | boolean | undefined;
}

const Input: React.FC<IProps> = ({
  placeholder,
  onChange,
  error,
  type,
  style,
  className,
  value,
  name,
  readOnly,
}) => {
  return (
    <div className="flex flex-col" style={style}>
      <input
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        readOnly={readOnly}
        id={name}
        type={type || "text"}
        value={value}
        className={`py-1 px-5 border border-light text-black font-sans  dark:border-darkinput item-center dark:bg-darkinput text-base focus-visible:outline-main placeholder:font-normal placeholder:text-placeholder dark:placeholder:text-darkplaceholder dark:text-white rounded-md  ${className}`}
        style={{ boxShadow: "0px 4px 40px #00000014" }}
      />
      {error && <p className="font-sans text-sm text-red-700">{error}</p>}
    </div>
  );
};

export default Input;
