
"use client";
import { Row, Col, Modal } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import {
  RightBlockContainer,
  Content,
  Subtitle,
  ContentWrapper,
  CTAWrapper,
  ArtWrapper,
  SplashIcon1,
  Title,
} from "./styles";
import Container from "../../../common/Container";
import ProductTopArt from "../../../assets/arts/ProductTopArt";

const RightBlock = ({ t, id }: any) => {

  return (
    <RightBlockContainer>
      <SplashIcon1>
        <SvgIcon src={"ellipse-blue.svg"} width="70px" height="70px" />
      </SplashIcon1>
      <Container>
        <Row justify="center" id={id}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <ContentWrapper>
              <img
                src="\img\icons\trupulse-logo-color.png"
                width="220px"
                alt="logo"
                // height="66px"
                style={{ marginTop: "10px" }}
              />
              <div style={{ position: "relative", top: "30px" }}>
                <Subtitle style={{ fontWeight: "600" }}>
                  Surveying Employees{" "}
                  <span style={{ color: "#EB7A02" }}>Without Surveys</span>
                </Subtitle>
                <Content>
                  TruPulse is an AI platform that helps you understand employees
                  without running traditional surveys{" "}
                </Content>
              </div>
              <div style={{ margin: "5rem 0 0" }}>
                <CTAWrapper className="pulse">
                  <a
                    href="https://chec-front.s3.amazonaws.com/datasheet+video+updated.pdf"
                    target="blank"
                  >
                    <Button>{t("Download Datasheet")}</Button>
                  </a>
                </CTAWrapper>
              </div>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={12} sm={22} xs={22}>
            <Row justify="center">
              <ArtWrapper>
                <ProductTopArt />
              </ArtWrapper>
            </Row>
          </Col>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
