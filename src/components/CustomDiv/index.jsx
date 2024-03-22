import React from "react";

const CustomDiv = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col">
        <h1 className="font-sans text-3xl text-sky-500 pb-1">Aluritter</h1>
        {children}
    </div>
  );
};

export default CustomDiv;