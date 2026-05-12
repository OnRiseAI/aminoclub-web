import type { SVGProps } from "react";

const base = "h-28 w-28";

function Frame({
  children,
  className,
  ...rest
}: SVGProps<SVGSVGElement> & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${base} ${className ?? ""}`}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

/* 1. Community of researchers — isometric test-tube rack with 3 tubes */
export function IllusTestRack(props: SVGProps<SVGSVGElement>) {
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id="liquidA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bae6fd" />
          <stop offset="1" stopColor="#7dd3fc" />
        </linearGradient>
        <linearGradient id="liquidB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fce4f0" />
          <stop offset="1" stopColor="#f9a8d4" />
        </linearGradient>
        <linearGradient id="liquidC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dff5e6" />
          <stop offset="1" stopColor="#86efac" />
        </linearGradient>
      </defs>

      {/* tube 1 */}
      <rect x="22" y="22" width="10" height="44" rx="5" />
      <path d="M22 56 v5 a5 5 0 0 0 10 0 v-5 z" fill="url(#liquidA)" stroke="none" />
      <path d="M22 56 h10" />

      {/* tube 2 (taller) */}
      <rect x="43" y="14" width="10" height="52" rx="5" />
      <path d="M43 48 v13 a5 5 0 0 0 10 0 v-13 z" fill="url(#liquidB)" stroke="none" />
      <path d="M43 48 h10" />

      {/* tube 3 */}
      <rect x="64" y="26" width="10" height="40" rx="5" />
      <path d="M64 54 v7 a5 5 0 0 0 10 0 v-7 z" fill="url(#liquidC)" stroke="none" />
      <path d="M64 54 h10" />

      {/* isometric rack base */}
      <path d="M14 70 L82 70 L78 80 L18 80 Z" fill="#f8fafc" />
      <path d="M14 70 L82 70" />
      <path d="M18 80 L78 80" />
      <path d="M14 70 L18 80" />
      <path d="M82 70 L78 80" />
      <circle cx="27" cy="74" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="48" cy="74" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="69" cy="74" r="1.2" fill="currentColor" stroke="none" />
    </Frame>
  );
}

/* 2. Pricing/quality — pipette dropping into petri dish */
export function IllusPipetteDish(props: SVGProps<SVGSVGElement>) {
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id="dishFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e0f2fe" />
          <stop offset="1" stopColor="#bae6fd" />
        </linearGradient>
      </defs>

      {/* pipette */}
      <path d="M52 10 v22 l-5 12 a4 4 0 0 0 8 0 l-5 -12 z" />
      <rect x="48" y="6" width="10" height="6" rx="1.5" />
      <path d="M51 32 h6" />

      {/* drop falling */}
      <path d="M51 56 q0 -3 1.5 -5 q1.5 2 1.5 5 a1.5 1.5 0 0 1 -3 0 z" fill="currentColor" stroke="none" opacity="0.55" />

      {/* petri dish */}
      <ellipse cx="48" cy="76" rx="32" ry="6" fill="url(#dishFill)" />
      <ellipse cx="48" cy="76" rx="32" ry="6" />
      <ellipse cx="48" cy="73" rx="32" ry="6" />
      <path d="M16 73 v3" />
      <path d="M80 73 v3" />

      {/* ripple */}
      <ellipse cx="48" cy="73" rx="8" ry="1.5" opacity="0.6" />
      <ellipse cx="48" cy="73" rx="14" ry="2.5" opacity="0.35" />
    </Frame>
  );
}

/* 3. Expert support — magnifier over chat/help bubble */
export function IllusMagnifierChat(props: SVGProps<SVGSVGElement>) {
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id="bubbleFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ece9ff" />
          <stop offset="1" stopColor="#c4b5fd" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* chat bubble */}
      <path
        d="M14 30 a8 8 0 0 1 8 -8 h44 a8 8 0 0 1 8 8 v22 a8 8 0 0 1 -8 8 h-30 l-10 10 v-10 h-4 a8 8 0 0 1 -8 -8 z"
        fill="url(#bubbleFill)"
      />
      <circle cx="32" cy="40" r="2" fill="currentColor" stroke="none" />
      <circle cx="44" cy="40" r="2" fill="currentColor" stroke="none" />
      <circle cx="56" cy="40" r="2" fill="currentColor" stroke="none" />

      {/* magnifier */}
      <circle cx="68" cy="64" r="14" fill="#ffffff" />
      <circle cx="68" cy="64" r="14" />
      <circle cx="68" cy="64" r="9" opacity="0.6" />
      <path d="M78 74 l10 10" strokeWidth="2.4" />
    </Frame>
  );
}

/* 4. Research library — molecular structure (atoms + bonds) */
export function IllusMolecule(props: SVGProps<SVGSVGElement>) {
  return (
    <Frame {...props}>
      <defs>
        <radialGradient id="atomCenter" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#0ea5e9" stopOpacity="0.18" />
          <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="48" cy="48" r="26" fill="url(#atomCenter)" stroke="none" />

      {/* bonds */}
      <path d="M48 48 L24 32" />
      <path d="M48 48 L78 28" />
      <path d="M48 48 L20 64" />
      <path d="M48 48 L74 72" />
      <path d="M48 48 L48 18" />

      {/* atoms */}
      <circle cx="48" cy="48" r="7" fill="#ffffff" />
      <circle cx="48" cy="48" r="7" />
      <circle cx="24" cy="32" r="5" fill="#bae6fd" />
      <circle cx="24" cy="32" r="5" />
      <circle cx="78" cy="28" r="5" fill="#fce4f0" />
      <circle cx="78" cy="28" r="5" />
      <circle cx="20" cy="64" r="5" fill="#dff5e6" />
      <circle cx="20" cy="64" r="5" />
      <circle cx="74" cy="72" r="5" fill="#fdf3c4" />
      <circle cx="74" cy="72" r="5" />
      <circle cx="48" cy="18" r="5" fill="#ece9ff" />
      <circle cx="48" cy="18" r="5" />

      {/* electron orbit hint */}
      <ellipse cx="48" cy="48" rx="34" ry="14" transform="rotate(-20 48 48)" opacity="0.25" />
    </Frame>
  );
}

/* 5. Fast shipping — stopwatch with motion lines */
export function IllusStopwatchMotion(props: SVGProps<SVGSVGElement>) {
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id="watchFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f1f5f9" />
        </linearGradient>
      </defs>

      {/* motion lines */}
      <path d="M8 36 h12" opacity="0.6" />
      <path d="M4 48 h16" opacity="0.45" />
      <path d="M8 60 h12" opacity="0.3" />

      {/* crown */}
      <rect x="52" y="10" width="10" height="6" rx="1.5" />
      <path d="M55 16 v4" />
      <path d="M59 16 v4" />

      {/* watch body */}
      <circle cx="58" cy="54" r="26" fill="url(#watchFace)" />
      <circle cx="58" cy="54" r="26" />
      <circle cx="58" cy="54" r="21" opacity="0.4" />

      {/* tick marks */}
      <path d="M58 32 v3" />
      <path d="M58 73 v3" />
      <path d="M36 54 h3" />
      <path d="M77 54 h3" />

      {/* hands */}
      <path d="M58 54 L58 36" strokeWidth="2" />
      <path d="M58 54 L72 46" strokeWidth="2" />
      <circle cx="58" cy="54" r="2.5" fill="currentColor" stroke="none" />

      {/* speed arc */}
      <path d="M40 78 q18 -6 36 0" opacity="0.4" />
    </Frame>
  );
}

/* 6. Shipment protection — delivery truck with motion + small shield */
export function IllusTruckShield(props: SVGProps<SVGSVGElement>) {
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id="truckBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f1f5f9" />
        </linearGradient>
      </defs>

      {/* motion lines */}
      <path d="M6 38 h12" opacity="0.55" />
      <path d="M2 50 h16" opacity="0.4" />
      <path d="M6 62 h12" opacity="0.25" />

      {/* cargo box */}
      <rect x="20" y="32" width="44" height="32" rx="2" fill="url(#truckBody)" />
      <rect x="20" y="32" width="44" height="32" rx="2" />
      <path d="M42 32 v32" opacity="0.4" />

      {/* cab */}
      <path d="M64 40 h14 l8 10 v14 h-22 z" fill="url(#truckBody)" />
      <path d="M64 40 h14 l8 10 v14 h-22 z" />
      <path d="M68 44 h9 l5 7 h-14 z" fill="#bae6fd" />
      <path d="M68 44 h9 l5 7 h-14 z" />

      {/* wheels */}
      <circle cx="32" cy="68" r="5" fill="#ffffff" />
      <circle cx="32" cy="68" r="5" />
      <circle cx="32" cy="68" r="2" fill="currentColor" stroke="none" />
      <circle cx="72" cy="68" r="5" fill="#ffffff" />
      <circle cx="72" cy="68" r="5" />
      <circle cx="72" cy="68" r="2" fill="currentColor" stroke="none" />

      {/* shield badge */}
      <path
        d="M40 14 l8 -4 l8 4 v8 a8 8 0 0 1 -8 8 a8 8 0 0 1 -8 -8 z"
        fill="#16a34a"
        stroke="#15803d"
      />
      <path d="M44 22 l3 3 l5 -6" stroke="#ffffff" strokeWidth="1.6" />
    </Frame>
  );
}
