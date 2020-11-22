import React from "react";
import { Box, Text, Card, CardBody, CardFooter, CardHeader } from "grommet";
import Header from "../components/Header";
import {
  BiNetworkChart,
  BiFingerprint,
  BiCookie,
  BiBrain,
} from "react-icons/bi";
import { GoBrowser } from "react-icons/go";
import { CgCrown } from "react-icons/cg";

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
          <Box style={{ paddingTop: "0.8rem" }} direction="row">
            <Card
              pad="medium"
              background="light"
              gap="medium"
              width="small"
              height="small"
              margin="small"
            >
              <CardHeader>
                <BiNetworkChart />
              </CardHeader>
              <CardBody>
                <Text
                  style={{
                    fontWeight: 400,
                    letterSpacing: "-1px",
                  }}
                  size="20px"
                >
                  Saves your IP Address
                </Text>
              </CardBody>
            </Card>
            <Card
              pad="medium"
              background="light"
              gap="medium"
              width="small"
              height="small"
              margin="small"
            >
              <CardHeader>
                <GoBrowser />
              </CardHeader>
              <CardBody>
                <Text
                  style={{
                    fontWeight: 400,
                    letterSpacing: "-1px",
                  }}
                  size="20px"
                >
                  Reads your browser fingerprint
                </Text>
              </CardBody>
            </Card>
            <Card
              pad="medium"
              background="light"
              gap="medium"
              width="small"
              height="small"
              margin="small"
            >
              <CardHeader>
                <BiCookie />
              </CardHeader>
              <CardBody>
                <Text
                  style={{
                    fontWeight: 400,
                    letterSpacing: "-1px",
                  }}
                  size="20px"
                >
                  Tracks your cookies
                </Text>
              </CardBody>
            </Card>
            <Card
              pad="medium"
              background="light"
              gap="medium"
              width="small"
              height="small"
              margin="small"
            >
              <CardHeader>
                <CgCrown />
              </CardHeader>
              <CardBody>
                <Text
                  style={{
                    fontWeight: 400,
                    letterSpacing: "-1px",
                  }}
                  size="20px"
                >
                  Takes ownership of your content
                </Text>
              </CardBody>
            </Card>

            <Card
              pad="medium"
              background="light"
              gap="medium"
              width="small"
              height="small"
              margin="small"
            >
              <CardHeader>
                <BiBrain />
              </CardHeader>
              <CardBody>
                <Text
                  style={{
                    fontWeight: 400,
                    letterSpacing: "-1px",
                  }}
                  size="20px"
                >
                  Claims intellectual property rights
                </Text>
              </CardBody>
            </Card>
          </Box>
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
          <Box style={{ paddingTop: "0.8rem" }} direction="row">
            <Card
              pad="medium"
              background="light"
              gap="medium"
              width="small"
              height="small"
              margin="small"
            >
              <CardHeader>
                <BiNetworkChart />
              </CardHeader>
              <CardBody>
                <Text
                  style={{
                    fontWeight: 400,
                    letterSpacing: "-1px",
                  }}
                  size="20px"
                >
                  Saves your IP Address
                </Text>
              </CardBody>
            </Card>
            <Card
              pad="medium"
              background="light"
              gap="medium"
              width="small"
              height="small"
              margin="small"
            >
              <CardHeader>
                <GoBrowser />
              </CardHeader>
              <CardBody>
                <Text
                  style={{
                    fontWeight: 400,
                    letterSpacing: "-1px",
                  }}
                  size="20px"
                >
                  Reads your browser fingerprint
                </Text>
              </CardBody>
            </Card>
            <Card
              pad="medium"
              background="light"
              gap="medium"
              width="small"
              height="small"
              margin="small"
            >
              <CardHeader>
                <BiCookie />
              </CardHeader>
              <CardBody>
                <Text
                  style={{
                    fontWeight: 400,
                    letterSpacing: "-1px",
                  }}
                  size="20px"
                >
                  Tracks your cookies
                </Text>
              </CardBody>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Learn;
