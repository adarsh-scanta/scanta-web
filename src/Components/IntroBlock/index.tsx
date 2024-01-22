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
  Title,
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
      <Container>
        <Row justify="center" id={id}>
          {/* Desktop */}
          <Col xs={0} sm={0} lg={24} xl={24}>
            <ContentWrapper>
              <Title>
                Artificial Intelligence, Augmented Reality, Virtual Reality
                Consulting
              </Title>
              <Subtitle style={{ fontWeight: "600" }}>
                Bring Us Your Ideas, Let Us Execute Your Vision
              </Subtitle>
              <div style={{ position: "relative" }}>
                {/* <img src="/img/intro.png" alt="intro image" width="100%" /> */}
                <video
                  className="product-video mx-auto  mb-0  md:mb-8"
                  width="100%"
                  // height="253px "
                  controls
                  loop
                  autoPlay
                  muted
                  webkit-playsinline
                  playsInline
                  poster="/img/intro.png"
                  style={{
                    width: "100%",
                    // height: '253px ',
                    boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                  }}
                >
                  <source
                    src="https://scanta-web-resource.s3.amazonaws.com/videos/intro-video-scanta.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support HTML video.
                </video>
                <img
                  src="/img/icons/dicovery.png"
                  style={{
                    width: "150px",
                    position: "absolute",
                    top: "00px",
                    right: "10px",
                  }}
                  alt="discovery logo"
                />
              </div>
            </ContentWrapper>
          </Col>
          {/* Mobile */}
          <Col xs={24} sm={24} lg={0} xl={0}>
            <ContentWrapper>
              <video
                className="product-video mx-auto  mb-0  md:mb-8"
                width="100%"
                // height="253px "
                controls
                loop
                autoPlay
                muted
                webkit-playsinline
                playsInline
                poster="/img/intro.png"
                style={{
                  width: "100%",
                  // height: '253px ',
                  margin: "2rem 0",
                  boxShadow: "rgb(128, 128, 128) 1px 4px 19px -4px",
                }}
              >
                <source
                  src="https://scanta-web-resource.s3.amazonaws.com/videos/intro-video-scanta.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML video.
              </video>
              <Title style={{ textAlign: "left" }}>
                Artificial Intelligence, Augmented Reality, Virtual Reality
                Consulting
              </Title>
              <Subtitle style={{ fontWeight: "600", textAlign: "left" }}>
                Bring Us Your Ideas, Let Us Execute Your Vision
              </Subtitle>
            </ContentWrapper>
          </Col>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
