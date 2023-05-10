import React from "react";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/components/Footer";
import Posts from "@/Components/Blog/Posts";
import { db } from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export const getServerSideProps = async () => {
  // const resultRef = db.collection("posts").get();
  // const results = resultRef.docs.map((doc) => ({
  //   id: doc.id,
  //   data: doc.data(),
  // }));
  // const q = query(collection(db, "posts"), orderBy("id"));
  // const posts = () =>
  //   onSnapshot(q, (querySnapshot) =>
  //     querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       data: doc.data(),
  //     }))
  //   );
  // console.log(posts, "aa");
  return {
    props: { posts: JSON.parse(JSON.stringify([])) },
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
