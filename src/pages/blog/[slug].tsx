import React, { useEffect, useState } from "react";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Styles } from "@/styles/styles";
import { Skeleton } from "antd";
import Posts from "@/Components/Blog/Posts";
import parse from "html-react-parser";
import { db } from "../../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import Post from "@/Components/Blog/Post";
import Head from "next/head";
import {useRouter} from "next/router";

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  const { slug, category } = params;
  const postsRef = collection(db, "posts");
  const snapshot = await getDocs(postsRef);
  const posts = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
  const currentPost = posts.filter((post: any) =>
    post?.data?.customURL?.length > 3
      ? post?.data?.customURL === slug
      : post?.data?.title
          ?.toLowerCase()
          .replace(/[^a-zA-Z ]/g, "")
          .split(" ")
          .join("-")
          .includes(slug)
  )[0];
  return {
    props: {
      currentPost: currentPost?.data?.isPublished
        ? JSON.parse(JSON.stringify(currentPost))
        : {},
    },
  };
};

const parseOption = {
  replace: (domNode: any) => {
    if (domNode.attribs && domNode.attribs.class === "remove") {
      return <></>;
    }
  },
};

export default function Home({ currentPost }) {
    const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>{currentPost?.data?.metaTitle}</title>
        <meta
          name="description"
          content={
            currentPost?.data?.metaDes.length > 5
              ? currentPost?.data?.metaDes
              : parse(
                  currentPost?.data?.content ? currentPost?.data?.content : "",
                  parseOption
                )
          }
        />
        <link rel="canonical" href={`https://www.trupulse.ai${router.asPath}`} />
        <meta property="og:title" content={currentPost?.data?.metaTitle} />
        <meta
          property="og:url"
          content={`https://www.scanta.io${router.asPath}`}
        />
        <meta property="og:image" content={currentPost?.data?.cover_image} />
        <link rel="image_src" href={currentPost?.data?.cover_image} />
        <meta
          property="og:description"
          content={
            currentPost?.data?.metaDes.length > 5
              ? currentPost?.data?.metaDes
              : parse(
                  currentPost?.data?.content ? currentPost?.data?.content : "",
                  parseOption
                )
          }
        />
      </Head>
      <div className="App" style={{ margin: "2rem auto" }}>
        <Header />
        <Styles />
        <ScrollToTop />
        <div style={{ margin: " auto", background: "#eff0f7" }}>
          {currentPost?.data?.isPublished ? (
            <Post post={currentPost} from="blog" />
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
