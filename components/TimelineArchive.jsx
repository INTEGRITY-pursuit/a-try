"use client";

import { useEffect, useRef } from "react";
import { babel } from "../data/site.js";

const COLOR_MAP = {
  "--accent-blue": "#5496A8",
  "--brand":       "#C8A85A",
  "--accent-red":  "#8C3636",
};

export default function TimelineArchive() {
  const trackRef = useRef(null);

  useEffect(() => {
    const nodes = trackRef.current?.querySelectorAll(".timeline-node");
    if (!nodes) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="timeline-section">
      <div className="timeline-section-header">
        <span className="section-num-bg" aria-hidden="true">02</span>
        <p className="section-num-label">SECTION 02</p>
        <h2>巴别塔编年史</h2>
        <p className="section-sub">BABEL ARCHIVE // 历史记录</p>
      </div>
      <div ref={trackRef} className="timeline-track">
        {babel.timeline.map((chapter, i) => {
          const color = COLOR_MAP[chapter.accentVar] || "#C8A85A";
          return (
            <div
              key={i}
              className="timeline-node"
              style={{ "--node-color": color }}
            >
              <div className="timeline-year-col">
                <span className="timeline-year">{chapter.year}</span>
              </div>
              <div className="timeline-dot" />
              <div className="timeline-content-col">
                <h3 className="timeline-era">{chapter.era}</h3>
                <ul className="timeline-events">
                  {chapter.events.map((ev, j) => (
                    <li key={j}>{ev}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
