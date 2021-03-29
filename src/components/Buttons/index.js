import React from "react";

const Button = ({ onClick, children, className, disabled }) => {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
