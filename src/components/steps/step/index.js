import React from "react";

const Step = ({ index, currentStep }) => {
  return (
    <div
      key={index}
      className={`py-1 px-5 m-2 rounded-lg ${
        currentStep >= index ? "bg-[#024752]" : "bg-gray-400"
      }`}
    />
  );
};

export default Step;
