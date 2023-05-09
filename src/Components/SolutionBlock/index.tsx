"use client";
import React, { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { SplashArt4 } from "../../assets/arts/SplashArt";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  LeftContentSection,
  Content,
  ContentWrapper, 
  AboutHeading,
  AboutSubHeading,
  AboutContent,
} from "./styles";

const SolutionBlock = ({ t, from }: any) => {
  const [mouseOver, setMouseOver] = useState("");
  const onMouseOver = (sectionHeading: any) => {
    setMouseOver(sectionHeading);
  };
  const onMouseNotOver = () => {
    setMouseOver("");
  };

  return (
    <LeftContentSection>
      {from === "home" ? (
        <Row justify="space-evenly" align="middle">
          <Col lg={11} md={11} sm={12} xs={24}>
            {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
            <SvgIcon
              src={
                mouseOver === "Anonymous"
                  ? "workplace4.svg"
                  : mouseOver === "Private"
                  ? "workplace5.svg"
                  : mouseOver === "Secure"
                  ? "workplace6.svg"
                  : "workplace4.svg"
              }
              width="80%"
              height="80%"
            />
            {/* </Fade> */}
          </Col>
          <Col lg={12} md={12} sm={12} xs={24}>
            <ContentWrapper>
              <AboutHeading>
                <span style={{ color: "#430568" }}>Privacy & Security</span> by
                Design
              </AboutHeading>
              <Content>
                <ContentWrapper
                  style={{
                    background: mouseOver === "Anonymous" ? "#EB7A02" : "",
                  }}
                  onMouseLeave={() => {
                    onMouseNotOver();
                  }}
                  onMouseEnter={() => onMouseOver("Anonymous")}
                >
                  <AboutSubHeading
                    style={{
                      color: mouseOver === "Anonymous" ? "#FFF" : "",
                    }}
                  >
                    {"Anonymous"}
                  </AboutSubHeading>
                  <AboutContent
                    style={{
                      color: mouseOver === "Anonymous" ? "#FFF" : "",
                    }}
                  >
                    Individual Identities Masked
                    <br />
                    No Individual Tracking
                  </AboutContent>
                </ContentWrapper>
                <ContentWrapper
                  style={{
                    background: mouseOver === "Private" ? "#5B72EE" : "",
                  }}
                  onMouseLeave={() => {
                    onMouseNotOver();
                  }}
                  onMouseEnter={() => onMouseOver("Private")}
                >
                  <AboutSubHeading
                    style={{ color: mouseOver === "Private" ? "#FFF" : "" }}
                  >
                    {"Private"}
                  </AboutSubHeading>
                  <AboutContent
                    style={{ color: mouseOver === "Private" ? "#FFF" : "" }}
                  >
                    Organizational or Group Level Insights
                    <br />
                    Independent Customer Instances
                  </AboutContent>
                </ContentWrapper>
                <ContentWrapper
                  style={{
                    background: mouseOver === "Secure" ? "#29B9E7" : "",
                  }}
                  onMouseLeave={() => {
                    onMouseNotOver();
                  }}
                  onMouseEnter={() => onMouseOver("Secure")}
                >
                  <AboutSubHeading
                    style={{ color: mouseOver === "Secure" ? "#FFF" : "" }}
                  >
                    {"Secure"}
                  </AboutSubHeading>
                  <AboutContent
                    style={{ color: mouseOver === "Secure" ? "#FFF" : "" }}
                  >
                    Leading Cloud Security
                    <br />
                    State of the Art Encryption Technology
                  </AboutContent>
                </ContentWrapper>
              </Content>
            </ContentWrapper>
          </Col>
        </Row>
      ) : (
        <Row justify="space-evenly" align="middle">
          <Col lg={12} md={12} sm={12} xs={24}>
            <ContentWrapper>
              <AboutHeading>
                <span style={{ color: "#430568" }}>Privacy & Security</span> by
                Design
              </AboutHeading>
              <Content>
                <ContentWrapper
                  style={{
                    background: mouseOver === "Anonymous" ? "#EB7A02" : "",
                  }}
                  onMouseLeave={() => {
                    onMouseNotOver();
                  }}
                  onMouseEnter={() => onMouseOver("Anonymous")}
                >
                  <AboutSubHeading
                    style={{
                      color: mouseOver === "Anonymous" ? "#FFF" : "",
                    }}
                  >
                    Secure
                  </AboutSubHeading>
                  <AboutContent
                    style={{
                      color: mouseOver === "Anonymous" ? "#FFF" : "",
                    }}
                  >
                    Leading cloud security to protect your data
                    <br />
                    Transactional security on each interaction
                    <br />
                    Independent instances to keep your data private
                  </AboutContent>
                </ContentWrapper>
                <ContentWrapper
                  style={{
                    background: mouseOver === "Private" ? "#5B72EE" : "",
                  }}
                  onMouseLeave={() => {
                    onMouseNotOver();
                  }}
                  onMouseEnter={() => onMouseOver("Private")}
                >
                  <AboutSubHeading
                    style={{ color: mouseOver === "Private" ? "#FFF" : "" }}
                  >
                    Anonymous
                  </AboutSubHeading>
                  <AboutContent
                    style={{ color: mouseOver === "Private" ? "#FFF" : "" }}
                  >
                    Analyse Groups
                    <br />
                    Look for Insights
                    <br />
                    Individual Identities Masked
                  </AboutContent>
                </ContentWrapper>
                <ContentWrapper
                  style={{
                    background: mouseOver === "Secure" ? "#29B9E7" : "",
                  }}
                  onMouseLeave={() => {
                    onMouseNotOver();
                  }}
                  onMouseEnter={() => onMouseOver("Secure")}
                >
                  <AboutSubHeading
                    style={{ color: mouseOver === "Secure" ? "#FFF" : "" }}
                  >
                    Customizable
                  </AboutSubHeading>
                  <AboutContent
                    style={{ color: mouseOver === "Secure" ? "#FFF" : "" }}
                  >
                    Align with your privacy policy
                    <br />
                    Analyse the demographics that are important to you
                    <br />
                    Measure the culture you want to protect
                  </AboutContent>
                </ContentWrapper>
              </Content>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <Row justify="center">
              <SvgIcon
                src={
                  mouseOver === "Anonymous"
                    ? "workplace4.svg"
                    : mouseOver === "Private"
                    ? "workplace5.svg"
                    : mouseOver === "Secure"
                    ? "workplace6.svg"
                    : "workplace4.svg"
                }
                width="80%"
                height="80%"
              />
            </Row>
          </Col>
        </Row>
      )}
    </LeftContentSection>
  );
};

export default withTranslation()(SolutionBlock);
