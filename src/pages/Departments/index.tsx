import { lazy } from "react";
import MainBlock from "../../components/Departments/MainBlock";
import ExecutiveMgmtBlock from "../../components/Departments/ExecutiveMgmtBlock";
import HumanResourcesBlock from "../../components/Departments/HumanResourcesBlock";
import ITSecurityBlock from "../../components/Departments/ITSecurityBlock";
import LandCBlock from "../../components/Departments/LandCBlock";
const CompanyInfoBlock = lazy(
  () => import("../../components/CompanyInfoBlock")
);
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Departments = () => {


  return (
    <><title>TruPulse - Best Employee Experience Tool</title>
    <meta name="description" content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools." />
      {/* <Container> */}
      <ScrollToTop />
      <MainBlock />
      <ExecutiveMgmtBlock />
      <HumanResourcesBlock />
      <ITSecurityBlock />
      <LandCBlock />
      <CompanyInfoBlock color={"#fff"} />
    </>
  );
};

export default Departments;
