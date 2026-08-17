export const ORDER_URL =
  'https://www.toasttab.com/local/order/mariscos-ruta-16-y-mas-12810-suit-b-gulf-fwy';
export const MAPS_URL = 'https://maps.google.com/?q=2726+Spencer+Hwy,+Pasadena,+TX+77504';
export const PHONE_DISPLAY = '(346) 320-4136';
export const PHONE_HREF = 'tel:3463204136';
export const ADDRESS_LINE_1 = '2726 Spencer Hwy';
export const ADDRESS_LINE_2 = 'Pasadena, TX 77504';

export const SOCIALS = [
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/r16_pasadena' },
  { label: 'FACEBOOK', href: 'https://www.facebook.com/profile.php?id=100085122138803' },
  { label: 'TIKTOK', href: 'https://www.tiktok.com/@mariscosr16' },
];

export const NAV_LINKS = [
  { label: 'MENÚ', href: '/menu' },
  { label: 'NOSOTROS', href: '/nosotros' },
  { label: 'VISÍTANOS', href: '/visitanos' },
];

export const SPECIALS = [
  {
    variant: 'red',
    title: 'MARTES ¡DESTACADO!',
    text: 'Especial de tacos todos los martes.',
  },
  {
    variant: 'blue',
    title: 'MIÉRCOLES ¡JALEDAY!',
    text: 'El meridiano de la semana se celebra aquí.',
  },
  {
    variant: 'dark',
    title: 'HAPPY HOUR',
    text: 'Cheves, micheladas y buckets — última parada.',
  },
];

export const HOURS = [
  { day: 'DOMINGO', time: '11 AM – 10 PM' },
  { day: 'LUNES', time: '11 AM – 12 AM' },
  { day: 'MARTES', time: '11 AM – 10 PM' },
  { day: 'MIÉRCOLES', time: '11 AM – 12 AM' },
  { day: 'JUEVES', time: '11 AM – 12 AM' },
  { day: 'VIERNES', time: '11 AM – 12 AM' },
  { day: 'SÁBADO', time: '11 AM – 2 AM' },
];

export const SERVICE_AREAS = [
  'PASADENA',
  'SOUTH HOUSTON',
  'DEER PARK',
  'GALENA PARK',
  'PEARLAND',
  'LA PORTE',
  'CLEAR LAKE CITY',
  'CHANNELVIEW',
];

export const ring = (i) => (i % 2 === 0 ? 'red' : 'blue');
