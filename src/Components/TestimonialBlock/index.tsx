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
      {!wait && (
        <div
          style={{
            paddingBottom: "5rem",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          <Row>
            <Container>
              <Row justify="start">
                <Col xs={0} sm={0} lg={24} xl={24}>
                  <Row justify="start">
                    <ServicesHeading
                      style={{
                        textAlign: "left",
                        margin: "3rem 1rem 2rem",
                      }}
                    >
                      <span style={{ color: "#430568" }}>
                        Customers and Partners
                      </span>
                    </ServicesHeading>
                  </Row>
                </Col>
                <Col xs={24} sm={24} lg={0} xl={0}>
                  <Row justify="center">
                    <ServicesHeading
                      style={{ textAlign: "center", margin: "1rem 0 2rem" }}
                    >
                      <span style={{ color: "#430568" }}>
                        Customers and Partners
                      </span>
                    </ServicesHeading>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={0} sm={0} lg={24} xl={24}>
                  {!wait && (
                    <CarouselWrapper2
                      autoplay
                      // arrows
                      // nextArrow={<RightOutlined />}
                      // prevArrow={<LeftOutlined />}
                      autoplaySpeed={60000}
                    >
                      <Row justify="center">
                        <Col span={24}>
                          <Row justify="space-between">
                            {feedbackData.slice(0, 3).map((item, id) => (
                              <Col xs={24} sm={24} lg={8} xl={8}>
                                <div
                                  style={{
                                    width: "95%",
                                    margin: "1rem",
                                    height: "300px",
                                    background: "#fff",
                                    borderRadius: "12px",
                                    boxShadow:
                                      "rgb(128, 128, 128) 0px 5px 10px -6px",
                                    padding: "1rem",
                                  }}
                                >
                                  <Row>
                                    <Col span={6}>
                                      <div
                                        style={{
                                          width: "70px",
                                          borderRadius: "40px",
                                          overflow: "hidden",
                                        }}
                                      >
                                        <Image
                                          src={item.profilePic}
                                          width={70}
                                          height={85}
                                          alt={item.name}
                                        />
                                      </div>
                                    </Col>
                                    <Col span={18}>
                                      <div
                                        style={{
                                          width: "100%",
                                          borderRadius: "40px",
                                          margin: "1rem 0 0",
                                        }}
                                      >
                                        <p
                                          style={{
                                            textAlign: "left",
                                            color: "#F48C06",
                                            fontSize: "1.1rem",
                                            fontFamily: "Poppins SemiBold",
                                            margin: "0",
                                          }}
                                        >
                                          {item.name}
                                        </p>
                                        <p
                                          style={{
                                            textAlign: "left",
                                            color: "#2F327D",
                                            fontSize: "0.9rem",
                                            fontFamily: "Poppins SemiBold",
                                            margin: "0",
                                            height:
                                              item.name === "Richard E. Beyer"
                                                ? "2.5rem"
                                                : "",
                                          }}
                                        >
                                          {item.position}
                                        </p>
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <p
                                      style={{
                                        color: "#000",
                                        fontSize: "0.8rem",
                                        fontFamily: "Poppins SemiBold",
                                        marginTop: "0.5rem",
                                        height: "100px",
                                      }}
                                    >
                                      {`"${item.content}"`}{" "}
                                    </p>
                                  </Row>
                                  <hr
                                    style={{
                                      filter: "opacity(0.2)",
                                      width: "109%",
                                      position: "relative",
                                      left: "-18px",
                                    }}
                                  />
                                  <Row justify="center">
                                    <img
                                      src={item.company_logo}
                                      // width="60%"
                                      height={"40px"}
                                      alt={
                                        item.company_logo === "NA"
                                          ? ""
                                          : item.position.split(" ")[
                                              item.position.split(" ").length -
                                                1
                                            ]
                                      }
                                    />
                                  </Row>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Col>
                      </Row>
                      <Row justify="center">
                        <Col span={24}>
                          <Row justify="space-between">
                            {feedbackData.slice(3, 6).map((item, id) => (
                              <Col xs={24} sm={24} lg={8} xl={8}>
                                <div
                                  style={{
                                    width: "95%",
                                    margin: "1rem",
                                    height: "300px",
                                    background: "#fff",
                                    borderRadius: "12px",
                                    boxShadow:
                                      "rgb(128, 128, 128) 0px 5px 10px -6px",
                                    padding: "1rem",
                                  }}
                                >
                                  <Row>
                                    <Col span={6}>
                                      <div
                                        style={{
                                          width: "70px",
                                          borderRadius: "40px",
                                        }}
                                      >
                                        <Image
                                          src={item.profilePic}
                                          width={70}
                                          height={85}
                                          alt={item.name}
                                        />
                                      </div>
                                    </Col>
                                    <Col span={18}>
                                      <div
                                        style={{
                                          width: "100%",
                                          // height: "70px",
                                          // background: "#D9D9D9",
                                          borderRadius: "40px",
                                          margin: "1rem 0 0",
                                        }}
                                      >
                                        <p
                                          style={{
                                            textAlign: "left",
                                            color: "#F48C06",
                                            fontSize: "1.1rem",
                                            fontFamily: "Poppins SemiBold",
                                            margin: "0",
                                          }}
                                        >
                                          {item.name}
                                        </p>
                                        <p
                                          style={{
                                            textAlign: "left",
                                            color: "#2F327D",
                                            fontSize: "0.9rem",
                                            fontFamily: "Poppins SemiBold",
                                            margin: "0",
                                          }}
                                        >
                                          {item.position}
                                        </p>
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <p
                                      style={{
                                        color: "#000",
                                        fontSize: "0.8rem",
                                        fontFamily: "Poppins SemiBold",
                                        maxHeight: "100px",
                                        height: "100px",
                                        marginBottom:
                                          item.name === "Mani Sundaram"
                                            ? "1.5rem"
                                            : "1rem",
                                        marginTop: "0.5rem",
                                      }}
                                    >
                                      {`"${item.content}"`}
                                    </p>
                                  </Row>
                                  <hr
                                    style={{
                                      filter: "opacity(0.2)",
                                      width: "109%",
                                      position: "relative",
                                      left: "-18px",
                                    }}
                                  />
                                  <Row justify="center">
                                    <img
                                      src={item.company_logo}
                                      // width="60%"
                                      height={"50px"}
                                      alt={
                                        item.company_logo === "NA"
                                          ? ""
                                          : item.position.split(" ")[
                                              item.position.split(" ").length -
                                                1
                                            ]
                                      }
                                    />
                                  </Row>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Col>
                      </Row>
                    </CarouselWrapper2>
                  )}
                </Col>
                <Col xs={24} sm={24} lg={0} xl={0}>
                  {!wait && (
                    <CarouselWrapper2
                      autoplay
                      // arrows
                      // nextArrow={<RightOutlined />}
                      // prevArrow={<LeftOutlined />}
                      autoplaySpeed={20000}
                    >
                      {feedbackData.map((item, id) => (
                        <Col xs={24} sm={24} lg={8} xl={8}>
                          <div
                            style={{
                              width: "95%",
                              margin: "1rem",
                              height: "300px",
                              background: "#fff",
                              borderRadius: "12px",
                              boxShadow: "rgb(128, 128, 128) 0px 5px 10px -6px",
                              padding: "1rem",
                            }}
                          >
                            <Row>
                              <Col span={6}>
                                <div
                                  style={{
                                    width: "70px",
                                    // height: "70px",
                                    // background: "#D9D9D9",
                                    borderRadius: "40px",
                                    // margin: "0 0.5rem",
                                  }}
                                >
                                  
                                  <Image
                                    src={item.profilePic}
                                    width={70}
                                    height={85}
                                    alt={item.name}
                                  />
                                </div>
                              </Col>{" "}
                              <Col span={18}>
                                <div
                                  style={{
                                    width: "100%",
                                    // height: "70px",
                                    // background: "#D9D9D9",
                                    borderRadius: "40px",
                                    margin: "1rem 0 0",
                                  }}
                                >
                                  <p
                                    style={{
                                      textAlign: "left",
                                      color: "#F48C06",
                                      fontSize: "1.1rem",
                                      fontFamily: "Poppins SemiBold",
                                      margin: "0",
                                    }}
                                  >
                                    {item.name}
                                  </p>
                                  <p
                                    style={{
                                      textAlign: "left",
                                      color: "#2F327D",
                                      fontSize: "0.9rem",
                                      fontFamily: "Poppins SemiBold",
                                      margin: "0",
                                      height:
                                        item.name === "Richard E. Beyer"
                                          ? "2.5rem"
                                          : "",
                                    }}
                                  >
                                    {item.position}
                                  </p>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <p
                                style={{
                                  color: "#000",
                                  fontSize: "0.8rem",
                                  fontFamily: "Poppins SemiBold",
                                  maxHeight: "100px",
                                  marginBottom: "1rem",
                                  marginTop: "0.5rem",
                                }}
                              >
                                {`"${item.content}"`}
                              </p>
                            </Row>
                            <hr
                              style={{
                                filter: "opacity(0.2)",
                                width: "109%",
                                position: "relative",
                                left: "-18px",
                              }}
                            />
                            <Row justify="center">
                              <img
                                src={item.company_logo}
                                // width="60%"
                                height={"50px"}
                                alt={
                                  item.company_logo === "NA"
                                    ? ""
                                    : item.position.split(" ")[
                                        item.position.split(" ").length - 1
                                      ]
                                }
                              />
                            </Row>
                          </div>
                        </Col>
                      ))}
                    </CarouselWrapper2>
                  )}
                </Col>
              </Row>
            </Container>
          </Row>
        </div>
      )}
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
