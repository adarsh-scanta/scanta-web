import styled from "styled-components";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

export const LeftContentSection = styled("section")`
  position: relative;
  // top: 150px;
  padding: 2rem 0 1rem;
  background-color: #eff0f7;
  z-index: 2;
  @media only screen and (max-width: 1024px) {
    padding: 1rem 0 1rem;
  }
`;
export const LogoContainer = styled(Link)`
  display: flex;
`;

export const ListItem = styled("li")`
  list-style: none,
  font=size: 1rem,
  font==weight: "bold",
  `;

// export const CTAWrapper = styled("span")`
//   cursor: pointer;
//   font-weight: 1000;
//   margin-right: 0.3rem;
//   transition: all 0.3s ease-in-out;
//   color: #252641;
// `;

export const ServicesHeading = styled("h6")`
  font-size: 1.8rem;
font-family: Inter SemiBold;
  text-align: center;
  margin: 2rem auto 5rem;

  color: #eb7a02;
  @media only screen and (min-width: 1400px) {
    font-size: 2.1rem;
  }
  @media only screen and (max-width: 1024px) {
    margin: 2rem auto 3rem;
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
  color:#430568;
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

export const Title = styled("h6")`
  font-size: 2rem;
  color: #430568;
  margin-top: 1rem;
  text-align: center;
  @media only screen and (min-width: 1400px) {
    font-size: 2rem;
  }
`;
export const Subtitle = styled("h6")`
  font-size: 1rem;
  align-items: center;
  font-weight: 1000;
  color: #b2b3cf;
  padding: 12px;
`;

export const Content = styled("p")`
  margin: 0.5rem 0 2rem 0;
  text-align: center;
  color: #334041;
  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

export const CarouselWrapper2 = styled(Carousel)`
  width: 100%;
  text-align: center;
  margin: auto;
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