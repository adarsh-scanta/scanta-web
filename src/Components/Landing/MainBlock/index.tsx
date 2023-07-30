"use client";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import MainArt from "../../../assets/arts/Company/MainArt";
import Image from "next/image";
import StoryArt from "../../../assets/arts/Company/StoryArt";
import {
  RightBlockContainer,
  Title,
  ContentWrapper,
  ArtWrapper,
  Content,
  BigText,
} from "./styles";
import Container from "../../../common/Container";

const MainBlock = ({ id }: any) => {
  return (
    <RightBlockContainer id="intro">
      <Container>
        {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
        <Row justify="center">
          <Image
            src="/img/icons/trupulse-logo-color.png"
            width={200}
            height={80}
            alt="logo"
          />
        </Row>
        <Row justify="center">
          <BigText>
            AI to help you understand the employee experience without running
            surveys.
          </BigText>
        </Row>
        <Row justify="center">
          <Content>
            Realtime understanding of company morale, <br />
            trending topics, and corporate culture.
          </Content>
        </Row>
        <Row justify="center">
          <video
            width="100%"
            controls
            // autoPlay
            // muted
            poster="/img/tp-video-screenshot.png"
            style={{
              margin: "4rem 0.5rem 4rem",
              borderRadius: "15px",
              maxWidth: "600px",
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
        <Row justify="center">
          <Title>TruPulse Uncovers Insights</Title>
        </Row>
        <Row justify="center">
          <Content>
            Understanding your employees increases employee engagement, improves
            retention rates, maximizes the employee experience, and helps
            cultivate a healthy corporate culture. With TruPulse you see the
            most important employee insights in realtime and automatically.
          </Content>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(MainBlock);
