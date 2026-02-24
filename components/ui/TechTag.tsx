interface TechTagProps {
  label: string;
}

export function TechTag({ label }: TechTagProps) {
  return (
    <span className="tech-pill" data-cursor="card">
      {label}
    </span>
  );
}

