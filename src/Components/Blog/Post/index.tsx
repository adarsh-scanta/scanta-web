"use client";
import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Row, Col, Pagination, Card, Skeleton, Avatar, Button } from "antd";
import { withTranslation } from "react-i18next";
import { RightBlockContainer } from "./styles";
import Container from "../../../common/Container";
import styles from "./index.module.css";
import { ClockCircleOutlined } from "@ant-design/icons";
import Content from "./Content";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { FacebookShareButton, FacebookIcon } from "react-share";
import {
  collection,
  doc,
  orderBy,
  onSnapshot,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase";
import moment from "moment";
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const parseOption = {
  replace: (domNode: any) => {
    if (domNode.attribs && domNode.attribs.class === "remove") {
      return <></>;
    }
  },
};
const format_date = (value) => {
  if (value) {
    return moment(String(value)).format("dddd, MMMM Do YYYY");
  }
};

const Posts = ({ post, from }: any) => {
  const { Meta } = Card;
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    try {
      await setDoc(doc(db, "posts", post?.id), {
        ...post.data,
        isPublished: true,
      });
      setLoading(false);
      alert("Blog Published Successfully");
      router.push("/blog/dashboard");
    } catch (err) {
      alert(err);
    }
  };

  const handleUnPublish = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      await setDoc(doc(db, "posts", post?.id), {
        ...post.data,
        isPublished: false,
      });
      setLoading(false);
      alert("Blog Unpublished Successfully");
      router.push("/blog/dashboard");
    } catch (err) {
      alert(err);
    }
  };
  const hasPublishAccess = (user: any) => {
    return (
      user?.email === "adarsh.scanta@gmail.com" ||
      user?.email === "damini@scanta.io" ||
      user?.email === "dirk@scanta.io" ||
      user?.email === "satwant@scanta.io"
    );
  };

  return (
    <RightBlockContainer>
      <Container>
        <div>
          <p
            id="intro"
            style={{
              color: "#2f327d",
              fontFamily: "Poppins bold",
              fontSize: "28px",
              fontWeight: "600",
              margin: "0 2rem 1rem",
            }}
          >
            {post?.data?.title}
          </p>
          <Row justify="start">
            <p
              style={{ color: "#333", fontSize: "1rem", margin: "0 2rem 2rem" }}
            >
              <ClockCircleOutlined
                style={{ fontSize: "1rem", margin: "0.2rem 0.5rem" }}
              />
              {format_date(new Date(post?.data?.created_at.seconds * 1000))}{" "}
            </p>
          </Row>{" "}
          <Row justify="center">
            <img
              src={post?.data?.cover_image}
              width="95%"
              alt={post?.data?.altTag}
            />
          </Row>
          {/* <Content content={post?.data?.content} /> */}
          <div className={styles.blog_content}>
            {parse(post?.data?.content ? post?.data?.content : "", parseOption)}
          </div>
          {post?.data?.tags !== "" && (
            <p style={{ color: "#696984", fontSize: "1rem", margin: "0 2rem" }}>
              <strong className="strng">Tags: </strong>{" "}
              {post?.data?.tags.split(",").join(", ")}
            </p>
          )}
        </div>
        {from === "preview" && hasPublishAccess(user) && (
          <Row justify="center">
            <div style={{ width: "100%" }}>
              {!post?.data?.isPublished ? (
                <Button
                  onClick={handleSubmit}
                  type="primary"
                  loading={loading}
                  style={{
                    margin: "2rem",
                    maxWidth: "100px",
                    height: "40px",
                    padding: "0.5rem 0.5rem 1rem",
                    borderRadius: "4px",
                    background: "#eb7a02",
                    border: "none",
                    color: "#fff",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>Publish</span>
                </Button>
              ) : (
                <Button
                  onClick={handleUnPublish}
                  type="primary"
                  loading={loading}
                  style={{
                    margin: "2rem",
                    maxWidth: "100px",
                    height: "40px",
                    padding: "0.5rem 0.5rem 1rem",
                    borderRadius: "4px",
                    background: "#eb7a02",
                    border: "none",
                    color: "#fff",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>Unpublish</span>
                </Button>
              )}
            </div>
          </Row>
        )}
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(Posts);
