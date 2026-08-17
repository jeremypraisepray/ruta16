import { SPECIALS } from '@/data/site';

export default function SpecialsStrip() {
  return (
    <section className="specials" aria-label="Especiales de la semana">
      {SPECIALS.map((s) => (
        <div key={s.title} className={`special special--${s.variant}`}>
          <div className="special__title">{s.title}</div>
          <div className="special__text">{s.text}</div>
        </div>
      ))}
    </section>
  );
}
