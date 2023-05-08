import Footer from "../../components/Footer";
import BlogEditor from "../../components/Blog/BlogEditor"
import { auth  } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const CreateBlogPost = () => {
    const history = useHistory();
    const [user] = useAuthState(auth);

    useEffect(() => {
        if(!user){
            history.push("/blog/login")
        }
    },[])
    return (
        <>
        <title>Add new Blog - Scanta</title>
      <meta name="description" content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools." />
            <BlogEditor />
            <Footer fromWhere={"company"} />
        </>
    );
};

export default CreateBlogPost;
