"use client";
import BlogEditor from "@/Components/Blog/BlogEditor";
import LoginPage from "@/Components/Blog/LoginPage";
import MainBlock from "@/Components/FreeTrial/MainBlock";
import Footer from "@/components/Footer";
import { auth } from "@/firebase";
import { Styles } from "@/styles/styles";
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
      <Styles />
      <BlogEditor />
      <Footer fromWhere={"company"} />
    </React.Fragment>
  );
}
