import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 6rem 0 2rem;
  //   background: url("/img/svg/wave.svg");
  background-size: cover;
  background: #e4e7f5;
  @media only screen and (max-width: 1024px) {
    padding: 5rem 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 5rem 0 0.75rem;
  }
`;
export const CTAWrapper = styled("span")`
  cursor: pointer;
  font-weight: 1000;
  margin-right: 0.3rem;
  transition: all 0.3s ease-in-out;
  color: #252641;
`;

export const Title = styled("h6")`
  font-size: 2.5rem;
  text-align: center;
  line-height: 3.5rem;
  color: #430568;
`;
export const Subtitle = styled("h6")`
  font-size: 1.6rem;
  text-align: center;
  margin:2rem 1rem;
  color: #f48c06;
`;

export const Content = styled("p")`
  margin: 1.2rem 0 2rem 0;
  text-align: center;
  @media only screen and (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  top: 25%;
  z-index: 1;
  @media only screen and (max-width: 575px) {
    padding-bottom: 8rem;
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
