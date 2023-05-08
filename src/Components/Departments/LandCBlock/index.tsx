import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import LandCArt from "../../../assets/arts/Departments/LandCArt";
import {
  Content,
  ArtWrapper,
  Title,
  RightBlockContainer,
  ContentWrapper,
} from "./styles";
import Container from "../../../common/Container";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HumanResourcesBlock = ({ id }: any) => {
  const location = useLocation();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    location.hash === "#LandC" &&
      setTimeout(function () {
        scrollTo("LandC");
      }, 1000);
  });

  return (
    <RightBlockContainer id="LandC">
      <Container>
        {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
          <Row justify="center" id={id}>
            <Col lg={12} md={12} sm={22} xs={22}>
              <ArtWrapper>
                <LandCArt />
              </ArtWrapper>
            </Col>
            <Col lg={12} md={12} sm={22} xs={22}>
              <ContentWrapper>
                <Title>
                  Legal <span style={{ color: "#2F327D" }}>& Compliance</span>
                </Title>
                <Content>
                  Chec identifies a host of potential legal concerns including
                  regulatory compliance, privacy law compliance, insider
                  trading, employee misconduct and data protection. Chec gives
                  the legal department the information they need to help
                  mitigate corporate risk.
                </Content>
              </ContentWrapper>
            </Col>
          </Row>
        {/* </Fade> */}
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(HumanResourcesBlock);
