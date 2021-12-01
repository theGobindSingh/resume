import "./Nav.css";
import React from "react";

import { HashLink as Link } from "react-router-hash-link";

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
  // const linkPre = "resume";
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
            <Link to="/#Home">Home</Link>
          </li>
          <li
            onClick={() => {
              navi();
            }}
          >
            <Link to="/#About">About</Link>
          </li>
          <li
            onClick={() => {
              navi();
            }}
          >
            <Link to="/#ExpEdu">Education & Experience</Link>
          </li>
          <li
            onClick={() => {
              navi();
            }}
          >
            <Link to="/#Sample">My Sample Works</Link>
          </li>
          <li
            onClick={() => {
              navi();
            }}
          >
            <Link to="/#Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
