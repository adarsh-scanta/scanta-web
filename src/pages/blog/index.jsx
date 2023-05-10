import React, { useEffect, useState } from "react";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Styles } from "@/styles/styles";
import Posts from "@/Components/Blog/Posts";
import { db } from "../../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

export const getServerSideProps = async () => {

  const postsRef = collection(db, "posts");
  const snapshot = await getDocs(postsRef);
  const posts = snapshot.docs.map((doc) => ({ id: doc.id, data:doc.data() }));
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
};

export default function Home({ posts }) {
  return (
    <React.Fragment>
      <div className="App">
        <Header/>
        <Styles/>
        <ScrollToTop />
        <div style={{ margin: "2rem auto", background: "#eff0f7" }}>
          {/* <React.Suspense fallback={posts}> */}
          <Posts posts={posts} />
          {/* </React.Suspense> */}
          <Footer fromWhere={"blog"} />
        </div>
      </div>
    </React.Fragment>
  );
}
