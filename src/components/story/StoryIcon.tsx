import type { StoryIconName } from "@/data/story";

const soft = { fill: "currentColor", fillOpacity: 0.2 } as const;
const LEAF = "M12 3C15 7 15 10.5 12 13.5 9 10.5 9 7 12 3z";

const PATHS: Record<StoryIconName | "lock" | "chevron", React.ReactNode> = {
  /* Ba cánh hội tụ: 3 Vật Tế Phẩm */
  triad: (
    <>
      {[0, 120, 240].map((r) => (
        <path key={r} {...soft} d={LEAF} transform={`rotate(${r} 12 13.5)`} />
      ))}
      <circle cx="12" cy="13.5" r="6.5" />
    </>
  ),
  triadOpen: (
    <>
      {[60, 180, 300].map((r) => (
        <path key={r} d={LEAF} transform={`rotate(${r} 12 12)`} />
      ))}
    </>
  ),
  star4: (
    <>
      <path {...soft} d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />
      <path d="M5 5l2.5 2.5M19 5l-2.5 2.5M5 19l2.5-2.5M19 19l-2.5-2.5" />
    </>
  ),
  spider: (
    <>
      <circle {...soft} cx="12" cy="14" r="3.5" />
      <circle {...soft} cx="12" cy="8.5" r="2" />
      <path d="M9 13 4 9l-2 2M9 15.5l-5 1-2 4M15 13l5-4 2 2M15 15.5l5 1 2 4M10.5 7 8 3M13.5 7 16 3" />
    </>
  ),
  celestial: (
    <>
      <circle {...soft} cx="12" cy="12" r="3.5" />
      <path d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
    </>
  ),
  maze: (
    <>
      <rect {...soft} x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M7 3v7h5M17 7v10H7v-4M12 14h2v-4" />
    </>
  ),
  lock: (
    <>
      <rect {...soft} x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  chevron: <path d="M6 15l6-6 6 6" />,
};

export function StoryIcon({
  name,
  className = "size-5",
}: {
  name: keyof typeof PATHS;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
