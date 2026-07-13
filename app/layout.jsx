import "../css/reset.css";
import "../css/variables.css";
import "../css/layout.css";
import "../css/hero.css";
import "../css/nav.css";
import "../css/cards.css";
import "../css/lab.css";
import "../css/timeline.css";
import "../css/character.css";
import "../css/terminal-log.css";
import "../css/quote.css";
import "../css/akstyle.css";
import "../css/responsive.css";

export const metadata = {
  title: "慈悲灯塔 · 巴别塔档案",
  description: "BABEL ARCHIVE — 关于特蕾西娅、巴别塔与慈悲灯塔的档案站",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600&family=Noto+Sans+SC:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="app-shell">
          <div className="page-shell">
            <main className="page-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
