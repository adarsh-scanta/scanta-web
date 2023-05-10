import AdvisorBlock from "@/components/Company/AdvisorBlock";
import ContactBlock from "@/components/Company/ContactBlock";
import MainBlock from "@/components/Company/MainBlock";
import StoryBlock from "@/components/Company/StoryBlock";
import Header from "@/components/Header";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/components/Footer";
import { Styles } from "@/styles/styles";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Scanta</title>
        <meta
          name="description"
          content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools."
        />
        <link rel="canonical" href="https://scanta.io/company" />
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
      </Head>
      <Header />
      <Styles />
      <ScrollToTop />
      <MainBlock />
      <StoryBlock />
      <AdvisorBlock />
      <ContactBlock />
      <Footer fromWhere={"company"} />
    </React.Fragment>
  );
}
