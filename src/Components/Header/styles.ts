import styled from "styled-components";
// import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

export const HeaderSection = styled("header")`
  padding: 0 0.5rem 0.5rem;
  margin: 0;
  width: 100vw;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    // padding: 4rem 0 0.75rem;
    // width: 90%;
  }
  @media only screen and (max-width: 1080px) {
    // padding: 4rem 0 0.75rem;
    // width: 90%;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 150px;
  display: inline-block;

  @media only screen and (max-width: 1024px) {
    width: 150px;
  }
  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
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

export const Label = styled("span")`
  // font-weight: 400;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;
export const DownIcon = styled(DownOutlined)<any>`
  // margin-top: px;
`;
export const Span = styled("span")`
  cursor: pointer;
  // font-family: "Poppins Bold", serif;
  font-weight: 1000;
  margin-right: 0.3rem;
  transition: all 0.3s ease-in-out;
  color: #252641;
  &:hover,
  &:active,
  &:focus {
    // color: #eb7a02;
  }
`;
export const CTAWrapper = styled("span")`
  cursor: pointer;
  font-weight: 1000;
  margin-right: 0.3rem;
  transition: all 0.3s ease-in-out;
  color: #252641;
`;

export const BurgerContainer = styled("div")`
  display: none;

  @media only screen and (max-width: 890px) {
    padding: 0 2rem 0 1rem;
    display: block;
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
