import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import SpecialsStrip from '@/components/SpecialsStrip';
import {
  ORDER_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  HOURS,
  SERVICE_AREAS,
} from '@/data/site';

export const metadata = {
  title: 'Visítanos',
  description:
    'Última parada · 2726 Spencer Hwy, Pasadena, TX 77504. Horario, contacto y cómo llegar a Mariscos Ruta 16 y Más.',
};

export default function VisitanosPage() {
  return (
    <>
      <SiteNav />

      <header className="visitHead">
        <div className="visitHead__eyebrow">ÚLTIMA PARADA · PASADENA, TX</div>
        <h1 className="visitHead__title">VISÍTANOS</h1>
      </header>

      <section className="visit">
        <div className="visit__media">
          <img src="/media/patio.webp" alt="El patio de Ruta 16" />
          <div className="visit__caption">
            <div className="visit__captionTitle">EL PATIO</div>
            <div className="visit__captionText">La ruta del sabor, al aire libre.</div>
          </div>
        </div>

        <div className="visit__panel">
          <div className="visit__block">
            <div className="visit__label">DIRECCIÓN</div>
            <a className="visit__address" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              2726 SPENCER HWY
              <br />
              PASADENA, TX 77504 ↗
            </a>
          </div>

          <div className="visit__block">
            <div className="visit__label">CONTACTO</div>
            <a className="visit__phone" href={PHONE_HREF}>
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="visit__block visit__block--hours">
            <div className="visit__label">HORARIO</div>
            <div className="visit__hours">
              {HOURS.map((h) => (
                <div key={h.day} className="visit__hourRow">
                  <div className="visit__day">{h.day}</div>
                  <div className="visit__lead" />
                  <div className="visit__time">{h.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SpecialsStrip />

      <section className="zona">
        <h2 className="zona__title">SERVIMOS TODA LA ZONA</h2>
        <div className="zona__chips">
          {SERVICE_AREAS.map((a) => (
            <div key={a} className="zona__chip">
              {a}
            </div>
          ))}
        </div>
        <div className="zona__actions">
          <a className="btn btn--fill btn--md" href={ORDER_URL} target="_blank" rel="noopener noreferrer">
            ORDER ONLINE
          </a>
          <a className="btn btn--outline btn--md" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            CÓMO LLEGAR
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
