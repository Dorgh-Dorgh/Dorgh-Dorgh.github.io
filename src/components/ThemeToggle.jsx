import React from "react";

export default function ThemeToggle({ theme, onToggle }){
  return (
    <button className="btn" type="button" onClick={onToggle} aria-label="Toggle theme" title="Toggle theme">
      <span aria-hidden="true">{theme === "dark" ? "☾" : "☼"}</span>
      <span className="small" aria-hidden="true">Theme</span>
    </button>
  );
}
