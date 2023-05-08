import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  Title,
  ContentWrapper,
} from "./styles";
import Container from "../../../common/Container";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TeamBlock = ({ id }: any) => {
  const location = useLocation();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  
  return (
    <RightBlockContainer id="Our-Team">
      <Container>
        {/* <Fade direction="up"> */}
        <Row justify="center" id={id}>
          <ContentWrapper>
            <Title>
              <span style={{ color: "#2F327D" }}>Our</span> Team
            </Title>
            <Content>
              Meet our team of passionate entrepreneurs, seasoned business
              executives and technical visionaries. Together the worldwide
              Scanta team is looking to uncover, develop and deploy solutions to
              enhance the use of AI technology.
            </Content>
          </ContentWrapper>
        </Row>
        {/* </Fade> */}
        <Row justify="space-between">
          <Col lg={8} md={8} sm={22} xs={22}>
            {/* <Fade direction="up"> */}
            <div style={{ padding: "1.5rem 0 0" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
                <img
                  src={"/img/svg/chad.svg"}
                  alt="chaitanya"
                  width="50%"
                  style={{ position: "relative", left: "25%" }}
                />
                <Content>
                  <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                    <span style={{ color: "#F48C06" }}>Chaitanya</span>{" "}
                    <span style={{ color: "#2F327D" }}>Hiremath</span>
                  </span>
                  <br />
                  <span style={{ fontSize: "1.1rem" }}>CEO</span>
                </Content>
              {/* </Fade> */}
            </div>
            {/* </Fade> */}
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
                <img
                  src={"/img/svg/john.svg"}
                  alt="john"
                  width="50%"
                  style={{ position: "relative", left: "25%" }}
                />
                <Content>
                  <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                    <span style={{ color: "#F48C06" }}>John</span>{" "}
                    <span style={{ color: "#2F327D" }}>Bloomer</span>
                  </span>
                  <br />
                  <span style={{ fontSize: "1.1rem" }}>CTO</span>
                  <br />
                </Content>
              {/* </Fade> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div>
              {" "}
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
                <Row justify="center">
                  <img
                    src={"/img/svg/dirk.svg"}
                    alt="dirk"
                    width="50%"
                    style={{ position: "relative" }}
                  />
                </Row>
                <Content>
                  <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                    <span style={{ color: "#F48C06" }}>Dirk</span>{" "}
                    <span style={{ color: "#2F327D" }}>Peters</span>
                  </span>
                  <br />
                  <span style={{ fontSize: "1.1rem" }}>CRO</span>
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

export default withTranslation()(TeamBlock);
