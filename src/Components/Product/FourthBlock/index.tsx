import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from 'react-awesome-reveal';
import ServiceCard from "../../ServiceCard";
import {
  ServicesBlockContent,
  ServicesHeading,
  ServicesSubHeading,
} from "./styles";
import Container from "../../../common/Container";

const ServicesBlock = ({ t, cards }: any) => {
 
  return (
    <ServicesBlockContent>
      <Container>
        <Row justify="center">
          <Col>
            <ServicesHeading><span style={{ color: "#2F327D" }}>Why </span>TruPulse
            </ServicesHeading>
          </Col>
        </Row>
        <Row justify="center">
          {cards?.map((card: any) => (
            <Col lg={8} md={11} sm={22} xs={22}>
              <ServiceCard card={card} />
            </Col>
          ))}
        </Row>

      </Container>
    </ServicesBlockContent>
  );
};

export default withTranslation()(ServicesBlock);
