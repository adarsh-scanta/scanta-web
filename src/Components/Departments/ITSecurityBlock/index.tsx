import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import ITSecArt from "../../../assets/arts/Departments/ITSecArt";
import { RightBlockContainer,ArtWrapper, Content, Title, ContentWrapper } from "./styles";
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
    location.hash === "#IT-Security" &&
      setTimeout(function () {
        scrollTo("IT-Security");
      }, 1000);
  });
  return (
    <RightBlockContainer id="IT-Security">
      <Container>
        {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
          <Row justify="center" id={id}>
            <Col lg={12} md={12} sm={22} xs={22}>
              <ContentWrapper>
                <Title>
                  IT<span style={{ color: "#2F327D" }}> Security</span>
                </Title>
                <Content>
                  Chec detects social engineering cyber attacks like phishing,
                  baiting, scareware, pretexting and quid pro quo attacks or the
                  leaking of usernames, passwords and private information. A new
                  threat vector has opened, Chec gives IT Sec the information
                  they need to protect their organisation against malicious
                  attacks.
                </Content>
              </ContentWrapper>
            </Col>
            <Col lg={12} md={12} sm={22} xs={22}>
              <ArtWrapper>
                <ITSecArt />
              </ArtWrapper>
            </Col>
          </Row>
        {/* </Fade> */}
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(HumanResourcesBlock);
