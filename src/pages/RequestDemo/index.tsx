import { lazy } from "react";
import MainBlock from "../../components/DemoRequest/MainBlock";
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Company = () => {
  return (
    <>
      <MainBlock />
    </>
  );
};

export default Company;
