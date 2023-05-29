import MainBlock from "@/Components/Product/MainBlock";
import React from "react";
import SecondBlock from "@/Components/Product/SecondBlock";
import ThirdBlock from "@/Components/Product/ThirdBlock";
import CompanyInfoBlock from "@/Components/CompanyInfoBlock";
import FifthBlock from "@/Components/Product/FifthBlock";
import FourthBlock from "@/Components/Product/FourthBlock";
import SolutionBlock from "@/Components/SolutionBlock";
import Container from "@/common/Container";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ServicesContent from "../../content/ServicesContent.json";
import { Styles } from "@/styles/styles";
import Head from "next/head";
import ScrollToTop from "@/common/ScrollToTop";

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does TruPulse replace employee surveys?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Surveys will always have a place in the employee feedback process, but TruPulse gives you something you don’t have with surveys and other feedback technologies, the ability to get a realtime understanding of employee morale, trending workplace topics and cultural health with one simple automated tool."
      }
    },
    {
      "@type": "Question",
      "name": "How does TruPulse measure morale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TruPules detects and measures the key factors that are agreed to be indications of morale. By combining these factors we can derive a score that can be a reliable indignation of the relative morale of the organization."
      }
    },
    {
      "@type": "Question",
      "name": "Can you measure the ROI using TruPulse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TruPulse tracks insights continuously so you always have a historical trend of where you were to begin with and where you stand now. Launch a program and check the results to determine if your programs are having the right effect."
      }
    },
    {
      "@type": "Question",
      "name": "How does TruPulse protect employee privacy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tru-Pulse de-identifies communications before it analyzes them. It is designed to present group level insights on the employee experience, not individual insights."
      }
    },
    {
      "@type": "Question",
      "name": "How does TruPulse secure communications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All connections are encrypted using industry standard methods. Each interactive session is also encrypted, and sessions are individually authorized."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to set up TruPulse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TruPulse can be set up in just a few minutes. There are just a few steps involved: 1) Connect to a data source, either by uploading an archive, or authorizing a connection to one of the supported services. 2) Apply any filters based on groups or other factors. 3) Choose analysis. 4) Allow some time to process the incoming data, then review the initial results."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take for TruPulse to generate insights?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TruPulse can produce insights within minutes of connecting to a data source. By default, historical data is analyzed to provide a baseline to work off of from day one."
      }
    },
    {
      "@type": "Question",
      "name": "Is TruPulse a SaaS product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, TruPulse is a SaaS solution."
      }
    }
  ]
};

export default function Trupulse() {
  return (
    <React.Fragment>
      <Head>
        <title>Employee Retention & People Analytics Tool</title>
        <meta
          name="description"
          content="TruPulse is the best employee retention platform. It performs realtime & continuous understanding of data & encourages a healthy work-life balance."
        />
        <link rel="canonical" href="https://scanta.io/trupulse" />
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does TruPulse replace employee surveys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surveys will always have a place in the employee feedback process, but TruPulse gives you something you don’t have with surveys and other feedback technologies, the ability to get a realtime understanding of employee morale, trending workplace topics and cultural health with one simple automated tool."
      }
    },
    {
      "@type": "Question",
      name: "How does TruPulse measure morale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TruPules detects and measures the key factors that are agreed to be indications of morale. By combining these factors we can derive a score that can be a reliable indignation of the relative morale of the organization."
      }
    },
    {
      "@type": "Question",
      name: "Can you measure the ROI using TruPulse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TruPulse tracks insights continuously so you always have a historical trend of where you were to begin with and where you stand now. Launch a program and check the results to determine if your programs are having the right effect."
      }
    },
    {
      "@type": "Question",
      name: "How does TruPulse protect employee privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tru-Pulse de-identifies communications before it analyzes them. It is designed to present group level insights on the employee experience, not individual insights."
      }
    },
    {
      "@type": "Question",
      name: "How does TruPulse secure communications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All connections are encrypted using industry standard methods. Each interactive session is also encrypted, and sessions are individually authorized."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to set up TruPulse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TruPulse can be set up in just a few minutes. There are just a few steps involved: 1) Connect to a data source, either by uploading an archive, or authorizing a connection to one of the supported services. 2) Apply any filters based on groups or other factors. 3) Choose analysis. 4) Allow some time to process the incoming data, then review the initial results."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take for TruPulse to generate insights?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TruPulse can produce insights within minutes of connecting to a data source. By default, historical data is analyzed to provide a baseline to work off of from day one."
      }
    },
    {
      "@type": "Question",
      name: "Is TruPulse a SaaS product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, TruPulse is a SaaS solution."
      }
    }
  ]
}`}
        </script>
        <meta
          property="og:title"
          content="Employee Retention & People Analytics Tool"
        />
        <meta property="og:url" content="https://scanta.io/trupulse" />
        <meta
          property="og:image"
          content="https://scanta.io/img/icons/ogGroup300.png"
        />
        <meta
          property="og:description"
          content="A conversational analysis platform that helps companies understand employee morale, trending topics and cultural health."
        />
        <link
          rel="image_src"
          href="https://scanta.io/img/icons/ogGroup300.png"
        ></link>
      </Head>
      <Header />
      <Styles />
      <ScrollToTop />
      <MainBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock cards={ServicesContent.cards2} />
      <FifthBlock />
      <Container>
        <SolutionBlock from="product" />
      </Container>
      <CompanyInfoBlock from="product" />
      <Footer fromWhere={"home"} />
    </React.Fragment>
  );
}
