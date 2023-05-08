import  { useState, useEffect, lazy } from 'react';
import { db } from '../../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import Posts from "../../components/Blog/Posts"
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

function BlogPosts() {
    const [posts, setPosts] = useState([] as any)
    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('id'))
        onSnapshot(q, (querySnapshot) => {
            // console.log(q);
            // console.log(querySnapshot);
            setPosts(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (<>
      <Helmet>
            <title>Blog - Scanta</title>
    <meta name="description" content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools." />
    <link rel="canonical" href="https://scanta.io/blog"/>
      </Helmet>
        <div className="App">
                  <ScrollToTop />
            <div style={{ margin: "2rem auto", }}>
                <Posts posts={posts}/>
               < Footer fromWhere={"blog"}/>
            </div>
        </div>
    </>
    );
}
export default BlogPosts;