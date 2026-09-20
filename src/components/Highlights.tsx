import { highlights } from '../data/portfolio';
import SectionTitle from './SectionTitle';
import { StarIcon } from './icons';

export default function Highlights() {
  return (
    <section id="highlights" style={{ background: 'var(--color-bg-subtle)' }}>
      <div className="container">
        <SectionTitle
          eyebrow="Selected Work"
          title="Highlights"
          subtitle="Architectural initiatives I have been proud to lead"
          icon={<StarIcon />}
        />
        <div className="grid grid-cols-3">
          {highlights.map((h) => (
            <article key={h.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}
              >
                {h.title}
              </h3>
              <p style={{ flex: 1, fontSize: '0.95rem', color: 'var(--color-text-soft)' }}>
                {h.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem 0.8rem',
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                {h.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--color-accent)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
