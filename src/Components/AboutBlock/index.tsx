import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../common/Button";
import {
  LeftContentSection,
  Title,
  ContentWrapper,
  Content,
  CTAWrapper,
} from "./styles";

const AboutBlock = () => {
  return (
    <LeftContentSection>
      <Row justify="center" align="middle">
        <Col lg={12} md={12} sm={0} xs={0}>
          <div style={{ margin: "0 1rem" }}>
            <Row justify="end">
              <Image
                src="/img/svg/trupulseisdiff.svg"
                width={650}
                height={480}
                alt="trupulse is different"
              />
            </Row>
          </div>
        </Col>
        <Col lg={0} md={0} sm={22} xs={22}>
          <div style={{ margin: "0 1rem" }}>
            <Row justify="center">
              <Image
                src="/img/svg/trupulseisdiff.svg"
                width={650}
                height={300}
                alt="trupulse is different"
              />
            </Row>
          </div>
        </Col>
        <Col lg={11} md={11} sm={0} xs={0}>
          <ContentWrapper>
            <Title>
              TruPulse
              <span style={{ color: "#430568" }}> is Different</span>
            </Title>
            <Content style={{ fontWeight: "600" }}>
              TruPulse gives you something you don't currently have with surveys
              and other feedback technologies you are currently using, the
              ability to understand employees in realtime, everyday and
              automatically. Improving the workplace experience is easy with
              TruPulse.
            </Content>
            <div style={{ margin: "2rem 0 0" }}>
              <CTAWrapper className="pulse">
                <Link href="/trupulse">
                  <Button>{"Learn more"}</Button>
                </Link>
              </CTAWrapper>
            </div>
          </ContentWrapper>
        </Col>
        <Col lg={0} md={0} sm={22} xs={22}>
          <ContentWrapper>
            <Title>
              TruPulse
              <span style={{ color: "#430568" }}> is Different</span>
            </Title>
            <Content style={{ fontWeight: "600" }}>
              TruPulse gives you something you don't currently have with surveys
              and other feedback technologies you are currently using, the
              ability to understand employees in realtime, everyday and
              automatically. Improving the workplace experience is easy with
              TruPulse.
            </Content>
            <div style={{ margin: "2rem 0 0" }}>
              <CTAWrapper className="pulse">
                <Link href="/trupulse">
                  <Button width="100%">{"Learn more"}</Button>
                </Link>
              </CTAWrapper>
            </div>
          </ContentWrapper>
        </Col>
      </Row>
    </LeftContentSection>
  );
};

export default withTranslation()(AboutBlock);
