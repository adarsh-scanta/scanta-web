import { Row, Col } from "antd";
import Link from "next/link";
import { withTranslation } from "react-i18next";

import {
  RightBlockContainer,
  Content,
  Subtitle,
  ContentWrapper,
  ServicesHeading,
  SubText,
  CTAWrapper,
} from "./styles";
import Container from "../../common/Container";
import { useEffect, useState, useRef } from "react";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { feedbackData } from "./feedbackData";
import { Button } from "@/common/Button";

const RightBlock = ({ t, id }: any) => {
  return (
    <RightBlockContainer>
      <div
        style={{
          paddingBottom: "0",
          marginBottom: "0",
          position: "relative",
        }}
      >
        <div style={{ background: "#FFFAF5" }}>
          <Container>
            <Row justify="center" align="middle">
              <Col lg={24} md={24} sm={24} xs={24}>
                <ContentWrapper>
                  <ServicesHeading style={{ marginBottom: "1rem" }}>
                    <span style={{ color: "#001011" }}>
                      AI Powered people analytics
                    </span>
                  </ServicesHeading>
                  <Content style={{ fontWeight: "600" }}>
                    Automatic, Real-Time & Continuous Employee Insights Without
                    Running Surveys!
                  </Content>
                  <Row justify="center">
                    <div style={{ margin: "0 auto " }}>
                      <CTAWrapper className="pulse">
                        <a href="https://www.trupulse.ai" target="_blank">
                          <button id="cta_button">Learn More</button>
                        </a>
                      </CTAWrapper>
                    </div>
                  </Row>
                  <Row justify="center">
                    <video
                      className="product-video mx-auto  mb-0  md:mb-8"
                      width="90%"
                      // height="253px "
                      controls
                      loop
                      autoPlay
                      muted
                      webkit-playsinline
                      playsInline
                      poster="/img/icons/portfolio-1.png"
                      style={{
                        width: "90%",
                        // height: '253px ',
                        margin: "2rem 0",
                        boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                      }}
                    >
                      <source
                        src="https://scanta-web-resource.s3.amazonaws.com/videos/home-1.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support HTML video.
                    </video>
                  </Row>
                </ContentWrapper>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{background:"#FAFAFA"}}>
          <Row>
            <Container>
              <Row justify="center">
                <Col>
                  <ServicesHeading>
                    <span style={{ color: "#001011" }}>
                      Our Customers & Partners
                    </span>
                  </ServicesHeading>
                </Col>
              </Row>
              <Row justify="space-around">
                <Col>
                  <img
                    src="/img/icons/nvidia.png"
                    alt="brand-logo"
                    style={{ margin: "1rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src="/img/icons/microsoft.png"
                    alt="brand-logo"
                    style={{ margin: "1rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src="/img/icons/wendys.png"
                    alt="brand-logo"
                    style={{ margin: "1rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src="/img/icons/coca-cola.png"
                    alt="brand-logo"
                    style={{ margin: "1rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src="/img/icons/dunkin-donuts.png"
                    alt="brand-logo"
                    style={{ margin: "1rem" }}
                  />
                </Col>
              </Row>
            </Container>
          </Row>
        </div>
      </div>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
