import React from "react";

const Button = (props) => {
  return (
    <button
      className={`p-2 rounded ${props.classColor} hover:${props.classColorHover} text-slate-100`}
      type={props.type}
      onClick={props.onClick}
    >
    { props.text }
    </button>
  );
};

export default Button;
