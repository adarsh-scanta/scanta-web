"use client";
import styled from "styled-components";
import React from "react";
import Header from "@/Components/Header";
import { Styles } from "@/styles/styles";
import Container from "@/common/Container";
import { SplashArt2 } from "@/assets/arts/SplashArt";
import Head from "next/head";
import dynamic from "next/dynamic";
import Newsletter from "@/Components/Newsletter";

const TestimonialBlock = dynamic(() => import("@/Components/TestimonialBlock"));
const CompanyInfoBlock = dynamic(() => import("@/Components/CompanyInfoBlock"));
const AboutBlock = dynamic(() => import("@/Components/AboutBlock"));
const Footer = dynamic(() => import("@/Components/Footer"));
const IntroBlock = dynamic(() => import("@/Components/IntroBlock"));
const ScrollToTop = dynamic(() => import("@/common/ScrollToTop"));

export default function Home() {
  return (
    <React.Fragment>
      <div className="App">
        <Head>
          <title>Transforming Vision for Empowered Success</title>
          <meta
            name="description"
            content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools."
          />
          <link rel="canonical" href={"https://www.trupulse.ai/"} />
          <meta
            property="og:title"
            content="AI, ML, AR & VR Consulting & Services"
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
        </Head>
        <Header />
        <Styles />
        <ScrollToTop />
        <div>
          <IntroBlock id="intro" />
        </div>
        <TestimonialBlock />

        <AboutBlock />
        <Newsletter />
        {/* <CompanyInfoBlock from="home" /> */}
        <Footer fromWhere={"home"} />
      </div>
    </React.Fragment>
  );
}
