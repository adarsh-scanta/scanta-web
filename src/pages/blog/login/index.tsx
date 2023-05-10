import LoginPage from "@/Components/Blog/LoginPage";
import MainBlock from "@/Components/FreeTrial/MainBlock";
import Footer from "@/Components/Footer";
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
