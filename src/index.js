import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Fragment>
        <App />
        <di className="use-portrait">
          <h1>Please, rotate your device!</h1>
          <p>
            This website is designed for mobile devices in only portrait mode.
          </p>
        </di>
      </Fragment>
    </BrowserRouter>
  </React.StrictMode>
);
