import React from "react";
import { TopNavBar } from "./components/TopNavBar/TopNavBar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Tooltip } from "./components/Tooltip/Tooltip";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import "./App.css";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <TopNavBar />
        <div className="p-4 space-y-4">
          <h2 className="text-2xl font-semibold">Design System Preview</h2>
          <Tooltip content="This is a tooltip">
            <button className="bg-primary text-white p-2 rounded">Hover</button>
          </Tooltip>
          <ProgressBar value={40} />
        </div>
      </div>
    </div>
  );
}