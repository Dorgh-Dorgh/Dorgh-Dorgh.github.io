import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToId } from "../lib/scroll.js";

/**
 * HashRouter uses URL hash (#/path) for routing.
 * DO NOT use "#section" anchors (they overwrite the route).
 * We store section in the route query: #/?s=about
 */
export default function AnchorNav({ items, activeOffset = 96 }){
  const [active, setActive] = useState(items?.[0]?.id || "");
  const ids = useMemo(() => items.map(i => i.id), [items]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function onScroll(){
      let current = ids[0] || "";
      for (const id of ids){
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - activeOffset <= 0) current = id;
      }
      setActive(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, activeOffset]);

  const go = (id) => {
    const sp = new URLSearchParams(location.search);
    sp.set("s", id);
    navigate({ pathname: location.pathname, search: `?${sp.toString()}` }, { replace: true });
    requestAnimationFrame(() => scrollToId(id, 84));
  };

  return (
    <aside className="anchor" aria-label="On this page">
      {items.map(i => (
        <button
          key={i.id}
          type="button"
          className={active === i.id ? "active" : undefined}
          onClick={() => go(i.id)}
        >
          {i.label}
        </button>
      ))}
    </aside>
  );
}
