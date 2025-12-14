export const readme = {
  hero: {
    name: "DORGH",
    kicker: "Security · CTF · Web/System",
    tagline: "내일은 오늘의 나보다 더 성장하기를",
    badges: [
      { k: "Style", v: "끈기와 열정" },
      { k: "Focus", v: "System/Web Vulneribilty" },
      { k: "Docs", v: "Evidence-first" },
      { k: "Stack", v: "Automation" },
    ],
    quick: [
      { label: "Projects", href: "#/projects" },
      { label: "Research", href: "#/research/react2shell" },
      { label: "GitHub", href: "https://github.com/Dorgh-Dorgh" },
    ],
  },
  anchors: [
    { id: "about", label: "About" },
    { id: "highlights", label: "Highlights" },
    { id: "skills", label: "Skills" },
    { id: "featured", label: "Featured" },
    { id: "timeline", label: "Timeline" },
    { id: "contact", label: "Contact" },
  ],
  sections: {
    about: {
      title: "About",
      body: [
        "웹/시스템 취약점 분석, CTF 문제 풀이를 통해 실전 감각을 키우고 있습니다.",
        "목표는 세계 대회 진출입니다",
      ],
      stats: [
        { k: "Goal", v: "Be the Best", d: "" },
        { k: "Method", v: "분해·검증", d: "원인→증거→방지" },
        { k: "Output", v: "문서화", d: "Writeup 작성/유지" },
      ],
    },
    highlights: {
      title: "Highlights",
      hint: "집요-분석형 톤",
      bullets: [
        "가설 세우기 → 최소 재현 → 로그/트레이스 확보 → 원인 분해 → 재현성 확인",
        "1일 1Solve를 목표로 꾸준함 유지",
      ],
      pills: ["Reproducible", "Evidence-first", "Automation", "Clean UX"],
    },
    skills: {
      title: "Skills",
      hint: "Tech Stack",
      pills: [
        "Web Hacking", "System Hacking", "Networking",
        "Python", "JavaScript", "Linux",
        "Burp", "pwntools", "Docker",
      ],
    },
    featured: {
      title: "Featured Projects",
      projects: [
        {
          title: "React2Shell (CVE-2025-55182) — Safe Repro",
          date: "2025-12",
          desc: "피해 서버(로컬) 구성 + 재현 증거 + 패치 검증을 포트폴리오 형태로 정리.",
          tags: ["CVE", "Research", "Verification"],
          href: "#/research/react2shell",
        },
        {
          title: "CTF Writeups (2025 Whitehat)",
          date: "2025",
          desc: "풀이보다 '왜 되는지'를 설명하는 writeup 모음 (레포 링크로 교체).",
          tags: ["CTF", "Writeup"],
          href: "https://github.com/Dorgh-Dorgh?tab=repositories&q=writeup",
        }
      ],
    },
    timeline: {
      title: "Timeline",
      hint: "진행 계획",
      items: [
        { when: "2025.6", what: "정보보안기사 취득" },
        { when: "2025.6", what: "Webhacking 공부 시작" },
        { when: "2025.11", what: "2025 Whitehat 본선 진출"},
        { when: " ~ 현재", what: "Studying" },
      ],
    },
    contact: {
      title: "Contact",
      links: [
        { label: "GitHub : Dorgh-Dorgh.github.io", href: "https://github.com/Dorgh-Dorgh" },
        { label: "Email : ska990621@gmail.com", href: "mailto:ska990621@gmail.com" },
      ],
      note: "Waiting For Your Contact",
    },
  },
};
