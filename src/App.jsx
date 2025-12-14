import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./routes/Home.jsx";
import Projects from "./routes/Projects.jsx";
import Contact from "./routes/Contact.jsx";
import ResearchReact2shell from "./routes/ResearchReact2shell.jsx";
import NotFound from "./routes/NotFound.jsx";
import { getInitialTheme, applyTheme } from "./lib/theme.js";

export default function App(){
  const [theme, setTheme] = useState(getInitialTheme());
  useEffect(() => { applyTheme(theme); }, [theme]);

  return (
    <HashRouter>
      <Layout theme={theme} onToggle={() => setTheme(t => t === "dark" ? "light" : "dark")}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research/react2shell" element={<ResearchReact2shell />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
