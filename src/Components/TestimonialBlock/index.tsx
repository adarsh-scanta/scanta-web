import { Row, Col } from "antd";
import Link from "next/link";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import IntroArt from "../../assets/arts/IntroArt";
import { Button } from "../../common/Button";
import Image from "next/image";
import {
  RightBlockContainer,
  Content,
  Subtitle,
  ContentWrapper,
  CTAWrapper,
  ArtWrapper,
  SplashIcon1,
  CarouselLabel,
  ServicesHeading,
  CarouselWrapper,
  CarouselWrapper2,
} from "./styles";
import Container from "../../common/Container";
import { useEffect, useState, useRef } from "react";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { feedbackData } from "./feedbackData";

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

  const [wait, setWaiting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaiting(false);
    }, 500);
  }, []);
  return (
    <RightBlockContainer>
      <div
        style={{
          paddingBottom: "1rem",
          marginBottom: "2rem",
          position: "relative",
        }}
      >
        <Row>
          <Container>
            <Row justify="center">
              <Col>
                <ServicesHeading>
                  <span style={{ color: "#001011" }}>
                    Our Customers & Partners
                  </span>
                </ServicesHeading>
              </Col>
            </Row>
            <Row justify="space-around">
              <Col>
                <img
                  src="/img/icons/nvidia.png"
                  alt="brand-logo"
                  style={{ margin: "1rem" }}
                />
              </Col>
              <Col>
                <img
                  src="/img/icons/microsoft.png"
                  alt="brand-logo"
                  style={{ margin: "1rem" }}
                />
              </Col>
              <Col>
                <img
                  src="/img/icons/wendys.png"
                  alt="brand-logo"
                  style={{ margin: "1rem" }}
                />
              </Col>
              <Col>
                <img
                  src="/img/icons/coca-cola.png"
                  alt="brand-logo"
                  style={{ margin: "1rem" }}
                />
              </Col>
              <Col>
                <img
                  src="/img/icons/dunkin-donuts.png"
                  alt="brand-logo"
                  style={{ margin: "1rem" }}
                />
              </Col>
            </Row>
          </Container>
        </Row>
      </div>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
