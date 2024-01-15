import { Styles } from "@/styles/styles";
import Head from "next/head";
import React, { useEffect } from "react";

export default function TermsOfServic() {
  return (
    <React.Fragment>
      <Head>
        <title>Scanta - Terms of Service</title>
       
        <meta
          property="og:title"
          content="Scanta - Terms of Service"
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
      <iframe
        style={{ width: "90vw", margin: "5rem 4rem 0", height: "1600px" }}
        src="https://scanta-web-resource.s3.amazonaws.com/TruPulse+End+User+License+Agreement+v.+2.0.pdf"
      />
    </React.Fragment>
  );
}
