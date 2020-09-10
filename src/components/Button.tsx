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
      className="appearance-none border-none bg-blue-500 text-white font-semibold text-base p-2 rounded"
      {...rest}
    >
      {children}
    </button>
  );
}
