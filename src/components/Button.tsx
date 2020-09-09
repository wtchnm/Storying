import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export function Button({ type = "button", children, ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      {...rest}
    >
      {children}
    </button>
  );
}
