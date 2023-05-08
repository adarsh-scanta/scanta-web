import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import {
  FeatureArt0,
  FeatureArt1,
  FeatureArt2,
  FeatureArt3,
  FeatureArt4,
  FeatureArt5,
} from "../../../assets/arts/Product/featureArt";
import {
  RightBlockContainer,
  Title,
  ContentWrapper,
  AboutSubHeading,
  AboutContent,
} from "./styles";
import Container from "../../../common/Container";
import React, { useState } from "react";

const MainBlock = ({ id, t }: any) => {
  const [mouseOver, setMouseOver] = useState("");
  const onMouseOver = (sectionHeading: any) => {
    setMouseOver(sectionHeading);
  };
  const onMouseNotOver = () => {
    setMouseOver("");
  };

  return (
    <RightBlockContainer id="intro">
      <Container>
        {/* <Fade direction="up" duration={500}> */}
        <div style={{ margin: "4rem 0" }}></div>
        <Row justify="center">
          <Title>
            <span style={{ color: "#F48C06" }}>Key</span> Features
          </Title>
        </Row>
        <Row justify="center">
          <Col lg={11} md={12} sm={12} xs={24}>
            <div style={{ maxWidth: "90%" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
                <ContentWrapper
                  style={{
                    background: mouseOver === "first" ? "#5B72EE" : "",
                  }}
                  onMouseLeave={() => {
                    onMouseNotOver();
                  }}
                  onMouseEnter={() => onMouseOver("first")}
                >
                  <AboutSubHeading
                    style={{ color: mouseOver === "first" ? "#FFF" : "" }}
                  >
                    Easy{" "}
                    <span
                      style={{
                        color: mouseOver === "first" ? "#fff" : "#F48C06",
                      }}
                    >
                      to Use
                    </span>
                  </AboutSubHeading>
                  <AboutContent
                    style={{ color: mouseOver === "first" ? "#FFF" : "" }}
                  >
                    Chec doesn’t require any technical expertise.{" "}
                  </AboutContent>
                </ContentWrapper>
              {/* </Fade> */}
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
                <ContentWrapper
                  style={{
                    background: mouseOver === "second" ? "#EB7A02" : "",
                  }}
                  onMouseLeave={() => {
                    onMouseNotOver();
                  }}
                  onMouseEnter={() => onMouseOver("second")}
                >
                  <AboutSubHeading
                    style={{
                      color: mouseOver === "second" ? "#FFF" : "",
                    }}
                  >
                    Department{" "}
                    <span
                      style={{
                        color: mouseOver === "second" ? "#fff" : "#F48C06",
                      }}
                    >
                      Focused
                    </span>
                  </AboutSubHeading>
                  <AboutContent
                    style={{
                      color: mouseOver === "second" ? "#FFF" : "",
                    }}
                  >
                    Pick from a library of analyzers made for your department.
                  </AboutContent>
                </ContentWrapper>
              {/* </Fade> */}
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
                <ContentWrapper
                  style={{
                    background: mouseOver === "third" ? "#29B9E7" : "",
                  }}
                  onMouseLeave={() => {
                    onMouseNotOver();
                  }}
                  onMouseEnter={() => onMouseOver("third")}
                >
                  <AboutSubHeading
                    style={{ color: mouseOver === "third" ? "#FFF" : "" }}
                  >
                    Personalized{" "}
                    <span
                      style={{
                        color: mouseOver === "third" ? "#fff" : "#F48C06",
                      }}
                    >
                      Reports
                    </span>
                  </AboutSubHeading>
                  <AboutContent
                    style={{ color: mouseOver === "third" ? "#FFF" : "" }}
                  >
                    Get only the reports and notifications you need, when you
                    want them, and how you like them delivered.{" "}
                  </AboutContent>
                </ContentWrapper>
              {/* </Fade> */}
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
                <ContentWrapper
                  style={{
                    background: mouseOver === "fourth" ? "#24223E" : "",
                  }}
                  onMouseLeave={() => {
                    onMouseNotOver();
                  }}
                  onMouseEnter={() => onMouseOver("fourth")}
                >
                  <AboutSubHeading
                    style={{ color: mouseOver === "fourth" ? "#FFF" : "" }}
                  >
                    Popular conversation{" "}
                    <span
                      style={{
                        color: mouseOver === "fourth" ? "#fff" : "#F48C06",
                      }}
                    >
                      tools supported
                    </span>
                  </AboutSubHeading>
                  <AboutContent
                    style={{ color: mouseOver === "fourth" ? "#FFF" : "" }}
                  >
                    Teams, Slack, Email, Archives and more.
                  </AboutContent>
                </ContentWrapper>
              {/* </Fade>{" "} */}
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
                <ContentWrapper
                  style={{
                    background: mouseOver === "fifth" ? "#FFCA88" : "",
                  }}
                  onMouseLeave={() => {
                    onMouseNotOver();
                  }}
                  onMouseEnter={() => onMouseOver("fifth")}
                >
                  <AboutSubHeading
                    style={{ color: mouseOver === "fifth" ? "#FFF" : "" }}
                  >
                    Analyzer{" "}
                    <span
                      style={{
                        color: mouseOver === "fifth" ? "#fff" : "#F48C06",
                      }}
                    >
                      store
                    </span>
                  </AboutSubHeading>
                  <AboutContent
                    style={{ color: mouseOver === "fifth" ? "#FFF" : "" }}
                  >
                    Download third party analyzers from our growing online
                    store!
                  </AboutContent>
                </ContentWrapper>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={11} md={12} sm={12} xs={24}>
            <div style={{ padding: "2rem" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
                {mouseOver === "first" ? (
                  <FeatureArt1 />
                ) : mouseOver === "second" ? (
                  <FeatureArt2 />
                ) : mouseOver === "third" ? (
                  <FeatureArt3 />
                ) : mouseOver === "fourth" ? (
                  <FeatureArt4 />
                ) : mouseOver === "fifth" ? (
                  <FeatureArt5 />
                ) : (
                  <FeatureArt0 />
                )}
              {/* </Fade> */}
            </div>
          </Col>
        </Row>
        {/* </Fade> */}
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(MainBlock);
