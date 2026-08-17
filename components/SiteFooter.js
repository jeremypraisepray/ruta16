import { SOCIALS } from '@/data/site';

export default function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="footer__tag">GRACIAS POR VIAJAR LA RUTA DEL SABOR</div>
        <div className="footer__social">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </footer>
      <div className="barSplit" aria-hidden="true">
        <i />
        <i />
      </div>
    </>
  );
}
