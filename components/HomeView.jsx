import Nav from "./Nav.jsx";
import PageHeading from "./PageHeading.jsx";
import TerminalLog from "./TerminalLog.jsx";
import TimelineArchive from "./TimelineArchive.jsx";
import CharacterArchive from "./CharacterArchive.jsx";
import QuoteSection from "./QuoteSection.jsx";
import { babel } from "../data/site.js";

export default function HomeView() {
  return (
    <>
      {/* ── Hero 全屏区 ── */}
      <article className="hero-stage">

        {/* 幽灵文字层：MERCY / LIGHTHOUSE 镂空大字 */}
        <div className="hero-ghost-layer" aria-hidden="true">
          <span className="hero-ghost-line">MERCY</span>
          <span className="hero-ghost-line">LIGHTHOUSE</span>
        </div>

        {/* 扫描线纹理 */}
        <div className="hero-scanlines" aria-hidden="true" />

        {/* HUD 瞄准角框 */}
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

        {/* 主标题区 */}
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

      <TerminalLog />
      <TimelineArchive />
      <CharacterArchive />
      <QuoteSection />

      <footer className="site-footer">
        <p className="footer-id">RHD-TERMINAL-V4.5 // 巴别塔档案馆站点</p>
        <p className="footer-credit">素材来源：明日方舟官方 / 塞壬唱片 © Hypergryph — 本站为非商业同人展示</p>
      </footer>
    </>
  );
}
