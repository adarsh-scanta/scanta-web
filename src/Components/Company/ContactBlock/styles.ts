import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 6rem 0 6rem;
  background: #eff0f7;
  @media only screen and (max-width: 1024px) {
    padding: 6rem 0 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const Title = styled("h6")`
  font-size: 2.5rem;
  color: #eb7a02;
  text-align: center;
`;
export const Subtitle = styled("h6")`
  font-size: 2.5rem;
  color: #430568;
  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

export const Content = styled("p")`
  margin: 1.2rem 0 2rem 0;
  text-align: center;
  color: #696984;
  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 90%;
  top: 10%;
  z-index: 1;
  @media only screen and (max-width: 575px) {
    padding-bottom: 2rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
export const SplashIcon2 = styled("div")`
  position: relative;
  left: 50%;
  top: -3rem;
  @media only screen and (max-width: 1079px) {
    display: none;
  }
`;
export const SplashIcon1 = styled("div")`
  position: absolute;
  left: -1rem;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
export const MapContainer = styled("div")`
  width: 100%;
  margin: 2rem auto;
  height: 360px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  @media only screen and (max-width: 767px) {
    width: 95%;
  }
`;
