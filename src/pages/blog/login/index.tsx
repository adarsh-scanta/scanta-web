import LoginPage from "@/Components/Blog/LoginPage";
import MainBlock from "@/Components/FreeTrial/MainBlock";
import Footer from "@/components/Footer";
import { Styles } from "@/styles/styles";
import React from "react";

export default function Trupulse() {
  return (
    <React.Fragment>
      <Styles />
      <LoginPage />
      {/* <Footer fromWhere={"company"} /> */}
    </React.Fragment>
  );
}
