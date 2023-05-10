"use client";
import BlogEditor from "@/components/Blog/BlogEditor";
import LoginPage from "@/components/Blog/LoginPage";
import MainBlock from "@/components/FreeTrial/MainBlock";
import Footer from "@/components/Footer";
import { auth } from "@/firebase";
import { Styles } from "@/styles/styles";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Trupulse() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) router.push("/blog/login");
  }, [user, loading]);

  return (
    <React.Fragment>
      <Head>
        <title>Create blog - Scanta</title>
      </Head>
      <Styles />
      <BlogEditor />
      <Footer fromWhere={"company"} />
    </React.Fragment>
  );
}
