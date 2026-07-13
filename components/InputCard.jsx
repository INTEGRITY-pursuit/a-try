"use client";

import { useState } from "react";
import { terminal } from "../data/site.js";

export default function InputCard() {
  const [text, setText] = useState("");

  return (
    <article className="panel panel-half lab-panel card">
      <div className="terminal-panel-heading">
        <p className="section-kicker">{terminal.inputKicker}</p>
        <h3>{terminal.inputHeading}</h3>
      </div>
      <form className="lab-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="text-input">文本内容</label>
        <textarea
          id="text-input"
          rows="8"
          placeholder={terminal.inputPlaceholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p className="lab-count">已输入 {text.length} 字</p>
        <button className="primary-button" type="button">
          {terminal.ctaLabel}
        </button>
      </form>
    </article>
  );
}
