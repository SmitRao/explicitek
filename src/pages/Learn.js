import React from "react";
import { Box, Button, Text } from "grommet";
import { Clone, Book } from "grommet-icons";
import { ReactComponent as Logo } from "../assets/logo.svg";

function Home(props) {
  return (
    <Box align="center" justify="center" background="dark" pad="large" fill>
      <Logo />
      <Text
        style={{
          fontWeight: 900,
          fontStyle: "italic",
          letterSpacing: "-3px",
          textAlign: "center",
          padding: "3rem",
        }}
        size="144px"
      >
        explicitech
      </Text>
      {/* <Text
        style={{
          fontWeight: 300,
          letterSpacing: "1px",
          textAlign: "center",
        }}
        size="30px"
      >
        legal jargon, explained
      </Text> */}
      <Box direction="row">
        <Button
          primary
          color="light"
          label="learn"
          margin="medium"
          size="large"
          style={{ fontWeight: 700, fontSize: "34px" }}
          icon={<Book />}
        />
        <Button
          secondary
          color="light"
          label="embed"
          margin="medium"
          size="large"
          style={{ fontWeight: 700, fontSize: "34px" }}
          icon={<Clone />}
        />
      </Box>
    </Box>
  );
}

export default Home;
