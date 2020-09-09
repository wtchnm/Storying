import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from "../src/components/Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({}) as typeof Template;
Primary.args = {
  children: "Button",
};
