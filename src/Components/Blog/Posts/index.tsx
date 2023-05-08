import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Row, Col, Pagination, Card, Skeleton, Avatar } from "antd";
import { withTranslation } from "react-i18next";
import { RightBlockContainer } from "./styles";
import Container from "../../../common/Container";
// import "./index.css";
import { ClockCircleOutlined } from '@ant-design/icons';

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const Posts = ({ posts }: any) => {
    const { Meta } = Card;
const history = useHistory();
    const loadingPosts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const [page, setPage] = useState(1)
    const [minIndex, setMinIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(9);
const [publishedPosts, setPublishedPosts] = useState([]);

useEffect(()=>{ 
    setPublishedPosts(posts.filter((item: any)=>item.data.isPublished));
},[posts])

    useEffect(() => {
        if (page === 1) {
            setMinIndex(0);
            setMaxIndex(9);
        } else if (page === 2) {
            setMinIndex(9);
            setMaxIndex(18);
        } else if (page === 3) {
            setMinIndex(18);
            setMaxIndex(27);
        } else if (page === 4) {
            setMinIndex(27);
            setMaxIndex(36);
        } else if (page === 5) {
            setMinIndex(36);
            setMaxIndex(45);
        }
    }, [page])

    const handleClick = (data: any) =>{
        history.push(
          `blog/${data.title
            .toLowerCase()
            .replace(/[^a-zA-Z ]/g, "")
            .split(" ")
            .join("-")}`
        );
        (window as { [key: string]: any })["track_load"](
          `blog/${data.title
            .toLowerCase()
            .replace(/[^a-zA-Z ]/g, "")
            .split(" ")
            .join("-")}`,
          `Blog-${data.title}`
        );
    }
    return (
        <RightBlockContainer id="intro">
            <Container>
                <p style={{ color: "#2f327d", fontFamily: "Poppins bold", fontSize: "28px",margin:"0 2rem 2rem"  }}>Blog</p>
                <Row justify="start">
                    {publishedPosts.length > 0 ? publishedPosts.sort((a:any, b:any) => (a.data.created_at.seconds > b.data.created_at.seconds ? 1 : -1)).reverse().slice(minIndex, maxIndex).map((item: any) => {
                        let doc = new DOMParser().parseFromString(item.data.content, 'text/html')
                        return (
                          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <Row justify="center">
                              <Card
                                hoverable
                                style={{
                                  width: 350,
                                  height: 450,
                                  marginBottom: 36,
                                }}
                                cover={
                                  <img
                                    alt={item.data.title}
                                    style={{
                                      width: "100%",
                                      height: "225px",
                                      marginBottom: 16,
                                    }}
                                    src={item.data.cover_image}
                                  />
                                }
                                onClick={() => handleClick(item?.data)}
                              >
                                <Meta
                                  style={{ color: "#000" }}
                                  title={item.data.title}
                                  description={`${doc?.all[0].textContent?.slice(
                                    0,
                                    100
                                  )}...`}
                                />
                                <hr style={{ margin: "1rem 0 1rem" }} />
                                <Row justify="start">
                                  <ClockCircleOutlined
                                    style={{
                                      fontSize: "1rem",
                                      margin: "0.2rem 0.5rem",
                                    }}
                                  />
                                  <p
                                    style={{ color: "#333", fontSize: "1rem" }}
                                  >
                                    {item?.data?.created_at
                                      .toDate()
                                      .toString()
                                      .split(" ")
                                      .slice(0, 4)
                                      .join(" ")}{" "}
                                  </p>
                                </Row>
                              </Card>
                            </Row>
                          </Col>
                        );
                    })
                        : loadingPosts.slice(0, 9).map((item: any) => (
                            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                                <Row justify="center">
                                    <Card
                                        style={{ width: 350, marginBottom: 36, height: 380, padding: "2rem 1rem" }}>
                                        <Skeleton loading={true} avatar active>
                                        </Skeleton>

                                    </Card>
                                </Row>
                            </Col>
                        ))}
                </Row>
                <div style={{ margin: "2rem 0" }}>
                    <Row justify="center">
                        <Pagination
                            defaultCurrent={1}
                            current={page}
                            total={posts.length}
                            onChange={(value) => setPage(value)}
                        />
                    </Row>
                </div>
            </Container>
        </RightBlockContainer>
    );
};

export default withTranslation()(Posts);
