import type { FeatureIconName, Tone } from "@/data/features";

/** Phần tô mờ bên trong icon (đặt trên các hình kín) */
const soft = { fill: "currentColor", fillOpacity: 0.22 } as const;

const PATHS: Record<FeatureIconName, React.ReactNode> = {
  moon: <path {...soft} d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />,
  gate: (
    <>
      <path {...soft} d="M4 21V10a8 8 0 0 1 16 0v11h-4v-9a4 4 0 0 0-8 0v9z" />
      <path d="M2 21h20" />
      <path d="M12 2v2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 14h2M14 14h2M8 17h2" />
    </>
  ),
  swords: (
    <>
      <path d="M14.5 17.5 3 6V3h3l11.5 11.5" />
      <path d="M13 19l6-6M16 16l4 4M19 21l2-2" />
      <path d="M14.5 6.5 18 3h3v3l-3.5 3.5" />
      <path d="M5 14l4 4M7 17l-3 3M3 19l2 2" />
    </>
  ),
  heartDown: (
    <>
      <path
        {...soft}
        d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"
      />
      <path d="M12 8v6M9.5 11.5 12 14l2.5-2.5" />
    </>
  ),
  speed: (
    <>
      <path d="M3 7h6M2 12h6M3 17h6" />
      <path {...soft} d="M12 5l8 7-8 7 2.5-7z" />
    </>
  ),
  swordFast: (
    <>
      <path {...soft} d="M14.5 17.5 3 6V3h3l11.5 11.5z" />
      <path d="M13 19l6-6M16 16l4 4M19 21l2-2" />
      <path d="M15 3h6M18 7h3" />
    </>
  ),
  crystal: (
    <>
      <path {...soft} d="M12 2 19 8.5 12 22 5 8.5z" />
      <path d="M5 8.5h14" />
      <path d="M12 2 9 8.5l3 13.5 3-13.5z" />
    </>
  ),
  skull: (
    <>
      <path
        {...soft}
        d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.6-3.3 8 8 0 1 0-11.2 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
      />
      <circle cx="9" cy="12" r="1.3" fill="currentColor" />
      <circle cx="15" cy="12" r="1.3" fill="currentColor" />
      <path d="M12.5 17h-1l.5-1z" />
    </>
  ),
  warning: (
    <>
      <path
        {...soft}
        d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3z"
      />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  team: (
    <>
      <circle {...soft} cx="9" cy="7" r="4" />
      <path {...soft} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2z" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  stairs: (
    <>
      <path {...soft} d="M3 20h5v-4h4v-4h4V8h5v12z" />
      <path d="M17 4l4 0M19 2v4" />
    </>
  ),
  chest: (
    <>
      <path {...soft} d="M3 9h18v11H3z" />
      <path d="M3 13h18" />
      <path d="M5 9V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2" />
      <rect x="10.5" y="11.5" width="3" height="4" rx=".5" fill="currentColor" />
    </>
  ),
  paw: (
    <>
      <circle cx="5.5" cy="11" r="2" />
      <circle cx="9.5" cy="6" r="2" />
      <circle cx="14.5" cy="6" r="2" />
      <circle cx="18.5" cy="11" r="2" />
      <path
        {...soft}
        d="M12 11c-3 0-5.5 3-5.5 6 0 2 1.6 3 3.2 3 .9 0 1.6-.5 2.3-.5s1.4.5 2.3.5c1.6 0 3.2-1 3.2-3 0-3-2.5-6-5.5-6z"
      />
    </>
  ),
  scroll: (
    <>
      <path
        {...soft}
        d="M6 3h12a2 2 0 0 1 2 2v2h-4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      />
      <path d="M8 8h4M8 12h4M7.5 17c1-1.5 1.5-1.5 2.2-.5s1.3 1 2.3-.5" />
    </>
  ),
  user: (
    <>
      <circle {...soft} cx="12" cy="8" r="4" />
      <path {...soft} d="M4.5 21a7.5 7.5 0 0 1 15 0z" />
    </>
  ),
  sparkle: (
    <>
      <path
        {...soft}
        d="M11 4l1.8 6.2L19 12l-6.2 1.8L11 20l-1.8-6.2L3 12l6.2-1.8z"
      />
      <path d="M19 3v4M17 5h4" />
    </>
  ),
  heart: (
    <path
      {...soft}
      d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"
    />
  ),
  orb: (
    <>
      <circle {...soft} cx="14" cy="10" r="6" />
      <path d="M9 15l-6 6M6 12l-3 3M12 18l-3 3" />
    </>
  ),
  cancel: (
    <>
      <circle {...soft} cx="12" cy="12" r="9.5" />
      <path d="M5.5 5.5l13 13" />
    </>
  ),
  food: (
    <>
      <path {...soft} d="M3 12h18a9 9 0 0 1-18 0z" />
      <path d="M8 8c0-2 1.5-2 1.5-4M14 8c0-2 1.5-2 1.5-4" />
    </>
  ),
  clock: (
    <>
      <circle {...soft} cx="12" cy="12" r="9.5" />
      <path d="M12 6.5V12l3.5 2" />
    </>
  ),
  /* bình thuốc cổ tròn */
  flask: (
    <>
      <path
        {...soft}
        d="M10 3h4v5.2a7 7 0 1 1-4 0z"
      />
      <path d="M8.5 3h7" />
      <path d="M6 15.5h12" />
    </>
  ),
  cauldron: (
    <>
      <path {...soft} d="M4 10h16v3a8 8 0 0 1-16 0z" />
      <path d="M3 10h18" />
      <path d="M7 20.5l-1 1.5M17 20.5l1 1.5" />
      <path d="M9 7c0-1.5 1.5-1.5 1.5-3M14 7c0-1.5 1.5-1.5 1.5-3" />
    </>
  ),
  /* tờ nhiệm vụ trên bảng kẹp */
  quest: (
    <>
      <rect {...soft} x="5" y="4" width="14" height="18" rx="2" />
      <path d="M9 2.5h6v3H9z" />
      <path d="M8.5 11l1.5 1.5L13 9.5M8.5 17h7" />
    </>
  ),
  book: (
    <>
      <path {...soft} d="M2 5c3-1.5 7-1.5 10 1 3-2.5 7-2.5 10-1v14c-3-1.5-7-1.5-10 1-3-2.5-7-2.5-10-1z" />
      <path d="M12 6v14" />
    </>
  ),
  /* nhà tiên tri */
  hut: (
    <>
      <path {...soft} d="M5 11v10h14V11" />
      <path d="M2.5 12.5L12 3l9.5 9.5" />
      <path d="M10 21v-5a2 2 0 0 1 4 0v5" />
    </>
  ),
  gift: (
    <>
      <rect {...soft} x="4" y="10" width="16" height="11" rx="1" />
      <path d="M3 7h18v3H3zM12 7v14" />
      <path d="M12 7C10.5 3.5 7 3.5 7 5.5S10 7 12 7c2 0 5 0 5-1.5S13.5 3.5 12 7z" />
    </>
  ),
  shield: (
    <path
      {...soft}
      d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"
    />
  ),
  feather: (
    <>
      <path {...soft} d="M20.2 3.8a6 6 0 0 0-8.5 0L5 10.5V19h8.5l6.7-6.7a6 6 0 0 0 0-8.5z" />
      <path d="M16 8L2 22M17.5 15H9" />
    </>
  ),
  brain: (
    <>
      <path
        {...soft}
        d="M12 5a3 3 0 0 0-5.8-1A3.5 3.5 0 0 0 4 10.5a4 4 0 0 0 1 7A3.5 3.5 0 0 0 12 19zM12 5a3 3 0 0 1 5.8-1 3.5 3.5 0 0 1 2.2 6.5 4 4 0 0 1-1 7A3.5 3.5 0 0 1 12 19z"
      />
      <path d="M12 5v14" />
    </>
  ),
  drop: (
    <path {...soft} d="M12 2.5s7 7.3 7 12.5a7 7 0 0 1-14 0c0-5.2 7-12.5 7-12.5z" />
  ),
};

/** Màu + quầng sáng theo tông của ô hiệu ứng */
export const TONE_CLASS: Record<Tone, string> = {
  red: "text-rose-400",
  orange: "text-orange-400",
  blue: "text-sky-400",
  green: "text-emerald-400",
  purple: "text-violet-400",
  gold: "text-amber-300",
};

export function FeatureIcon({
  name,
  className = "size-5",
}: {
  name: FeatureIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
