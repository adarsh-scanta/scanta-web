import React from "react";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/components/Footer";
import Posts from "@/Components/Blog/Posts";
import { db } from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { GetServerSideProps } from "next";

export const getServerSideProps = async () => {
  const q = query(collection(db, "posts"), orderBy("id"));
  let posts = onSnapshot(q, (querySnapshot) =>
    querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))
  );
  return {
    props: { posts: "iqbal" },
  };
};

export default function Home({ posts }) {
  console.log(posts);
  return (
    <React.Fragment>
      <div className="App">
        <ScrollToTop />
        <div style={{ margin: "2rem auto" }}>
          <Posts posts={posts} />
          <Footer fromWhere={"blog"} />
        </div>
      </div>
    </React.Fragment>
  );
}
