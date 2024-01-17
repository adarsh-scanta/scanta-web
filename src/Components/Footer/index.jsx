"use client";
import { useState, useEffect } from "react";
import { Row, Col, Modal, Input } from "antd";
import { withTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import Container from "../../common/Container";
import CookieConsent from "react-cookie-consent";
import { Button } from "../../common/Button";
import ZapierForm from "react-zapier-form";
import {
  FooterSection,
  FooterLabel,
  Subtitle,
  LogoContainer,
  LeftContainer,
  Title,
  Content,
} from "./styles";
import { NewsLetterModal } from "./NewsLetterModal";
const Footer = ({ t, fromWhere }) => {
  const router = useRouter();

  const [isNewsLetterModalVisible, setIsNewsLetterModalVisible] =
    useState(false);

  const closeNewsLetterModal = () => {
    setIsNewsLetterModalVisible(false);
    localStorage.setItem(
      "newsletter",
      JSON.stringify({ skipped: true, time: new Date() })
    );
  };

  const openNewsLetterModal = async () => {
    setIsNewsLetterModalVisible(true);
  };

  var OneDay = new Date().getTime() + 10 * 1000;

  useEffect(() => {
    const newsletter = localStorage.getItem("newsletter") || "";
    let newsletterSkipped = false;
    let newsletterExpiry = "";
    newsletterSkipped = JSON.parse(newsletter ? newsletter : "{}")?.skipped;
    newsletterExpiry = JSON.parse(newsletter ? newsletter : "{}")?.time;
    if (!newsletterSkipped) {
      setTimeout(() => {
        openNewsLetterModal();
      }, 10000);
    } else if (new Date(OneDay) < new Date(newsletterExpiry)) {
      setTimeout(() => {
        openNewsLetterModal();
      }, 10000);
    }
  }, []);
  return (
    <>
      <FooterSection
        style={{
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          background: "#fff",
        }}
      >
        <Container>
          <LeftContainer>
            <Row>
              <Col xs={0} sm={0} lg={24} xl={24}>
                <Row gutter={24} justify="start" align="middle">
                  <Col span={24}>
                    <div style={{ margin: "2rem 0" }}>
                      <Row justify="space-between">
                        <Col>
                          <LogoContainer>
                            <Link href="/">
                              <img
                                src="/img/icons/logo14.png"
                                width="120px"
                                alt="logo"
                                height="55px"
                              />
                            </Link>
                          </LogoContainer>
                        </Col>
                        <Col>
                          <Row justify="center">
                            <Link href="/services">
                              <p
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: 600,
                                  cursor: "pointer",
                                  margin: "1rem",
                                  color: "#334041",
                                }}
                              >
                                Services
                              </p>
                            </Link>
                            <Link href="/portfolio">
                              <p
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: 600,
                                  margin: "1rem",
                                  color: "#334041",
                                  cursor: "pointer",
                                }}
                              >
                                Portfolio
                              </p>
                            </Link>
                            <Link href="/company">
                              <p
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: 600,
                                  margin: "1rem",
                                  color: "#334041",
                                  cursor: "pointer",
                                }}
                              >
                                Company
                              </p>
                            </Link>
                            <Link href="/privacypolicy" target="_blank">
                              <p
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: 600,
                                  margin: "1rem",
                                  color: "#334041",
                                  cursor: "pointer",
                                }}
                              >
                                Privacy Policy
                              </p>
                            </Link>
                            <Link href="/termsofservice">
                              <p
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: 600,
                                  margin: "1rem",
                                  color: "#334041",
                                  cursor: "pointer",
                                }}
                              >
                                Terms & Conditions
                              </p>
                            </Link>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row gutter={24} justify="start" align="middle">
                  <Col span={24}>
                    <Row justify="space-between">
                      <Col>
                        <p
                          style={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            margin: "1rem",
                            color: "#545F60",
                          }}
                        >
                          © Copyright 2023 Scanta INC.
                        </p>
                      </Col>
                      <Col>
                        <Row justify="center">
                          <a
                            href="https://twitter.com/scanta_io"
                            target="_blank"
                          >
                            <img
                              src="/img/icons/twitter.png"
                              alt="twitter-logo"
                              style={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                margin: "1rem",
                              }}
                            />
                          </a>
                          <a
                            href="https://www.facebook.com/scanta.io"
                            target="_blank"
                          >
                            <img
                              src="/img/icons/fb.png"
                              alt="twitter-logo"
                              style={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                margin: "1rem",
                                cursor: "pointer",
                              }}
                            />
                          </a>
                          <a
                            href="https://www.linkedin.com/company/scanta/"
                            target="_blank"
                          >
                            <img
                              src="/img/icons/linkedIn.png"
                              alt="twitter-logo"
                              style={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                margin: "1rem",
                              }}
                            />
                          </a>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} lg={0} xl={0}>
                <Row gutter={24} justify="start" align="middle">
                  <Col span={24}>
                    <div style={{ margin: "2rem 0" }}>
                      <Row justify="space-between">
                        <Col>
                          <LogoContainer>
                            <Link href="/">
                              <img
                                src="/img/icons/logo14.png"
                                width="120px"
                                alt="logo"
                                height="55px"
                              />
                            </Link>
                          </LogoContainer>
                        </Col>
                        <Col>
                          <Row justify="start">
                            <Link href="/services">
                              <p
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: 600,
                                  margin: "1rem",
                                }}
                              >
                                Services
                              </p>
                            </Link>
                            <Link href="/portfolio">
                              <p
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: 600,
                                  margin: "1rem",
                                  color: "#334041",
                                }}
                              >
                                Portfolio
                              </p>
                            </Link>
                            <Link href="/company">
                              <p
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: 600,
                                  margin: "1rem",
                                  color: "#334041",
                                }}
                              >
                                Company
                              </p>
                            </Link>
                            <Link href="/privacypolicy" target="_blank">
                              <p
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: 600,
                                  margin: "1rem",
                                  color: "#334041",
                                }}
                              >
                                Privacy Policy
                              </p>
                            </Link>
                            <Link
                              href="/"
                              // href="/termsofservice"
                            >
                              <p
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: 600,
                                  margin: "1rem",
                                  color: "#334041",
                                }}
                              >
                                Terms & Conditions
                              </p>
                            </Link>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row gutter={24} justify="start" align="middle">
                  <Col span={24}>
                    <Row justify="center">
                      <Col span={24}>
                        <p
                          style={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            margin: "1rem",
                            color: "#545F60",
                            textAlign: "center",
                          }}
                        >
                          © Copyright 2023 Scanta INC.
                        </p>
                      </Col>
                      <Col span={24}>
                        <Row justify="center">
                          <a
                            href="https://twitter.com/scanta_io"
                            target="_blank"
                          >
                            <img
                              src="/img/icons/twitter.png"
                              alt="twitter-logo"
                              style={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                margin: "1rem",
                              }}
                            />
                          </a>
                          <a
                            href="https://www.facebook.com/scanta.io"
                            target="_blank"
                          >
                            <img
                              src="/img/icons/fb.png"
                              alt="twitter-logo"
                              style={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                margin: "1rem",
                              }}
                            />
                          </a>
                          <a
                            href="https://www.linkedin.com/company/scanta/"
                            target="_blank"
                          >
                            <img
                              src="/img/icons/linkedIn.png"
                              alt="twitter-logo"
                              style={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                margin: "1rem",
                              }}
                            />
                          </a>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </LeftContainer>
        </Container>
        <Modal
          open={isNewsLetterModalVisible}
          footer={null}
          onCancel={closeNewsLetterModal}
        >
          <Title>Subscribe to our newsletter</Title>
          <div
            style={{
              margin: "0rem auto",
              width: "100%",
              // height: "50%",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "49.0901px",
            }}
          >
            <Row justify="center">
              <Content
                style={{
                  textAlign: "center",
                  margin: "0rem 1rem 0",
                  fontSize: "1rem",
                }}
              >
                Sign up for the first HR Newsletter to combine IO Psychology and
                HR Tech!
              </Content>
            </Row>
            <NewsLetterModal handleClose={closeNewsLetterModal} />
          </div>
        </Modal>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="cookieConsent"
          style={{ background: "#2B373B" }}
          buttonStyle={{
            background: "#eb7b38",
            color: "#fff",
            fontSize: "13px",
            borderRadius: "20px",
          }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
        </CookieConsent>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
