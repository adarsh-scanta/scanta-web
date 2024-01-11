import Header from "@/Components/Header";
import Container from "@/common/Container";
import Footer from "@/Components/Footer";
import { Styles } from "@/styles/styles";
import { Row, Col } from "antd";
import React from "react";
import Head from "next/head";

export default function Trupulse() {
  return (
    <React.Fragment>
      <Head>
        <title>TruPulse - Page not found!</title>
        <meta
          name="description"
          content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools."
        />
        <link rel="canonical" href={"https://www.trupulse.ai/"} />
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
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "8rem",
          }}
        >
          <Row justify="space-between" align="middle">
            <Col lg={11} md={11} sm={24} xs={24}>
              <h6
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  margin: "0 1rem",
                  color: "#430568",
                }}
              >
                ERROR 404 <br />
                Page not found!
              </h6>
            </Col>
            <Col lg={11} md={11} sm={24} xs={24}>
              <img
                src={"/img/icons/UC2.png"}
                alt="not-found"
                width="100%"
                height="100%"
                style={{ margin: "1rem" }}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <Footer fromWhere={"thankyou"} />
    </React.Fragment>
  );
}
