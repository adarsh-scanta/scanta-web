"use client";
import React, { useRef, useState } from "react";
import { Row, Col } from "antd";
import emailjs from "emailjs-com";
import ZapierForm from "react-zapier-form";
import { useHistory } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./index.css";

const NewsLetterModal = ({ handleClose }) => {
  const history = useHistory();
  const subsHandle = (e) => {
    e.preventDefault();
    setTimeout(() => {
      handleClose();
    }, 3000);
  };
  return (
    <div style={{ padding: "1rem" }}>
      <ZapierForm action="https://hooks.zapier.com/hooks/catch/14238222/bj1czfx/">
        {({ error, loading, success }) => {
          if (success) {
            handleClose();
            history.push("/trupulse");
          }
          return (
            <div>
              {!success && !loading && (
                <div>
                  <Row justify="center">
                    <Col lg={22} md={22} sm={22} xs={22}>
                      <div className="newsletter-form">
                        <input
                          name="email"
                          required
                          type="email"
                          style={{
                            minWidth: "250px",
                            border: "1px solid #000",
                            margin: "1rem 0",
                          }}
                          placeholder="Your Email"
                        />
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <input
                            type="submit"
                            value="submit"
                            style={{
                              width: "100px",
                              background: "#eb7a02",
                              color: "#fff",
                            }}
                          />
                        </div>
                      </div>
                    </Col>
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
export { NewsLetterModal };
