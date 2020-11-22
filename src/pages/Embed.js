import React from "react";
import { Box, Text } from "grommet";
import Header from "../components/Header";

function Embed(props) {
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
            Embed
          </Text>
          <Text
            style={{
              fontWeight: 400,
              paddingTop: "3rem",
            }}
            size="40px"
          >
            Embed the following tags into your headers in index.html to display
            jargon symbols:
          </Text>
          <Box align="center" justify="center">
            <Text
              style={{
                fontWeight: 700,
                fontFamily: "monospace",
                paddingTop: "3rem",
              }}
              size="40px"
            >
              {`
                <script
                async
                src="https://explici.tech/explicitech-tooltip.js"
                ></script>
              `}
              <br /> <br />
              {`
                <explicitech-tooltip id="example-af8f79af786s6r3i7"></explicitech-tooltip>
              `}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Embed;
