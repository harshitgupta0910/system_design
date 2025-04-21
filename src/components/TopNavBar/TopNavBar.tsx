import React from "react";

export const TopNavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-primary text-white p-4">
      <h1 className="text-xl font-bold">Brand</h1>
      <div className="space-x-4">
        <button className="hover:underline">Home</button>
        <button className="hover:underline">About</button>
        <button className="hover:underline">Contact</button>
      </div>
    </nav>
  );
};