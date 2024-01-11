import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 15rem 0 2.5rem;
  background-size: cover;
  // background: url("/img/svg/Exec-Back.svg");
  // background-size: cover;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 1.5rem;
  }

  @media only screen and (max-width: 560px) {
    padding: 2rem 0 0.75rem;
  }
`;

export const Title = styled("h6")`
  font-size: 2.5rem;
  line-height: 3.5rem;
  color: #430568;
`;
export const Subtitle = styled("h6")`
  font-size: 2.5rem;
  color: #430568;
`;

export const Content = styled("p")`
  margin: 1.2rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  padding: 1rem;
  border-radius: 20px;
  z-index: 1;
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
export const AboutHeading = styled("h6")`
  font-size: 2.3rem;
  font-weight: bold;
  color: #eb7a02;
`;
export const AboutSubHeading = styled("div")`
  font-size: 1.4rem;
  font-weight: bold;
  color: #2f327d;
`;
export const AboutContent = styled("p")`
  font-size: 1.1rem;
  font-weight: 500;
  color: #2f327d;
`;
