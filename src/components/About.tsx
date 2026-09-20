import { profile } from '../data/portfolio';
import SectionTitle from './SectionTitle';
import { BookIcon } from './icons';

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--color-bg-subtle)' }}>
      <div className="container">
        <SectionTitle
          eyebrow="Curriculum vitae"
          title="About"
          subtitle="A brief note on background and focus"
          icon={<BookIcon />}
        />
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.2rem',
              lineHeight: 1.75,
              whiteSpace: 'pre-line',
              color: 'var(--color-text-soft)',
              textAlign: 'center',
            }}
          >
            {profile.bio}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
              color: 'var(--color-text-muted)',
              fontSize: '0.9rem',
              letterSpacing: '0.03em',
            }}
          >
            <span>◆ {profile.location}</span>
            <span>◆ 12+ years of experience</span>
            <span>◆ Fluent in 4 languages</span>
          </div>
        </div>
      </div>
    </section>
  );
}
