import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 6rem 0 2.5rem;
  background:white;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 6rem 0 0.75rem;
  }
`;

export const Title = styled("h6")`
  font-size: 2.5rem;
  text-align: center;
  color: #eb7a02;
  margin-bottom: 3rem;
`;
export const Subtitle = styled("h6")`
  font-size: 2.5rem;
  color: #430568;
`;

export const Content = styled("p")`
  margin: 1.2rem 0 2rem 0;
  text-align: center;
  color: #696984;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  top: 10%;
  max-width: 90%;
  z-index: 1;
  @media only screen and (max-width: 575px) {
    padding-bottom: 0rem;
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
