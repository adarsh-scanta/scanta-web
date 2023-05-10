import LoginPage from "@/components/Blog/LoginPage";
import MainBlock from "@/components/FreeTrial/MainBlock";
import Footer from "@/components/Footer";
import { Styles } from "@/styles/styles";
import Head from "next/head";
import React from "react";

export default function Trupulse() {
  return (
    <React.Fragment>
      <Head>
        <title>Login - Scanta</title>
      </Head>
      <Styles />
      <LoginPage />
      {/* <Footer fromWhere={"company"} /> */}
    </React.Fragment>
  );
}
