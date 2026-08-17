import Link from 'next/link';
import SiteNav from '@/components/SiteNav';

export const metadata = {
  title: 'Nosotros',
  description:
    'De Culiacán a Spencer Hwy — mariscos estilo Sinaloa, raw bar de la Zona Culichi y asador de fuego abierto en Pasadena, TX.',
};

const PILLARS = [
  {
    num: '01',
    color: '#e2493b',
    title: 'ZONA CULICHI',
    text: 'Raw bar estilo Sinaloa: aguachiles, torres, copas y molcajetes — siempre crudo, frío y con limón.',
  },
  {
    num: '02',
    color: '#2f8fd5',
    title: 'FUEGO ABIERTO',
    text: 'Zarandeados y parrilladas en barco, del asador con salsa secreta y arroz recién salteado.',
  },
  {
    num: '03',
    color: '#e2493b',
    title: 'EL PATIO',
    text: 'La ruta del sabor al aire libre — música en vivo, micheladas preparadas y buckets de cheves.',
  },
];

const POSTALES = [
  { src: '/media/molcajete-aguachile.webp', alt: 'Molcajete aguachile' },
  { src: '/media/ostiones-r16.webp', alt: 'Ostiones R16' },
  { src: '/media/lobster.webp', alt: 'Lobster' },
  { src: '/media/michelada.webp', alt: 'Michelada' },
  { src: '/media/parrillada-barco.webp', alt: 'Parrillada en barco' },
  { src: '/media/pescado-zarandeado.webp', alt: 'Pescado zarandeado' },
  { src: '/media/camarones-fritos.webp', alt: 'Camarones fritos' },
  { src: '/media/micheladas-pina.webp', alt: 'Micheladas y piña colada' },
];

export default function NosotrosPage() {
  return (
    <>
      <SiteNav />

      <header className="subHero">
        <video
          className="hero__video"
          src="/media/hero-nosotros.mp4"
          poster="/media/hero-nosotros-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="subHero__scrim" />
        <div className="subHero__content">
          <div className="subHero__eyebrow">NOSOTROS</div>
          <h1 className="subHero__title">
            DE CULIACÁN
            <br />
            A SPENCER HWY
          </h1>
        </div>
      </header>

      <section className="story">
        <div className="story__text">
          <h2 className="story__title">
            LA RUTA EMPIEZA
            <br />
            EN SINALOA
          </h2>
          <p className="story__p">
            Ruta 16 nació de un antojo: mariscos como se comen en Culiacán — crudos, fríos y con limón
            — servidos con la música alta y los platos al centro de la mesa. Del aguachile negro a la
            torre de mariscos, cada receta viajó la ruta desde Sinaloa hasta Pasadena, Texas.
          </p>
          <p className="story__p">
            Nuestro menú se recorre como una carretera: siete paradas, del raw bar de la Zona Culichi
            al asador de fuego abierto, con la última parada siempre en las cheves.
          </p>
        </div>
        <div className="story__media">
          <img src="/media/torre-mariscos.webp" alt="Torre de mariscos" loading="lazy" />
          <div className="story__frame" aria-hidden="true" />
        </div>
      </section>

      <section className="pillars">
        {PILLARS.map((p) => (
          <article key={p.num} className="pillar">
            <div className="pillar__num" style={{ color: p.color }}>
              {p.num}
            </div>
            <div className="pillar__title">{p.title}</div>
            <p className="pillar__text">{p.text}</p>
          </article>
        ))}
      </section>

      <section className="postales">
        <div className="postales__head">
          <h2 className="postales__title">POSTALES DE LA RUTA</h2>
          <a
            className="postales__handle"
            href="https://www.instagram.com/r16_pasadena"
            target="_blank"
            rel="noopener noreferrer"
          >
            @R16_PASADENA
          </a>
        </div>
        <div className="postales__grid">
          {POSTALES.map((p) => (
            <img key={p.src} src={p.src} alt={p.alt} loading="lazy" />
          ))}
        </div>
      </section>

      <section className="closer">
        <h2 className="closer__title">VEN A RECORRER LA RUTA</h2>
        <div className="closer__actions">
          <Link href="/menu" className="btn btn--fill btn--md">
            VER MENÚ
          </Link>
          <Link href="/visitanos" className="btn btn--outline btn--md">
            VISÍTANOS
          </Link>
        </div>
      </section>

      <div className="barSplit" aria-hidden="true">
        <i />
        <i />
      </div>
    </>
  );
}
