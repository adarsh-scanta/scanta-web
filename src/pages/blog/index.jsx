import React, { useEffect, useState } from "react";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
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
import Head from "next/head";



// export const getServerSideProps = async () => {
//   const postsRef = collection(db, "posts");
//   const snapshot = await getDocs(postsRef);
//   const posts = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
//   return {
//     props: {
//       posts: JSON.parse(JSON.stringify(posts)),
//     },
//   };
// };

export default function Home() {

   const [posts, setPosts] = useState([]);
   const [sortedPosts, setSortedPosts] = useState([]);
   useEffect(() => {
     setSortedPosts(
       posts?.sort(
         (a, b) => b.data.created_at.seconds - a.data.created_at.seconds
       )
     );
   }, [posts]);
   useEffect(() => {
     const q = query(collection(db, "posts"));
     onSnapshot(q, (querySnapshot) => {
       // const temp
       setPosts(
         querySnapshot.docs.map((doc) => ({
           id: doc.id,
           data: doc.data(),
         }))
       );
     });
   }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Blog - Scanta</title>
        <meta
          name="description"
          content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools."
        />
        <link rel="canonical" href="https://scanta.io/blog" />
        <meta
          property="og:title"
          content="TruPulse - Best Employee Experience Tool"
        />
        <meta property="og:url" content="https://www.scanta.io" />
        <meta
          property="og:image"
          content="https://www.scanta.io/img/icons/ogGroup300.png"
        />
        <meta
          property="og:description"
          content="A conversational analysis platform that helps companies understand employee morale, trending topics and cultural health."
        />
        <link
          rel="image_src"
          href="https://www.scanta.io/img/icons/ogGroup300.png"
        ></link>
      </Head>
      <div className="App">
        <Header />
        <Styles />
        <ScrollToTop />
        <div style={{ margin: "2rem auto", background: "#eff0f7" }}>
          {/* <React.Suspense fallback={posts}> */}
          <Posts posts={sortedPosts} />
          {/* </React.Suspense> */}
          <Footer fromWhere={"blog"} />
        </div>
      </div>
    </React.Fragment>
  );
}
