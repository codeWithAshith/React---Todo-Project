import React from "react";

const ButtonUtils = ({ label, clickHandler, variant = "default" }) => {
  return (
    <div>
      <button
        className={`border rounded px-3 ${
          variant === "default"
            ? "bg-blue-300 border-blue-400"
            : "bg-green-300 border-green-400"
        } `}
        onClick={() => {
          clickHandler();
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonUtils;
