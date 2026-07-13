import Nav from "./Nav.jsx";
import AnimatedCardGrid from "./AnimatedCardGrid.jsx";
import InputCard from "./InputCard.jsx";
import ResultCard from "./ResultCard.jsx";
import { terminal } from "../data/site.js";

export default function TextLabView() {
  return (
    <AnimatedCardGrid className="dashboard-grid">
      <article className="hero-stage hero-sub panel-full">
        <Nav />
        <div className="hero-body">
          <p className="archive-id">{terminal.archiveId}</p>
          <h1 className="hero-display">{terminal.heroTitle}</h1>
          <p className="hero-subtitle">{terminal.heroSubtitle}</p>
        </div>
      </article>

      <InputCard />
      <ResultCard />
    </AnimatedCardGrid>
  );
}
