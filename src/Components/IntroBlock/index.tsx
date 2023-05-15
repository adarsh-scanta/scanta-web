import { Row, Col } from "antd";
import Link from "next/link";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import IntroArt from "../../assets/arts/IntroArt";
import { Button } from "../../common/Button";
import {
  RightBlockContainer,
  Content,
  Subtitle,
  ContentWrapper,
  CTAWrapper,
  ArtWrapper,
  SplashIcon1,
} from "./styles";
import Container from "../../common/Container";
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
      <SplashIcon1>
        <SvgIcon src={"ellipse-blue.svg"} width="70px" height="70px" />
      </SplashIcon1>
      <Container>
        <Row justify="center" id={id}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <ContentWrapper>
              <div style={{ position: "relative", top: "30px" }}>
                <Subtitle style={{ fontWeight: "600" }}>
                  Realtime understanding of <br />
                  company morale, trending topics, <br />
                  and corporate culture.
                </Subtitle>
                <Content>
                  TruPulse uses AI to help you understand
                  <br /> the employee experience without running surveys.
                </Content>
              </div>
              <div style={{ margin: "4rem 0 0" }}>
                <Row justify="start">
                  <Col xs={24} sm={8} md={24} lg={24} xl={24}>
                    <div style={{ margin: "0.5rem 0", minWidth: "190px" }}>
                      <CTAWrapper className="pulse">
                        <Link href="/trupulse">
                          <Button>{t("Learn more")}</Button>
                        </Link>
                      </CTAWrapper>
                    </div>
                  </Col>
                  <Col xs={24} sm={12} md={24} lg={0} xl={0}>
                    <div
                      style={{ margin: "0.5rem 0", minWidth: "190px" }}
                    ></div>
                    <CTAWrapper
                      className="pulse"
                      onClick={handleDemoReqButtonClick}
                    >
                      <Link href="/request-demo">
                        <Button>{t("Request a Demo")}</Button>
                      </Link>
                    </CTAWrapper>
                  </Col>
                </Row>
              </div>
            </ContentWrapper>
          </Col>
          <Col lg={12} md={12} sm={22} xs={22}>
            <Row justify="center">
              <video
                width="100%"
                controls
                autoPlay
                muted
                poster="https://chec-front.s3.amazonaws.com/tp-video-screenshot2(1).png"
                style={{
                  margin: "4rem 0.5rem 10rem",
                  borderRadius: "15px",
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
          </Col>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
