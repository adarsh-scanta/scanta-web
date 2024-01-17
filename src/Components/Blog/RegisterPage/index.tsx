"use client";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { RightBlockContainer } from "./styles";
import Container from "../../../common/Container";
import "./index.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/blog/dashboard");
  }, [user, loading]);
  return (
    <RightBlockContainer id="blog-login">
      <Container>
        <p
          style={{
            color: "#2f327d",
            fontFamily: "Inter bold",
            fontSize: "28px",
            fontWeight: "600",
            margin: "2rem 2rem 0",
          }}
        >
          Register
        </p>
        <Row justify="space-between">
          <div className="register">
            <div className="register__container">
              <input
                type="text"
                className="register__textBox"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
              />
              <input
                type="text"
                className="register__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
              />
              <input
                type="password"
                className="register__textBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button className="register__btn" onClick={register}>
                Register
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(RegisterPage);
