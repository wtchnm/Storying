import React, { ReactElement } from "react";

export type ButtonProperties = React.ButtonHTMLAttributes<HTMLButtonElement>;
export function Button({
  type = "button",
  children,
  ...rest
}: ButtonProperties): ReactElement {
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
