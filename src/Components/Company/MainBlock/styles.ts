import styled from "styled-components";
import { Carousel } from "antd";

export const LeftContentSection = styled("section")`
  width: 100%;
  margin: 8rem 0 0;
  @media only screen and (max-width: 1024px) {
    padding: 1rem 0 0;
    margin: 3rem 0 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 1rem 0 0rem;
    margin: 3rem 0 0;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 1rem;
  color: #334041;
`;

export const Content2 = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 1rem;
  text-align: left;
  color: #334041;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  border-radius: 20px;
  padding: 2rem 1.5rem 0;
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
  text-align: cneter;
  font-family: Inter SemiBold;
  color: #001011;
  margin: 2rem 0 4rem;
`;
export const Subtitle = styled("h6")`
  font-size: 2rem;
  text-align: cneter;
  font-family: Inter SemiBold;
  color: #001011;
  margin: 1rem 0 1rem;
`;
export const Subtitle2 = styled("h6")`
  font-size: 1.5rem;
  text-align: left;
  font-family: Inter SemiBold;
  color: #001011;
  margin: 1rem 0 1rem;
`;
export const SubText = styled("h6")`
  font-size: 1rem;
  text-align: cneter;
  font-family: Inter SemiBold;
  color: #ff7e00;
  margin: 1rem 0 1rem;
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
export const CarouselWrapper2 = styled(Carousel)`
  width: 100vw;
  text-align: center;
  margin: auto;
  > ..slick-dots {
    position: relative !important;
    bottom: 100px;
  }
  > .slick-dots li {
    margin: 2rem 8px -2rem;
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
