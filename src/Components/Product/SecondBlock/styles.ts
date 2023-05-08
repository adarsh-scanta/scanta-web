import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  padding: 4rem 0 1rem;
  position: relative;
  height:550px;
  // background: url("/img/svg/wave.svg");
  background-size: cover;
  background: url("/img/svg/Exec-Back.svg");
  // background-size: cover;
  @media only screen and (max-width: 1080px) {
    padding: 12rem 0 2.5rem;
    height:750px;

}

  @media only screen and (max-width: 560px) {
    padding: 10rem 0 2.5rem;
    height:1200px;

}
`;

export const Title = styled("h6")`
  font-size: 2rem;
  text-align: center;
  font-family: Poppins SemiBold;
  color: #eb7a02;
  margin: 1rem 0 1.5rem;
`;
export const Subtitle = styled("h6")`
  font-size: 2.5rem;
  color: #430568;
`;

export const ContentWrapper = styled("div")`
height: 95%;
z-index: 2;
background: #423EB6;
backdrop-filter:blur(40px);
border-radius: 20px;
position: relative;
filter: drop-shadow(0px 30px 70px rgba(0, 0, 0, 0.16));
box-shadow: 0px 13px 21px -6px rgba(128,128,128,1);

@media only screen and (max-width: 560px) {
    height: 99%;

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
  display: inline-block;
  @media only screen and (max-width: 1079px) {
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
export const CTAWrapper = styled("span")`
  cursor: pointer;
  font-weight: 1000;
  margin-right: 0.3rem;
  transition: all 0.3s ease-in-out;
  color: #252641;
`;


export const Content = styled("p")`
  margin: 1.2rem 0 1rem 0;
  color:#696984;
  fontSize: 1.2rem;
  @media only screen and (min-width: 1400px) {
    font-size: 1.2rem;
  }
`;

