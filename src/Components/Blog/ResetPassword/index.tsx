"use client";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  sendPasswordReset,
} from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { RightBlockContainer } from "./styles";
import Container from "../../../common/Container";
import "./index.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.push("/blog/dashboard");
  }, [user, loading]);

  return (
    <RightBlockContainer id="blog-login">
      <Container>
        <p
          style={{
            color: "#2f327d",
            fontFamily: "Poppins bold",
            fontSize: "28px",
            fontWeight: "600",
            margin: "2rem ",
          }}
        >
          Reset Password
        </p>
        <Row justify="space-between">
          <div className="login">
            <div className="login__container">
              <input
                type="text"
                className="login__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
              />

              <button
                className="login__btn"
                onClick={() => sendPasswordReset(email)}
              >
                Send
              </button>
              <div>
                Back to <Link to="/blog/login">Login</Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(ResetPassword);
