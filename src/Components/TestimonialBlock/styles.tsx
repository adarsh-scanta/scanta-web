import styled from "styled-components";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
export const RightBlockContainer = styled("section")`
  padding: 3rem 0 0;
  background: #fffaf5;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 0;
  }
`;

export const Title = styled("span")`
  font-size: 2.2rem;
  font-family: Inter Bold;
  color: #eb7a02;
  margin-bottom: 3rem;
  line-height: 1.18;
  @media only screen and (min-width: 1400px) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 1080px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const Subtitle = styled("span")`
  font-size: 1.8rem;
  margin-bottom: 0;
  font-family: Inter SemiBold;
  color: #430568;
  // line-height: 1.18;
} @media only screen and (min-width: 1400px) {
  font-size: 1.7rem;
}
  @media only screen and (max-width: 1080px) {
    font-size: 1.5rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Content = styled("p")`
  margin: 0 0 1rem ;
  font-size: 1rem;
  color: #334041;
  text-align: center;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  margin: 0 1.5rem;
  top: 17%;
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
  margin-right: 1rem;
  transition: all 0.3s ease-in-out;
  color: #252641;
`;

export const CarouselWrapper2 = styled(Carousel)`
  width: 100%;
  text-align: center;
  margin: auto;
  > .slick-dots li {
    margin: 2rem 8px;
  }

  > .slick-dots li button {
    width: 15px;
    height: 15px;
    border-radius: 100%;
  }
  > .slick-dots li.slick-active button {
    width: 18px;
    height: 18px;
    border-radius: 100%;
  }
`;

export const ServicesHeading = styled("h6")`
  font-size: 1.8rem;
  font-family: Inter SemiBold;
  text-align: center;
  margin: 0rem 1rem 2rem;

  color: #eb7a02;
  @media only screen and (min-width: 1400px) {
    font-size: 2.1rem;
    margin: 1rem 1rem 1rem;
  }
  @media only screen and (max-width: 1024px) {
    margin: 1rem 1rem 2rem;
  }
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
  font-family: Inter SemiBold;
  color: #430568;
  position: relative;
  top: -40px;
`;

export const SubText = styled("h6")`
  font-size: 1rem;
  text-align: cneter;
  font-family: Inter SemiBold;
  color: #ff7e00;
  margin: 1rem 0 1rem;
`;
