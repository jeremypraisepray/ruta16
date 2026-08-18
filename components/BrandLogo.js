/**
 * Ruta 16 highway-shield mark — the official artwork, extracted from the
 * LOGO_RUTA_16 PDF supplied by the client (406×587 with transparency).
 */
export default function BrandLogo({ className, alt = 'Mariscos Ruta 16 y Más' }) {
  return (
    <img
      className={className}
      src="/brand/ruta16-logo.png"
      alt={alt}
      width={405}
      height={587}
    />
  );
}
