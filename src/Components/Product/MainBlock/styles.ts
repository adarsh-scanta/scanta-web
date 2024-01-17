import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 6rem 0 0rem;
  background: #fafafa;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    padding: 6rem 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 0rem;
  }
`;

export const Title = styled("div")`
  font-size: 2.2rem;
  font-family: Inter Semibold;
  color: #001011;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.5;
  @media only screen and (min-width: 1400px) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 1080px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`;
export const Subtitle = styled("div")`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #334041;
} @media only screen and (min-width: 1400px) {
  font-size: 1.2rem;
}
  @media only screen and (max-width: 1080px) {
    font-size: 1.2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Content = styled("p")`
  margin: 0.5rem 0 2rem 0;
  font-size: 1.4rem;
  color:#334041;
} @media only screen and (min-width: 1400px) {
  font-size: 1.3rem;
}
  @media only screen and (max-width: 1080px) {
    font-size: 1.3rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ContentWrapper = styled("div")`
  margin: 2rem 1rem 0;
  z-index: 1;
  @media only screen and (max-width: 1080px) {
    padding-bottom: 4rem;
  }
  @media only screen and (max-width: 768px) {
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
export const ArtWrapper = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 2rem 0 5rem;
  @media only screen and (max-width: 1080px) {
    // display: none;
    // top: 70px;
    left: 10%;
  }
  @media only screen and (max-width: 768px) {
    // display: none;
    // top: -50px;
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
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const CTAWrapper = styled("span")`
  cursor: pointer;
  font-weight: 1000;
  margin-bottom: 2.5rem;
  transition: all 0.3s ease-in-out;
  color: #252641;
`;
