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
import Footer from "@/Components/Footer";
import Head from "next/head";
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
  const articleStructuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Scanta",
    url: "https://www.scanta.io/",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <React.Fragment>
      <>
        <Head>
          <title>TruPulse - Best Employee Experience Tool</title>
          <meta
            name="description"
            content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools."
          />
          <link rel="canonical" href={"https://www.scanta.io/"} />
          <meta
            property="og:title"
            content="TruPulse - Best Employee Experience Tool"
          />
          <meta property="og:url" content="https://www.scanta.io" />
          <meta
            property="og:image"
            content="https://www.scanta.io/img/icons/ogGroup300.png"
          />
          <meta
            property="og:description"
            content="A conversational analysis platform that helps companies understand employee morale, trending topics and cultural health."
          />
          <link
            rel="image_src"
            href="https://www.scanta.io/img/icons/ogGroup300.png"
          ></link>
          <script type="application/ld+json">
            {JSON.stringify(articleStructuredData)}
          </script>
        </Head>
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
        <CompanyInfoBlock from="home" />
        <Footer fromWhere={"home"} />
      </> 
    </React.Fragment>
  );
}
