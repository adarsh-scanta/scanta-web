import React, { useEffect, useState } from "react";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Styles } from "@/styles/styles";
import { Skeleton } from "antd";
import Posts from "@/Components/Blog/Posts";
import { db } from "../../../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  setDoc,
} from "firebase/firestore";
import Post from "@/Components/Blog/Post";
import Head from "next/head";

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  const { slug, category } = params;
  const postsRef = collection(db, "posts");
  const snapshot = await getDocs(postsRef);
  const posts = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
  const currentPost = posts.filter((post: any) =>
    post.data.title
      ?.toLowerCase()
      .replace(/[^a-zA-Z ]/g, "")
      .split(" ")
      .join("-")
      .includes(slug)
  )[0];
  console.log(slug);
  return {
    props: {
      currentPost: JSON.parse(JSON.stringify(currentPost)),
    },
  };
};


  const hasPublishAccess = (user: any) => {
    return (
      user.email === "adarsh.scanta@gmail.com" ||
      user.email === "damini@scanta.io" ||
      user.email === "dirk@scanta.io" ||
      user.email === "satwant@scanta.io"
    );
  };

export default function Home({ currentPost }) {
  return (
    <React.Fragment>
      <Head>
        <title>Preview Blog - Scanta</title>
      </Head>
      <div className="App" style={{ margin: "2rem auto" }}>
        <Header />
        <Styles />
        <ScrollToTop />
        <div style={{ margin: " auto", background: "#eff0f7" }}>
          {currentPost?.data ? (
            <Post post={currentPost} from="preview"/>
          ) : (
            <div style={{ textAlign: "center", margin: "12rem auto 2rem" }}>
              <Skeleton loading={true} active></Skeleton>
            </div>
          )}
          <Footer fromWhere={"blog"} />
        </div>
      </div>
    </React.Fragment>
  );
}
