import React, { useEffect, useState } from "react";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
} from "firebase/firestore";
import Post from "@/Components/Blog/Post";

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

export default function Home({ currentPost }) {
  return (
    <React.Fragment>
      <div className="App" style={{ margin: "2rem auto" }}>
        <Header />
        <Styles />
        <ScrollToTop />
        <div style={{ margin: " auto", background: "#eff0f7" }}>
          {currentPost?.data ? (
            <Post post={currentPost} />
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
