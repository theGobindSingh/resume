import "./Nav.css";
import React from "react";

export default function Nav() {
  function navi() {
    try {
      //toggle nav
      document.querySelector(".nav-links").classList.toggle("nav-active");
      //animate links
      document.querySelectorAll(".nav-links li").forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
      //burger animation
      document.querySelector(".burger").classList.toggle("toggle");
    } catch {}
  }
  return (
    <div id="Nav">
      <div
        className="burger"
        onClick={() => {
          navi();
        }}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <nav className="headNav">
        <ul className="nav-links">
          <li
            onClick={() => {
              navi();
            }}
          >
            <a href="/#Home">Home</a>
          </li>
          <li
            onClick={() => {
              navi();
            }}
          >
            <a href="/#About">About</a>
          </li>
          <li
            onClick={() => {
              navi();
            }}
          >
            <a href="/#ExpEdu">Education & Experience</a>
          </li>
          <li
            onClick={() => {
              navi();
            }}
          >
            <a href="/#Sample">My Sample Works</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
