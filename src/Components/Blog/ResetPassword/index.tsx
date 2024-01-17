"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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
import styles from "./index.module.css";

const ResetPassword = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
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
            fontFamily: "Inter bold",
            fontSize: "28px",
            fontWeight: "600",
            margin: "2rem ",
          }}
        >
          Reset Password
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

              <button
                className={styles.login__btn}
                onClick={() => sendPasswordReset(email)}
              >
                Send
              </button>
              <div>
                Back to <Link href="/blog/login">Login</Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(ResetPassword);
