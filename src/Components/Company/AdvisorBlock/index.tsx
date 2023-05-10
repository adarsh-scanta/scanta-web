import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { RightBlockContainer, Content, Title, ContentWrapper } from "./styles";
import Container from "../../../common/Container";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
// import { useLocation } from "react-router-dom";

const AdvisorBlock = ({ id }: any) => {
  const router = useRouter();
 
  return (
    <RightBlockContainer id="Our-Advisors">
      <Container>
        {/* <Fade direction="up"> */}
        <Row justify="center" id={id}>
          <ContentWrapper>
            <Title>
              <span style={{ color: "#2F327D" }}>Our</span> Advisors
            </Title>
          </ContentWrapper>
        </Row>
        <Row justify="center">
          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "10px 0 0" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Adam.svg"}
                alt="Adam"
                width="48%"
                style={{ position: "relative", left: "25%", bottom: "5px" }}
              />
              <Content>
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  <span style={{ color: "#F48C06" }}>Adam </span>{" "}
                  <span style={{ color: "#2F327D" }}>Moskowitz </span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>
                  SVP, Corporate Strategy at Wells Fargo
                </span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "1.3rem 0 0" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Sergej1.svg"}
                alt="sergej"
                width="50%"
                style={{ position: "relative", left: "25%" }}
              />
              <Content style={{ marginTop: "0" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.4rem",
                    position: "relative",
                    top: "-3px",
                  }}
                >
                  <span style={{ color: "#F48C06" }}>Sergej </span>
                  <span style={{ color: "#2F327D" }}>EPP</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>
                  CISO Palo Alto Networks
                </span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "1.8rem 0 0" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Gail.svg"}
                alt="sergej"
                width="50%"
                style={{
                  position: "relative",
                  left: "25%",
                  bottom: "25px",
                  marginTop: "-10px",
                }}
              />
              <Content style={{ marginTop: "0" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.4rem",
                    position: "relative",
                  }}
                >
                  <span style={{ color: "#F48C06" }}>Gail </span>
                  <span style={{ color: "#2F327D" }}>Gibbs</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>VP HR, Best Buy</span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "2.7rem 0 0" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Jack.svg"}
                alt="jack"
                width="48%"
                style={{ position: "relative", left: "25%", top: "18px" }}
              />
              <Content
                style={{ marginTop: "0", position: "relative", top: "12px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  <span style={{ color: "#F48C06" }}>Jack </span>
                  <span style={{ color: "#2F327D" }}>Sullivan</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>
                  CISO Boston Scientific
                </span>
                <br />
              </Content>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "1.5rem 0 0" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Charles.svg"}
                alt="charles"
                width="50%"
                style={{ position: "relative", left: "25%" }}
              />
              <Content style={{ marginTop: "1rem" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  <span style={{ color: "#F48C06" }}>Charles </span>{" "}
                  <span style={{ color: "#2F327D" }}>Tango</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>CISO at Sysco</span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "1.5rem 0 0" }}>
              {" "}
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Andrea.svg"}
                alt="vishal"
                width="50%"
                style={{
                  position: "relative",
                  left: "25%",
                  bottom: "25px",
                }}
              />
              <Content style={{ marginTop: "0.2rem" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  <span style={{ color: "#F48C06" }}>Andrea </span>{" "}
                  <span style={{ color: "#2F327D" }}>Pinnarelli</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>VP HR, Baker Hughes</span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div
              style={{
                padding: "0rem 0 0",
                position: "relative",
                top: "-18px",
              }}
            >
              {" "}
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Danielle.svg"}
                alt="vishal"
                width="52%"
                style={{ position: "relative", left: "25%", bottom: "25px" }}
              />
              <Content style={{ marginTop: "0.2rem" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  <span style={{ color: "#F48C06" }}>Danielle </span>{" "}
                  <span style={{ color: "#2F327D" }}>Strazzo</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>VP HR, BD</span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "2rem 0 0" }}>
              {" "}
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Vishal.svg"}
                alt="vishal"
                width="50%"
                style={{ position: "relative", left: "25%" }}
              />
              <Content style={{ marginTop: "0" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  <span style={{ color: "#F48C06" }}>Vishal </span>{" "}
                  <span style={{ color: "#2F327D" }}>Gupta</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>CTO Unisys</span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "2.5rem 0 0" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Mani.svg"}
                alt="mani"
                width="53%"
                style={{ position: "relative", left: "25%" }}
              />
              <Content style={{ position: "relative", top: "10px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  <span style={{ color: "#F48C06" }}>Mani </span>{" "}
                  <span style={{ color: "#2F327D" }}>Sundaram</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>CIO Akamai</span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>

          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "0rem 0 0", position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  position: "absolute",
                  top: "0",
                  background: "#fff",
                  zIndex: "3",
                }}
              ></div>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Nathan.svg"}
                alt="Nathan"
                width="54%"
                style={{ position: "relative", left: "25%" }}
              />
              <Content style={{ position: "relative", top: "10px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  <span style={{ color: "#F48C06" }}>Nathan </span>{" "}
                  <span style={{ color: "#2F327D" }}>Mondragon</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>
                  {" "}
                  Chief IO Psychologist, Hirevue
                </span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "0.5rem 0 0" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Richard.svg"}
                alt="Richard"
                width="53%"
                style={{ position: "relative", left: "25%" }}
              />
              <Content style={{ position: "relative", top: "10px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  <span style={{ color: "#F48C06" }}>Richard </span>{" "}
                  <span style={{ color: "#2F327D" }}>Beyer</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>
                  Former Kansas Secretary of Labor
                </span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "0.5rem 0 0" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Daniel-McCulloch.svg"}
                alt="Daniel"
                width="53%"
                style={{ position: "relative", left: "25%" }}
              />
              <Content style={{ position: "relative", top: "10px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  <span style={{ color: "#F48C06" }}>Daniel </span>{" "}
                  <span style={{ color: "#2F327D" }}>McCulloch</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>
                  VP, GM of Full Circle at EA
                </span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>

          <Col lg={8} md={8} sm={22} xs={22}>
            <div style={{ padding: "0.5rem 0 0" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/svg/Ashley-Kramer.svg"}
                alt="Ashley"
                width="53%"
                style={{ position: "relative", left: "25%" }}
              />
              <Content style={{ position: "relative", top: "10px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  <span style={{ color: "#F48C06" }}>Ashley </span>{" "}
                  <span style={{ color: "#2F327D" }}>Kramer</span>
                </span>
                <br />
                <span style={{ fontSize: "1.1rem" }}>CMO & CSO GitLab</span>
              </Content>
              {/* </Fade> */}
            </div>
          </Col>
        </Row>
        {/* </Fade> */}
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(AdvisorBlock);
