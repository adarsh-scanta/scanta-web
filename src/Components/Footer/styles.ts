import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  minheight: 400px;
  width: 100%;
  padding: 1rem 0px;
  
`;

export const FooterLabel = styled("p")`
  font-size: 1rem;
  color: #b2b3cf;
  text-align: center;
  margin-bottom:0;
  margin-top:2rem;
  // max-width:150px;
  padding: 10px 10px;
`;
export const CTAWrapper = styled("span")`
  cursor: pointer;
  font-weight: 1000;
  margin-right: 0.3rem;
  transition: all 0.3s ease-in-out;
  color: #252641;
`;

export const NewsletterLabel = styled("p")`
  font-size: 1.1rem;
  color: #b2b3cf;
  margin-bottom: 0;
`;
export const Subtitle = styled("h6")`
  font-size: 1rem;
  align-items: center;
  font-weight: 1000;
  color: #b2b3cf;
  padding: 12px;
`;
export const LogoContainer = styled("div")`
  padding: 0 0.5rem;
`;

export const LogoContainer1 = styled(Link)`
  display: flex;
  @media only screen and (max-width: 500) {
    // padding: 12rem 0px;
  }
`;
export const FooterTextInput = styled("input")`
  border: 1px solid #83839a;
  box-sizing: border-box;
  border-radius: 80px;
  background-color: #252641;
  // margin: 10px 20px;
  color: #83839a;
`;
export const FooterButton = styled("button")`
  background-color: #eb7a02;
  border-radius: 60px;
  border: 1px solid #eb7a02;
  // margin: 10px 20px;
  color: #fff;
  font-size: 1rem;
`;
export const LeftContainer = styled("div")`
  margin: 10rem 0 0;
  @media only screen and (max-width: 500px) {
    margin: 12rem 2rem 0;
  }
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
export const Content = styled("p")`
  margin: 0.5rem 0 2rem 0;
  text-align: center;
  color: #696984;
  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;
