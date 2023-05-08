import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <React.Fragment>
      THis is the Front Page <br /> include all components and pages that are
      already defined in the previous app <br /> app &gt; blog &gt; pages.js
      becomes https://scanta.io/blog in the url
    </React.Fragment>
  );
}
