import HeroSection from "./HeroSection.jsx";
import TerminalLog from "./TerminalLog.jsx";
import TimelineArchive from "./TimelineArchive.jsx";
import CharacterArchive from "./CharacterArchive.jsx";
import QuoteSection from "./QuoteSection.jsx";

export default function HomeView() {
  return (
    <>
      <HeroSection />

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
