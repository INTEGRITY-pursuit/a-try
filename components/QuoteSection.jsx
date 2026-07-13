"use client";

import { useEffect, useRef } from "react";
import { babel } from "../data/site.js";

export default function QuoteSection() {
  const innerRef = useRef(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="quote" className="quote-section">
      <div ref={innerRef} className="quote-inner">
        <p className="quote-mark">BABEL ARCHIVE // 核心档案语录</p>
        <p className="quote-text">{babel.quote.text}</p>
        <p className="quote-attribution">{babel.quote.attribution}</p>
        <p className="quote-footnote">{babel.quote.footnote}</p>
      </div>
    </section>
  );
}
