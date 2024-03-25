import React from "react";
import ReactDOM from "react-dom/client";

import { Pages } from "./pages";

import "./assets/styles/index.css";
import { connect } from "./utils/firebase";

connect();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
);