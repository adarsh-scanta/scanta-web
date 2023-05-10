import MainBlock from "@/components/FreeTrial/MainBlock";
import Header from "@/components/Header";
import Container from "@/common/Container";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/components/Footer";
import { Styles } from "@/styles/styles";
import { Row } from "antd";
import Head from "next/head";
import React from "react";

export default function Trupulse() {
  return (
    <React.Fragment>
      <Head>
        <title>Thank You!</title>
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
        
      </Head>
      <Styles />
      <Header />
      <Container>
        <div style={{ width: "100%", minHeight: "50vh", marginTop: "12rem" }}>
          <Row justify="center">
            <img
              src="/img/icons/positive-vote.png"
              width="100px"
              alt="thankyou"
            />
          </Row>
          <Row justify="center">
            <p style={{ color: "#441c68", margin: "1rem 0" }}>
              Thank You! Your response has been recorded.
            </p>
          </Row>
        </div>
      </Container>
      <Footer fromWhere={"thankyou"} />
    </React.Fragment>
  );
}
