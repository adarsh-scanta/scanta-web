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
          background:
            fromWhere === "home"
              ? "url('/img/svg/footer-background.svg')"
              : "url('/img/svg/footer-background1.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <LeftContainer>
            <Row gutter={24} justify="start" align="middle">
              <Col lg={8} md={0} sm={0} xs={0}>
                <Row justify="start">
                  <Col>
                    <LogoContainer>
                      <img
                        src="/img/icons/logo14.png"
                        width="120px"
                        alt="logo"
                        height="55px"
                      />
                    </LogoContainer>
                  </Col>
                </Row>
                <Row justify="start">
                  <Col>
                    <p
                      style={{
                        color: "#B2B3CF",
                        fontSize: "1rem",
                        margin: "1rem 1rem",
                      }}
                    >
                      Scanta Inc
                      <br /> 50 Moulton Street
                      <br />
                      San Francisco, Ca 94123
                      <br />
                      Hello@scanta.io
                    </p>
                  </Col>
                </Row>
                <div style={{ margin: " 1rem" }}>
                  <a href="https://www.facebook.com/scanta.io" target="_black">
                    <img
                      src="/img/svg/fb.svg"
                      alt="fb"
                      width="48px"
                      height="48px"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/scanta"
                    target="_blank"
                  >
                    <img
                      src="https://img.icons8.com/color/48/000000/linkedin-circled--v2.png"
                      alt="linkedin"
                      width="48px"
                      height="48px"
                      style={{ position: "relative", left: "3px" }}
                    />{" "}
                  </a>
                  <a href="https://twitter.com/scanta_io" target="_blank">
                    <img
                      src="/img/svg/twitter.svg"
                      alt="twitter"
                      width="48px"
                      height="48px"
                    />
                  </a>
                </div>
              </Col>
              <Col lg={8} md={0} sm={0} xs={0}>
                <Row justify="start">
                  <Col span={24}>
                    <Row justify="start">
                      <Col xs={24} sm={24} lg={12} xl={10}>
                        <Row justify="center">
                          <Link href="/privacypolicy" target="_blank">
                            <FooterLabel>Privacy Policy</FooterLabel>
                          </Link>
                        </Row>
                      </Col>
                      <Col xs={24} sm={24} lg={12} xl={12}>
                        <Row justify="center">
                          <Link href="/termsofservice" target="_blank">
                            <FooterLabel>Terms & Conditions</FooterLabel>
                          </Link>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col lg={8} md={0} sm={0} xs={0}>
                <Row justify="start">
                  <img
                    src={"/img/icons/employeePulse.png"}
                    alt="employee Pulse logo"
                    width="250px"
                    height="40px"
                    style={{ margin: "0 0.5rem" }}
                  />
                  <p
                    style={{
                      margin: "0.5rem 1rem 1rem",
                      fontSize: "1rem",
                      color: "#b2b3cf",
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    The first newsletter that combines IO Psychology and HR
                    Tech!{" "}
                  </p>
                  <div
                    style={{
                      width: "100%",
                      margin: "0 1rem",
                      position: "relative",
                      minHeight: "190px",
                    }}
                  >
                    <Row justify="space-between">
                      <div className="newsletter-form-footer">
                        <ZapierForm action="https://hooks.zapier.com/hooks/catch/14238222/bj1czfx/">
                          {({ error, loading, success }) => {
                            success && router.push("/trupulse");
                            return (
                              <div>
                                {!success && !loading && (
                                  <div>
                                    <Row justify="center">
                                      <Col lg={24} md={24} sm={24} xs={24}>
                                        <div className="newsletter-form">
                                          <div
                                            style={{
                                              width: "100%",
                                              display: "flex",
                                              justifyContent: "center",
                                            }}
                                          >
                                            <Row justify="start">
                                              <Col
                                                lg={24}
                                                md={24}
                                                sm={24}
                                                xs={24}
                                              >
                                                <input
                                                  name="email"
                                                  required
                                                  type="email"
                                                  style={{
                                                    margin: "1rem",
                                                    minWidth: "250px",
                                                    border: "1px solid #b2b3cf",
                                                    height: "50px",
                                                    margin: "0 0 1rem 0",
                                                    background: "transparent",
                                                    borderRadius: "25px",
                                                    color: "#b2b3cf",
                                                  }}
                                                  placeholder="Your Email"
                                                />
                                              </Col>
                                              <Col
                                                lg={24}
                                                md={24}
                                                sm={24}
                                                xs={24}
                                              >
                                                <Row justify="center">
                                                  <input
                                                    type="submit"
                                                    value="submit"
                                                    style={{
                                                      width: "100px",
                                                      background: "#eb7a02",
                                                      color: "#fff",
                                                      height: "50px",
                                                      position: "relative",
                                                      paddingTop: "12px",
                                                      border: "none",
                                                      fontWeight: "bold",
                                                      borderRadius: "25px",
                                                      cursor: "pointer",
                                                    }}
                                                  />
                                                </Row>
                                              </Col>
                                            </Row>
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
                                      color: "b2b3cf",
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
                                      color: "b2b3cf",
                                    }}
                                  >
                                    Something went wrong. Please try again
                                    later.
                                  </div>
                                )}
                                {success && (
                                  <div
                                    style={{
                                      margin: "0 2rem",
                                      textAlign: "center",
                                      color: "b2b3cf",
                                    }}
                                  >
                                    Thank you for contacting us!
                                  </div>
                                )}
                              </div>
                            );
                          }}
                        </ZapierForm>
                      </div>
                    </Row>
                    <Row justify="end">
                      <p
                        style={{
                          color: "#b2b3cf",
                          fontSize: "0.9rem",
                          position: "absolute",
                          bottom: "0rem",
                        }}
                      >
                        © 2023 Scanta Inc.
                      </p>
                    </Row>
                  </div>
                </Row>
              </Col>

              <Col lg={0} md={24} sm={24} xs={24}>
                <Row justify="center">
                  <Col>
                    <LogoContainer>
                      <img
                        src="\img\icons\logo192.png"
                        width="200px"
                        alt="logo"
                        height="65px"
                      />
                    </LogoContainer>
                  </Col>
                </Row>
                <Row justify="center">
                  <img
                    src={"/img/icons/employeePulse.png"}
                    alt="employee Pulse logo"
                    width="250px"
                    height="40px"
                    style={{ margin: "1rem 0.5rem 0.5rem" }}
                  />
                  <p
                    style={{
                      margin: "0.5rem 1rem 1rem",
                      fontSize: "1rem",
                      color: "#fff",
                      textAlign: "start",
                      width: "100%",
                      fontWeight: "600",
                    }}
                  >
                    The first newsletter that combines IO Psychology and HR
                    Tech!{" "}
                  </p>
                  <div
                    style={{
                      width: "100%",
                      margin: "0 1rem",
                      position: "relative",
                      minHeight: "150px",
                    }}
                  >
                    <Row justify="center">
                      <div className="newsletter-form-footer">
                        <ZapierForm action="https://hooks.zapier.com/hooks/catch/14238222/bj1czfx/">
                          {({ error, loading, success }) => {
                            success && router.push("/trupulse");
                            return (
                              <div>
                                {!success && !loading && (
                                  <div>
                                    <Row justify="center">
                                      <Col lg={24} md={24} sm={24} xs={24}>
                                        <div className="newsletter-form">
                                          <div
                                            style={{
                                              width: "100%",
                                              display: "flex",
                                              justifyContent: "center",
                                            }}
                                          >
                                            <Row justify="center">
                                              <Col
                                                lg={24}
                                                md={24}
                                                sm={24}
                                                xs={24}
                                              >
                                                <input
                                                  name="email"
                                                  required
                                                  type="email"
                                                  style={{
                                                    margin: "1rem",
                                                    minWidth: "250px",
                                                    border: "1px solid #fff",
                                                    height: "50px",
                                                    margin: "0 0 1rem 0",
                                                    color: "b2b3cf",
                                                    background: "transparent",
                                                    borderRadius: "25px",
                                                  }}
                                                  placeholder="Your Email"
                                                />
                                              </Col>
                                              <Col
                                                lg={24}
                                                md={24}
                                                sm={24}
                                                xs={24}
                                              >
                                                <Row justify="center">
                                                  <input
                                                    type="submit"
                                                    value="submit"
                                                    style={{
                                                      width: "100%",
                                                      background: "#eb7a02",
                                                      color: "#fff",
                                                      height: "50px",
                                                      position: "relative",
                                                      paddingTop: "15px",
                                                      border: "none",
                                                      fontWeight: "bold",
                                                      borderRadius: "25px",
                                                      cursor: "pointer",
                                                    }}
                                                  />
                                                </Row>
                                              </Col>
                                            </Row>
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
                                      color: "b2b3cf",
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
                                      color: "b2b3cf",
                                    }}
                                  >
                                    Something went wrong. Please try again
                                    later.
                                  </div>
                                )}
                                {success && (
                                  <div
                                    style={{
                                      margin: "0 2rem",
                                      textAlign: "center",
                                      color: "b2b3cf",
                                    }}
                                  >
                                    Thank you for contacting us!
                                  </div>
                                )}
                              </div>
                            );
                          }}
                        </ZapierForm>
                      </div>
                    </Row>
                  </div>
                </Row>
                <Row justify="center">
                  <a href="https://www.facebook.com/scanta.io" target="_black">
                    <img
                      src="/img/svg/fb.svg"
                      width="48px"
                      height="48px"
                      alt="fb"
                      style={{ margin: "0 0.5rem" }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/scanta"
                    target="_blank"
                  >
                    <img
                      src="https://img.icons8.com/color/48/000000/linkedin-circled--v2.png"
                      alt="linkedin"
                      width="48px"
                      height="48px"
                      style={{ margin: "0 0.5rem" }}
                    />{" "}
                  </a>
                  <a href="https://twitter.com/scanta_io" target="_blank">
                    <img
                      src="/img/svg/twitter.svg"
                      alt="twitter"
                      width="48px"
                      height="48px"
                      style={{ margin: "0 0.5rem" }}
                    />
                  </a>
                </Row>

                <Row justify="center">
                  <Col span={22}>
                    <Row justify="start">
                      <Col xs={12} sm={12} lg={12} xl={10}>
                        <Row justify="center">
                          <Link href="/privacypolicy" target="_blank">
                            <FooterLabel>Privacy Policy</FooterLabel>
                          </Link>
                        </Row>
                      </Col>
                      <Col xs={12} sm={12} lg={12} xl={12}>
                        <Row justify="center">
                          <Link href="termsofservice" target="_blank">
                            <FooterLabel>Terms & Conditions</FooterLabel>
                          </Link>
                        </Row>
                      </Col>
                    </Row>

                    <Row justify="center">
                      <p
                        style={{
                          color: "#b2b3cf",
                          fontSize: "0.9rem",
                          margin: "1rem",
                        }}
                      >
                        © 2023 Scanta Inc.
                      </p>
                    </Row>
                    <div
                      style={{
                        margin: " 1rem",
                        width: "100%",
                        height: "50px",
                      }}
                    ></div>
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
          {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
        </CookieConsent>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
