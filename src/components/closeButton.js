import React from "react";

const CloseButton = ({ onClick, containerCSS, buttonCSS }) => {
  return (
    <div className={` ${containerCSS}`}>
      <button onClick={onClick} className={`border ${buttonCSS}`}>
        x
      </button>
    </div>
  );
};

export default CloseButton;
