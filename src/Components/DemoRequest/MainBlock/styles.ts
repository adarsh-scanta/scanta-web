import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 3rem 2rem 2rem;
  background: #eff0f7;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 3rem 0 0.75rem;
  }
`;
export const Content = styled("p")`
  margin: 1.2rem 0 2rem 0;
  letter-spacing: 2px;
  font-size: 1.2rem;
  color: #334041;
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
  max-width: 500px;
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
  //   top: 100px;
  padding: 6rem 0 4rem;
  width: 80%;
  @media only screen and (max-width: 1080px) {
    // top: 25%;
    padding: 4rem 0;
  }
  @media only screen and (max-width: 768px) {
    // font-size: 1.8rem;
    // top: 10%;
    padding: 2rem 0;
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

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1rem;
  color: #18216d;
  // transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 1080px) {
    margin: 1rem 1rem;
  }
  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const CTAWrapper = styled("span")`
  cursor: pointer;
  font-weight: 1000;
  margin-right: 0.3rem;
  transition: all 0.3s ease-in-out;
  color: #252641;
`;
