import React from "react";
import { Box } from "grommet";
import { useHistory } from "react-router-dom";

// custom components
import { ReactComponent as Logo } from "../assets/logo.svg";

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1" }}
    {...props}
  />
);

function Header(props) {
  let history = useHistory();

  let goHome = () => {
    history.push("/");
  };

  return (
    <AppBar background="dark">
      <Box
        onClick={goHome}
        animation={{
          type: "zoomIn",
          size: "large",
        }}
      >
        <Logo style={{ maxHeight: "3rem", maxWidth: "3rem" }} />
      </Box>
    </AppBar>
  );
}

export default Header;
