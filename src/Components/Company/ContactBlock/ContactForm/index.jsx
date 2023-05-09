"use client";
import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "antd";
import ZapierForm from "react-zapier-form";
import { useCalendlyEventListener, PopupWidget } from "react-calendly";
import { collection, setDoc, doc, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  const history = useHistory();
  const [ctaClicksCount, setCtaClicksCount] = useState(0);
  const [ctaSubmits, setCtaSubmits] = useState(0);
  // const [calendlyDuration, setCalendlyDuration] = useState(15);
  useEffect(() => {
    const q = query(collection(db, "stats"));
    onSnapshot(q, (querySnapshot) => {
      setCtaClicksCount(querySnapshot.docs[0].data().ctaClicksCount);
      setCtaSubmits(querySnapshot.docs[0].data().ctaSubmits);
    });
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const statsUpdate = async () => {
    if (ctaClicksCount > 0) {
      try {
        await setDoc(doc(db, "stats", "P0kHUuxV7HZvSA7XrcHh"), {
          ctaClicksCount: ctaClicksCount,
          ctaSubmits: ctaSubmits + 1,
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <div style={{ padding: "1rem", minHeight: "410px" }}>
      <Row justify="center"></Row>
      <ZapierForm action="https://hooks.zapier.com/hooks/catch/14238222/bj1e0wg/">
        {({ error, loading, success }) => {
          if (success) {
            history.push("thankyou");
            statsUpdate();
          }
          return (
            <div>
              {!success && !loading && (
                <div>
                  <Row justify="center">
                    <Col lg={11} md={11} sm={22} xs={22}>
                      <div
                        style={{
                          margin: "0.8rem",
                          borderRadius: "15.3407px",
                          border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="First name"
                          name="first_name"
                          required
                          style={{
                            padding: "0.8rem",
                            backgroundColor: "#fff",
                            borderRadius: "15.3407px",
                          }}
                          value={firstName}
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                        ></input>
                      </div>
                    </Col>
                    <Col lg={11} md={11} sm={22} xs={22}>
                      <div
                        style={{
                          margin: "0.8rem",
                          borderRadius: "15.3407px",
                          border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Last name"
                          required
                          name="last_name"
                          style={{
                            padding: "0.8rem",
                            backgroundColor: "#fff",
                            borderRadius: "15.3407px",
                          }}
                          value={lastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                        ></input>
                      </div>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <div
                      style={{
                        margin: "0.8rem 1.8rem",
                        width: "100%",
                        borderRadius: "15.3407px",
                        border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Job title"
                        name="job_title"
                        required
                        style={{
                          width: "100%",
                          padding: "0.8rem",
                          backgroundColor: "#fff",
                          borderRadius: "15.3407px",
                        }}
                      ></input>
                    </div>
                  </Row>
                  <Row justify="center">
                    <div
                      style={{
                        margin: "0.8rem 1.8rem",
                        width: "100%",
                        borderRadius: "15.3407px",
                        border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        name="user_email"
                        style={{
                          width: "100%",
                          padding: "0.8rem",
                          backgroundColor: "#fff",
                          borderRadius: "15.3407px",
                        }}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
                      ></input>
                    </div>
                  </Row>
                  <Row justify="center">
                    <div
                      style={{
                        margin: "0.8rem 1.8rem",
                        width: "100%",
                        borderRadius: "15.3407px",
                        border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Company"
                        name="user_company"
                        required
                        style={{
                          width: "100%",
                          padding: "0.8rem",
                          backgroundColor: "#fff",
                          borderRadius: "15.3407px",
                        }}
                      ></input>
                    </div>
                  </Row>
                  {/* <Row justify="center">
                    <Col lg={11} md={11} sm={22} xs={22}>
                      <div
                        style={{
                          margin: "0.8rem",
                          borderRadius: "15.3407px",
                          border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <input
                          type="number"
                          name="emp_number"
                          placeholder="No. of Employees"
                          required
                          style={{
                            padding: "0.8rem",
                            backgroundColor: "#fff",
                            borderRadius: "15.3407px",
                          }}
                        ></input>
                      </div>
                    </Col>
                    <Col lg={11} md={11} sm={22} xs={22}>
                      <div
                        style={{
                          margin: "0.8rem",
                          borderRadius: "15.3407px",
                          border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Phone number"
                          name="user_phone"
                          // required
                          style={{
                            padding: "0.8rem",
                            backgroundColor: "#fff",
                            borderRadius: "15.3407px",
                          }}
                        ></input>
                      </div>
                    </Col>
                  </Row> */}
                  <Row justify="end">
                    <div style={{ margin: "0.5rem 2rem 1rem", width: "150px" }}>
                      <input
                        type="submit"
                        value="Next"
                        style={{
                          cursor: "pointer",
                          padding: "0.8rem",
                          borderRadius: "15px",
                          background: "#EB7A02",
                          border: "none",
                          color: "#FFFFFF",
                          fontSize: "1rem",
                        }}
                      />
                      {/* <span>Submit</span> */}
                      {/* </Button> */}
                    </div>
                  </Row>
                </div>
              )}
              {loading && (
                <div style={{ margin: "0 2rem", textAlign: "center" }}>
                  Loading...
                </div>
              )}
              {error && (
                <div style={{ margin: "0 2rem", textAlign: "center" }}>
                  Something went wrong. Please try again later.
                </div>
              )}
              {success && (
                <div style={{ margin: "0 2rem", textAlign: "center" }}>
                  Thank you for contacting us!
                </div>
              )}
            </div>
          );
        }}
      </ZapierForm>
    </div>
  );
};
export { ContactForm };
