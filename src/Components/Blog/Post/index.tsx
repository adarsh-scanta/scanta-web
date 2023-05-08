import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Row, Col, Pagination, Card, Skeleton, Avatar } from "antd";
import { withTranslation } from "react-i18next";
import { RightBlockContainer } from "./styles";
import Container from "../../../common/Container";
import "./index.css";
import { ClockCircleOutlined } from "@ant-design/icons";
import Content from "./Content";
import parse from "html-react-parser";
import { FacebookShareButton, FacebookIcon } from "react-share";
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
const Posts = ({ post }: any) => {
  const { Meta } = Card;
  const history = useHistory();

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
              {post?.data?.created_at
                .toDate()
                .toString()
                .split(" ")
                .slice(0, 5)
                .join(" ")}{" "}
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
          
          <div className="blog-content">
            {parse(post?.data?.content ? post?.data?.content : "", parseOption)}
          </div>
          {post?.data?.tags !== "" && (
            <p style={{ color: "#696984", fontSize: "1rem", margin: "0 2rem" }}>
              <strong>Tags: </strong> {post?.data?.tags.split(",").join(", ")}
            </p>
          )}
        </div>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(Posts);
