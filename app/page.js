import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import SpecialsStrip from '@/components/SpecialsStrip';
import { ORDER_URL, ADDRESS_LINE_1, ADDRESS_LINE_2, PHONE_DISPLAY, PHONE_HREF, ring } from '@/data/site';

const PARADAS = [
  'APPETIZERS',
  'ZONA CULICHI',
  'RUTA CALIENTE',
  'MARISCOS',
  'Y MÁS',
  'MORRITOS & DESSERT',
  'CHEVES',
].map((name, i) => ({ num: `0${i + 1}`, name, ring: ring(i) }));

const TOP_SELLERS = [
  {
    name: 'TORRE 16',
    price: '$29',
    img: '/media/torre-mariscos.webp',
    ring: 'red',
    desc: 'Mixed ceviche, scallops, boiled shrimp, 6 aguachiles — dipped in culichi sauce.',
  },
  {
    name: 'LA CHAPARRA',
    price: '$29',
    img: '/media/molcajete-aguachile.webp',
    ring: 'blue',
    desc: 'Molcajete bowl: seafood tower, green mussels, avocado, culichi sauce.',
  },
  {
    name: 'OSTIONES R16',
    price: '$16',
    img: '/media/ostiones-r16.webp',
    ring: 'red',
    desc: 'Grilled oysters — bacon, chorizo, mozzarella, jalapeño, camarada sauce.',
  },
  {
    name: 'ZARANDEADO',
    price: '$MP',
    img: '/media/pescado-zarandeado.webp',
    ring: 'blue',
    desc: 'Whole fish from the open-fire grill, secret sauce, fried rice, house salad.',
  },
];

const REVIEWS = [
  { quote: '"The food was delicious and fresh… the music really set the mood."', name: 'R C.' },
  {
    quote: '"Hosted a 30-person birthday and the manager Johan took care of everything."',
    name: 'CRYSTAL S.',
  },
  { quote: '"Rachel made sure our table never waited — great service, great ceviche."', name: 'TERESA G.' },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />

      <header className="hero">
        <video
          className="hero__video"
          src="/media/hero-home.mp4"
          poster="/media/hero-home-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hero__scrim" />
        <div className="hero__dots" />
        <div className="hero__rail" aria-hidden="true">
          <span>PARADA 01 · BIENVENIDOS A LA RUTA</span>
        </div>
        <div className="hero__ghost" aria-hidden="true">
          16
        </div>
        <div className="hero__content">
          <div className="hero__eyebrow">MARISCOS · SINALOA STYLE · Y MÁS</div>
          <h1 className="hero__title">
            LA RUTA
            <br />
            DEL SABOR
          </h1>
          <p className="hero__copy">
            Aguachiles, torres y zarandeados del asador — servidos como en Culiacán, aquí en Pasadena,
            TX.
          </p>
          <div className="hero__actions">
            <Link href="/menu" className="btn btn--fill">
              VER MENÚ
            </Link>
            <a
              className="btn btn--outline"
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              ORDER ONLINE
            </a>
          </div>
        </div>
      </header>

      <nav className="paradaRail" aria-label="Las siete paradas">
        {PARADAS.map((p) => (
          <Link key={p.num} href="/menu" className="paradaRail__stop">
            <div className={`ring paradaRail__num${p.ring === 'blue' ? ' ring--blue' : ''}`}>
              {p.num}
            </div>
            <div className="paradaRail__name">{p.name}</div>
            <div className="paradaRail__line" />
          </Link>
        ))}
      </nav>

      <section className="section sellers">
        <div className="sellers__head">
          <div className="sellers__headL">
            <div className="eyebrow eyebrow--blue">PARADA 02 · ZONA CULICHI</div>
            <h2 className="sellers__title">TOP SELLERS</h2>
          </div>
          <p className="sellers__intro">
            Crudo, frío y con limón — como se come en Culiacán. Con tu salsa culichi.
          </p>
        </div>

        <div className="sellers__grid">
          {TOP_SELLERS.map((t) => (
            <article key={t.name} className="seller">
              <div className={`seller__frame${t.ring === 'blue' ? ' seller__frame--blue' : ''}`}>
                <img src={t.img} alt={t.name} loading="lazy" />
              </div>
              <div className="seller__row">
                <div className="seller__name">{t.name}</div>
                <div className="seller__lead" />
                <div className="seller__price">{t.price}</div>
              </div>
              <p className="seller__desc">{t.desc}</p>
            </article>
          ))}
        </div>

        <Link href="/menu" className="sellers__more">
          VER EL MENÚ COMPLETO — 7 PARADAS →
        </Link>
      </section>

      <SpecialsStrip />

      <section className="patio">
        <div className="patio__media">
          <img src="/media/patio.webp" alt="El patio" loading="lazy" />
        </div>
        <div className="patio__body">
          <div className="eyebrow">EL PATIO · PASADENA, TX</div>
          <h2 className="patio__title">
            LA RUTA DEL SABOR,
            <br />
            AL AIRE LIBRE
          </h2>
          <p className="patio__meta">
            {ADDRESS_LINE_1}, {ADDRESS_LINE_2}
            <br />
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          </p>
          <div className="patio__hours">
            <div className="patio__hourCol">
              <div className="patio__hourLabel">DOM – MAR</div>
              <div className="patio__hourVal">11 AM – 10 PM</div>
            </div>
            <div className="patio__hourCol">
              <div className="patio__hourLabel">MIÉ – SÁB</div>
              <div className="patio__hourVal">11 AM – MEDIANOCHE +</div>
            </div>
          </div>
          <Link href="/visitanos" className="btn btn--sm patio__cta">
            CÓMO LLEGAR →
          </Link>
        </div>
      </section>

      <section className="section reviews">
        <h2 className="reviews__title">DICEN EN LA RUTA</h2>
        <div className="reviews__grid">
          {REVIEWS.map((r) => (
            <blockquote key={r.name} className="review">
              <div className="review__stars" aria-label="5 de 5 estrellas">
                ★★★★★
              </div>
              <p className="review__quote">{r.quote}</p>
              <cite className="review__name">{r.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
