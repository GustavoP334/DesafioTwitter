import React from "react";
import { Link } from "react-router-dom";

const SpanLink = (props) => {
  return (
        <span className="text-sm mt-2 text-gray-500">
          {props.text + " "}
          <Link className="text-sky-500 hover:underline" to={"/" + props.link}>
            { props.linkText }
          </Link>
        </span>
  );
};

export default SpanLink;
