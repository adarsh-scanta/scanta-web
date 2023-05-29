import { lazy } from "react";
import MainBlock from "../../components/Product/MainBlock";
import SecondBlock from "../../components/Product/SecondBlock";
import ThirdBlock from "../../components/Product/ThirdBlock";
import FourthBlock from "../../components/Product/FourthBlock";
import FifthBlock from "../../components/Product/FifthBlock";
import ServicesContent from "../../content/ServicesContent.json";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
const SolutionBlock = lazy(() => import("../../components/SolutionBlock"));
const Container = lazy(() => import("../../common/Container"));
const CompanyInfoBlock = lazy(
  () => import("../../components/CompanyInfoBlock")
);

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does TruPulse replace employee surveys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surveys will always have a place in the employee feedback process, but TruPulse gives you something you don’t have with surveys and other feedback technologies, the ability to get a realtime understanding of employee morale, trending workplace topics and cultural health with one simple automated tool.",
      },
    },
    {
      "@type": "Question",
      name: "How does TruPulse measure morale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TruPules detects and measures the key factors that are agreed to be indications of morale. By combining these factors we can derive a score that can be a reliable indignation of the relative morale of the organization.",
      },
    },
    {
      "@type": "Question",
      name: "Can you measure the ROI using TruPulse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TruPulse tracks insights continuously so you always have a historical trend of where you were to begin with and where you stand now. Launch a program and check the results to determine if your programs are having the right effect.",
      },
    },
    {
      "@type": "Question",
      name: "How does TruPulse protect employee privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tru-Pulse de-identifies communications before it analyzes them. It is designed to present group level insights on the employee experience, not individual insights.",
      },
    },
    {
      "@type": "Question",
      name: "How does TruPulse secure communications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All connections are encrypted using industry standard methods. Each interactive session is also encrypted, and sessions are individually authorized.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to set up TruPulse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TruPulse can be set up in just a few minutes. There are just a few steps involved: 1) Connect to a data source, either by uploading an archive, or authorizing a connection to one of the supported services. 2) Apply any filters based on groups or other factors. 3) Choose analysis. 4) Allow some time to process the incoming data, then review the initial results.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take for TruPulse to generate insights?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TruPulse can produce insights within minutes of connecting to a data source. By default, historical data is analyzed to provide a baseline to work off of from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Is TruPulse a SaaS product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, TruPulse is a SaaS solution.",
      },
    },
  ],
};

const Company = ({ openModal, isModalVisible, closeModal }: any) => {
  return (
    <>
      <Helmet>
        <title>Employee Retention & People Analytics Tool</title>
        <meta
          name="description"
          content="TruPulse is the best employee retention platform. It performs realtime & continuous understanding of data & encourages a healthy work-life balance."
        />
        <link rel="canonical" href="https://scanta.io/trupulse" />
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      </Helmet>
      {/* <Container> */}
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
    </>
  );
};

export default Company;
