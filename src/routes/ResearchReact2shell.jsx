import React from "react";
import AnchorNav from "../components/AnchorNav.jsx";

const anchors = [
  { id: "goal", label: "Goal" },
  { id: "scope", label: "Scope" },
  { id: "env", label: "Environment" },
  { id: "evidence", label: "Evidence" },
  { id: "verify", label: "Patch Verify" },
];

export default function ResearchReact2shell(){
  return (
    <section style={{paddingTop:"28px"}}>
      <div className="card">
        <div className="section-head">
          <h2>Research · React2Shell (CVE-2025-55182)</h2>
          <span className="hint">Safe / Non-weaponized</span>
        </div>
        <p className="small">
          공격 페이로드/익스플로잇 코드는 포함하지 않습니다. 대신 재현성·증거·검증 중심으로 정리합니다.
        </p>
      </div>

      <section className="readme-layout" style={{paddingTop:"14px"}}>
        <div>
          <section id="goal" className="card section">
            <div className="section-head">
              <h2>Goal</h2>
              <span className="hint">개발 목적</span>
            </div>
            <ul>
              <li><b>목표</b>: CVE-2025-55182(React2Shell) PoC <b>재현</b> (로컬 격리 환경)</li>
              <li><b>산출물</b>: 재현 로그/스크린샷/트레이스 + 패치 검증 리포트</li>
            </ul>
          </section>

          <section id="scope" className="card section">
            <div className="section-head">
              <h2>Scope</h2>
              <span className="hint">안전 범위</span>
            </div>
            <ul>
              <li>외부 인터넷 노출 금지(로컬/격리 환경)</li>
              <li>무기화/공격 자동화 코드 공유 금지</li>
              <li>대신 “관찰 가능한 증거”와 “패치 적용 후 동일 조건 검증”을 강조</li>
            </ul>
          </section>

          <section id="env" className="card section">
            <div className="section-head">
              <h2>Environment</h2>
              <span className="hint">재현 조건</span>
            </div>
            <pre className="code">{`OS: (fill)
Node: (fill)
Affected package versions: (fill)
Patched versions: (fill)
Isolation: (Docker / VM / local sandbox)`}</pre>
          </section>

          <section id="evidence" className="card section">
            <div className="section-head">
              <h2>Evidence</h2>
              <span className="hint">로그/스크린샷</span>
            </div>
            <ul>
              <li>재현 로그: <code className="small">/notes/react2shell/repro.log</code></li>
              <li>환경 정보: <code className="small">/notes/react2shell/env.md</code></li>
            </ul>
            <p className="small">여기에는 “결과가 재현됨”을 보여주는 최소한의 증거만 첨부.</p>
          </section>

          <section id="verify" className="card section">
            <div className="section-head">
              <h2>Patch Verification</h2>
              <span className="hint">패치 검증</span>
            </div>
            <ul>
              <li>업데이트 후 동일 조건에서 재현이 더 이상 성립하지 않는지 확인</li>
              <li>차이가 발생한 지점(로그/트레이스)을 근거로 설명</li>
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
