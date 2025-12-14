import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <section style={{paddingTop:"28px"}}>
      <div className="card">
        <div className="section-head"><h2>404</h2><span className="hint">Not Found</span></div>
        <p className="small">페이지를 찾을 수 없습니다.</p>
        <Link className="btn" to="/">Go Home</Link>
      </div>
    </section>
  );
}
