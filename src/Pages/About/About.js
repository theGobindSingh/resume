import "./About.css";
import React from "react";

import Fig4 from "../../Assets/SVGs/Fig4";
import Fig5 from "../../Assets/SVGs/Fig5";

import { aboutText, skillsText } from "../../Assets/Texts/About";

export default function About() {
  function skillSplit() {
    let mid = Math.floor(skillsText.length / 2);
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i <= mid; i++) {
      arr1.push(skillsText[i]);
    }
    for (let i = mid + 1; i < skillsText.length; i++) {
      arr2.push(skillsText[i]);
    }
    return [
      arr1.map((skill, index) => {
        return <li key={index}>{skill}</li>;
      }),
      arr2.map((skill, index) => {
        return <li key={index}>{skill}</li>;
      }),
    ];
  }
  return (
    <section id="About">
      <Fig4 />
      <div className="allContent">
        <h2>About me</h2>
        <div className="abt">
          <div className="ab _1">
            {aboutText.split("\n").map((str, index) => {
              return <p key={index}>{str}</p>;
            })}
          </div>
          <div className="rule"></div>
          <div className="ab _2">
            <h3>My skills</h3>
            <div className="skills">
              <div className="skills_list _1">
                <ul>{skillSplit()[0]}</ul>
              </div>
              <div className="skills_list _2">
                <ul>{skillSplit()[1]}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fig5 />
    </section>
  );
}
