"use client";
import { useState, useEffect } from "react";
import { Row, Col, Drawer, Dropdown, Menu, Modal } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import Link from "next/link";
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
  const companyMenu = (
    <Menu
      style={{
        borderRadius: "20px",
        padding: "1rem 0.5rem",
        boxShadow: "0px 6px 21px -4px rgba(0,0,0,0.72)",
        minWidth: "150px",
      }}
    >
      <Menu.Item>
        <Link href="/company#About">
          <Span>About</Span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/company#Our-Team">
          <Span>Our Team</Span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/company#Our-Advisors">
          <Span>Advisors</Span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/company#contact-us">
          <Span>Contact Us</Span>
        </Link>
      </Menu.Item>
    </Menu>
  );

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
                  router.asPath === "/trupulse" ? "1px solid #EB7A02" : "",
              }}
            >
              <Link href="/trupulse">
                <Span>TruPulse™</Span>
              </Link>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall
              style={{
                borderBottom:
                  router.asPath === "/company" ? "1px solid #EB7A02" : "",
              }}
            >
              <Dropdown overlay={companyMenu}>
                <div>
                  <Link href="/company">
                    <Span>About</Span>
                  </Link>
                  <DownIcon />
                </div>
              </Dropdown>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall
              style={{
                borderBottom:
                  router.asPath === "/blog" ? "1px solid #EB7A02" : "",
              }}
            >
              <Link href="/blog">
                <Span>Blog</Span>
              </Link>
            </CustomNavLinkSmall>
          </Col>
          <Col>
            {!user ? (
              <>
                <CustomNavLinkSmall
                  style={{
                    minWidth: "120px",
                    margin: "0.5rem",
                  }}
                  // onClick={() => scrollTo("contact")}
                >
                  <Link href="/free-trial">
                    <CTAWrapper
                      className="pulse"
                      onClick={handleTrialButtonClick}
                    >
                      <Button color="transparent">{t("Free Trial")}</Button>
                    </CTAWrapper>
                  </Link>
                </CustomNavLinkSmall>
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
                      <Button>{t("Request a Demo")}</Button>
                    </CTAWrapper>
                  </Link>
                </CustomNavLinkSmall>
              </>
            ) : (
              <CustomNavLinkSmall
                style={{ width: "180px" }}
                onClick={() => {
                  logout();
                  window.location.reload();
                }}
              >
                <Span>Logout</Span>
                {/* </Link> */}
              </CustomNavLinkSmall>
            )}
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
                <Link href="/trupulse">
                  <Span
                    style={{
                      borderBottom:
                        router.asPath === "/trupulse"
                          ? "1px solid #EB7A02"
                          : "",
                    }}
                  >
                    TruPulse™
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
                  <Link href="/company">
                    <Span
                      style={{
                        borderBottom:
                          router.asPath === "/company"
                            ? "1px solid #EB7A02"
                            : "",
                      }}
                    >
                      About
                    </Span>
                  </Link>
                  <DownIcon />
                </div>
              </CustomNavLinkSmall>
            </Row>
          </Col>
          <Col span={24}>
            {" "}
            <Row justify="center">
              <CustomNavLinkSmall>
                <Link href="/blog">
                  <Span
                    style={{
                      borderBottom:
                        router.asPath === "/blog" ? "1px solid #EB7A02" : "",
                    }}
                  >
                    Blog
                  </Span>
                </Link>
              </CustomNavLinkSmall>
            </Row>
          </Col>
          {!user && !wait ? (
            <div style={{ position: "fixed", bottom: "20px", }}>
              <CustomNavLinkSmall
                style={{
                  minWidth: "120px",
                  margin: "0.5rem  0.5rem 0.5rem",
                }}
                // onClick={() => scrollTo("contact")}
              >
                <Link href="/free-trial">
                  <CTAWrapper
                    className="pulse"
                    onClick={handleTrialButtonClick}
                  >
                    <Button width="230px" color="transparent">
                      {t("Free Trial")}
                    </Button>
                  </CTAWrapper>
                </Link>
              </CustomNavLinkSmall>
              <CustomNavLinkSmall
                style={{ minWidth: "185px", margin: "0.5rem" }}
              >
                <Link href="/request-demo">
                  <CTAWrapper
                    className="pulse"
                    onClick={handleDemoRequestButtonClick}
                  >
                    <Button width="230px">{t("Request a Demo")}</Button>
                  </CTAWrapper>
                </Link>
              </CustomNavLinkSmall>
            </div>
          ) : (
            <CustomNavLinkSmall
              style={{ width: "180px" }}
              onClick={() => {
                logout();
                window.location.reload();
              }}
            >
              <Span>Logout</Span>
              {/* </Link> */}
            </CustomNavLinkSmall>
          )}
        </Row>
      </div>
    );
  };

  return (
    <HeaderSection
      style={{ background: router.asPath === "/" ? "#eff0f7" : "#fff" }}
      // className={`header && ${showHeader ? "headerVisible" : "headerHidden"}`}
      className="headerVisible"
    >
      <Row justify="space-between">
        <LogoContainer href="/">
          <img
            src="\img\icons\logo192.png"
            width="220px"
            alt="logo"
            height="66px"
            style={{ marginTop: "10px" }}
          />
        </LogoContainer>
        <NotHidden>
          <MenuItem />
        </NotHidden>
        <BurgerContainer>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </BurgerContainer>
      </Row>
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
      </Drawer>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
