import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AnchorNav from "../components/AnchorNav.jsx";
import { scrollToId } from "../lib/scroll.js";

const anchors = [
  { id: "goal", label: "Goal" },
  { id: "scope", label: "Scope" },
  { id: "env", label: "Environment" },
  { id: "evidence", label: "Evidence" },
  { id: "verify", label: "Patch Verify" },
];

export default function ResearchReact2shell(){
  const location = useLocation();

  useEffect(() => {
    const s = new URLSearchParams(location.search).get("s");
    if (!s) return;
    setTimeout(() => scrollToId(s, 84), 0);
  }, [location.search]);

  return (
    <section style={{paddingTop:"28px"}}>
      <div className="card">
        <div className="section-head">
          <h2>Research · React2Shell (CVE-2025-55182)</h2>
          <span className="hint">Safe / Non-weaponized</span>
        </div>
        <p className="small">
          25.12.8. 발견된 가장 치명적인 CVE를 알아봅니다.
        </p>
      </div>

      <section className="readme-layout" style={{paddingTop:"14px"}}>
        <div>
          <section id="goal" className="card section">
            <div className="section-head"><h2>Goal</h2><span className="hint">개발 목적</span></div>
            <ul>
              <li><b>목표</b>: CVE-2025-55182(React2Shell) PoC <b>재현</b> (로컬 환경)</li>
              <li><b>결과물</b>: 공격 시나리오 + RCE 실행 스크린샷 </li>
            </ul>
          </section>

          <section id="scope" className="card section">
            <div className="section-head"><h2>Scope</h2><span className="hint">안전 범위</span></div>
            <ul>
              <li>외부 인터넷 노출 금지(로컬/격리 환경)</li>
              <li>강력한 페이로드는 노출 금지</li>
              <li>공격 기법 및 방어 기법 숙달</li>
            </ul>
          </section>

          <section id="env" className="card section">
            <div className="section-head"><h2>Environment</h2><span className="hint">재현 조건</span></div>
            <pre className="code">{`OS: Ubuntu 
Isolation: WSL2 Linux`}</pre>
          </section>

          <section id="evidence" className="card section">
            <div className="section-head"><h2>Evidence</h2><span className="hint">로그/스크린샷</span></div>
            <ul>
              <li>재현 로그: <code className="small">/notes/react2shell/repro.log</code></li>
              <li>환경 정보: <code className="small">/notes/react2shell/env.md</code></li>
            </ul>
            <p className="small"></p>
          </section>

          <section id="verify" className="card section">
            <div className="section-head"><h2>Patch Verification</h2><span className="hint">패치 검증</span></div>
            <ul>
            </ul>
            <pre className="code">{`Verification template
- Patched version:
- Expected:
- Observed:
- Evidence:
- Conclusion:`}</pre>
          </section>
        </div>

        <AnchorNav items={anchors} />
      </section>
    </section>
  );
}
