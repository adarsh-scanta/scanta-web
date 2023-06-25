import MainBlock from "@/Components/FreeTrial/MainBlock";
import { Styles } from "@/styles/styles";
import Head from "next/head";
import { Row, Col } from "antd";
import { Document, Page } from "react-pdf";
import React, { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PrivacyPolicy() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
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
      <div style={{  background: "#eff0f7" }}>
        <Row>
          <Col xs={24} sm={24} lg={0} xl={0}>
            {" "}
            <Document
              file="https://chec-front.s3.amazonaws.com/Scanta+Privacy+Policy_Revised_2022.07.06_Clean.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.apply(null, Array(numPages))
                .map((x, i) => i + 1)
                .map((page) => (
                  <Page pageNumber={page} scale={0.7} />
                ))}
            </Document>
          </Col>
          <Col xs={0} sm={0} lg={24} xl={24}>
            {" "}
            <Document
              file="https://chec-front.s3.amazonaws.com/Scanta+Privacy+Policy_Revised_2022.07.06_Clean.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.apply(null, Array(numPages))
                .map((x, i) => i + 1)
                .map((page) => (
                  <Page pageNumber={page} scale={1.8} />
                ))}
            </Document>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
