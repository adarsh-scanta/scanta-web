import styled from "styled-components";

export const ServicesBlockContent = styled("section")`
  position: relative;
  padding: 5rem 0 5rem;
  background-color: #e4e7f5;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 2rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServicesHeading = styled("h6")`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: #eb7a02;
  @media only screen and (min-width: 1400px) {
    font-size: 2.1rem;
  }
`;
export const ServicesSubHeading = styled("p")`
  font-size: 1.3rem;
  font-weight: 900;
  text-align: center;
  color: #eb7a02;
  padding-bottom: 4rem;
  @media only screen and (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;
export const CTAWrapper = styled("span")`
  cursor: pointer;
  font-weight: 1000;
  margin-right: 0.3rem;
  transition: all 0.3s ease-in-out;
  color: #252641;
`;
