import LoginPage from "@/components/Blog/LoginPage";
import ResetPassword from "@/components/Blog/ResetPassword";
import MainBlock from "@/components/FreeTrial/MainBlock";
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
