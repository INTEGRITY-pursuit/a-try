"use client";

import { useEffect, useRef } from "react";
import { babel } from "../data/site.js";

export default function TerminalLog() {
  const listRef = useRef(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll(".lore-log-item");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 120}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="lore" className="lore-section">
      {/* 背景图层（麦田+陆艇场景） */}
      <div className="lore-section-bg" />

      <div className="lore-section-header">
        <span className="section-num-bg" aria-hidden="true">01</span>
        <p className="section-num-label">SECTION 01</p>
        <h2>世界背景</h2>
        <p className="section-sub">BABEL ARCHIVE // 背景档案节选</p>
      </div>

      <div ref={listRef} className="lore-log-list">
        {babel.lore.map((entry) => (
          <div key={entry.id} className="lore-log-item">
            <div className="lore-log-meta">
              <span className="lore-log-id">{entry.id}</span>
              <span className="lore-log-label">{entry.label}</span>
            </div>
            <p className="lore-log-text">{entry.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
