import { useState } from "react";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";

import { ServiceCardTemplate, CardContent, CardHeading } from "./styles";

const ServiceCard = ({ card, from }: any) => {

  const [mouseOver, setMouseOver] = useState("");
  const onMouseOver = (sectionHeading: any) => {
    setMouseOver(sectionHeading);
  };
  const onMouseNotOver = () => {
    setMouseOver("");
  };
  return (
    <ServiceCardTemplate
      style={{
        minWidth: "290px",
        // maxWidth:"500px",
        position: "relative",
        alignItems: "center",
        margin: "2rem 1rem 2rem 1rem",
        padding: "1rem 0.5rem",
        backgroundColor:
          mouseOver === card.cardHeading ? card.cardColor : "#fff",
      }}
      onMouseLeave={() => {
        onMouseNotOver();
      }}
      onMouseEnter={() => onMouseOver(card.cardHeading)}
    >
      <div
        style={{
          position: "absolute",
          bottom:
            mouseOver === card.cardHeading
              ? "58%"
              : "75%",
          // display: mouseOver === card.cardHeading ? "none" : "",
          left:
            mouseOver === card.cardHeading
              ? "0"
              : "38%",
          transition: "all 0.3s",
        }}
      >
        <SvgIcon
          src={mouseOver === card.cardHeading ? card.icon1 : card.icon2}
          width="60%"
          height="60%"
        />
      </div>

      <div>
        <CardHeading
          style={{
            margin:
              mouseOver === card.cardHeading ? "3rem 0 0" : "2rem 0 0",
            color: mouseOver === card.cardHeading ? "#fff" : "",
          }}
        >
          {card.cardHeading}
        </CardHeading>
        <CardContent
          style={{
            color: mouseOver === card.cardHeading ? "#fff" : "#696984",
          }}
        ><ul>
            <li style={{margin:"0.3rem 0"}}>{card.cardContent1}</li>
            <li style={{margin:"0.3rem 0"}}>{card.cardContent2}</li>
            <li style={{margin:"0.3rem 0"}}>{card.cardContent3}</li>
          </ul>
        </CardContent>
      </div>
    </ServiceCardTemplate>
  );
};

export default withTranslation()(ServiceCard);
