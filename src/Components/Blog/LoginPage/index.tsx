"use client";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth, logInWithEmailAndPassword } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { RightBlockContainer } from "./styles";
import Container from "../../../common/Container";
import styles from "./index.module.css"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  // const history = useHistory();
  const router = useRouter();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) router.push("/blog/dashboard");
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
            margin: "2rem 2rem 0",
          }}
        >
          Login
        </p>
        <Row justify="space-between">
          <div className={styles.login}>
            <div className={styles.login__container}>
              <input
                type="text"
                className={styles.login__textBox}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
              />
              <input
                type="password"
                className={styles.login__textBox}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button
                className={styles.login__btn}
                onClick={() => logInWithEmailAndPassword(email, password)}
              >
                Login
              </button>
              <div>
                <Link href="/blog/reset">Forgot Password</Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(LoginPage);
