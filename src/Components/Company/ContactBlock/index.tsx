"use client";
import { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import {
  RightBlockContainer,
  Content,
  Title,
  Subtitle,
  ContentWrapper,
} from "./styles";
import Container from "../../../common/Container";
import React, { useEffect } from "react";
import { Map } from "./Map";

const ContactBlock = ({ id }: any) => {
  // const location = useLocation();
  const [currentStage, setCurrentStage] = useState("contactInfo");
  const [prefill, setPrefill] = useState({
    name: "",
    email: "",
  });

  const updatePrefill = (obj: any) => {
    setPrefill(obj);
  };
  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  // useEffect(() => {
  //   location.hash === "#contact-us" &&
  //     setTimeout(function () {
  //       scrollTo("contact-us");
  //     }, 1000);
  // });

  return (
    <RightBlockContainer>
      <Container>
        {/* <Fade direction="right"> */}
        <Row justify="center" id={id}>
          <ContentWrapper></ContentWrapper>
        </Row>
        <Row justify="space-around">
          <Col lg={11} md={11} sm={24} xs={24}>
            <Subtitle>Contact Us</Subtitle>
            <Content style={{ textAlign: "left", margin: "0" }}>
              We would love to hear from you!
            </Content>
            <img
              src="/img/icons/Contact.png"
              alt="contactArt"
              style={{ margin: "1rem" }}
            />
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            <div
              style={{
                margin: "0 auto",
              }}
            >
              <ContactForm />
            </div>
          </Col>
        </Row>
        {/* </Fade> */}
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(ContactBlock);
