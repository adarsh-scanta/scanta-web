import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 4rem 0 0rem;
  background-color: #fffaf5;
  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 0rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 0rem;
  }
`;

export const Title = styled("h6")`
  font-size: 2rem;
  text-align: center;
  margin: auto;
  font-family: Inter SemiBold;
  color: #001011;
  margin: 2rem 0 1rem;
`;
export const Subtitle = styled("h6")`
  font-size: 2rem;
  text-align: cneter;
  font-family: Inter SemiBold;
  color: #001011;
  margin: 1rem 0 1rem;
`;

export const ArtWrapper = styled("div")`
  position: relative;
  @media only screen and (max-width: 1080px) {
    top: 25%;
  }
  @media only screen and (max-width: 768px) {
    // font-size: 1.8rem;
    top: 10%;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 1rem;
  max-width: 700px;
  font-weight: bold;
  text-align: center;
  color: #334041;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  top: 7%;
  margin: 0 1rem;
  // max-width: 90%;
  z-index: 1;
  @media only screen and (max-width: 1024px) {
    padding-bottom: 2rem;
    max-width: 100%;
    top: 10%;
  }
  @media only screen and (max-width: 575px) {
    padding-bottom: 0rem;
    top: 0%;
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
