import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import MenuBoard from '@/components/MenuBoard';

export const metadata = {
  title: 'El Menú',
  description:
    'Siete paradas en la ruta del sabor — appetizers, Zona Culichi, ruta caliente, mariscos del asador, tacos, morritos y cheves.',
};

export default function MenuPage() {
  return (
    <>
      <SiteNav />

      <header className="menuHead">
        <div className="menuHead__eyebrow">MARISCOS · SINALOA STYLE · Y MÁS</div>
        <h1 className="menuHead__title">EL MENÚ</h1>
        <p className="menuHead__sub">
          Siete paradas en la ruta del sabor. Elige tu parada — o recorre la ruta completa.
        </p>
      </header>

      <MenuBoard />

      <div className="menuNote">
        <div className="menuNote__tag">GRACIAS POR VIAJAR LA RUTA DEL SABOR</div>
        <div className="menuNote__fine">
          15% gratuity added to parties over $100 · $MP = market price · precios sujetos a cambio
        </div>
      </div>

      <div className="barSplit" aria-hidden="true">
        <i />
        <i />
      </div>
    </>
  );
}
