import MainBlock from "@/Components/FreeTrial/MainBlock";
import Header from "@/Components/Header";
import Container from "@/common/Container";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/components/Footer";
import { Styles } from "@/styles/styles";
import { Row } from "antd";
import React from "react";

export default function Trupulse() {
  return (
    <React.Fragment>
      <Styles />
      <Header />
      <Container>
        <div style={{ width: "100%", minHeight: "50vh", marginTop: "12rem" }}>
          <Row justify="center">
            <img
              src="/img/icons/positive-vote.png"
              width="100px"
              alt="thankyou"
            />
          </Row>
          <Row justify="center">
            <p style={{ color: "#441c68", margin: "1rem 0" }}>
              Thank You! Your response has been recorded.
            </p>
          </Row>
        </div>
      </Container>
      <Footer fromWhere={"thankyou"} />
    </React.Fragment>
  );
}
