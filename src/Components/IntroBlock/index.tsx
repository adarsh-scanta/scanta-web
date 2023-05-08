import { useState } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import IntroArt from "../../assets/arts/IntroArt";
import { Button } from "../../common/Button";
import {
  RightBlockContainer,
  Content,
  Subtitle,
  ContentWrapper,
  CTAWrapper,
  ArtWrapper, SplashIcon1,
} from "./styles";
import Container from "../../common/Container";

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
              <div style={{ position: "relative", top: "30px" }}>
                <Subtitle style={{ fontWeight: "600" }}>
                  Realtime understanding of <br />
                  company morale, trending topics, <br />
                  and corporate culture.
                </Subtitle>
                <Content>
                  TruPulse uses AI to help you
                  <br /> understand the employee experience without running
                  surveys.
                </Content>
              </div>
              <div style={{ margin: "4rem 0 0" }}>
                <Row justify="start">
                  <Col xs={24} sm={8} md={24} lg={24} xl={24}>
                    <div style={{ margin: "0.5rem 0", minWidth: "190px" }}>
                      <CTAWrapper className="pulse">
                        <Link to="/trupulse">
                          <Button
                            onClick={() => {
                              (window as { [key: string]: any })["track_load"](
                                "https://www.scanta.io/trupulse",
                                "Product Page"
                              );
                            }}
                          >
                            {t("Learn more")}
                          </Button>
                        </Link>
                      </CTAWrapper>
                    </div>
                  </Col>
                  <Col xs={24} sm={12} md={24} lg={0} xl={0}>
                    <div
                      style={{ margin: "0.5rem 0", minWidth: "190px" }}
                    ></div>
                    <CTAWrapper className="pulse">
                      <Link to="/request-demo">
                        <Button>
                          {t("Request a Demo")}
                        </Button>
                      </Link>
                    </CTAWrapper>
                  </Col>
                </Row>
              </div>
            </ContentWrapper>
          </Col>
          <Col lg={12} md={12} sm={22} xs={22}>
            <Row justify="center">
              <video
                width="100%"
                controls
                autoPlay
                poster="https://chec-front.s3.amazonaws.com/tp-video-screenshot2(1).png"
                style={{
                  margin: "4rem 0.5rem 10rem",
                  borderRadius: "15px",
                  boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                }}
              >
                <source
                  src="https://chec-front.s3.amazonaws.com/tp-video-compressed.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML video.
              </video>
            </Row>
          </Col>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
