import React, { useEffect, useMemo, useState } from "react";

export default function AnchorNav({ items, activeOffset = 96 }){
  const [active, setActive] = useState(items?.[0]?.id || "");

  const ids = useMemo(() => items.map(i => i.id), [items]);

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

  return (
    <aside className="anchor" aria-label="On this page">
      {items.map(i => (
        <a
          key={i.id}
          href={`#${i.id}`}
          className={active === i.id ? "active" : undefined}
          onClick={(e) => {
            // Smooth-ish scroll while keeping URL hash.
            // Prevent default to avoid jump under sticky header.
            e.preventDefault();
            const el = document.getElementById(i.id);
            if (!el) return;
            const y = window.scrollY + el.getBoundingClientRect().top - 84;
            window.scrollTo({ top: y, behavior: "smooth" });
            history.replaceState(null, "", `#${i.id}`);
          }}
        >
          {i.label}
        </a>
      ))}
    </aside>
  );
}
