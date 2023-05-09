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

const Header = ({ t, isModalVisible, closeModal, openModal }: any) => {
  const [user, loading, error] = useAuthState(auth);
  const [visible, setVisibility] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [currentStage, setCurrentStage] = useState("contactInfo");
  const [prefill, setPrefill] = useState({
    name: "",
    email: "",
  });

  const updatePrefill = (obj: any) => {
    setPrefill(obj);
  };
  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

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
          <Span
           
          >
            About
          </Span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/company#Our-Team">
          <Span
            
          >
            Our Team
          </Span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/company#Our-Advisors">
          <Span
           
          >
            Advisors
          </Span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/company#contact-us">
          <Span
           
          >
            Contact Us
          </Span>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const [ctaClicksCount, setCtaClicksCount] = useState(0);
  const [ctaSubmits, setCtaSubmits] = useState(0);
  useEffect(() => {
    const q = query(collection(db, "stats"));
    onSnapshot(q, (querySnapshot) => {
      setCtaClicksCount(querySnapshot.docs[0].data().ctaClicksCount);
      setCtaSubmits(querySnapshot.docs[0].data().ctaSubmits);
    });
  }, []);

  const handleDemoRequestButtonClick = async () => {
    openModal();
    //Lead Forensic function call
    if (ctaClicksCount > 0) {
      try {
        await setDoc(doc(db, "stats", "P0kHUuxV7HZvSA7XrcHh"), {
          ctaClicksCount: ctaClicksCount + 1,
          ctaSubmits: ctaSubmits,
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  const MenuItem = () => {
    return (
      <>
        <Row justify="space-between">
          <Col>
            <CustomNavLinkSmall>
              <Link href="/" aria-label="homepage">
                <Span
                 
                >
                  Home
                </Span>
              </Link>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall>
              <Link href="/trupulse" aria-label="product">
                <Span
                 
                >
                  TruPulse™
                </Span>
              </Link>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall>
              <Dropdown overlay={companyMenu}>
                <a
                  // eslint-disable-next-line
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <Link href="/company">
                    <Span
                      
                    >
                      About
                    </Span>
                  </Link>
                  <DownIcon />
                </a>
              </Dropdown>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall>
              <Link href="/blog">
                <Span
                  
                >
                  Blog
                </Span>
              </Link>
            </CustomNavLinkSmall>
          </Col>
          <Col>
            {!user ? (
              <>
                <CustomNavLinkSmall
                  style={{ minWidth: "185px", margin: "0.5rem" }}
                >
                  <Link href="/request-demo">
                    <CTAWrapper
                      className="pulse"
                      // onClick={handleDemoRequestButtonClick}
                    >
                      <Button>{t("Request a Demo")}</Button>
                    </CTAWrapper>
                  </Link>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall
                  style={{
                    minWidth: "120px",
                    margin: "0.5rem 2rem 0.5rem 0.5rem",
                  }}
                  // onClick={() => scrollTo("contact")}
                >
                  <Link href="/free-trial">
                    <CTAWrapper
                      className="pulse" 
                      // onClick={handleDemoRequestButtonClick}
                    >
                      <Button>{t("Free Trial")}</Button>
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

  return (
    <HeaderSection
      // className={`header && ${showHeader ? "headerVisible" : "headerHidden"}`}
      className="headerVisible"
    >
      <Row justify="space-between">
        <LogoContainer
          href="/"
          aria-label="homepage"
          
        >
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
      <Drawer closable={false} visible={visible} onClose={onClose}>
        <Col style={{ marginBottom: "2.5rem" }}>
          <Label onClick={onClose}>
            <Col span={12}>
              <Menu>Menu</Menu>
            </Col>
            <Col span={12}>
              <Outline />
            </Col>
          </Label>
        </Col>
        <MenuItem />
      </Drawer>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
