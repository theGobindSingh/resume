import "./Sample.css";
import React, { useState } from "react";

import Fig2 from "../../Assets/SVGs/Fig2";
import Fig6 from "../../Assets/SVGs/Fig6";
import Fig7 from "../../Assets/SVGs/Fig7";

import { Websites } from "../../Assets/Websites/Websites";

import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

export default function Sample() {
  var [web, setWeb] = useState(Websites[0]);
  function fun(str) {
    var currentIndex = Websites.indexOf(web);
    var lastIndex = Websites.length - 1;
    if (str === "next") {
      if (currentIndex < lastIndex) {
        setWeb(Websites[currentIndex + 1]);
      } else {
        setWeb(Websites[0]);
      }
    }
    if (str === "prev") {
      if (currentIndex > 0) {
        setWeb(Websites[currentIndex - 1]);
      } else {
        setWeb(Websites[lastIndex]);
      }
    }
  }
  return (
    <section id="Sample">
      <Fig6 />
      <div className="allContent">
        <button
          className="prev_web btn"
          onClick={() => {
            try {
              if (window.screen.width >= 800) {
                const btn = document.querySelector(".prev_web");
                btn.classList.add("temp");
                setTimeout(() => {
                  btn.classList.remove("temp");
                }, 400);
              }
              fun("prev");
            } catch {}
          }}
        >
          <BsCaretLeft
            className="icon"
            style={{ height: "auto", width: "60%" }}
          />
        </button>
        <div className="heading_and_webCont">
          <h2>My Sample Works</h2>
          <a
            className="websiteContainer"
            href={web[1]}
            target="_blank"
            rel="noreferrer"
          >
            <img src={web[2]} alt="" />
            <h3>{web[0]}</h3>
          </a>
        </div>
        <button
          className="next_web btn"
          onClick={() => {
            try {
              if (window.screen.width >= 800) {
                const btn = document.querySelector(".next_web");
                btn.classList.add("temp");
                setTimeout(() => {
                  btn.classList.remove("temp");
                }, 400);
              }
              fun("next");
            } catch {}
          }}
        >
          <BsCaretRight
            className="icon"
            style={{ height: "auto", width: "60%" }}
          />
        </button>
      </div>
      <Fig7 />
      <Fig2 />
    </section>
  );
}
