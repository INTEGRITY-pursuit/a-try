"use client";

import { useState, useEffect, useRef } from "react";
import { babel } from "../data/site.js";

export default function CharacterArchive() {
  const [expanded, setExpanded] = useState(null);
  const gridRef = useRef(null);

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".char-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card, i) => {
      card.style.transitionDelay = `${i * 90}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="characters" className="character-section">
      {/* 背景图层（特蕾西娅走向白光） */}
      <div className="character-section-bg" />

      <div className="character-section-header">
        <span className="section-num-bg" aria-hidden="true">03</span>
        <p className="section-num-label">SECTION 03</p>
        <h2>人物档案</h2>
        <p className="section-sub">BABEL ARCHIVE // 人员档案 — 点击卡片查阅完整记录</p>
      </div>

      <div ref={gridRef} className="character-grid">
        {babel.characters.map((char) => (
          <div
            key={char.id}
            className={"char-card" + (expanded === char.id ? " expanded" : "")}
            style={{ "--card-accent": char.accentColor }}
            onClick={() => toggle(char.id)}
          >
            <div className="char-card-bg" />
            <div className="char-card-watermark">{char.name}</div>

            <div className="char-card-front">
              <p className="char-id">{char.id}</p>
              <h3 className="char-name">{char.name}</h3>
              <p className="char-title">{char.title}</p>
              <span className={"char-status " + char.statusType}>{char.status}</span>
              <p className="char-expand-hint">
                {expanded === char.id ? "▲ 收起档案" : "▼ 查阅档案"}
              </p>
            </div>

            <div className="char-card-detail">
              <p className="char-summary">{char.summary}</p>
              <blockquote className="char-quote">{char.quote}</blockquote>
              <div className="char-tags">
                {char.tags.map((tag) => (
                  <span key={tag} className="char-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
