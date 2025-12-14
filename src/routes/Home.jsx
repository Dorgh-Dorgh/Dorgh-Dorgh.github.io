import React from "react";
import AnchorNav from "../components/AnchorNav.jsx";
import { readme } from "../data/readme.js";

export default function Home(){
  const { hero, anchors, sections } = readme;

  return (
    <>
      <section className="hero">
        <div className="hero-card">
          <div className="hero-banner" role="img" aria-label="Banner"></div>
          <div className="hero-inner">
            <div className="kicker">{hero.kicker}</div>
            <h1 className="h1">{hero.name}</h1>
            <p className="sub">{hero.tagline}</p>

            <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
              {hero.quick.map(q => (
                <a key={q.label} className="btn" href={q.href} target={q.href.startsWith("http") ? "_blank" : undefined} rel={q.href.startsWith("http") ? "noreferrer" : undefined}>
                  {q.label}
                </a>
              ))}
            </div>

            <div className="badges" aria-label="Badges">
              {hero.badges.map(b => (
                <span key={b.k} className="badge-pill"><b>{b.k}</b> · {b.v}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="readme-layout">
        <div>
          {/* About */}
          <section id="about" className="card section">
            <div className="section-head">
              <h2>{sections.about.title}</h2>
              <span className="hint">{sections.about.hint}</span>
            </div>
            {sections.about.body.map((t, idx) => <p key={idx} style={{margin:"0 0 10px"}}>{t}</p>)}

            <div className="stats" aria-label="Stats">
              {sections.about.stats.map(s => (
                <div key={s.k} className="stat">
                  <div className="k">{s.k}</div>
                  <div className="v">{s.v}</div>
                  <div className="d">{s.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Highlights */}
          <section id="highlights" className="card section">
            <div className="section-head">
              <h2>{sections.highlights.title}</h2>
              <span className="hint">{sections.highlights.hint}</span>
            </div>
            <ul>
              {sections.highlights.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
            </ul>
            <div className="pills" aria-label="Pills">
              {sections.highlights.pills.map(p => <span key={p} className="pill">{p}</span>)}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="card section">
            <div className="section-head">
              <h2>{sections.skills.title}</h2>
              <span className="hint">{sections.skills.hint}</span>
            </div>
            <div className="pills" aria-label="Skills">
              {sections.skills.pills.map(p => <span key={p} className="pill">{p}</span>)}
            </div>
            <p className="small" style={{marginTop:"10px"}}>{sections.skills.note}</p>
          </section>

          {/* Featured */}
          <section id="featured" className="card section">
            <div className="section-head">
              <h2>{sections.featured.title}</h2>
              <span className="hint">{sections.featured.hint}</span>
            </div>

            <div className="cards">
              {sections.featured.projects.map(p => (
                <article key={p.title} className="card project" style={{margin:0}}>
                  <div className="title">
                    <a href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel={p.href.startsWith("http") ? "noreferrer" : undefined}>{p.title}</a>
                    <span className="meta">{p.date}</span>
                  </div>
                  <p className="small" style={{margin:"0 0 8px"}}>{p.desc}</p>
                  <div className="tags" aria-label="Tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section id="timeline" className="card section">
            <div className="section-head">
              <h2>{sections.timeline.title}</h2>
              <span className="hint">{sections.timeline.hint}</span>
            </div>
            <ul>
              {sections.timeline.items.map(i => <li key={i.when}><b>{i.when}</b> — {i.what}</li>)}
            </ul>
            <hr className="hr" />
            <pre className="code">{`Commit discipline (example)
- feat: add repro environment & evidence template
- docs: add verification report for patched version
- refactor: extract common layout + anchor nav
- style: polish spacing/typography`}</pre>
          </section>

          {/* Contact */}
          <section id="contact" className="card section">
            <div className="section-head">
              <h2>{sections.contact.title}</h2>
              <span className="hint">{sections.contact.hint}</span>
            </div>
            <ul>
              {sections.contact.links.map(l => (
                <li key={l.label}><a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noreferrer" : undefined}>{l.label}</a></li>
              ))}
            </ul>
            <p className="small">{sections.contact.note}</p>
          </section>
        </div>

        <AnchorNav items={anchors} />
      </section>
    </>
  );
}
