import type { Meta } from "@storybook/react";
import React from "react";
import { Button, ButtonProperties } from "../src/components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

export function Primary({ onClick }: ButtonProperties) {
  return <Button onClick={onClick}>Primary</Button>;
}
