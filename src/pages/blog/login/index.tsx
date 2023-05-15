import LoginPage from "@/Components/Blog/LoginPage";
import { Styles } from "@/styles/styles";
import Head from "next/head";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/router";

export default function Trupulse() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      router.push("/blog/dashboard");
    }
  }, []);
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
