import React, { useEffect, useState } from "react";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Styles } from "@/styles/styles";
import { Skeleton } from "antd";
import Posts from "@/Components/Blog/Posts";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import Post from "@/Components/Blog/Post";
import EditBlogEditor from "@/Components/Blog/EditBlogEditor";
import { auth, db } from "@/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import Head from "next/head";

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  const { slug, category } = params;
  const postsRef = collection(db, "posts");
  const snapshot = await getDocs(postsRef);
  const posts = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
  const currentPost = posts.filter((post: any) => parseInt(post.data.id) === parseInt(slug))[0];
  console.log(currentPost);
  return {
    props: {
      currentPost: JSON.parse(JSON.stringify(currentPost)),
    },
  };
};

export default function Home({ currentPost }) {

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
        <title>Edit blog - Scanta</title>
      </Head>
      <div className="App" style={{ margin: "2rem auto" }}>
        <Header />
        <Styles />
        <EditBlogEditor post={currentPost} />
      </div>
      <Footer fromWhere={"company"} />
    </React.Fragment>
  );
}
