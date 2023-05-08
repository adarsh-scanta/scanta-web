import  { useState, useEffect } from 'react';
import Footer from "../../components/Footer";
import EditBlogEditor from "../../components/Blog/EditBlogEditor"
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from '../../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const EditBlogPost = () => {
    const history = useHistory();
    const [user] = useAuthState(auth);

    const [posts, setPosts] = useState([] as any);
    const [currentPost, setCurrentPost] = useState({} as any);
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
            posts.filter((post: any) => post.data.id == window.location.pathname.split("/")[
                window.location.pathname.split("/").length - 1])[0]
        )
    }, [posts])

    useEffect(() => {
        if (!user) {
            history.push("/blog/login")
        } else {
        }
    }, [])


    return (
        <><title>Blog Editor - Scanta</title>
        <meta name="description" content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools." />
        
            <EditBlogEditor post={currentPost}/>
            <Footer fromWhere={"company"} />
        </>
    );
};

export default EditBlogPost;
