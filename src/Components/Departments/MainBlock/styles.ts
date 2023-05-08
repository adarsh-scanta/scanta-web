import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 10rem 0 4rem;
  background: #fff;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 6rem 0 0.75rem;
  }
`;

export const Title = styled("h6")`
  font-size: 2.4rem;
  color: #2f327d;
  @media only screen and (min-width: 1400px) {
    font-size:2.5rem;
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
  margin: 1rem 0 0 0;
  font-size: 1.2rem;

  @media only screen and (min-width: 1400px) {
    font-size: 1.5rem;
  }
 
`;
export const ArtWrapper = styled("div")`
  position: relative;
  top:10%;
  @media only screen and (max-width: 1080px) {
    top: 25%;
    // padding-bottom: 4rem;
  }
  @media only screen and (max-width: 768px) {
    top: 15%;
    // padding-bottom: 4rem;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  // max-width: 90%;
  top: 10%;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    padding-bottom: 4rem;
    top: 20%;
  }
  @media only screen and (max-width: 1080px) {
    top:0%;
    padding-top: 4rem;
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
