"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "antd";
import { db } from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import Post from "../../components/Blog/Post";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import ScrollToTop from "@/common/ScrollToTop";


function BlogFullPost() {
  const [posts, setPosts] = useState([] as any);
  const [currentPost, setCurrentPost] = useState({} as any);
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("id"));
    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  useEffect(() => {
    setCurrentPost(
      posts.filter((post: any) =>
        post.data.title
          ?.toLowerCase()
          .replace(/[^a-zA-Z ]/g, "")
          .split(" ")
          .join("-")
          .includes(
            window.location.pathname.split("/")[
              window.location.pathname.split("/").length - 1
            ]
          )
      )[0]
    );
  }, [posts]);
  let content = new DOMParser().parseFromString(
    currentPost?.data?.content,
    "text/html"
  );

  console.log(currentPost);
  return (
    <div className="App">
      <ScrollToTop />
      <Helmet>
        <title>{`${
          currentPost?.data?.metaTitle
            ? currentPost?.data?.metaTitle
            : currentPost?.data?.title
            ? currentPost?.data?.title
            : "loading..."
        }`}</title>
        <meta name="description" content={currentPost?.data?.metaDes} />
        <link rel="canonical" href={window.location.href} />
        post?.data?.cover_image
        <meta property="og:image" content={currentPost?.data?.cover_image} />
        <link rel="image_src" href={currentPost?.data?.cover_image} />
      </Helmet>
      <div style={{ margin: "2rem auto" }}>
        {currentPost?.data?.isPublished ? (
          <Post post={currentPost} />
        ) : (
          <div style={{ textAlign: "center", margin: "12rem auto 2rem" }}>
            <Skeleton loading={true} active></Skeleton>
          </div>
        )}
        <Footer fromWhere={"blog"} />
      </div>
    </div>
  );
}
export default BlogFullPost;
