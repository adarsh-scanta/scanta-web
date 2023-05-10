"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import React, { lazy } from "react";
import Header from "@/Components/Header";
// import Router from "next/navigation";
import { Styles } from "@/styles/styles";
import IntroBlock from "@/Components/IntroBlock";
import ScrollToTop from "@/common/ScrollToTop";
import Container from "@/common/Container";
import { SplashArt2 } from "@/assets/arts/SplashArt";
import AboutBlock from "@/Components/AboutBlock";
import CompanyInfoBlock from "@/Components/CompanyInfoBlock";
import Footer from "@/components/Footer";
import Test from "@/Components/Test";
// const ScrollToTop = lazy(() => import("../common/ScrollToTop"));

export default function Home() {
  const SplashIcon = styled("div")`
width: 100%;
position: relative; 
left: 45%;
 bottom: 7rem;
@media only screen and (max-width: 1079px) {
   display: none; 
`;
  return (
    <React.Fragment>
      <>
        <Styles />
        <ScrollToTop />
        <Header />
        <IntroBlock id="intro" />
        <Container>
          <SplashIcon>
            <SplashArt2 />
          </SplashIcon>
          <AboutBlock />
        </Container>
        <Test from="testHome" />
        <Footer fromWhere={"home"} />
      </>
    </React.Fragment>
  );
}
