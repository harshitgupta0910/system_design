import { ProgressBar } from "./ProgressBar";

export default {
  title: "Data Display/ProgressBar",
  component: ProgressBar,
};

export const Basic = {
  render: () => <ProgressBar value={70} />,
};