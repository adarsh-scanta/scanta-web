import { useState, useEffect } from 'react';
import {  Button, Row, Skeleton } from "antd";
import { db } from '../../firebase';
import { collection, query, orderBy, onSnapshot, setDoc, doc } from 'firebase/firestore';
import Post from "../../components/Blog/Post";
import Footer from "../../components/Footer";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function BlogPreview() {
    const [posts, setPosts] = useState([] as any);
    const [currentPost, setCurrentPost] = useState({} as any);
    const [loading, setLoading] = useState(false);

    const [user] = useAuthState(auth);


    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('id'))
        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })

    }, [])

    useEffect(() => {

        setCurrentPost(
          posts.filter((post: any) =>
            post.data.title
              .toLowerCase()
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
    }, [posts])


    const handleSubmit = async (e: any) => {
        setLoading(true);
        e.preventDefault();

        try {
            await setDoc(doc(db, 'posts', currentPost?.id), {
                ...currentPost.data,
                isPublished: true
            })
            setLoading(false);

        } catch (err) {
            alert(err)
        }

    }



    const handleUnPublish = async (e: any) => {
        setLoading(true);
        e.preventDefault();
        try {
            await setDoc(doc(db, 'posts', currentPost?.id), {
                ...currentPost.data,
                isPublished: false
            })
            setLoading(false);
        } catch (err) {
            alert(err)
        }

    }
    const hasPublishAccess = (user: any) => {
        return user.email==="adarsh.scanta@gmail.com" || user.email=== "damini@scanta.io" || user.email=== "dirk@scanta.io" || user.email=== "satwant@scanta.io"
    }
    let content = new DOMParser().parseFromString(currentPost?.data?.content, 'text/html')
    return (
        <div className="App">
            <title>{`Preview - ${currentPost?.data?.title ?currentPost?.data?.title: "loading..." }`}</title>
      <meta name="description" content={`${content?.all[0].textContent?.slice(0, 100)}...`} />
            <div style={{ margin: "2rem auto" }}>
                {posts.length > 0 ? <>
                    <Post post={currentPost} />
                    {hasPublishAccess(user) && <Row justify="center">
                        <div style={{ width: "80%" }}>
                            {!currentPost?.data?.isPublished ? <Button onClick={handleSubmit} type="primary" loading={loading} style={{ marginRight: "5rem", maxWidth: "100px", height: "40px", padding: "0.5rem 0.5rem 1rem", borderRadius: "4px", background: "#eb7a02", border: "none", color: "#fff" }}>
                                <span style={{ fontSize: "1rem" }}>Publish</span>
                            </Button> :
                                <Button onClick={handleUnPublish} type="primary" loading={loading} style={{ marginRight: "5rem", maxWidth: "100px", height: "40px", padding: "0.5rem 0.5rem 1rem", borderRadius: "4px", background: "#eb7a02", border: "none", color: "#fff" }}>
                                    <span style={{ fontSize: "1rem" }}>Unpublish</span>
                                </Button>}
                        </div>
                    </Row>}
                </>
                    :
                    <div style={{ textAlign: "center", margin: "12rem auto 2rem" }}>
                        <Skeleton loading={true} active>
                        </Skeleton>
                    </div>
                }
                < Footer fromWhere={"blog"}/>
            </div>
        </div>
    );
}
export default BlogPreview;