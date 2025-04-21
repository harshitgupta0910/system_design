import React, { useState } from "react";

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`bg-secondary text-white h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        {isOpen ? "«" : "»"}
      </button>
      {isOpen && (
        <ul className="mt-4 space-y-2 p-2">
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </aside>
  );
};
