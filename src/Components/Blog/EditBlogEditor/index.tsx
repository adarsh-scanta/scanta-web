"use client";
import { useMemo, useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { RightBlockContainer } from "./styles";
import Container from "../../../common/Container";
import { useEffect } from "react";
import { Quill } from "react-quill";
import styles from "./index.module.css";
import "react-quill/dist/quill.snow.css";
import { Button, Input } from "antd";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  doc,
  orderBy,
  onSnapshot,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase";
import dynamic from "next/dynamic";
const fontSizeArr = [
  "21px",
  "8px",
  "9px",
  "10px",
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
  "42px",
  "54px",
  "68px",
  "84px",
  "98px",
];

// if (typeof document !== "undefined") {
//   var Size = Quill.import("attributors/style/size");
//   var Bold = Quill.import("formats/bold");
//   Bold.tagName = "B"; // Quill uses <strong> by default
//   Quill.register(Bold, true);
//   Size.whitelist = fontSizeArr;
//   Quill.register(Size, true);
// }

const { Search } = Input;

const EditBlogEditor = ({ post }: any) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [tags, setTags] = useState([] as any);
  const [file, setFile] = useState({} as any);
  const [coverImage, setCoverImage] = useState("");
  const [altTag, setAltTag] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [customURL, setCustomURL] = useState("");
  // progress
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setTitle(post?.data?.title);
    setContent(post?.data?.content);
    setTags(post?.data?.tags.split(","));
    setCoverImage(post?.data?.cover_image);
    setAltTag(post?.data?.altTag);
    setMetaTitle(post?.data?.metaTitle);
    setMetaDescription(post?.data?.metaDes);
    setCustomURL(post?.data?.customURL);
  }, [post]);
  const modules = {
    toolbar: [
      //   [{ header: [1, 2, 3, false] }],
      [{ font: [] }],
      [{ size: fontSizeArr }],
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block", "link"],
      ["image"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  };
  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  function uniq(a: any) {
    return a.sort().filter(function (item: any, pos: any, ary: any) {
      return !pos || item != ary[pos - 1];
    });
  }
  const onSearch = (value: string) => {
    const temp: any[] = tags;
    temp.push(value);
    setTags(uniq(temp));
  };

  const onDelete = (id: any, item: any) => {
    const temp: any[] = tags;
    const temp2 = temp.splice(id, 1);
    setTags(uniq(temp));
  };

  // Handle file upload event and update state
  function handleChange(event: any) {
    event.preventDefault();
    setFile(event.target.files[0]);
  }

  const handleUpload = (e: any) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setCoverImage(url);
        });
      }
    );
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (title === "") {
      alert("Please Enter Title");
    } else if (coverImage === "") {
      alert("Please Upload Cover Image");
    } else if (content === "") {
      alert("Please Add Content");
    } else {
      try {
        await setDoc(doc(db, "posts", post?.id), {
          id: parseInt(post?.data?.id),
          title: title,
          cover_image: coverImage,
          content: content,
          altTag: altTag,
          metaTitle: metaTitle,
          metaDes: metaDescription,
          customURL: customURL
            .toLowerCase()
            .replace(/[^a-zA-Z ]/g, "")
            .split(" ")
            .join("-"),
          tags: tags.join(","),
          created_at: serverTimestamp(),
          isPublished: post?.data?.isPublished,
        });
        alert("Blog updated successfully");
        setLoading(false);
        setTitle("");
        setCoverImage("");
        setContent("");
        setAltTag("");
        setMetaTitle("");
        setMetaDescription("");
        setTags([]);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <RightBlockContainer id="blog-editor">
      <Container>
        <p
          style={{
            color: "#2f327d",
            fontFamily: "Poppins bold",
            fontSize: "28px",
            fontWeight: "600",
            marginTop: "2rem 2rem 0",
          }}
        >
          Edit Post
        </p>
        <Row justify="space-between">
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <form>
              <label style={{ fontSize: "1.1rem" }}>Title:</label>
              <Input
                placeholder="Enter Title Here"
                style={{ margin: "0 0 0.5rem" }}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />

              <label style={{ fontSize: "1.1rem" }}>Cover Image:</label>
              <br />
              <a href={coverImage} target="_blank">{`${coverImage?.slice(
                0,
                70
              )}...`}</a>
              <input type="file" onChange={handleChange} accept="/image/*" />
              <div>
                <button
                  onClick={handleUpload}
                  style={{
                    background: "#eb7a02",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.3rem 0.5rem",
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Upload Image
                </button>
                {percent > 0 && <p style={{ fontSize: "14px" }}>{percent}%</p>}
              </div>
              <label style={{ fontSize: "1.1rem" }}>Image Alt Tags:</label>
              <Input
                placeholder="Enter Alt Tag Here"
                value={altTag}
                style={{ margin: "0 0 0.5rem" }}
                onChange={(e) => {
                  setAltTag(e.target.value);
                }}
              />
              <label style={{ fontSize: "1.1rem" }}>Meta Title:</label>
              <Input
                placeholder="Enter Meta Title Here"
                value={metaTitle}
                style={{ margin: "0 0 0.5rem" }}
                onChange={(e) => {
                  setMetaTitle(e.target.value);
                }}
              />
              <label style={{ fontSize: "1.1rem" }}>Meta Description:</label>
              <Input
                placeholder="Enter Meta Description Here"
                value={metaDescription}
                style={{ margin: "0 0 0.5rem" }}
                onChange={(e) => {
                  setMetaDescription(e.target.value);
                }}
              />
              <label style={{ fontSize: "1.1rem" }}>Custom Url:</label>
              <Input
                placeholder="Enter Custom URL Here"
                value={customURL}
                style={{ margin: "0 0 0.5rem" }}
                onChange={(e) => {
                  setCustomURL(e.target.value);
                }}
              />
              <label style={{ fontSize: "1.1rem", margin: "1.5rem 0" }}>
                Content:
              </label>
              <br />
              <ReactQuill
                theme="snow"
                placeholder="Enter your rich text edtior"
                modules={modules}
                value={content}
                onChange={setContent}
                style={{
                  background: "#fff",
                  margin: "0 0 1rem",
                  minHeight: "450px",
                }}
              />
            </form>
          </Col>
          <Col xs={24} sm={24} md={24} lg={7} xl={7}>
            <div
              style={{
                width: "80%",
                height: "500px",
                background: "#fff",
                margin: "1rem 0",
                padding: "1rem",
                overflowY: "auto",
              }}
            >
              <p style={{ fontSize: "1rem" }}>Tags</p>
              <Search
                placeholder="Add tags"
                allowClear
                enterButton="Add"
                size="large"
                onSearch={onSearch}
              />
              <div style={{ margin: "2rem 0" }}>
                {tags?.map((item: any, id: any) => (
                  <div>
                    <Row justify="space-between">
                      <p style={{ margin: "0.5rem 1rem", fontSize: "1rem" }}>
                        {item}
                      </p>
                      <span style={{ margin: "0 1rem" }}>
                        <DeleteOutlined
                          onClick={(item) => {
                            onDelete(id, item);
                          }}
                        />
                      </span>
                    </Row>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row justify="end">
          <Button
            onClick={handleSubmit}
            type="primary"
            loading={loading}
            style={{
              marginRight: "5rem",
              maxWidth: "100px",
              height: "40px",
              padding: "0.5rem 0.5rem 1rem",
              borderRadius: "4px",
              background: "#eb7a02",
              border: "none",
              color: "#fff",
            }}
          >
            <span style={{ fontSize: "1rem" }}>Submit</span>
          </Button>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(EditBlogEditor);
