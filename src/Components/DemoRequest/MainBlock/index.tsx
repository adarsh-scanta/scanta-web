import { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { useHistory } from "react-router-dom";
import Link from "next/link";
import { Button } from "../../../common/Button";
import MainArt from "../../../assets/arts/DemoRequest/MainArt";
import {
  RightBlockContainer,
  Title,
  CTAWrapper,
  ArtWrapper,
  CustomNavLinkSmall,
} from "./styles";
import Container from "../../../common/Container";
import LeftCircleOutlined from "@ant-design/icons";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import styles from "./index.module.css";

const MainBlock = ({ t, id }: any) => {
  // const history = useHistory();
  const [meetDuration, setMeetDuration] = useState("15min");

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: () => {
      (window as any).lintrk("track", { conversion_id: 13305921 });
      // history.push("/thankyou");
    },
  });

  return (
    <RightBlockContainer
      id="intro"
      style={{ padding: "3rem 2rem 2rem", background: "#eff0f7" }}
    >
      <Container>
        {/* <Fade direction="up" duration={500} triggerOnce={true}> */}
        <Row justify="space-evenly" id={id}>
          <Col lg={11} md={8} sm={0} xs={0}>
            <Link href="/">
              <svg
                width="35"
                height="35"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ margin: "2rem" }}
              >
                <path
                  d="M21.3564 33.3987L13.4367 25.479L37.9285 25.479C38.4693 25.479 38.9081 25.0402 38.9081 24.4994C38.9081 23.9587 38.4694 23.5197 37.9285 23.5197L25.0791 23.5197H13.4367L21.3556 15.6009C21.7379 15.2185 21.7379 14.5979 21.3556 14.2155C20.9732 13.8331 20.3526 13.8331 19.9702 14.2155L10.3786 23.8071C9.9962 24.1895 9.9962 24.8101 10.3786 25.1925L19.9702 34.7841L19.9726 34.7865C20.1627 34.974 20.4122 35.0706 20.6633 35.0706C20.9144 35.0706 21.1639 34.9739 21.354 34.7865L21.3564 34.7841C21.7388 34.4017 21.7388 33.7811 21.3564 33.3987Z"
                  fill="black"
                  stroke="black"
                />
                <path
                  d="M24.5 0.5C11.267 0.5 0.5 11.2661 0.5 24.5C0.5 37.7341 11.2661 48.5 24.5 48.5C37.7341 48.5 48.5 37.7348 48.5 24.5C48.5 11.267 37.7348 0.5 24.5 0.5ZM24.5 46.5397C12.3476 46.5397 2.46026 36.6522 2.46026 24.5C2.46026 12.3478 12.3478 2.46026 24.5 2.46026C36.6522 2.46026 46.5397 12.3478 46.5397 24.5C46.5397 36.6522 36.6522 46.5397 24.5 46.5397Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
            </Link>
            <Row justify="center">
              <ArtWrapper>
                <MainArt />
              </ArtWrapper>
            </Row>
          </Col>
          <Col lg={10} md={14} sm={0} xs={0}>
            <div style={{ margin: "0 1rem" }}>
              <div>
                <button
                  style={{
                    color: meetDuration === "15min" ? "#fff" : "#000",
                    background:
                      meetDuration === "15min" ? "#EB7A02" : "transparent",
                    border: "1px solid #EB7A02",
                    borderRadius: "15px",
                    padding: "0.3rem 0.5rem",
                    margin: "0.5rem 0.5rem 0.5rem 0",
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={() => {
                    setMeetDuration("15min");
                  }}
                >
                  15 Minutes
                </button>
                <button
                  style={{
                    color: meetDuration === "30min" ? "#fff" : "#000",
                    background:
                      meetDuration === "30min" ? "#EB7A02" : "transparent",
                    border: "1px solid #EB7A02",
                    borderRadius: "15px",
                    padding: "0.3rem 0.5rem",
                    margin: "0.5rem",
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={() => {
                    setMeetDuration("30min");
                  }}
                >
                  30 Minutes
                </button>
                <button
                  style={{
                    color: meetDuration === "60min" ? "#fff" : "#000",
                    background:
                      meetDuration === "60min" ? "#EB7A02" : "transparent",
                    border: "1px solid #EB7A02",
                    borderRadius: "15px",
                    padding: "0.3rem 0.5rem",
                    margin: "0.5rem",
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={() => {
                    setMeetDuration("60min");
                  }}
                >
                  60 Minutes
                </button>
              </div>
              <div
                style={{
                  width: "90%",
                  height: "650px",
                  background: "#fff",
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                  transform: "scale(1, 1)",
                  position: "relative",
                  top: "10px",
                }}
              >
                <InlineWidget
                  url={`https://calendly.com/dirkpeters-scanta/${meetDuration}?hide_event_type_details=1`}
                  styles={{
                    height: "100%",
                    position: "relative",
                    top: "20px",
                    scrollbarWidth: "none",
                    border: "none",
                    boxShadow: "none",
                  }}
                />
              </div>
            </div>
          </Col>
          <Col lg={0} md={0} sm={24} xs={24}>
            <div style={{ margin: "0 1rem" }}>
              <div>
                <button
                  style={{
                    color: meetDuration === "15min" ? "#fff" : "#000",
                    background:
                      meetDuration === "15min" ? "#EB7A02" : "transparent",
                    border: "1px solid #EB7A02",
                    borderRadius: "15px",
                    padding: "0.3rem 0.5rem",
                    margin: "0.5rem 0.5rem 0.5rem 0",
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={() => {
                    setMeetDuration("15min");
                  }}
                >
                  15 Minutes
                </button>
                <button
                  style={{
                    color: meetDuration === "30min" ? "#fff" : "#000",
                    background:
                      meetDuration === "30min" ? "#EB7A02" : "transparent",
                    border: "1px solid #EB7A02",
                    borderRadius: "15px",
                    padding: "0.3rem 0.5rem",
                    margin: "0.5rem",
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={() => {
                    setMeetDuration("30min");
                  }}
                >
                  30 Minutes
                </button>
                <button
                  style={{
                    color: meetDuration === "60min" ? "#fff" : "#000",
                    background:
                      meetDuration === "60min" ? "#EB7A02" : "transparent",
                    border: "1px solid #EB7A02",
                    borderRadius: "15px",
                    padding: "0.3rem 0.5rem",
                    margin: "0.5rem",
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={() => {
                    setMeetDuration("60min");
                  }}
                >
                  60 Minutes
                </button>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "650px",
                  background: "#fff",
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                  transform: "scale(1)",
                  position: "relative",
                  top: "10px",
                }}
              >
                <InlineWidget
                  url={`https://calendly.com/dirkpeters-scanta/${meetDuration}?hide_event_type_details=1&hide_gdpr_banner=1`}
                  styles={{
                    height: "100%",
                    position: "relative",
                    top: "20px",
                    scrollbarWidth: "none",
                    border: "none",
                    boxShadow: "none",
                  }}
                />
              </div>
            </div>
          </Col>
          <Col lg={0} md={0} sm={24} xs={24}>
            <Row justify="center">
              <ArtWrapper>
                <MainArt />
              </ArtWrapper>
            </Row>
          </Col>
        </Row>
        {/* </Fade> */}
      </Container>
    </RightBlockContainer>
  );
};

export default withTranslation()(MainBlock);
