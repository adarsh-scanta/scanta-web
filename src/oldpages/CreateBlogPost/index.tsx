import Footer from "../../components/Footer";
import BlogEditor from "../../components/Blog/BlogEditor"
import { auth  } from "../../firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const CreateBlogPost = () => {
    const router = useRouter();
    const [user] = useAuthState(auth);

    useEffect(() => {
        if(!user){
            router.push("/blog/login");
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
