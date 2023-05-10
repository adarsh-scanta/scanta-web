"use client";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
// import './index.css';
import { useRouter } from "next/router";
import Link from "next/link";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Container from "../../../common/Container";
import { db } from "../../../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";

interface DataType {
  key: string;
  title: string;
  age: number;
  address: string;
  tags: string[];
  uid: string;
  id: number;
}

const BlogTable: React.FC = () => {
  const router = useRouter();

  const columns: ColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Published",
      dataIndex: "isPublished",
      key: "isPublished",
      render: (isPublished) => <a>{isPublished ? "Yes" : "No"}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              router.push(`/blog/post/edit/${record.id}`);
            }}
          >
            Edit
          </a>
          <a
            onClick={() => {
              router.push(
                `/blog/preview/${record.title
                  .toLowerCase()
                  .replace(/[^a-zA-Z ]/g, "")
                  .split(" ")
                  .join("-")}`
              );
            }}
          >
            Preview
          </a>
          <a
            onClick={() => {
              deleteDoc(doc(db, "posts", record.uid));
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];

  const [posts, setPosts] = useState([] as any);
  useEffect(() => {
    const q = query(collection(db, "posts"));
    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  function extract(li: any) {
    const someArray = [] as any;
    li.forEach((item: any) => {
      const t = { ...item.data, uid: item.id };
      someArray.push(t);
    });
    return someArray;
  }
  return (
    <>
      <Container>
        <Link href="/blog/post/create">
          <p style={{ fontSize: "1rem", maxWidth: "300px" }}>+Add new post</p>
        </Link>
        <Table columns={columns} dataSource={extract(posts)} />
      </Container>
    </>
  );
};

export default BlogTable;
