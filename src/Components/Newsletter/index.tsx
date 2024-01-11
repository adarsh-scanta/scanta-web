import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../common/Button";
import ZapierForm from "react-zapier-form";
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
        <div style={{ background: "#FFFAF5" }}>
          <Container>
            <Row justify="center" align="middle">
              <Col lg={16} md={16} sm={24} xs={24}>
                <ContentWrapper>
                  <Subtitle>Keep In Touch</Subtitle>
                  <Content style={{ fontWeight: "600" }}>
                    Stay ahead of the curve! Sign up for our company updates to
                    receive exclusive insights and exciting news on the tech
                    world. Join our community of innovators today and be part of
                    the future!
                  </Content>
                </ContentWrapper>
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <div style={{ margin: "0 1rem" }}>
                  <Row justify="center">
                    <ZapierForm action="https://hooks.zapier.com/hooks/catch/14238222/bj1czfx/">
                      {({ error, loading, success }) => {
                        if (success) {
                        }
                        return (
                          <div>
                            {!success && !loading && (
                              <div>
                                <Row justify="center">
                                  <Col lg={24} md={24} sm={24} xs={24}>
                                    <div className="newsletter-form">
                                      <input
                                        name="email"
                                        required
                                        type="email"
                                        style={{
                                          minWidth: "250px",
                                          border: "1px solid #667085",
                                          margin: "1rem 0",
                                          background: "#fff",
                                          borderRadius: "8px",
                                          color: "#667085",
                                        }}
                                        placeholder="Your Email"
                                      />
                                      <div
                                        style={{
                                          width: "100%",
                                          display: "flex",
                                          justifyContent: "center",
                                        }}
                                      >
                                        <input
                                          type="submit"
                                          value="Subscribe"
                                          style={{
                                            width: "100px",
                                            background: "#eb7a02",
                                            color: "#fff",
                                            borderRadius: "8px",
                                            padding: "0.8rem",
                                            cursor: "pointer",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            )}
                            {loading && (
                              <div
                                style={{
                                  margin: "0 2rem",
                                  textAlign: "center",
                                }}
                              >
                                Loading...
                              </div>
                            )}
                            {error && (
                              <div
                                style={{
                                  margin: "0 2rem",
                                  textAlign: "center",
                                }}
                              >
                                Something went wrong. Please try again later.
                              </div>
                            )}
                            {success && (
                              <div
                                style={{
                                  margin: "0 2rem",
                                  textAlign: "center",
                                }}
                              >
                                Thank you for contacting us!
                              </div>
                            )}
                          </div>
                        );
                      }}
                    </ZapierForm>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </LeftContentSection>
    </>
  );
};

export default withTranslation()(AboutBlock);
