import "./Contact.css";
import React from "react";

import { contact } from "../../Assets/Contact/Contact";

export default function Contact() {
  return (
    <section id="Contact">
      <h2>Contact Me</h2>
      <div className="allContent">
        {contact.map((arr, index) => {
          return (
            <div className="card" key={index}>
              <a
                href={arr[3]}
                className="icon"
                target="_blank"
                rel="noreferrer"
              >
                {arr[2]}
              </a>
              <a
                href={arr[3]}
                className="heading"
                target="_blank"
                rel="noreferrer"
              >
                <h3>{arr[0]}</h3>
              </a>
              <a
                href={arr[3]}
                className="info"
                target="_blank"
                rel="noreferrer"
              >
                <p>{arr[1]}</p>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
