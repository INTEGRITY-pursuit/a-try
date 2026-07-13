export default function PageHeading({ archiveId, title, subtitle, meta }) {
  return (
    <div className="hero-body">
      {archiveId && <p className="archive-id">{archiveId}</p>}
      <h1 className="hero-display">{title}</h1>
      {subtitle && <p className="hero-tagline">{subtitle}</p>}
      {meta && meta.length > 0 && (
        <div className="hero-meta">
          {meta.map((item, i) => (
            <span key={i} className={"hero-meta-item" + (item.highlight ? " status-ok" : "")}>
              {item.text}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
