import React from "react";

const IconUtils = ({ icon, clickHandler }) => {
  return <div onClick={() => clickHandler()}>{icon}</div>;
};

export default IconUtils;
