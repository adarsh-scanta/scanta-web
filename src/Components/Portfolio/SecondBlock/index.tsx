"use client";
import { Row, Col } from "antd";
import Link from "next/link";
import { Button } from "../../../common/Button";
import { withTranslation } from "react-i18next";
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
import styles from "./index.module.css";
import Container from "../../../common/Container";

const MainBlock = ({ id, t }: any) => {
  return (
    <LeftContentSection id="intro">
      <div style={{ background: "#FFFAF5" }}>
        <Container>
          <Row justify="center" align="middle">
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <SubText>Trupulse</SubText>
                <Subtitle>AI Powered people analytics</Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  TruPulse is an AI platform that automatically provides
                  insights on employee morale, engagement, retention, trending
                  workplace topics and company culture. TruPulse takes the work
                  out of understanding the employee experience.
                </Content>
                <div style={{ margin: "2rem 0 " }}>
                  <CTAWrapper className="pulse">
                    <Link href="/trupulse">
                      <Button>{"Learn more"}</Button>
                    </Link>
                  </CTAWrapper>
                </div>
              </ContentWrapper>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="end">
                  <img
                    src="/img/icons/portfolio-1.png"
                    width="80%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="center">
                  <img
                    src="/img/icons/portfolio-1.png"
                    width="100%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row justify="center" align="middle">
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  <img
                    src="/img/icons/portfolio-2.png"
                    width="80%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <SubText>VA Shield</SubText>
                <Subtitle>AI Cyber Security Against Malicious Attacks</Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  VA Shield analyzes requests, responses and conversations to
                  and from conversational systems to provide a new layer of AI
                  supervision. Customizable policies empower companies to allow,
                  prevent or monitor conversations to block malicious use and to
                  prevent compromised systems from releasing confidential, false
                  or improper information.
                </Content>
                <div style={{ margin: "2rem 0 " }}>
                  <CTAWrapper className="pulse">
                    <Link href="/trupulse">
                      <Button>{"Learn more"}</Button>
                    </Link>
                  </CTAWrapper>
                </div>
              </ContentWrapper>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  <img
                    src="/img/icons/portfolio-2.png"
                    width="100%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: "#FFFAF5" }}>
        <Container>
          <Row justify="center" align="middle">
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <SubText>The Discovery Channel</SubText>
                <Subtitle>Discovery Channel, Expedition Unknown</Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  Josh Gates is on a nation-wide treasure hunt to solve a
                  mystery no one has cracked for 40 years: The Secret. The
                  Scanta team used AR technology to help the Expedition Unknown
                  uncover long lost secrets.
                </Content>
                <div style={{ margin: "2rem 0 " }}>
                  <CTAWrapper className="pulse">
                    <Link href="/trupulse">
                      <Button>{"Learn more"}</Button>
                    </Link>
                  </CTAWrapper>
                </div>
              </ContentWrapper>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="end">
                  <img
                    src="/img/icons/portfolio-3.png"
                    width="80%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="center">
                  <img
                    src="/img/icons/portfolio-3.png"
                    width="100%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row justify="center" align="middle">
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  <img
                    src="/img/icons/portfolio-4.png"
                    width="80%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <SubText>Pikamoji</SubText>
                <Subtitle>
                  AR Emoji App that Merges Reality with Imagination
                </Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  Pikamoji is an immersive app that allows users to engage with
                  a variety of augmented reality avatars right at their
                  fingertips. All of the Pikamojis are a manifestation of moods,
                  emotions and themes used to communicate with one another. Use
                  these unique avatars to explore the world of augmented reality
                  with Pikamojis.
                </Content>
                <div style={{ margin: "2rem 0 " }}>
                  <CTAWrapper className="pulse">
                    <Link href="/trupulse">
                      <Button>{"Learn more"}</Button>
                    </Link>
                  </CTAWrapper>
                </div>
              </ContentWrapper>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  <img
                    src="/img/icons/portfolio-4.png"
                    width="100%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: "#FFFAF5" }}>
        <Container>
          <Row justify="center" align="middle">
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <SubText>AR Dunk</SubText>
                <Subtitle>Next Generation AR Basketball</Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  AR Dunk is an offbeat augmented reality basketball game that
                  you can play anywhere, anytime! AR Dunk comes with a flying
                  backboard. Virtually anchor the flying backboard anywhere you
                  want. Aim the ball and SCORE! Explore new levels and unleash
                  the magical world of AR Dunk!
                </Content>
                <div style={{ margin: "2rem 0 " }}>
                  <CTAWrapper className="pulse">
                    <Link href="/trupulse">
                      <Button>{"Learn more"}</Button>
                    </Link>
                  </CTAWrapper>
                </div>
              </ContentWrapper>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="end">
                  <img
                    src="/img/icons/portfolio-5.png"
                    width="80%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="center">
                  <img
                    src="/img/icons/portfolio-5.png"
                    width="100%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row justify="center" align="middle">
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  <img
                    src="/img/icons/portfolio-6.png"
                    width="80%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <SubText>Polygon</SubText>
                <Subtitle>Shoot the AR Goons!</Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  Polygoons is an Augmented Reality first person shooter game
                  where you can pick your arsenal and play it right in your own
                  backyard. Scanta’s cutting edge AR technology enables you to
                  interact with Polygoons in the virtual world.
                </Content>
                <div style={{ margin: "2rem 0 " }}>
                  <CTAWrapper className="pulse">
                    <Link href="/trupulse">
                      <Button>{"Learn more"}</Button>
                    </Link>
                  </CTAWrapper>
                </div>
              </ContentWrapper>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  <img
                    src="/img/icons/portfolio-6.png"
                    width="100%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LeftContentSection>
  );
};

export default withTranslation()(MainBlock);
