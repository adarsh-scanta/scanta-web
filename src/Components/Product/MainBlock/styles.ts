import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 6rem 0 5rem;
  background:#fff;
  // background: url("/img/svg/wave2.svg");
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    padding: 6rem 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 0.75rem;
  }
`;

export const Title = styled("h6")`
  font-size: 2rem;
  text-align: center;
  font-family: Poppins SemiBold;
  color: #eb7a02;
  margin: 1rem 0 1.5rem;
`;
export const Subtitle = styled("span")`
  font-size: 1.4rem;
  margin-bottom: 0;
  font-family: Poppins SemiBold;
  color: #430568;
  // line-height: 1.18;
} @media only screen and (min-width: 1400px) {
  font-size: 1.3rem;
}
  @media only screen and (max-width: 1080px) {
    font-size: 1.3rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Content = styled("p")`
  margin: 0.5rem 0 2rem 0;
  font-size: 1.4rem;
  font-weight:600;
  color:#696984;
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
  position: relative;
  margin: 0 1rem;
  top: 13.3%;
  z-index: 1;
   @media only screen and (max-width: 1080px) {
    padding-bottom: 4rem;
    top: 10%;
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
  top:-50px;
  height: 100%;
  @media only screen and (max-width: 1080px) {
    // display: none;
    // top: 70px;
    left:10%;
  }
  @media only screen and (max-width: 768px) {
    // display: none;
    // top: -50px;
    left:0;
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
  margin-right: 0.3rem;
  transition: all 0.3s ease-in-out;
  color: #252641;
`;