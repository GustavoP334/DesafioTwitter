import React from "react";

const Button = (props) => {
  return (
    <button
        className="mt-5 p-2 rounded bg-emerald-500 hover:bg-emerald-600 text-slate-100"
        type={props.type}
    >
    { props.text }
    </button>
  );
};

export default Button;
