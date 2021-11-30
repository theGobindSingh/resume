import "./Home.css";
import React from "react";

import Fig1 from "../../Assets/SVGs/Fig1";
import Fig2 from "../../Assets/SVGs/Fig2";
import Fig3 from "../../Assets/SVGs/Fig3";
import Me from "../../Assets/Images/me.jpg";

import { homeText } from "../../Assets/Texts/Home";

export default function Home() {
  return (
    <section id="Home">
      <Fig1 />
      <Fig2 />
      <Fig3 />
      <div className="text">
        <span style={{ alignSelf: "flex-start", paddingLeft: "15%" }}>
          Hey there! I am
        </span>
        <h1>Gobind Singh</h1>
        <span style={{ alignSelf: "flex-end", width: "60%" }}>{homeText}</span>
      </div>
      <div className="image">
        <img src={Me} alt="Gobind Singh" />
      </div>
    </section>
  );
}
