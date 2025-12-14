import React from "react";
import { readme } from "../data/readme.js";

export default function Contact(){
  const c = readme.sections.contact;
  return (
    <section style={{paddingTop:"28px"}}>
      <div className="card">
        <div className="section-head"><h2>Contact</h2><span className="hint">필요한 것만</span></div>
        <ul>
          {c.links.map(l => (
            <li key={l.label}>
              <a href={l.href} target={/^https?:\/\//i.test(l.href) ? "_blank" : undefined} rel={/^https?:\/\//i.test(l.href) ? "noreferrer" : undefined}>{l.label}</a>
            </li>
          ))}
        </ul>
        <p className="small">{c.note}</p>
      </div>
    </section>
  );
}
