"use client";
import { useState, useEffect } from "react";
import { Row, Col, Drawer, Dropdown, Menu, Modal } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import Link from "next/link";
import Image from "next/image";

import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  CustomNavLinkSmall,
  Label,
  Outline,
  DownIcon,
  CTAWrapper,
  Span,
  BurgerContainer,
  Title,
  Content,
} from "./styles";
import { ContactForm } from "../Company/ContactBlock/ContactForm";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, setDoc, doc, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useRouter } from "next/router";

const Header = ({ t, isModalVisible, closeModal, openModal }: any) => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [visible, setVisibility] = useState(false);
  const [wait, setWaiting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaiting(false);
    }, 500);
  }, []);
  // const scrollTo = (id: string) => {
  //   if (
  //     (location.pathname === "/departments" &&
  //       (id === "Executive-Management" ||
  //         id === "Human-Resource" ||
  //         id === "IT-Security" ||
  //         id === "LandC")) ||
  //     (location.pathname === "/company" &&
  //       (id === "Our-Story" ||
  //         id === "Our-Team" ||
  //         id === "About" ||
  //         id === "contact-us"))
  //   ) {
  //     const element = document.getElementById(id) as HTMLDivElement;
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //     setVisibility(false);
  //   }
  // };
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

  const handleDemoRequestButtonClick = async () => {
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
  const handleTrialButtonClick = async () => {
    if (ctaClicksCount > 0) {
      try {
        await setDoc(doc(db, "stats", "P0kHUuxV7HZvSA7XrcHh"), {
          ctaClicksCount: ctaClicksCount,
          ctaSubmits: ctaSubmits,
          demoButtonCount: demoButtonCount,
          demoSuccessCount: demoSuccessCount,
          trialButtonCount: trialButtonCount + 1,
          trialSuccessCount: trialSuccessCount,
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    return (
      <>
        <Row justify="space-between">
          <Col>
            <CustomNavLinkSmall
              style={{
                borderBottom: router.asPath === "/" ? "1px solid #EB7A02" : "",
              }}
            >
              <Link href="/">
                <Span>Home</Span>
              </Link>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall
              style={{
                borderBottom:
                  router.asPath === "/services" ? "1px solid #EB7A02" : "",
              }}
            >
              <Link href="/services">
                <Span>Services</Span>
              </Link>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall
              style={{
                borderBottom:
                  router.asPath === "/portfolio" ? "1px solid #EB7A02" : "",
              }}
            >
              <div>
                <Link href="/portfolio">
                  <Span>Portfolio</Span>
                </Link>
              </div>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall
              style={{
                borderBottom:
                  router.asPath === "/blog" ? "1px solid #EB7A02" : "",
              }}
            >
              <Link href="/company">
                <Span>Company</Span>
              </Link>
            </CustomNavLinkSmall>
          </Col>
        </Row>
      </>
    );
  };

  const MenuItemForDrawer = () => {
    return (
      <div style={{ position: "relative" }}>
        <Row justify="center">
          <Col span={24}>
            <Row justify="center">
              <CustomNavLinkSmall>
                <Link href="/">
                  <Span
                    style={{
                      borderBottom:
                        router.asPath === "/" ? "1px solid #EB7A02" : "",
                    }}
                  >
                    Home
                  </Span>
                </Link>
              </CustomNavLinkSmall>
            </Row>
          </Col>
          <Col span={24}>
            {" "}
            <Row justify="center">
              <CustomNavLinkSmall>
                <Link href="/services">
                  <Span
                    style={{
                      borderBottom:
                        router.asPath === "/services"
                          ? "1px solid #EB7A02"
                          : "",
                    }}
                  >
                    Services
                  </Span>
                </Link>
              </CustomNavLinkSmall>
            </Row>
          </Col>{" "}
          <Col span={24}>
            {" "}
            <Row justify="center">
              <CustomNavLinkSmall>
                <div>
                  <Link href="/portfolio">
                    <Span
                      style={{
                        borderBottom:
                          router.asPath === "/portfolio"
                            ? "1px solid #EB7A02"
                            : "",
                      }}
                    >
                      Portfolio
                    </Span>
                  </Link>
                </div>
              </CustomNavLinkSmall>
            </Row>
          </Col>
          <Col span={24}>
            {" "}
            <Row justify="center">
              <CustomNavLinkSmall>
                <Link href="/company">
                  <Span
                    style={{
                      borderBottom:
                        router.asPath === "/company" ? "1px solid #EB7A02" : "",
                    }}
                  >
                    Company
                  </Span>
                </Link>
              </CustomNavLinkSmall>
            </Row>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <HeaderSection style={{ background: "#FFFAF5" }} className="headerVisible">
      <Row justify="space-between">
        <Col xs={18} sm={18} lg={0} xl={0}>
          <Row justify="start">
            <LogoContainer href="/">
              <Image
                src="/img/icons/logo192.png"
                width={180}
                height={55}
                alt="logo"
              />
            </LogoContainer>
          </Row>
        </Col>
        <BurgerContainer>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </BurgerContainer>
      </Row>
      <NotHidden>
        <Row justify="space-between">
          <LogoContainer href="/">
            <Image
              src="/img/icons/logo192.png"
              width={180}
              height={55}
              alt="logo"
            />
          </LogoContainer>
          <MenuItem />
          <CustomNavLinkSmall
            style={{
              minWidth: "185px",
              margin: "0.5rem 2rem 0.5rem 0.5rem",
            }}
          >
            <Link href="/request-demo">
              <CTAWrapper
                className="pulse"
                onClick={handleDemoRequestButtonClick}
              >
                <Button>{t("Book a Meeting")}</Button>
              </CTAWrapper>
            </Link>
          </CustomNavLinkSmall>
        </Row>
      </NotHidden>{" "}
      <Drawer closable={false} open={visible} onClose={onClose}>
        <Col style={{ marginBottom: "2.5rem" }}>
          <Label onClick={onClose}>
            <Col span={17}>
              <Row justify="end">
                <CustomNavLinkSmall>
                  <Span>Menu</Span>
                </CustomNavLinkSmall>{" "}
              </Row>
            </Col>
            <Col span={6}>
              <Outline />
            </Col>
          </Label>
        </Col>
        <MenuItemForDrawer />
        <CustomNavLinkSmall
            style={{
              minWidth: "185px",
              margin: "0.5rem auto 0.5rem",
            }}
          >
            <Link href="/request-demo">
              <CTAWrapper
                className="pulse"
                onClick={handleDemoRequestButtonClick}
                style={{position:"relative", left:"50px"}}
              >
                <Button>{t("Book a Meeting")}</Button>
              </CTAWrapper>
            </Link>
          </CustomNavLinkSmall>
      </Drawer>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
