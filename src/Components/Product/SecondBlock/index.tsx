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
                <SubText>Artificial Intelligence</SubText>
                <Subtitle>
                  Transforming Visions into Intelligent Realities
                </Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  Scanta AI specializes in cutting-edge AI development and
                  consulting services, offering technical expertise for
                  companies with predefined AI projects and strategic guidance
                  for those lacking in-house teams. With a commitment to
                  innovation, Scanta excels in diverse AI applications, such as
                  natural language processing, computer vision, and predictive
                  analytics.
                  <br />
                  <br />
                  Whether enhancing customer experiences through chatbots or
                  optimizing operations with automated insights, Scanta empowers
                  businesses to unlock the full potential of artificial
                  intelligence, providing tailored solutions that align with
                  their unique goals and challenges.
                </Content>
                <div style={{ margin: "2rem 0 " }}>
                  <CTAWrapper className="pulse">
                    <Link href="/portfolio">
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
                    src="/img/icons/services-1.png"
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
                    src="/img/icons/services-1.png"
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
                    src="/img/icons/services-2.png"
                    width="80%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <SubText>Augmented and Virtual Reality</SubText>
                <Subtitle>AR/VR Consulting & Services</Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  Scanta crafts immersive AR and VR experiences, propelling
                  businesses into a new dimension of engagement. Elevate brand
                  presence, empower training, and captivate audiences with our
                  cutting-edge solutions
                </Content>
                <div style={{ margin: "2rem 0 " }}>
                  <CTAWrapper className="pulse">
                    <Link href="/portfolio">
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
                    src="/img/icons/services-2.png"
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
                <SubText>Augmented Reality</SubText>
                <Subtitle>
                  Augmenting Experiences, Defining Digital Realities
                </Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  Scanta is a trailblazer in augmented reality (AR) consulting
                  and development, shaping immersive experiences that redefine
                  engagement. From creating AR-enhanced training modules for
                  industries like manufacturing to developing interactive retail
                  experiences through AR applications, Scanta transforms
                  concepts into captivating realities
                  <br />
                  <br />
                  Whether it's implementing AR for product visualization,
                  virtual try-ons, or educational simulations, Scanta tailors
                  its services to pioneer innovative solutions, ensuring
                  businesses harness the full potential of augmented reality to
                  captivate audiences and elevate brand experiences.
                </Content>
                <div style={{ margin: "2rem 0 " }}>
                  <CTAWrapper className="pulse">
                    <Link href="/portfolio">
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
                    src="/img/icons/services-3.png"
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
                    src="/img/icons/services-3.png"
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
                    src="/img/icons/services-4.png"
                    width="80%"
                    alt="trupulse is different"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <SubText>Virtual Reality</SubText>
                <Subtitle>
                  Revolutionizing Realities, Inspiring Innovation
                </Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  Scanta excels in virtual reality (VR) consulting and
                  development services. From immersive VR training simulations
                  for workforce skill enhancement to creating virtual showrooms
                  for e-commerce platforms, Scanta pioneers groundbreaking
                  projects.
                  <br />
                  <br />
                  Whether it's architectural visualization, VR-based therapy
                  applications, or interactive educational environments, Scanta
                  crafts tailored VR solutions. Elevating experiences across
                  industries, Scanta ensures businesses leverage the
                  transformative power of virtual reality to stay at the
                  forefront of technological innovation.
                </Content>
                <div style={{ margin: "2rem 0 " }}>
                  <CTAWrapper className="pulse">
                    <Link href="/portfolio">
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
                    src="/img/icons/services-4.png"
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
