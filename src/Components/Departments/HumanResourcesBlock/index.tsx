import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import HumanResArt from "../../../assets/arts/Departments/HumanResArt";
import {
  Content,
  Title,
  RightBlockContainer,
  ContentWrapper,
  ArtWrapper,
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
  location.hash === "#Human-Resource" &&
    setTimeout(function () {
      scrollTo("Human-Resource");
    }, 1000);
});

  return (
    <RightBlockContainer id="Human-Resource">
      <Container>
        {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
          <Row justify="center" id={id}>
            <Col lg={12} md={12} sm={22} xs={22}>
              <ArtWrapper>
                <HumanResArt />
              </ArtWrapper>
            </Col>
            <Col lg={12} md={12} sm={22} xs={22}>
              <ContentWrapper>
                <Title>
                  Human <span style={{ color: "#2F327D" }}>Resources</span>
                </Title>
                <Content>
                  Chec detects serious HR violations like sexual harassment,
                  inappropriate behavior, bullying, discrimination or other
                  policy violations. No more waiting for complaints or lawsuits,
                  Chec gives HR the information they need to take action early.
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
