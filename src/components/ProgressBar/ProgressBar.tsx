import React from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: "primary" | "success" | "warning" | "error";
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  color = "primary",
}) => {
  const percentage = Math.min(100, (value / max) * 100);
  return (
    <div className="w-full bg-gray-200 rounded h-4">
  <div
    className={`h-4 rounded bg-${color}`}
    style={{ width: `${percentage}%` }}
  />
</div>
  );
};