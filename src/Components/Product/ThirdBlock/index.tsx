"use client";
import { lazy, useState } from "react";
import { Row, Col, Carousel } from "antd";
import { SplashArt3 } from "../../../assets/arts/SplashArt";
import { withTranslation } from "react-i18next";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import {
  LeftContentSection,
  Title,
  CarouselWrapper,
  CarouselLabel,
} from "./styles";

const WorkArt1 = lazy(
  () => import("../../../assets/arts/WorkplaceArt/WorkArt1")
);
const WorkArt2 = lazy(
  () => import("../../../assets/arts/WorkplaceArt/WorkArt2")
);
const WorkArt3 = lazy(
  () => import("../../../assets/arts/WorkplaceArt/WorkArt3")
);
const WorkArt4 = lazy(
  () => import("../../../assets/arts/WorkplaceArt/WorkArt4")
);
const WorkArt5 = lazy(
  () => import("../../../assets/arts/WorkplaceArt/WorkArt5")
);
const WorkArt6 = lazy(
  () => import("../../../assets/arts/WorkplaceArt/WorkArt6")
);

const AboutBlock = () => {
  return (
    <LeftContentSection>
      <Row justify="center" align="middle">
        <Title>
          TruPulse puts{" "}
          <span style={{ color: "#2E3384" }}> employee insights </span>
          at your fingertips.
        </Title>
      </Row>
      <CarouselWrapper
        autoplay
        // arrows
        // nextArrow={<RightOutlined />}
        // prevArrow={<LeftOutlined />}
        autoplaySpeed={8000}
      >
        <Row justify="center">
          <div style={{ textAlign: "center" }}>
            <WorkArt1 />
            <WorkArt4 />
            {/* <CarouselLabel>Morale</CarouselLabel> */}
          </div>
        </Row>
        <Row justify="center">
          <div style={{ textAlign: "center" }}>
            <WorkArt2 /> <WorkArt5 />
            {/* <CarouselLabel>Trending Topics</CarouselLabel> */}
          </div>
        </Row>
        <Row justify="center">
          <div style={{ textAlign: "center" }}>
            <WorkArt3 /> <WorkArt6 />
            {/* <CarouselLabel>Company Culture</CarouselLabel> */}
          </div>
        </Row>
      </CarouselWrapper>
    </LeftContentSection>
  );
};

export default withTranslation()(AboutBlock);
