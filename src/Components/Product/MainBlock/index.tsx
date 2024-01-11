import { Row, Col } from "antd";
import Link from "next/link";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import IntroArt from "../../../assets/arts/IntroArt";
import { Button } from "../../../common/Button";
import Image from "next/image";
import {
  RightBlockContainer,
  Content,
  Subtitle,
  ContentWrapper,
  CTAWrapper,
  ArtWrapper,
  SplashIcon1,
  Title,
} from "./styles";
import Container from "../../../common/Container";
import { useEffect, useState, useRef } from "react";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const RightBlock = ({ t, id }: any) => {
  const vidRef = useRef();
  const [ctaClicksCount, setCtaClicksCount] = useState(0);
  const [ctaSubmits, setCtaSubmits] = useState(0);
  const [demoButtonCount, setDemoButtonCount] = useState(0);
  const [demoSuccessCount, setDemoSuccessCount] = useState(0);
  const [trialButtonCount, setTrialButtonCount] = useState(0);
  const [trialSuccessCount, setTrialSuccessCount] = useState(0);
  useEffect(() => {
    const q = query(collection(db, "stats"));
    onSnapshot(q, (querySnapshot) => {
      setCtaClicksCount(querySnapshot.docs[0].data().ctaClicksCount);
      setCtaSubmits(querySnapshot.docs[0].data().ctaSubmits);
      setDemoButtonCount(querySnapshot.docs[0].data().demoButtonCount);
      setDemoSuccessCount(querySnapshot.docs[0].data().demoSuccessCount);
      setTrialButtonCount(querySnapshot.docs[0].data().trialButtonCount);
      setTrialSuccessCount(querySnapshot.docs[0].data().trialSuccessCount);
    });
  }, []);

  const handleDemoReqButtonClick = async () => {
    if (ctaClicksCount > 0) {
      try {
        await setDoc(doc(db, "stats", "P0kHUuxV7HZvSA7XrcHh"), {
          ctaClicksCount: ctaClicksCount,
          ctaSubmits: ctaSubmits,
          demoButtonCount: demoButtonCount + 1,
          demoSuccessCount: demoSuccessCount,
          trialButtonCount: trialButtonCount,
          trialSuccessCount: trialSuccessCount,
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <RightBlockContainer>
      <Container>
        <Row justify="center" id={id}>
          {/* Desktop */}
          <Col xs={0} sm={0} lg={24} xl={24}>
            <ContentWrapper>
              <Title>AI Consulting & Services</Title>
              <Subtitle
                style={{
                  fontWeight: "600",
                  width: "80%",
                  margin: "auto",
                  marginBottom: "2rem",
                }}
              >
                Elevate your business with Scanta, the forefront of AI
                innovation. Our expert consulting services redefine industries,
                offering cutting-edge solutions tailored to your needs.
                Transform your future with confidence.
              </Subtitle>

              <img
                src="/img/service-banner.png"
                alt="intro image"
                width="100%"
              />
            </ContentWrapper>
          </Col>
          {/* Mobile */}
          <Col xs={24} sm={24} lg={0} xl={0}>
            <ContentWrapper>
              <img
                src="/img/service-banner.png"
                alt="intro image"
                width="100%"
                style={{ margin: " 0 0 1rem" }}
              />
              <Title style={{ textAlign: "left" }}>
                AI Consulting & Services
              </Title>
              <Subtitle style={{ fontWeight: "600", textAlign: "left" }}>
                Elevate your business with Scanta, the forefront of AI
                innovation. Our expert consulting services redefine industries,
                offering cutting-edge solutions tailored to your needs.
                Transform your future with confidence.
              </Subtitle>
              <Row justify="center">
                <CTAWrapper
                  className="pulse"
                  style={{ width: "100%", marginBottom: "1rem" }}
                >
                  <Link href="/request-demo">
                    <span>
                      <Button width="100%">{t("Request a Demo")}</Button>
                    </span>
                  </Link>
                </CTAWrapper>
              </Row>
            </ContentWrapper>
          </Col>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
