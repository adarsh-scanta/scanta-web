import styled from "styled-components";
import { Card } from "antd";

export const ServiceCardTemplate = styled(Card)`
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(38, 45, 118, 0.08);
  border-radius: 20px;
  height: 280px;
  padding: 4rem;
`;

export const CardContent = styled("p")`
  font-size: 1rem;
  font-family: Inter SemiBold;
  // font-weight: 600;
  text-align: left;
  margin-top: 0.5rem;
  @media only screen and (min-width: 1400px) {
    font-size: 1.1rem;
  }
`;

export const CardHeading = styled("p")`
  font-size: 1.1rem;
  // font-weight: 750;
  margin-bottom: 2rem;
  font-family: Inter SemiBold;
  color:#2F327D;
  text-align: center;
  @media only screen and (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;
