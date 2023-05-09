"use client";
import Image from "next/image";
import React, {useState, useEffect} from "react";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/components/Footer";
import Posts from "@/Components/Blog/Posts";
import { db } from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";


export default function Home() {
  
  const [posts, setPosts] = useState([] as any);
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("id"));
    onSnapshot(q, (querySnapshot) => {
      // console.log(q);
      // console.log(querySnapshot);
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
