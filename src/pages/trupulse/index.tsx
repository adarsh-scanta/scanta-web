import MainBlock from "@/Components/Product/MainBlock";
import Image from "next/image";
import React from "react";
import SecondBlock from "@/Components/Product/SecondBlock";
import ThirdBlock from "@/Components/Product/ThirdBlock";
import CompanyInfoBlock from "@/Components/CompanyInfoBlock";
import FifthBlock from "@/Components/Product/FifthBlock";
import FourthBlock from "@/Components/Product/FourthBlock";
import SolutionBlock from "@/Components/SolutionBlock";
import Container from "@/common/Container";
import Header from "@/Components/Header";
import Footer from "@/components/Footer";
import ServicesContent from "../../content/ServicesContent.json";
import { Styles } from "@/styles/styles";

export default function Trupulse() {
  return (
    <React.Fragment>
      <Header />
      <Styles/>
      <MainBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock cards={ServicesContent.cards2} />
      <FifthBlock />
      <Container>
        <SolutionBlock from="product" />
      </Container>
      <CompanyInfoBlock from="product" />
      <Footer fromWhere={"home"} />
    </React.Fragment>
  );
}
