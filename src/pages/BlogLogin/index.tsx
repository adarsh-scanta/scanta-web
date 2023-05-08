import Footer from "../../components/Footer";
import LoginPage from "../../components/Blog/LoginPage"

const BlogLogin = () => {

    return (
        <><title>Login - Scanta</title>
        <meta name="description" content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools." />
        
            <LoginPage />
            <Footer fromWhere={"company"} />
        </>
    );
};

export default BlogLogin;
