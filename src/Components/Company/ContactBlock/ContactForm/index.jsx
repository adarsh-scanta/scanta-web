"use client";
import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "antd";
import ZapierForm from "react-zapier-form";
import { useCalendlyEventListener, PopupWidget } from "react-calendly";
import { collection, setDoc, doc, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useRouter } from "next/router";

const ContactForm = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  return (
    <div style={{ padding: "1rem", minHeight: "410px" }}>
      <ZapierForm action="https://hooks.zapier.com/hooks/catch/14238222/bj1e0wg/">
        {({ error, loading, success }) => {
          if (success) {
            router.push("thankyou");
          }
          return (
            <div>
              {!success && !loading && (
                <div>
                  <Row justify="center">
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <label
                        style={{
                          margin: "0.8rem",
                          color: "#334041",
                          fontWeight: "bold",
                        }}
                      >
                        First Name
                      </label>
                      <div
                        style={{
                          margin: "0.2rem 0.8rem 0.8rem",
                          borderRadius: "8px",
                          border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          name="first_name"
                          required
                          style={{
                            padding: "0.8rem",
                            backgroundColor: "#FAF5F0",
                            borderRadius: "8px",
                          }}
                          value={firstName}
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                        ></input>
                      </div>
                    </Col>
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <label
                        style={{
                          margin: "0.8rem",
                          color: "#334041",
                          fontWeight: "bold",
                        }}
                      >
                        Last Name
                      </label>
                      <div
                        style={{
                          margin: "0.2rem 0.8rem 0.8rem",
                          borderRadius: "8px",
                          border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          required
                          name="last_name"
                          style={{
                            padding: "0.8rem",
                            backgroundColor: "#FAF5F0",
                            borderRadius: "8px",
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
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <label
                        style={{
                          margin: "0.8rem",
                          color: "#334041",
                          fontWeight: "bold",
                        }}
                      >
                        Company
                      </label>
                      <div
                        style={{
                          margin: "0.2rem 0.8rem 0.8rem",
                          width: "100%",
                          borderRadius: "8px",
                          border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Enter your company name"
                          name="user_company"
                          required
                          style={{
                            width: "100%",
                            padding: "0.8rem",
                            backgroundColor: "#FAF5F0",
                            borderRadius: "8px",
                          }}
                        ></input>
                      </div>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <label
                        style={{
                          margin: "0.8rem",
                          color: "#334041",
                          fontWeight: "bold",
                        }}
                      >
                        Job Title
                      </label>
                      <div
                        style={{
                          margin: "0.2rem 0.8rem 0.8rem",
                          width: "100%",
                          borderRadius: "8px",
                          border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Enter your role"
                          name="job_title"
                          required
                          style={{
                            width: "100%",
                            padding: "0.8rem",
                            backgroundColor: "#FAF5F0",
                            borderRadius: "8px",
                          }}
                        ></input>
                      </div>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <label
                        style={{
                          margin: "0.8rem",
                          color: "#334041",
                          fontWeight: "bold",
                        }}
                      >
                        Email
                      </label>
                      <div
                        style={{
                          margin: "0.2rem 0.8rem 0.8rem",
                          width: "100%",
                          borderRadius: "8px",
                          border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          required
                          name="user_email"
                          style={{
                            width: "100%",
                            padding: "0.8rem",
                            backgroundColor: "#FAF5F0",
                            borderRadius: "8px",
                          }}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          value={email}
                        ></input>
                      </div>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <label
                        style={{
                          margin: "0.8rem",
                          color: "#334041",
                          fontWeight: "bold",
                        }}
                      >
                        How can we help you?
                      </label>
                      <div
                        style={{
                          margin: "0.2rem 0.8rem 0.8rem",
                          width: "100%",
                          borderRadius: "8px",
                          border: " 1.53407px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <textarea
                          type="text"
                          placeholder="Enter your message"
                          required
                          name="user_query"
                          style={{
                            width: "100%",
                            padding: "0.8rem",
                            backgroundColor: "#FAF5F0",
                            borderRadius: "8px",
                          }}
                          onChange={(e) => {
                            setQuery(e.target.value);
                          }}
                          value={query}
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <Row justify="end">
                    <div style={{ margin: "1rem 0 1rem", width: "150px" }}>
                      <input
                        type="submit"
                        value="Next"
                        style={{
                          cursor: "pointer",
                          padding: "0.8rem",
                          borderRadius: "8px",
                          background: "#EB7A02",
                          border: "none",
                          color: "#FFFFFF",
                          fontSize: "1rem",
                        }}
                      />
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
