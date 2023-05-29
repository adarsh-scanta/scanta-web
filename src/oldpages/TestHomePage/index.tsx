import { lazy } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { SplashArt2 } from "../../assets/arts/SplashArt";
const Container = lazy(() => import("../../common/Container"));
const IntroBlock = lazy(() => import("../../components/IntroBlock"));
const AboutBlock = lazy(() => import("../../components/AboutBlock"));
const Test = lazy(
  () => import("../../components/Test")
);
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Home = () => {
  const SplashIcon = styled("div")`
width: 100%;
position: relative; 
left: 45%;
 bottom: 7rem;
@media only screen and (max-width: 1079px) {
   display: none; 
`;

  const articleStructuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Scanta",
    url: "https://scanta.io/",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Helmet>
        <title>TruPulse - Best Employee Experience Tool</title>
        <meta
          name="description"
          content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools."
        />
        <link rel="canonical" href={"https://scanta.io/"} />
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      </Helmet>
      <ScrollToTop />
      <IntroBlock id="intro" />
      <Container>
        <SplashIcon>
          <SplashArt2 />
        </SplashIcon>
        <AboutBlock />
      </Container>
      <Test from="testHome" />
      <Footer fromWhere={"home"} />
    </>
  );
};

export default Home;
