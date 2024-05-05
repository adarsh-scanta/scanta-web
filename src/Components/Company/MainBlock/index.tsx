"use client";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import MainArt from "../../../assets/arts/Company/MainArt";
import StoryArt from "../../../assets/arts/Company/StoryArt";
import {
  LeftContentSection,
  Title,
  ContentWrapper,
  Content,
  CTAWrapper,
  Subtitle,
  CarouselWrapper2,
  SubText,
  Subtitle2,
  Content2,
} from "./styles";
import Container from "../../../common/Container";

const MainBlock = ({ id }: any) => {
  return (
    <LeftContentSection id="intro">
      <Container>
        <div>
          <Row justify="center" align="middle">
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <Subtitle>About Us</Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  Scanta is a San Francisco based tech company focused on
                  providing AI, AR & VR consulting and technical services. Scanta
                  has been a leader in advanced technological innovation and has
                  a worldwide talent pool of product consultants and developers
                  to support our customers. Bring Us Your Ideas, Let Us Execute
                  Your Vision
                </Content>
              </ContentWrapper>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="end">
                  <img
                    src="/img/icons/company-1.png"
                    width="80%"
                    alt="company Art"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  <img
                    src="/img/icons/company-1.png"
                    width="100%"
                    alt="company Art"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </LeftContentSection>
  );
};

export default withTranslation()(MainBlock);
