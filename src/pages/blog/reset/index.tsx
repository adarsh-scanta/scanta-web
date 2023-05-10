import LoginPage from "@/Components/Blog/LoginPage";
import ResetPassword from "@/Components/Blog/ResetPassword";
import MainBlock from "@/Components/FreeTrial/MainBlock";
import { Styles } from "@/styles/styles";
import Head from "next/head";
import React from "react";

export default function Trupulse() {
  return (
    <React.Fragment>
      <Head>
        <title>Reset Password - Scanta</title>
      </Head>
      <Styles />
      <ResetPassword />
      {/* <Footer fromWhere={"company"} /> */}
    </React.Fragment>
  );
}
