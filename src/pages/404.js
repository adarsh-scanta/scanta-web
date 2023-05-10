import MainBlock from "@/Components/FreeTrial/MainBlock";
import Header from "@/Components/Header";
import Container from "@/common/Container";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/components/Footer";
import { Styles } from "@/styles/styles";
import { Row, Col } from "antd";
import React from "react";

export default function Trupulse() {
  return (
    <React.Fragment>
      <Styles />
      <Header />
      <Container>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "8rem",
          }}
        >
          <Row justify="space-between" align="middle">
            <Col lg={11} md={11} sm={24} xs={24}>
              <h6
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  margin: "0 1rem",
                  color: "#430568",
                }}
              >
                ERROR 404 <br />
                Page not found!
              </h6>
            </Col>
            <Col lg={11} md={11} sm={24} xs={24}>
              <img
                src={"/img/icons/UC2.png"}
                alt="not-found"
                width="100%"
                height="100%"
                style={{ margin: "1rem" }}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <Footer fromWhere={"thankyou"} />
    </React.Fragment>
  );
}
