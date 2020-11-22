import React from "react";
import { Box, Button, Text } from "grommet";
import { Clone, Book } from "grommet-icons";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useHistory } from "react-router-dom";

function Home(props) {
  let history = useHistory();
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
      <Box direction="row">
        <Button
          primary
          color="light"
          label="learn"
          margin="medium"
          size="large"
          style={{ fontWeight: 700, fontSize: "34px" }}
          icon={<Book />}
          onClick={() => history.push('/learn')}
        />
        <Button
          secondary
          color="light"
          label="embed"
          margin="medium"
          size="large"
          style={{ fontWeight: 700, fontSize: "34px" }}
          icon={<Clone />}
          onClick={() => history.push('/embed')}
        />
      </Box>
    </Box>
  );
}

export default Home;
