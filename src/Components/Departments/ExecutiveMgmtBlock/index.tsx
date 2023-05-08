import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import ExecMgmtArt from "../../../assets/arts/Departments/ExecMgmtArt";
import {
  RightBlockContainer,
  Content,
  Title,
  ContentWrapper,
  ArtWrapper,
} from "./styles";
import Container from "../../../common/Container";
import React, { useEffect} from "react";
import {useLocation} from "react-router-dom";

const ExecutiveMgmtBlock = ({
  id,
}: any) => {

  const location = useLocation();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    location.hash === "#Executive-Management" &&
      setTimeout(function () {
        scrollTo("Executive-Management");
      }, 1000);
  });



  return (
    <RightBlockContainer id="Executive-Management">
      <Container>
        {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
          <Row justify="center" id={id}>
            <Col lg={12} md={12} sm={22} xs={22}>
              <ContentWrapper>
                <Title>
                  Executive<span style={{ color: "#2F327D" }}> Management</span>
                </Title>
                <Content>
                  Chec measures the overall morale of an organization along with
                  trending topics so managers always have their fingers on the
                  pulse of the company. Better than static surveys or town
                  halls, Chec gives them the information they need for success.
                </Content>
              </ContentWrapper>
            </Col>
            <Col lg={12} md={12} sm={22} xs={22}>
              <ArtWrapper>
                <ExecMgmtArt />
              </ArtWrapper>
            </Col>
          </Row>
        {/* </Fade> */}
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(ExecutiveMgmtBlock);
