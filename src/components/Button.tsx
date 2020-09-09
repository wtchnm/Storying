import React from "react";

type DefaultButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonProps = React.PropsWithChildren<{
  onClick: DefaultButtonProps["onClick"];
}> &
  DefaultButtonProps;
export function Button({ type = "button", children, ...rest }: ButtonProps) {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
}
