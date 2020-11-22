import React from "react";
import { Box, Text } from "grommet";
import Header from "../components/Header";

function Learn(props) {
  return (
    <Box fill>
      <Header />
      <Box background="dark" pad="small" fill>
        <Box style={{ paddingLeft: "3rem" }}>
          <Text
            style={{
              fontWeight: 900,
              letterSpacing: "-1px",
              paddingTop: "0.5rem",
            }}
            size="60px"
          >
            Learn
          </Text>
          <Text
            style={{
              fontWeight: 700,
              letterSpacing: "-1px",
              paddingTop: "3rem",
            }}
            size="40px"
          >
            Common symbols — Terms & Conditions
          </Text>
          <Box style={{ paddingTop: "0.8rem" }}>x</Box>
          <Text
            style={{
              fontWeight: 700,
              letterSpacing: "-1px",
              paddingTop: "3rem",
            }}
            size="40px"
          >
            Common symbols — Privacy Policy
          </Text>
          <Box style={{ paddingTop: "0.8rem" }}>x</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Learn;
