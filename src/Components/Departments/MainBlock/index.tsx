import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import MainBlockArt from "../../../assets/arts/Departments/MainBlockArt";
import {
  RightBlockContainer,
  Content,
  Title,
  ContentWrapper,
  ArtWrapper,
} from "./styles";
import Container from "../../../common/Container";

const MainBlock = ({ title, content, subtitle, button, icon, t, id }: any) => {
  return (
    <RightBlockContainer id="intro">
      <Container>
        {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
          <Row justify="center" id={id}>
            <Col lg={11} md={11} sm={22} xs={22}>
              <ArtWrapper>
                <MainBlockArt />
              </ArtWrapper>
            </Col>
            <Col lg={12} md={11} sm={22} xs={22}>
              <ContentWrapper>
                <Title>
                  A
                  <span style={{ color: "#EB7A02" }}>
                    {" "}
                    Customized Solution{" "}
                  </span>{" "}
                  for Every Department
                </Title>
                <Content>
                  What kind of problems can Chec find for your department?
                </Content>
                <Content>
                  Every department has a very different set of responsibilities.
                  Chec allows each to select the problems they need to track
                  from a library of machine learning trained analyzers.
                </Content>
              </ContentWrapper>
            </Col>
          </Row>
        {/* </Fade> */}
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(MainBlock);
