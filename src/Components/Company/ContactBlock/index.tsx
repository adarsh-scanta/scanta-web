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
  MapContainer,
} from "./styles";
import Container from "../../../common/Container";
import React, { useEffect } from "react";
import { Map } from "./Map";

const ContactBlock = ({ id }: any) => {
  const location = useLocation();
  const [currentStage, setCurrentStage] = useState("contactInfo");
  const [prefill, setPrefill] = useState({
    name: "",
    email: "",
  });

  const updatePrefill = (obj: any) => {
    setPrefill(obj);
  };
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    location.hash === "#contact-us" &&
      setTimeout(function () {
        scrollTo("contact-us");
      }, 1000);
  });

  return (
    <RightBlockContainer>
      <Container>
        {/* <Fade direction="right"> */}
        <Row justify="center" id={id}>
          <ContentWrapper>
            <Title>
              <span id="contact-us" style={{ color: "#2F327D" }}>
                Contact
              </span>{" "}
              Us
            </Title>
            <Content>
              Whether you have a question about our company or our products, we
              would love to hear from you!
            </Content>
          </ContentWrapper>
        </Row>
        <Row justify="space-between">
          <Col lg={11} md={11} sm={24} xs={24}>
            <Subtitle>
              <span style={{ color: "#2F327D", fontSize: "2rem" }}>Map &</span>{" "}
              <span style={{ color: "#F48C06", fontSize: "2rem" }}>
                Address
              </span>
            </Subtitle>
            <Content style={{ textAlign: "left", fontSize: "1.2rem" }}>
              Scanta Inc
              <br />
              50 Moulton Street <br />
              San Francisco, CA 94123
            </Content>
            <MapContainer>
              <Map />
            </MapContainer>
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            <div
              style={{
                margin: "4rem auto",
                width: "95%",
                // height: "50%",
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: "49.0901px",
              }}
            >
              <Row justify="center">
                <Content
                  style={{
                    textAlign: "center",
                    margin: "2rem 1rem 0",
                    fontSize: "1rem",
                  }}
                >
                  Please submit the form and we will get back to you!
                </Content>
              </Row>
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
