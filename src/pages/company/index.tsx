import AdvisorBlock from "@/Components/Company/AdvisorBlock";
import ContactBlock from "@/Components/Company/ContactBlock";
import MainBlock from "@/Components/Company/MainBlock";
import StoryBlock from "@/Components/Company/StoryBlock";
import Header from "@/Components/Header";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/Components/Footer";
import { Styles } from "@/styles/styles";
import Head from "next/head";
import React from "react";
import Newsletter from "@/Components/Newsletter";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Scanta</title>
        <meta
          name="description"
          content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools."
        />
        <link rel="canonical" href="https://www.trupulse.ai/company" />
        <meta
          property="og:title"
          content="TruPulse - Best Employee Experience Tool"
        />
        <meta property="og:url" content="https://www.scanta.io/company" />
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
      {/* <AdvisorBlock /> */}
      {/* <ContactBlock /> */}
      <Newsletter />
      <Footer fromWhere={"company"} />
    </React.Fragment>
  );
}
