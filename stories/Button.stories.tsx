import { Meta } from "@storybook/react";
import React from "react";
import { Button } from "../src/components/Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

export function Primary() {
  return <Button>Primary</Button>;
}
