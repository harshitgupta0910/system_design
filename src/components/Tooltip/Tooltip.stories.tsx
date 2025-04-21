import { Tooltip } from "./Tooltip";
import React from "react";

export default {
  title: "Data Display/Tooltip",
  component: Tooltip,
};

export const Default = () => (
  <Tooltip content="Hello from Tooltip">
    <button className="px-4 py-2 bg-primary text-white rounded">Hover me</button>
  </Tooltip>
);