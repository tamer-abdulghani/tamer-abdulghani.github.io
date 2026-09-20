import { profile } from '../data/portfolio';
import ConnectedNetwork from './ConnectedNetwork';

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ConnectedNetwork />

      <div className="container" style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 500,
            marginBottom: '0.35rem',
            lineHeight: 1.1,
          }}
        >
          {profile.name}
        </h1>

        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: '1.25rem',
          }}
        >
          {profile.location}
        </div>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
            color: 'var(--color-text-soft)',
            marginBottom: '2rem',
            letterSpacing: '0.02em',
          }}
        >
          {profile.title}
        </p>

        <div
          aria-hidden
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            margin: '0 auto 2rem',
            color: 'var(--color-accent)',
          }}
        >
          <span style={{ width: '48px', height: '1px', background: 'currentColor' }} />
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em' }}>❖</span>
          <span style={{ width: '48px', height: '1px', background: 'currentColor' }} />
        </div>

        <p
          style={{
            fontSize: '1.1rem',
            maxWidth: '640px',
            margin: '0 auto 2.5rem',
            color: 'var(--color-text-soft)',
            fontStyle: 'italic',
          }}
        >
          {profile.tagline}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '2.5rem',
          }}
        >
          {profile.credentials.map((c) => (
            <span
              key={c}
              className="tag"
              style={{
                background: 'transparent',
                borderColor: 'var(--color-border-strong)',
                color: 'var(--color-text-soft)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.35rem 0.9rem',
              }}
            >
              {c}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#experience" className="btn btn-primary">
            View Experience
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

