import MainBlock from "@/Components/FreeTrial/MainBlock";
import { Styles } from "@/styles/styles";
import Head from "next/head";
import {Row ,Col} from "antd"
import React from "react";

export default function PrivacyPolicy() {
  return (
    <React.Fragment>
      <Head>
        <title>TruPulse - Privacy Policy</title>
        <meta
          name="description"
          content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools."
        />
        <link rel="canonical" href="https://www.scanta.io/privacypolicy" />
        <meta
          property="og:title"
          content="TruPulse - Best Employee Experience Tool"
        />
        <meta property="og:url" content="https://www.scanta.io/privacypolicy" />
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
      <div style={{ margin: "2rem" }}>
        <Row>
          <Col span={24}></Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
