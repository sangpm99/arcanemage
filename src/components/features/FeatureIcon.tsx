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
