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
import { useInView } from "react-hook-inview";

const MainBlock = ({ id, t }: any) => {
  const [firstRef, firstVisible] = useInView({
    threshold: 1,
  });
  const [secondRef, secondVisible] = useInView({
    threshold: 1,
  });
  const [thirdRef, thirdVisible] = useInView({
    threshold: 1,
  });
  const [fifthRef, fifthVisible] = useInView({
    threshold: 1,
  });
  const [sixthRef, sixthVisible] = useInView({
    threshold: 1,
  });

  return (
    <LeftContentSection id="intro">
      <div style={{ background: "#FFFAF5", padding: "2rem 0" }}>
        <Container>
          <Row ref={firstRef} justify="center" align="middle">
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
              </ContentWrapper>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="end">
                  {/* <img
                    src="/img/icons/portfolio-1.png"
                    width="80%"
                    alt="portfolio Art"
                    style={{ borderRadius: "8px" }}
                  /> */}
                  {firstVisible ? (
                    <div className="video_poster">
                      <video
                        className="product-video mx-auto mb-0  md:mb-8"
                        width="450px"
                        // height="253px"
                        controls
                        loop
                        autoPlay
                        webkit-playsinline
                        playsInline
                        muted
                        poster="/img/icons/portfolio-1.png"
                        style={{
                          width: "450px",
                          // height: '253px ',
                          borderRadius: "8px",
                          // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                        }}
                      >
                        {
                          <source
                            src="https://scanta-web-resource.s3.amazonaws.com/videos/morale-2.mp4"
                            type="video/mp4"
                          />
                        }
                        Your browser does not support HTML video.
                      </video>
                    </div>
                  ) : (
                    <img
                      src="/img/icons/portfolio-1.png"
                      className="product-image mx-auto my-8 mb-0  md:mb-8"
                      alt=""
                      style={{
                        width: "450px",
                        // height: '253px ',
                        // margin: "auto",
                        borderRadius: "8px",
                        // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                      }}
                    />
                  )}
                </Row>
              </div>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="center">
                  <img
                    src="/img/icons/portfolio-1.png"
                    width="100%"
                    alt="portfolio Art"
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
          <Row ref={secondRef} justify="center" align="middle">
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  {/* <img
                    src="/img/icons/portfolio-2.png"
                    width="80%"
                    alt="portfolio Art"
                    style={{ borderRadius: "8px" }}
                  /> */}
                  {secondVisible ? (
                    <div className="video_poster">
                      <video
                        className="product-video mx-auto mb-0  md:mb-8"
                        width="450px"
                        // height="253px"
                        controls
                        loop
                        autoPlay
                        webkit-playsinline
                        playsInline
                        muted
                        poster="/img/icons/portfolio-2.png"
                        style={{
                          width: "450px",
                          // height: '253px ',
                          borderRadius: "8px",
                          // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                        }}
                      >
                        {
                          <source
                            src="https://scanta-web-resource.s3.amazonaws.com/videos/va-shield.mp4"
                            type="video/mp4"
                          />
                        }
                        Your browser does not support HTML video.
                      </video>
                    </div>
                  ) : (
                    <img
                      src="/img/icons/portfolio-2.png"
                      className="product-image mx-auto my-8 mb-0  md:mb-8"
                      alt=""
                      style={{
                        width: "450px",
                        // height: '253px ',
                        // margin: "auto",
                        borderRadius: "8px",
                        // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                      }}
                    />
                  )}
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
              </ContentWrapper>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  <img
                    src="/img/icons/portfolio-2.png"
                    width="100%"
                    alt="portfolio Art"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: "#FFFAF5", padding: "2rem 0" }}>
        <Container>
          <Row ref={thirdRef} justify="center" align="middle">
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <SubText>The Discovery Channel</SubText>
                <Subtitle>Discovery Channel, Expedition Unknown</Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  Josh Gates is on a nation-wide treasure hunt to solve a
                  mystery no one has cracked for 40 years: The Secret. The
                  Scanta team used AR technology to help the Expedition Unknown
                  team uncover long lost secrets.
                </Content>
              </ContentWrapper>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="end">
                  {/* <img
                    src="/img/icons/portfolio-3.png"
                    width="80%"
                    alt="portfolio Art"
                    style={{ borderRadius: "8px" }}
                  /> */}
                  {thirdVisible ? (
                    <div className="video_poster">
                      <video
                        className="product-video mx-auto mb-0  md:mb-8"
                        width="450px"
                        // height="253px"
                        controls
                        loop
                        autoPlay
                        webkit-playsinline
                        playsInline
                        muted
                        poster="/img/icons/portfolio-3.png"
                        style={{
                          width: "450px",
                          // height: '253px ',
                          borderRadius: "8px",
                          // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                        }}
                      >
                        {
                          <source
                            src="https://scanta-web-resource.s3.amazonaws.com/videos/intro-video-scanta.mp4"
                            type="video/mp4"
                          />
                        }
                        Your browser does not support HTML video.
                      </video>
                    </div>
                  ) : (
                    <img
                      src="/img/icons/portfolio-3.png"
                      className="product-image mx-auto my-8 mb-0  md:mb-8"
                      alt=""
                      style={{
                        width: "450px",
                        // height: '253px ',
                        // margin: "auto",
                        borderRadius: "8px",
                        // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                      }}
                    />
                  )}
                </Row>
              </div>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="center">
                  <img
                    src="/img/icons/portfolio-3.png"
                    width="100%"
                    alt="portfolio Art"
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
                    alt="portfolio Art"
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
              </ContentWrapper>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  <img
                    src="/img/icons/portfolio-4.png"
                    width="100%"
                    alt="portfolio Art"
                    style={{ borderRadius: "8px" }}
                  />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: "#FFFAF5", padding: "2rem 0" }}>
        <Container>
          <Row ref={fifthRef} justify="center" align="middle">
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
              </ContentWrapper>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="end">
                   {fifthVisible ? (
                    <div className="video_poster">
                      <video
                        className="product-video mx-auto mb-0  md:mb-8"
                        width="450px"
                        // height="253px"
                        controls
                        loop
                        autoPlay
                        webkit-playsinline
                        playsInline
                        muted
                        poster="/img/icons/portfolio-5.png"
                        style={{
                          width: "450px",
                          // height: '253px ',
                          borderRadius: "8px",
                          // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                        }}
                      >
                        {
                          <source
                            src="https://scanta-web-resource.s3.amazonaws.com/videos/ar-dunk-ios-game.mp4"
                            type="video/mp4"
                          />
                        }
                        Your browser does not support HTML video.
                      </video>
                    </div>
                  ) : (
                    <img
                      src="/img/icons/portfolio-5.png"
                      className="product-image mx-auto my-8 mb-0  md:mb-8"
                      alt=""
                      style={{
                        width: "450px",
                        // height: '253px ',
                        // margin: "auto",
                        borderRadius: "8px",
                        // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                      }}
                    />
                  )}
                </Row>
              </div>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="center">
                  {/* <img
                    src="/img/icons/portfolio-5.png"
                    width="100%"
                    alt="portfolio Art"
                    style={{ borderRadius: "8px" }}
                  /> */}
                  {fifthVisible ? (
                    <div className="video_poster">
                      <video
                        className="product-video mx-auto mb-0  md:mb-8"
                        width="450px"
                        // height="253px"
                        controls
                        loop
                        autoPlay
                        webkit-playsinline
                        playsInline
                        muted
                        poster="/img/icons/portfolio-5.png"
                        style={{
                          width: "450px",
                          // height: '253px ',
                          borderRadius: "8px",
                          // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                        }}
                      >
                        {
                          <source
                            src="https://scanta-web-resource.s3.amazonaws.com/videos/ar-dunk-ios-game.mp4"
                            type="video/mp4"
                          />
                        }
                        Your browser does not support HTML video.
                      </video>
                    </div>
                  ) : (
                    <img
                      src="/img/icons/portfolio-5.png"
                      className="product-image mx-auto my-8 mb-0  md:mb-8"
                      alt=""
                      style={{
                        width: "450px",
                        // height: '253px ',
                        // margin: "auto",
                        borderRadius: "8px",
                        // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                      }}
                    />
                  )}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row ref={sixthRef} justify="center" align="middle">
            <Col lg={12} md={12} sm={0} xs={0}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  {/* <img
                    src="/img/icons/portfolio-6.png"
                    width="80%"
                    alt="portfolio Art"
                    style={{ borderRadius: "8px" }}
                  /> */}
                  {sixthVisible ? (
                    <div className="video_poster">
                      <video
                        className="product-video mx-auto mb-0  md:mb-8"
                        width="450px"
                        // height="253px"
                        controls
                        loop
                        autoPlay
                        webkit-playsinline
                        playsInline
                        muted
                        poster="/img/icons/portfolio-6.png"
                        style={{
                          width: "450px",
                          // height: '253px ',
                          borderRadius: "8px",
                          // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                        }}
                      >
                        {
                          <source
                            src="https://scanta-web-resource.s3.amazonaws.com/videos/Polygoons++game+trailer.mp4"
                            type="video/mp4"
                          />
                        }
                        Your browser does not support HTML video.
                      </video>
                    </div>
                  ) : (
                    <img
                      src="/img/icons/portfolio-6.png"
                      className="product-image mx-auto my-8 mb-0  md:mb-8"
                      alt=""
                      style={{
                        width: "450px",
                        // height: '253px ',
                        // margin: "auto",
                        borderRadius: "8px",
                        // boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                      }}
                    />
                  )}
                </Row>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <SubText>Polygoons</SubText>
                <Subtitle>Shoot the AR Goons!</Subtitle>
                <Content style={{ fontWeight: "600" }}>
                  Polygoons is an Augmented Reality first person shooter game
                  where you can pick your arsenal and play it right in your own
                  backyard. Scanta’s cutting edge AR technology enables you to
                  interact with Polygoons in the virtual world.
                </Content>
                {/* <div style={{ margin: "2rem 0 " }}>
                  <CTAWrapper className="pulse">
                    <Link href="/trupulse">
                      <Button>{"Learn more"}</Button>
                    </Link>
                  </CTAWrapper>
                </div> */}
              </ContentWrapper>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div style={{ margin: "0 1rem" }}>
                <Row justify="start">
                  <img
                    src="/img/icons/portfolio-6.png"
                    width="100%"
                    alt="portfolio Art"
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
