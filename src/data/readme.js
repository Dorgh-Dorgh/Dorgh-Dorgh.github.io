export const readme = {
  hero: {
    name: "DORGH",
    kicker: "Security · CTF · Web/System · DFIR",
    tagline: "집요하게 재현하고, 원인을 분해하고, 증거로 기록하고, 개선으로 마무리합니다.",
    badges: [
      { k: "Style", v: "집요-분석형" },
      { k: "Focus", v: "Reproducible" },
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
      hint: "README 느낌 그대로",
      body: [
        "웹/시스템 취약점 분석, CTF, 포렌식 문제 풀이를 통해 실전 감각을 키우고 있습니다.",
        "목표는 '잘 보이는 결과'보다 '재현 가능한 근거'와 '검증 가능한 문서'를 남기는 것입니다.",
      ],
      stats: [
        { k: "Goal", v: "CVE 재현", d: "로컬 격리 환경 기반" },
        { k: "Method", v: "분해·검증", d: "원인→증거→완화" },
        { k: "Output", v: "문서화", d: "로그/스크린샷/체크리스트" },
      ],
    },

    highlights: {
      title: "Highlights",
      hint: "집요-분석형 톤",
      bullets: [
        "가설 세우기 → 최소 재현 → 로그/트레이스 확보 → 원인 분해 → 재현성 확인",
        "무기화가 아닌 안전한 연구·검증 관점(공격 페이로드 비공개)",
        "반복 작업 자동화(스크립트/툴링)로 생산성 향상",
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
      note: "이 영역은 README의 뱃지/아이콘 스타일로 바꿔도 좋습니다.",
    },

    featured: {
      title: "Featured Projects",
      hint: "대표 2~4개만",
      projects: [
        {
          title: "React2Shell (CVE-2025-55182) — Safe Repro",
          date: "2025-12",
          desc: "피해 서버(로컬) 구성 + 재현 증거 + 패치 검증을 포트폴리오 형태로 정리.",
          tags: ["CVE", "Research", "Verification"],
          href: "#/research/react2shell",
        },
        {
          title: "CTF Writeups (Selected)",
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
        { when: "Week 1", what: "로컬 격리 환경 세팅(피해 서버/로그/모니터링)" },
        { when: "Week 2", what: "재현 시나리오 정리(고수준 단계) + 증거 수집 포맷 확정" },
        { when: "Week 3", what: "패치 적용/버전 비교 + 재현 불가 여부 검증" },
        { when: "Week 4", what: "리포트 마감(결론/권고/한계/추가 과제)" },
      ],
    },

    contact: {
      title: "Contact",
      hint: "필요한 것만",
      links: [
        { label: "GitHub", href: "https://github.com/Dorgh-Dorgh" },
        { label: "Email", href: "mailto:your@email.com" },
      ],
      note: "your@email.com 만 바꾸면 끝.",
    },
  },
};
