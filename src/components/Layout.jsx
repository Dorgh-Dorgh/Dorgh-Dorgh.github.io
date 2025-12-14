import React from "react";
import Nav from "./Nav.jsx";

export default function Layout({ children, theme, onToggle }){
  const base = import.meta.env.BASE_URL || "./";
  const banner = `url(${base}assets/img/dorgh_banner.png)`;
  return (
    <div className="bg-grid" style={{ "--banner-url": banner }}>
      <Nav theme={theme} onToggle={onToggle} />
      <main className="container">{children}</main>
      <footer>
        <div className="container">
          <div className="foot">
            <div>© {new Date().getFullYear()} DORGH · security portfolio</div>
            <div className="small"><a href="#/">Back to Home</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
