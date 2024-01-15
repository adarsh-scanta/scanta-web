import { Styles } from "@/styles/styles";
import Head from "next/head";
import React, { useEffect } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Newsletter from "@/Components/Newsletter";

export default function PrivacyPolicy() {
  // useEffect(() => {
  //   typeof window !== undefined &&
  //     window.location.assign(
  //       "https://scanta-web-resource.s3.amazonaws.com/Scanta%2BPrivacy%2BPolicy_Revised_2022.07.06_Clean.pdf"
  //     );
  // }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Scanta - Privacy Policy</title>
        <meta
          property="og:title"
          content="Scanta - Privacy Policy"
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
      <Header />
      <Styles />
        <iframe
          style={{ width: "90vw", margin: "5rem 4rem 0", height: "1600px" }}
          src="https://scanta-web-resource.s3.amazonaws.com/Scanta+Privacy+Policy+v.+2.0.pdf"
        />
      <Newsletter />
      <Footer fromWhere={"home"} />
    </React.Fragment>
  );
}
