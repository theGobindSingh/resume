import "./ExpEdu.css";
import React from "react";

import Fig4 from "../../Assets/SVGs/Fig4";

import { edu, exp } from "../../Assets/Texts/Exp_Edu";

export default function ExpEdu() {
  return (
    <section id="ExpEdu">
      <Fig4 />
      <div className="allContent">
        <h2>Education & Experience</h2>
        <div>
          <div className="edu">
            {edu.map((arr, ind) => {
              return (
                <div className="edu-in" key={ind}>
                  <h3>{arr[0]}</h3>
                  <p className="p1">{arr[1]}</p>
                  <p className="p2">{arr[2]}</p>
                </div>
              );
            })}
          </div>
          <div className="rule"></div>
          <div className="exp">
            {exp.map((arr, ind) => {
              return (
                <div className="exp-in" key={ind}>
                  <h3>{arr[0]}</h3>
                  <p className="p1">{arr[1]}</p>
                  <p className="p2">{arr[2]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Fig6 /> */}
    </section>
  );
}
