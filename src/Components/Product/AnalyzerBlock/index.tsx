import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import ServiceCard from "../../ServiceCard";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Button } from "../../../common/Button";
import { RightBlockContainer, Content, Title, CTAWrapper } from "./styles";
import Container from "../../../common/Container";
import React from "react";

const cards = [
  {
    cardHeading: "Human Resources",
    cardContent: "Policy Violations & Behavior Issues",
    cardColor: "#5B72EE",
    icon2: "service1.svg",
    icon1: "service5.svg",
  },
  {
    cardHeading: "Executive Management",
    cardContent: "Corporate Morale & Trending Topics",
    cardColor: "#F46706",
    icon2: "service2.svg",
    icon1: "service6.svg",
  },
  {
    cardHeading: "IT Security",
    cardContent: "Social Engineering & Cyber Attacks",
    cardColor: "#29BAE7",
    icon2: "service3.svg",
    icon1: "service7.svg",
  },
  {
    cardHeading: "Legal & Compliance",
    cardContent: "Regulatory & Legal Compliance",
    cardColor: "#2B2944",
    icon2: "service4.svg",
    icon1: "service8.svg",
  },
];

const MainBlock = ({ id }: any) => {
  return (
    <RightBlockContainer id="intro">
      <Container>
        <Row justify="center" id={id}>
          <div>
            <Title>Analyzers</Title>
            <Content>
              Our department specific analyzers allows Chec to be optimized for
              every part of a company.
            </Content>
          </div>
        </Row>
        <Row justify="center">
          {cards.map((card: any) => (
            <Col lg={6} md={12} sm={24} xs={24}>
              {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
                <ServiceCard card={card} />
              {/* </Fade> */}
            </Col>
          ))}
        </Row>
        <Row justify="center">
          <Col>
            <div style={{ margin: "1rem", padding: "1rem" }}>
              <Link to="/departments">
                <CTAWrapper>
                  <Button>
                    <span style={{ margin: "2.5rem" }}>Learn More</span>
                  </Button>
                </CTAWrapper>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(MainBlock);
