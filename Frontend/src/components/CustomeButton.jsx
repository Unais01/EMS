import React from "react";

const CustomButton = ({ btnTitle, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition-colors ${className}`}
    >
      {btnTitle}
    </button>
  );
};

export default CustomButton;
