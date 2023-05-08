import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { Row, Col } from "antd";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import BlogTable from "../../components/Blog/BlogTable";
import Footer from "../../components/Footer";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function BlogDashboard() {
  const history = useHistory();
  const [user] = useAuthState(auth);

  const [ctaClicksCount, setCtaClicksCount] = useState(0);
  const [ctaSubmits, setCtaSubmits] = useState(0);
  useEffect(() => {
    const q = query(collection(db, "stats"));
    onSnapshot(q, (querySnapshot) => {
      setCtaClicksCount(querySnapshot.docs[0].data().ctaClicksCount);
      setCtaSubmits(querySnapshot.docs[0].data().ctaSubmits);
    });
  }, []);

  useEffect(() => {
    if (!user) {
      history.push("/blog/login");
    }
  }, []);

  return (
    <div className="App">
      <title>Dashboard - Scanta blog</title>
      <meta
        name="description"
        content="TruPulse is a listening platform for real-time understanding of company morale, trending topics and corporate culture with the best employee experience tools."
      />
      <div style={{ margin: "10rem 0 2rem", minHeight: "800px" }}>
        <p style={{ padding: "0 60px", fontWeight: "bold" }}>Dashboard</p>
        <div
          style={{
            padding: "0 60px",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          <Row>
            <Col xl={4} md={11} xs={22}>
              <div
                style={{
                  boxShadow: "0px 3px 8px -2px rgba(0,0,0,0.62)",
                  width: "130px",
                  height: "140px",
                  background: "#fff",
                  borderRadius: "8px",
                  margin: "1rem",
                  padding: "0.5rem",
                }}
              >
                <div style={{ position: "relative", top: "2.5rem" }}>
                  <p style={{ margin: "auto", textAlign: "center" }}>
                    {ctaClicksCount}
                  </p>
                  <p
                    style={{
                      margin: "auto",
                      textAlign: "center",
                      fontSize: "0.8rem",
                      alignItems: "center",
                    }}
                  >
                    CTA clicks
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={4} md={11} xs={22}>
              <div
                style={{
                  boxShadow: "0px 3px 8px -2px rgba(0,0,0,0.62)",
                  width: "130px",
                  height: "140px",
                  background: "#fff",
                  borderRadius: "8px",
                  margin: "1rem",
                  padding: "0.5rem",
                }}
              >
                <div style={{ position: "relative", top: "2.5rem" }}>
                  <p style={{ margin: "auto", textAlign: "center" }}>
                    {ctaSubmits}
                  </p>
                  <p
                    style={{
                      margin: "auto",
                      textAlign: "center",
                      fontSize: "0.8rem",
                      alignItems: "center",
                    }}
                  >
                    Submits
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <BlogTable />
        <Footer fromWhere={"blog"} />
      </div>
    </div>
  );
}
export default BlogDashboard;
