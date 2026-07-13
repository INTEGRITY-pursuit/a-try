"use client";

import { useEffect, useRef } from "react";
import { animate, scrambleText } from "animejs";
import { terminal } from "../data/site.js";

export default function ResultCard() {
  const cardRef = useRef(null);
  const scoreRef = useRef(null);

  useEffect(() => {
    animate(cardRef.current, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 700,
      ease: "outBack",
    });
    animate(scoreRef.current, {
      innerHTML: scrambleText({ chars: "0-9" }),
      duration: 1500,
    });
  }, []);

  return (
    <article ref={cardRef} className="panel panel-half lab-panel card">
      <div className="terminal-panel-heading">
        <p className="section-kicker">{terminal.resultKicker}</p>
        <h3>{terminal.resultHeading}</h3>
      </div>
      <div className="result-stack">
        <div className="result-item">
          <span>{terminal.resultFields.original}</span>
          <p>在无人应答的旷野上，仍有人试图为后来者留下方向。</p>
        </div>
        <div className="result-item">
          <span>{terminal.resultFields.translation}</span>
          <p>In the wilderness where no one answers, there are still those who try to leave directions for those who come after.</p>
        </div>
        <div className="result-grid">
          <div className="result-badge">
            <span>{terminal.resultFields.score}</span>
            <strong ref={scoreRef}>0.72</strong>
          </div>
          <div className="result-badge">
            <span>{terminal.resultFields.mood}</span>
            <strong>悲悯</strong>
          </div>
        </div>
      </div>
    </article>
  );
}
