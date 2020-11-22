import React from "react";
import ReactDOM from "react-dom";
import { Grommet, grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import theme from "./constants/theme";
import Home from "./pages/Home";

let explicitheme = theme;

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={explicitheme} full>
      <Home />
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);
