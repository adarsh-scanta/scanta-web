import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 8rem 1rem 6rem;
    background: url("/img/svg/wave2.svg");
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    padding: 6rem 0 3rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 2rem;
  }
`;
export const Content = styled("p")`
  margin: 1.2rem 0 2rem 0;
  letter-spacing: 2px;
  font-size: 1.2rem;
  color: #696984;
`;

export const Title = styled("h6")`
  font-size: 2.2rem;
  line-height: 3.5rem;
  color: #f48c06;
  @media only screen and (min-width: 1400px) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 1080px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const Subtitle = styled("h6")`
  font-size: 2.5rem;
  color: #430568;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  top: 5%;
  z-index: 1;
  max-width:500px;
  @media only screen and (max-width: 1080px) {
    top: 10%;
  }
  @media only screen and (max-width: 575px) {
    padding-bottom: 2rem;
    top: 15%;
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
