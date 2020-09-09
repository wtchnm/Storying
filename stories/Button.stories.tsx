import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from "../src/components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

export const Primary: Story<ButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Primary</Button>;
};
