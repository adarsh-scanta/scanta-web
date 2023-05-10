import { lazy } from "react";
import { Row } from "antd";
import Footer from "../../components/Footer";
const Container = lazy(() => import("../../common/Container"));

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Thankyou = () => {

    return (
        <>
            <title>Thank You! Your response has been recorded.</title>
            <meta name="description" content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools." />

            <ScrollToTop />

            <Container>
                <div style={{ width: "100%", minHeight: "50vh", marginTop: "12rem" }}>
                    <Row justify="center">
                        <img src="/img/icons/positive-vote.png" width="100px" alt="thankyou" />
                    </Row>
                    <Row justify="center">
                        <p style={{ color: "#441c68", margin: "1rem 0" }}>Thank You! Your response has been recorded.</p>
                    </Row>
                </div>
            </Container>
            <Footer fromWhere={"thankyou"} />

        </>
    );
};

export default Thankyou;
