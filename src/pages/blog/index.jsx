import React, { useEffect, useState } from "react";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/components/Footer";
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
  const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(posts);
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
};

export default function Home({ posts }) {
  console.log(posts);
  return (
    <React.Fragment>
      <div className="App">
        <ScrollToTop />
        <div style={{ margin: "2rem auto" }}>
          {/* <React.Suspense fallback={posts}> */}
          <Posts posts={posts} />
          {/* </React.Suspense> */}
          <Footer fromWhere={"blog"} />
        </div>
      </div>
    </React.Fragment>
  );
}
