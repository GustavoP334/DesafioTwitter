import React from "react";

const Button = (props) => {
  return (
    <button
      className={`p-2 rounded ${props.classColor}-500 hover:${props.classColor}-600 text-slate-100`}
      type={props.type}
    >
    { props.text }
    </button>
  );
};

export default Button;
