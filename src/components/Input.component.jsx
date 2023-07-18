import React from "react";

const InputComponent = ({ state, setState }) => {
  return (
    <div>
      <input
        type="text"
        className="border border-slate-300 rounded px-2 w-80"
        value={state.item}
        onChange={(e) => {
          setState({ ...state, item: e.target.value });
        }}
      />
    </div>
  );
};

export default InputComponent;
