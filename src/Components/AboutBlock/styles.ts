import styled from "styled-components";
import { Carousel } from "antd";

export const LeftContentSection = styled("section")`
  position: relative;
  top: -50px;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 1rem;
  }
  @media only screen and (max-width: 600px) {
    padding: 3rem 0 0rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  color: #696984;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  border-radius: 20px;
  padding: 1.5rem 1.5rem 0;
  @media only screen and (max-width: 575px) {
    padding-top: 1rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const AboutHeading = styled("h6")`
  font-size: 2.3rem;
  font-weight: bold;
  color: #eb7a02;
`;
export const AboutSubHeading = styled("div")`
  font-size: 1.5rem;
  font-weight: 1000;
  color: #2f327d;
  @media only screen and (min-width: 1400px) {
    font-size: 1.8rem;
  }
`;
export const AboutContent = styled("p")`
  font-size: 1.3rem;
  font-weight: 600;
  color: #eb7a02;
  @media only screen and (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;
export const Title = styled("h6")`
  font-size: 2rem;
  text-align: left;
  font-family: Poppins SemiBold;
  color: #eb7a02;
  margin-bottom: 0.5rem;
`;

export const CarouselWrapper = styled(Carousel)`
  width: 80%;
  text-align: center;
  margin: auto;
  > .slick-dots li {
    margin: 0 8px;
  }
  > .slick-dots li button {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: #888;
  }
  > .slick-dots li.slick-active button {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background: #eb7a02;
  }
`;

export const CarouselLabel = styled("p")`
  // font-size: 1.8rem;
  font-weight: 600;
  position: relative;
  top: -40px;
`;

export const CTAWrapper = styled("span")`
  cursor: pointer;
  font-weight: 1000;
  margin-right: 0.3rem;
  transition: all 0.3s ease-in-out;
  color: #252641;
`;
