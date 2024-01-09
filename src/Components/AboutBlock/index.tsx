import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../common/Button";
import {
  LeftContentSection,
  Title,
  ContentWrapper,
  Content,
  CTAWrapper,
  Subtitle,
  CarouselWrapper2,
  SubText,
  Subtitle2,
  Content2,
} from "./styles";
import Container from "@/common/Container";
import { useEffect, useState } from "react";

const AboutBlock = () => {
  const [wait, setWaiting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaiting(false);
    }, 500);
  }, []);
  return (
    <>
      <LeftContentSection>
        <Row justify="center">
          <Title>Our Expertise</Title>
        </Row>
        <div style={{ background: "#FFFAF5" }}>
          <Container>
            <Row justify="center" align="middle">
              <Col lg={12} md={12} sm={24} xs={24}>
                <ContentWrapper>
                  <img src="/img/icons/AI-star.svg" alt="star" />
                  <SubText>Artificial Intelligence</SubText>
                  <Subtitle>Leading the AI Revolution</Subtitle>
                  <Content style={{ fontWeight: "600" }}>
                    Empower your business with our AI expertise. From strategic
                    planning to seamless implementation, we drive innovation,
                    optimize processes, and ensure your success in the age of
                    artificial intelligence.
                  </Content>
                  <div style={{ margin: "2rem 0 " }}>
                    <CTAWrapper className="pulse">
                      <Link href="/trupulse">
                        <Button>{"Learn more"}</Button>
                      </Link>
                    </CTAWrapper>
                  </div>
                </ContentWrapper>
              </Col>
              <Col lg={12} md={12} sm={0} xs={0}>
                <div style={{ margin: "0 1rem" }}>
                  <Row justify="end">
                    <img
                      src="/img/icons/AI.png"
                      width="80%"
                      alt="trupulse is different"
                      style={{ borderRadius: "8px" }}
                    />
                  </Row>
                </div>
              </Col>
              <Col lg={0} md={0} sm={24} xs={24}>
                <div style={{ margin: "0 1rem" }}>
                  <Row justify="center">
                    <img
                      src="/img/icons/AI.png"
                      width="100%"
                      alt="trupulse is different"
                      style={{ borderRadius: "8px" }}
                    />
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row justify="center" align="middle">
              <Col lg={12} md={12} sm={0} xs={0}>
                <div style={{ margin: "0 1rem" }}>
                  <Row justify="start">
                    <img
                      src="/img/icons/VR.png"
                      width="80%"
                      alt="trupulse is different"
                      style={{ borderRadius: "8px" }}
                    />
                  </Row>
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <ContentWrapper>
                  <img src="/img/icons/VR-star.svg" alt="star" />
                  <SubText>Artificial Intelligence</SubText>
                  <Subtitle>Leading the AI Revolution</Subtitle>
                  <Content style={{ fontWeight: "600" }}>
                    Empower your business with our AI expertise. From strategic
                    planning to seamless implementation, we drive innovation,
                    optimize processes, and ensure your success in the age of
                    artificial intelligence.
                  </Content>
                  <div style={{ margin: "2rem 0 " }}>
                    <CTAWrapper className="pulse">
                      <Link href="/trupulse">
                        <Button>{"Learn more"}</Button>
                      </Link>
                    </CTAWrapper>
                  </div>
                </ContentWrapper>
              </Col>
              <Col lg={0} md={0} sm={24} xs={24}>
                <div style={{ margin: "0 1rem" }}>
                  <Row justify="start">
                    <img
                      src="/img/icons/VR.png"
                      width="100%"
                      alt="trupulse is different"
                      style={{ borderRadius: "8px" }}
                    />
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ background: "#FFFAF5", paddingBottom: "4rem" }}>
          <Container>
            <Row justify="start">
              <ContentWrapper>
                <Subtitle>Industry Accolades</Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  Read about Scanta and our founders! We have been featured in
                  Forbes 30 under 30, powered discoveries on major television
                  shows and were even winners on Shark Tank. Spend some time
                  with the links below to get to know us!
                </Content>
              </ContentWrapper>
            </Row>
            <Row justify="center" align="middle">
              {!wait && (
                <CarouselWrapper2 autoplay autoplaySpeed={60000}>
                  <div style={{ width: "100%" }}>
                    <Container>
                      <Row justify="center" align="middle">
                        <Col lg={12} md={12} sm={24} xs={24}>
                          <div style={{ margin: "0 1rem" }}>
                            <Row justify="center">
                              <img
                                src="/img/icons/express-computer.png"
                                width="100%"
                                alt="trupulse is different"
                                style={{ borderRadius: "8px" }}
                              />
                            </Row>
                          </div>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                          <ContentWrapper>
                            <Subtitle2>
                              How Augmented Reality startup Scanta is disrupting
                              communication
                            </Subtitle2>
                            <Content2 style={{ fontWeight: "600" }}>
                              The transition from text to voice memos,
                              'intelligent' AR avatars created by machine
                              learning technology will be an emerging trend in
                              communication
                            </Content2>
                          </ContentWrapper>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div style={{ width: "100%" }}>
                    <Container>
                      <Row justify="center" align="middle">
                        <Col lg={12} md={12} sm={24} xs={24}>
                          <div style={{ margin: "0 1rem" }}>
                            <Row justify="center">
                              <img
                                src="/img/icons/financial-express.png"
                                width="100%"
                                alt="trupulse is different"
                                style={{ borderRadius: "8px" }}
                              />
                            </Row>
                          </div>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                          <ContentWrapper>
                            <Subtitle2>
                              Scanta: Augmented Reality avatars with an
                              emotional quotient
                            </Subtitle2>
                            <Content2 style={{ fontWeight: "600" }}>
                              An emotionally intelligent AR assistant is what
                              this startup is building using Machine Learning
                              capabilities.
                            </Content2>
                          </ContentWrapper>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div style={{ width: "100%" }}>
                    <Container>
                      <Row justify="center" align="middle">
                        <Col lg={12} md={12} sm={24} xs={24}>
                          <div style={{ margin: "0 1rem" }}>
                            <Row justify="center">
                              <img
                                src="/img/icons/cointelegraph.png"
                                width="100%"
                                alt="trupulse is different"
                                style={{ borderRadius: "8px" }}
                              />
                            </Row>
                          </div>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                          <ContentWrapper>
                            <Subtitle2>
                              How Augmented Reality startup Scanta is disrupting
                              communication
                            </Subtitle2>
                            <Content2 style={{ fontWeight: "600" }}>
                              An emotionally intelligent AR assistant is what
                              this startup is building using Machine Learning
                              capabilities.
                            </Content2>
                          </ContentWrapper>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </CarouselWrapper2>
              )}
            </Row>
            <div style={{ margin: "5rem 0 0" }}>
              {" "}
              <Row justify="space-around">
                <Col>
                  <img
                    src="/img/icons/yourstory.png"
                    alt="brand-logo"
                    style={{ margin: "1rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src="/img/icons/yahoo.png"
                    alt="brand-logo"
                    style={{ margin: "1rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src="/img/icons/business-standard.png"
                    alt="brand-logo"
                    style={{ margin: "1rem" }}
                  />
                </Col>
                <Col>
                  <img
                    src="/img/icons/deccan.png"
                    alt="brand-logo"
                    style={{ margin: "1rem" }}
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <ContentWrapper>
              <Row justify="center">
                <Title style={{ textAlign: "center", marginBottom: "1rem" }}>
                  Entrepreneur
                </Title>
                <Content style={{ textAlign: "center", fontWeight: 600 }}>
                  Scanta was born out of curiosity with augmented reality and is
                  now striving to make avatars “intelligent” with immersive
                  possibilities.
                </Content>{" "}
              </Row>
              <Row justify="center">
                <Col span={24}>
                  <Row justify="center">
                    <img src="/img/icons/Avatar.png" alt="logo" />
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="center">
                    <Content
                      style={{
                        textAlign: "center",
                        fontWeight: 600,
                        marginBottom: "0",
                      }}
                    >
                      Candice Wu
                    </Content>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="center">
                    <Content
                      style={{
                        textAlign: "center",
                        fontWeight: 600,
                        margin: "0.5rem 0 3rem",
                      }}
                    >
                      Product Manager, Entrepreneur
                    </Content>
                  </Row>
                </Col>
              </Row>
            </ContentWrapper>
          </Container>
        </div>
      </LeftContentSection>
    </>
  );
};

export default withTranslation()(AboutBlock);
