import { useState, useEffect } from "react";
import { Row, Col, Modal, Input } from "antd";
import { withTranslation } from "react-i18next";
import { Link, history, useHistory } from "react-router-dom";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import ZapierForm from "react-zapier-form";
import {
  FooterSection,
  FooterLabel,
  Subtitle,
  LogoContainer,
  LeftContainer,
} from "./styles";
const Footer = ({ t, fromWhere }) => {
  const history = useHistory();

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
                          <a
                            href="https://chec-front.s3.amazonaws.com/Scanta+Privacy+Policy_Revised_2022.07.06_Clean.pdf"
                            target="_blank"
                          >
                            <FooterLabel>Privacy Policy</FooterLabel>
                          </a>
                        </Row>
                      </Col>
                      <Col xs={24} sm={24} lg={12} xl={12}>
                        <Row justify="center">
                          <a
                            href="https://chec-front.s3.amazonaws.com/TruPulse+End+User+License+Agreement.pdf"
                            target="_blank"
                          >
                            <FooterLabel>Terms & Conditions</FooterLabel>
                          </a>
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
                            success && history.push("/trupulse");
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
                                                    border: "1px solid #b2b3cf",
                                                    height: "50px",
                                                    margin: "0 0 1rem 0",
                                                    color: "b2b3cf",
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
                      width="48px"
                      height="48px"
                      alt="fb"
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
                <Row justify="center">
                  <Col span={22}>
                    <Row justify="start">
                      <Col xs={24} sm={24} lg={12} xl={10}>
                        <Row justify="start">
                          <a
                            href="https://chec-front.s3.amazonaws.com/Scanta+Privacy+Policy_Revised_2022.07.06_Clean.pdf"
                            target="_blank"
                          >
                            <FooterLabel style={{ marginTop: "1rem" }}>
                              Privacy Policy
                            </FooterLabel>
                          </a>
                        </Row>
                      </Col>
                      <Col xs={24} sm={24} lg={12} xl={12}>
                        <Row justify="start">
                          <a
                            href="https://chec-front.s3.amazonaws.com/TruPulse+End+User+License+Agreement.pdf"
                            target="_blank"
                          >
                            <FooterLabel
                              style={{
                                marginTop: "0rem",
                                marginBottom: "1rem",
                              }}
                            >
                              Terms & Conditions
                            </FooterLabel>
                          </a>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
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
                            success && history.push("/trupulse");
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
                                                    border: "1px solid #b2b3cf",
                                                    height: "50px",
                                                    margin: "0 0 1rem 0",
                                                    color: "b2b3cf",
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
                    <Row justify="center">
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
            </Row>
          </LeftContainer>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
