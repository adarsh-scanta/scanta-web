import BlogTable from "@/Components/Blog/BlogTable";
import LoginPage from "@/Components/Blog/LoginPage";
import MainBlock from "@/Components/FreeTrial/MainBlock";
import Footer from "@/components/Footer";
import { auth,db } from "@/firebase";
import { Styles } from "@/styles/styles";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function Trupulse() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [ctaClicksCount, setCtaClicksCount] = useState(0);
  const [ctaSubmits, setCtaSubmits] = useState(0);

//   const dbInstance = collection(database, "notes");

  useEffect(() => {
    if (!user) {
      router.push("/blog/login");
    }
  }, []);
    useEffect(() => {
      const q = query(collection(db, "stats"));
      onSnapshot(q, (querySnapshot) => {
        setCtaClicksCount(querySnapshot.docs[0].data().ctaClicksCount);
        setCtaSubmits(querySnapshot.docs[0].data().ctaSubmits);
      });
    }, []);

  return (
    <React.Fragment>
      <Styles />
      <div style={{ margin: "3rem 0 2rem", minHeight: "800px" }}>
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
    </React.Fragment>
  );
}
