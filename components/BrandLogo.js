/**
 * Ruta 16 highway-shield mark.
 *
 * NOTE: the production PNG referenced in the handoff README
 * (https://ruta16.com/pluto-images/brand-logos/3b541599-75f4-485a-85d0-23b15a895e42.png)
 * could not be downloaded from this build environment — the host is blocked by the
 * egress policy. This is a vector recreation built to the logo description in
 * assets/notes.md (red "RUTA" shield top, blue "16" bottom, "MARISCOS" arc above,
 * "Y MÁS..." below). Drop the official artwork in over this component when available.
 */
export default function BrandLogo({ className, title = 'Mariscos Ruta 16 y Más' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 192"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: "var(--font-barlow-condensed), 'Barlow Condensed', 'Arial Narrow', sans-serif" }}
    >
      <defs>
        <path id="r16-arc" d="M 18 42 Q 100 -6 182 42" />
        <path
          id="r16-shield"
          d="M 28 46 H 172 A 14 14 0 0 1 186 60 V 104 C 186 132 142 148 100 162 C 58 148 14 132 14 104 V 60 A 14 14 0 0 1 28 46 Z"
        />
        <clipPath id="r16-clip">
          <use href="#r16-shield" />
        </clipPath>
      </defs>

      <text fontSize="21" fontWeight="800" letterSpacing="3.2" fill="#e2493b">
        <textPath href="#r16-arc" startOffset="50%" textAnchor="middle">
          MARISCOS
        </textPath>
      </text>

      <g clipPath="url(#r16-clip)">
        <rect x="0" y="40" width="200" height="66" fill="#e2493b" />
        <rect x="0" y="106" width="200" height="62" fill="#2f6fb5" />
      </g>
      <use href="#r16-shield" fill="none" stroke="#ffffff" strokeWidth="5" />

      <text
        x="100"
        y="92"
        textAnchor="middle"
        fontSize="36"
        fontWeight="800"
        letterSpacing="3"
        fill="#ffffff"
      >
        RUTA
      </text>
      <text
        x="100"
        y="142"
        textAnchor="middle"
        fontSize="46"
        fontWeight="800"
        letterSpacing="1"
        fill="#ffffff"
      >
        16
      </text>

      <text
        x="100"
        y="186"
        textAnchor="middle"
        fontSize="20"
        fontWeight="700"
        letterSpacing="2.4"
        fill="#ffffff"
      >
        Y MÁS...
      </text>
    </svg>
  );
}
