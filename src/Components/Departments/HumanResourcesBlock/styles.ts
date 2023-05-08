import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 6rem 0 4rem;
  background: #fff;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 6rem 0 4rem;
  }
`;
export const ArtWrapper = styled("div")`
  position: relative;
  @media only screen and (max-width: 900px) {
    top: 15%;
  }
  @media only screen and (max-width: 768px) {
    // font-size: 1.8rem;
    top: 10%;
  }
`;

export const Title = styled("h6")`
  font-size: 2.5rem;
  color: #eb7a02;
  @media only screen and (min-width: 1400px) {
    font-size: 2.5rem;
  }
`;
export const Subtitle = styled("h6")`
  font-size: 2.5rem;
  color: #430568;
  @media only screen and (min-width: 1400px) {
    font-size: 2.5rem;
  }
`;

export const Content = styled("p")`
  margin: 1.2rem 0 2rem 0;
  font-size: 1.2rem;

  @media only screen and (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  top: 20%;
  // max-width:90%;
  z-index: 1;
  @media only screen and (max-width: 800px) {
    padding-bottom: 2rem;
    top: 10%;
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
