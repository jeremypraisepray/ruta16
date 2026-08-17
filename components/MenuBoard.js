'use client';

import { useState } from 'react';
import menu from '@/data/menu.json';
import { ring } from '@/data/site';

const TABS = [{ num: '★', name: 'LA RUTA COMPLETA', key: 'all', ring: 'red' }].concat(
  menu.map((s, i) => ({ num: s.num, name: s.name, key: s.num, ring: ring(i) }))
);

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
          return (
            <section key={sec.num} className="parada">
              <div className="parada__ghost" aria-hidden="true">
                {sec.num}
              </div>
              <div className="parada__head">
                <div className="eyebrow" style={{ color: sec.accent }}>
                  PARADA {sec.num} · {sec.tag}
                </div>
                <h2 className="parada__name">{sec.name}</h2>
                <p className="parada__desc">{sec.desc}</p>
              </div>

              <div className="parada__groups">
                {sec.groups.map((g) => (
                  <div key={g.title} className="group">
                    <div
                      className={`group__head${g.accent === '#2f8fd5' ? ' group__head--blue' : ''}`}
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
