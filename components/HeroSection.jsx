"use client";

import { useRef, useCallback } from "react";
import Nav from "./Nav.jsx";
import PageHeading from "./PageHeading.jsx";
import { babel } from "../data/site.js";

export default function HeroSection() {
  const heroRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width - 0.5).toFixed(4);
    const my = ((e.clientY - rect.top) / rect.height - 0.5).toFixed(4);
    el.style.setProperty("--hero-mx", mx);
    el.style.setProperty("--hero-my", my);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.setProperty("--hero-mx", 0);
    el.style.setProperty("--hero-my", 0);
  }, []);

  return (
    <article
      ref={heroRef}
      className="hero-stage"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 背景图片层（视差最深，移动幅度最大） */}
      <div className="hero-bg-layer" />

      {/* 雾气动画层（常驻漂浮） */}
      <div className="hero-fog hero-fog--1" aria-hidden="true" />
      <div className="hero-fog hero-fog--2" aria-hidden="true" />

      {/* 灯塔光束（缓慢扫过） */}
      <div className="hero-beam" aria-hidden="true" />

      {/* 颗粒噪点层 */}
      <div className="hero-grain" aria-hidden="true" />

      {/* 幽灵文字（中等视差） */}
      <div className="hero-ghost-layer" aria-hidden="true">
        <span className="hero-ghost-line">MERCY</span>
        <span className="hero-ghost-line">LIGHTHOUSE</span>
      </div>

      {/* 扫描线纹理 */}
      <div className="hero-scanlines" aria-hidden="true" />

      {/* HUD 角框 */}
      <div className="hud-corner hud-corner--tl" aria-hidden="true" />
      <div className="hud-corner hud-corner--tr" aria-hidden="true" />
      <div className="hud-corner hud-corner--bl" aria-hidden="true" />
      <div className="hud-corner hud-corner--br" aria-hidden="true" />

      {/* 脚手架装饰文字 */}
      <p className="hero-scaffold" aria-hidden="true">
        RHODES ISLAND TACTICAL SYSTEM v4.5 // BABEL ARCHIVE RETRIEVAL // ACCESS AUTHORIZED // ENCRYPT: LV-7
      </p>

      {/* 导航 */}
      <Nav />

      {/* 主标题（最轻微视差） */}
      <PageHeading
        archiveId={babel.archiveId}
        title={babel.heroTitle}
        subtitle={babel.heroTagline}
        meta={[
          { text: babel.accessStatus, highlight: true },
          { text: babel.completionRate },
        ]}
      />

      {/* CTA + 时间线锚点 */}
      <div>
        <a href="#lore" className="cta-button">{babel.ctaLabel}</a>
        <nav className="hero-anchor-nav">
          {babel.timeline.map((chapter) => (
            <a key={chapter.era} href="#timeline" className="hero-anchor-item">
              <span className="anchor-bullet" />
              {chapter.era}
            </a>
          ))}
        </nav>
      </div>
    </article>
  );
}
