import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactElement } from "react";

export type ButtonProperties = ButtonHTMLAttributes<HTMLButtonElement>;
export function Button({
  type = "button",
  className,
  ...rest
}: ButtonProperties): ReactElement {
  return (
    <button
      type={type}
      className={clsx(
        "appearance-none border border-solid border-transparent focus:border-blue-500 focus:outline-none focus:shadow-outline hover:bg-blue-500 active:bg-blue-600 bg-blue-600 text-white font-semibold text-base leading-5 py-2 px-3 rounded-md cursor-pointer transition duration-150 ease-in-out",
        className
      )}
      {...rest}
    />
  );
}
