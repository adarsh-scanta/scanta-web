import { lazy } from "react";
import ContactBlock from "../../components/Company/ContactBlock";
import MainBlock from "../../components/Company/MainBlock";
import StoryBlock from "../../components/Company/StoryBlock";
import AdvisorBlock from "../../components/Company/AdvisorBlock";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Company = () => {

  return (
    <>
      <Helmet>
        <title>Scanta</title>
        <meta name="description" content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools." />
        <link rel="canonical" href="https://scanta.io/company" />
      </Helmet>
      <ScrollToTop />
      <MainBlock />
      <StoryBlock />
      <AdvisorBlock />
      <ContactBlock />
      <Footer fromWhere={"company"} />
    </>
  );
};

export default Company;
