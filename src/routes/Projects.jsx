import React, { useMemo, useState } from "react";
import { projects } from "../data/projects.js";

export default function Projects(){
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");
  const [sort, setSort] = useState("Newest");

  const allTags = useMemo(() => {
    const s = new Set();
    projects.forEach(p => p.tags.forEach(t => s.add(t)));
    return ["All", ...Array.from(s).sort()];
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    let list = projects.filter(p => {
      const blob = (p.title + " " + p.summary + " " + p.tags.join(" ")).toLowerCase();
      const inQuery = !query || blob.includes(query);
      const inTag = (tag === "All") || p.tags.includes(tag);
      return inQuery && inTag;
    });

    list.sort((a,b) => {
      if(sort === "A→Z") return a.title.localeCompare(b.title);
      if(sort === "Z→A") return b.title.localeCompare(a.title);
      return (b.date || "").localeCompare(a.date || "");
    });

    return list;
  }, [q, tag, sort]);

  return (
    <section style={{paddingTop:"28px"}}>
      <div className="card">
        <div className="section-head">
          <h2>Projects</h2>
          <span className="hint">{filtered.length} items</span>
        </div>

        <div className="toolbar">
          <div className="input" role="search">
            <span aria-hidden="true">⌕</span>
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search title, summary, tags…" />
          </div>

          <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
            <select className="select" value={tag} onChange={(e)=>setTag(e.target.value)} aria-label="Filter by tag">
              {allTags.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select className="select" value={sort} onChange={(e)=>setSort(e.target.value)} aria-label="Sort">
              <option>Newest</option>
              <option>A→Z</option>
              <option>Z→A</option>
            </select>
          </div>
        </div>

        <div className="cards">
          {filtered.map(p => (
            <article key={p.id} className="card project" style={{margin:0}}>
              <div className="title">
                <a
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel={p.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {p.title}
                </a>
                <span className="meta">{p.date}</span>
              </div>
              <p className="small" style={{margin:"0 0 8px"}}>{p.summary}</p>
              <div className="tags" aria-label="Tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
