import type { ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

export default function SectionTitle({ eyebrow, title, subtitle, icon }: SectionTitleProps) {
  return (
    <div className="section-title">
      {icon && <div className="section-icon">{icon}</div>}
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
