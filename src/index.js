import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grommet } from "grommet";
import theme from "./constants/theme";
import Home from "./pages/Home";
import Embed from "./pages/Embed";
import Learn from "./pages/Learn";

let explicitheme = theme;

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={explicitheme} full>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/learn" component={Learn} />
        <Route path="/embed" component={Embed} />
      </Router>
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);
