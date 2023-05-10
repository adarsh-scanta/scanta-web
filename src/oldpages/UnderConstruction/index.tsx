import React, { lazy } from "react";
import { Row, Col } from "antd";
const Container = lazy(() => import("../../common/Container"));
const UnderConstruction = () => {
  return (
    <>
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
                style={{margin:"1rem"}}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default UnderConstruction;
