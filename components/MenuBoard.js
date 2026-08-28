'use client';

import { useState } from 'react';
import Cutout from '@/components/Cutout';
import menu from '@/data/menu.json';
import { BLUE, plateGlow, ring } from '@/data/site';

const TABS = [{ num: '★', name: 'LA RUTA COMPLETA', key: 'all', ring: 'red' }].concat(
  menu.map((s, i) => ({ num: s.num, name: s.name, key: s.num, ring: ring(i) }))
);

/** Cut-out art per parada: the section hero and its "plato destacado" card. */
const ART = {
  '01': {
    img: '/images/dishes/ostiones.webp',
    feat: {
      img: '/images/dishes/nachos.webp',
      name: 'TRASH CAN NACHOS',
      price: '$16',
      desc: 'Charro beans, chile con queso, pico, jalapeño, guac y la carne que elijas — pal centro de la mesa.',
    },
  },
  '02': {
    img: '/images/dishes/aguachile.webp',
    feat: {
      img: '/images/dishes/tostadas-ceviche.webp',
      name: 'TOSTADAS DE CEVICHE',
      price: '$8',
      desc: 'Pescado o camarón curtido en limón, pepino, cebolla morada, aguacate y salsa negra.',
    },
  },
  '03': {
    img: '/images/dishes/caldo-mariscos.webp',
    feat: {
      img: '/images/dishes/arroz-mixto.webp',
      name: 'ARROZ MIXTO',
      price: '$13',
      desc: 'Arroz frito recién salteado con camarón y pollo, verduras y cebollín.',
    },
  },
  '04': {
    img: '/images/dishes/salmon.webp',
    feat: {
      img: '/images/dishes/empanizados.webp',
      name: 'CAMARÓN Y FILETE',
      price: '$18',
      desc: 'Empanizados con arroz frito de la casa, ensalada, papas salteadas y salsa camarada.',
    },
  },
  '05': {
    img: '/images/dishes/parrillada-barco.webp',
    feat: {
      img: '/images/dishes/mar-y-tierra.webp',
      name: 'MAR Y TIERRA',
      price: '$45',
      desc: 'Bagre entero, pulpo zarandeado, camarón, pollo, fajita de res, quesadillas, nopal y queso asado.',
    },
  },
  '06': {
    img: '/images/dishes/tacos.webp',
    feat: {
      img: '/images/dishes/poboy.webp',
      name: 'PO-BOYS',
      price: '$15',
      desc: 'Baguette francés con chile con queso — camarón, ostión o pescado, con papas.',
    },
  },
  '07': {
    img: '/images/drinks/pina-colada.webp',
    feat: {
      img: '/images/drinks/margarita-fresa.webp',
      name: 'DAIQUIRI',
      price: '$7',
      desc: 'Fresa, mango, guayaba o sandía — con escarchado de chamoy y chile.',
    },
  },
  '08': {
    img: '/images/drinks/michelada.webp',
    feat: {
      img: '/images/drinks/semaforo.webp',
      name: 'SEMÁFORO',
      price: '$MP',
      desc: 'Tres capas, un solo vaso — la que se pide cuando el patio ya se puso bueno.',
    },
  },
};

export default function MenuBoard() {
  const [active, setActive] = useState('all');

  const go = (key) => {
    setActive(key);
    window.scrollTo({ top: 0 });
  };

  const sections = active === 'all' ? menu : menu.filter((s) => s.num === active);

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Filtrar por parada">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={t.key === active}
            className={`tab${t.key === active ? ' is-active' : ''}`}
            onClick={() => go(t.key)}
          >
            <span className={`ring tab__num${t.ring === 'blue' ? ' ring--blue' : ''}`}>{t.num}</span>
            <span className="tab__name">{t.name}</span>
          </button>
        ))}
      </div>

      <div className="menuSections">
        {sections.map((sec) => {
          const next = menu[menu.indexOf(sec) + 1];
          const showNext = active !== 'all' && next;
          const art = ART[sec.num];
          const glow = plateGlow(sec.accent, '50% 52%', '.28');
          return (
            <section key={sec.num} className="parada">
              <div className="parada__ghost" aria-hidden="true">
                {sec.num}
              </div>

              <div className="parada__head">
                <div className="parada__headText">
                  <div className="eyebrow" style={{ color: sec.accent }}>
                    PARADA {sec.num} · {sec.tag}
                  </div>
                  <h2 className="parada__name">{sec.name}</h2>
                  <p className="parada__desc">{sec.desc}</p>
                </div>
                <div className="parada__art" style={{ background: glow }}>
                  <Cutout src={art.img} alt={sec.name} box={[400, 300]} />
                </div>
              </div>

              <div className="parada__groups">
                {sec.groups.map((g) => (
                  <div key={g.title} className="group">
                    <div
                      className={`group__head${g.accent === BLUE ? ' group__head--blue' : ''}`}
                    >
                      <div className="group__title">{g.title}</div>
                      {/* rendered even when empty so the flex gap matches the reference */}
                      <div className="group__note">{g.note}</div>
                    </div>
                    {g.items.map((it) => (
                      <div key={it.name} className="item">
                        <div className="item__row">
                          <div className="item__name">{it.name}</div>
                          <div className="dotLeader" />
                          <div className="item__price">{it.price}</div>
                        </div>
                        <div className="item__desc">{it.desc}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="feat">
                <div className="feat__plate" style={{ background: glow }}>
                  <Cutout src={art.feat.img} alt={art.feat.name} box={[330, 250]} />
                </div>
                <div className="feat__body">
                  <div className="feat__label" style={{ color: sec.accent }}>
                    PLATO DESTACADO
                  </div>
                  <div className="feat__row">
                    <div className="feat__name">{art.feat.name}</div>
                    <div className="feat__lead" />
                    <div className="feat__price">{art.feat.price}</div>
                  </div>
                  <div className="feat__desc">{art.feat.desc}</div>
                </div>
              </div>

              {showNext ? (
                <button type="button" className="nextStop" onClick={() => go(next.num)}>
                  <span className="nextStop__label">ON THE ROAD AHEAD</span>
                  <span className="nextStop__target">
                    PARADA {next.num} · {next.name} →
                  </span>
                </button>
              ) : null}
            </section>
          );
        })}
      </div>
    </>
  );
}
