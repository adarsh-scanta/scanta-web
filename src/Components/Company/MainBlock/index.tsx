"use client";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import MainArt from "../../../assets/arts/Company/MainArt";
import StoryArt from "../../../assets/arts/Company/StoryArt";
import {
  RightBlockContainer,
  Title,
  ContentWrapper,
  ArtWrapper, 
  Content
} from "./styles";
import Container from "../../../common/Container";

const MainBlock = ({ id }: any) => {
  
  return (
    <RightBlockContainer id="intro">
      <Container>
        {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
        <Row justify="space-evenly" id={id}>
          <Col lg={11} md={22} sm={22} xs={22}>
            <ContentWrapper>
              <Title>
                <span style={{ color: "#2F327D" }}>About</span> Us
              </Title>
              <Content>
                Scanta is a San Francisco based company focused on providing AI solutions for conversational platforms. With deep experience in AI, machine learning, natural language processing and cybersecurity, Scanta is uniquely positioned to understand human conversation. We use these skills to develop easy to use solutions for corporations who rely on high volume conversational tools. Our flagship product TruPulse helps companies understand company morale, culture and communications.
              </Content>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={22} sm={22} xs={22}>
            <ArtWrapper>
              <StoryArt />
            </ArtWrapper>
          </Col>
        </Row>
        {/* </Fade> */}
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(MainBlock);
