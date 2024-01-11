import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
// import { useLocation } from "react-router-dom";
import StoryArt from "../../../assets/arts/Company/StoryArt";
import {
  RightBlockContainer,
  Content,
  Title,
  ContentWrapper,
  ArtWrapper,
} from "./styles";
import Container from "../../../common/Container";
import React, { useEffect } from "react";

const StoryBlock = ({ id }: any) => {
  return (
    <RightBlockContainer id="Our-Team">
      <Container>
        {/* <Fade direction="up"> */}
        <Row justify="center" id={id}>
          <ContentWrapper>
            <Title>Our Team</Title>
            <Content>
              Meet our team of passionate entrepreneurs, seasoned business
              executives and technical visionaries. Together the worldwide
              Scanta team is looking to uncover, develop and deploy solutions to
              enhance the use of AI technology.
            </Content>
          </ContentWrapper>
        </Row>
        {/* </Fade> */}
        <Row justify="center">
          <Col lg={8} md={8} sm={22} xs={22}>
            {/* <Fade direction="up"> */}
            <div style={{ padding: "1.5rem 0 0" }}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/icons/chad.png"}
                alt="chaitanya"
                width="50%"
                style={{ position: "relative", left: "25%" }}
              />
              <Content>
                <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Chaitanya Hiremath
                </span>
                <br />
                <span style={{ fontSize: "1rem" }}>CEO</span>
                <br />
                <span style={{ fontSize: "1rem" }}>Co-Founder</span>
              </Content>
              {/* </Fade> */}
            </div>
            {/* </Fade> */}
          </Col>
          <Col lg={8} md={8} sm={22} xs={22}>
            <div>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
              <img
                src={"/img/icons/john.png"}
                alt="john"
                width="50%"
                style={{ position: "relative", left: "25%" }}
              />
              <Content>
                <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  John Bloomer
                </span>
                <br />
                <span style={{ fontSize: "1rem" }}>CTO</span>
                <br />
                <span style={{ fontSize: "1rem" }}>Co-Founder</span>
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
                  src={"/img/icons/dirk.png"}
                  alt="dirk"
                  width="50%"
                  style={{ position: "relative" }}
                />
              </Row>
              <Content>
                <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Dirk Peters
                </span>
                <br />
                <span style={{ fontSize: "1rem" }}>CRO</span>
                <br />
                <span style={{ fontSize: "1rem" }}>Co-Founder</span>
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

export default withTranslation()(StoryBlock);
