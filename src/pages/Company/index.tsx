import AdvisorBlock from "@/Components/Company/AdvisorBlock";
import ContactBlock from "@/Components/Company/ContactBlock";
import MainBlock from "@/Components/Company/MainBlock";
import StoryBlock from "@/Components/Company/StoryBlock";
import Header from "@/Components/Header";
import ScrollToTop from "@/common/ScrollToTop";
import Footer from "@/components/Footer";
import { Styles } from "@/styles/styles";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <Styles />
      <ScrollToTop />
      <MainBlock />
      <StoryBlock />
      <AdvisorBlock />
      <ContactBlock />
      <Footer fromWhere={"company"} />
    </React.Fragment>
  );
}
