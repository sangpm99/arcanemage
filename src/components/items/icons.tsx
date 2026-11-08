import type { ItemCategory } from "@/data/items";

/** Icon nét (stroke) dùng chung cho trang vật phẩm */
const PATHS = {
  all: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  weapon: (
    <>
      <path d="M3 21l11-11" />
      <path d="M17.5 3.5l.9 2.2 2.1.8-2.1.9-.9 2.1-.8-2.1-2.2-.9 2.2-.8z" />
      <path d="M12 8l4 4" />
    </>
  ),
  armor: (
    <path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
  ),
  vehicle: (
    <>
      <path d="M21 3L10 14" />
      <path d="M10 14l-2.5-1.5L3 17c1 2 2.5 3.5 4 4l4.5-4.5L10 14z" />
      <path d="M5 19l2-2" />
    </>
  ),
  general: (
    <>
      <path d="M10 2v7.5a2 2 0 0 1-.2.9L4.7 20.6a1 1 0 0 0 .9 1.4h12.8a1 1 0 0 0 .9-1.4l-5.1-10.2a2 2 0 0 1-.2-.9V2" />
      <path d="M8.5 2h7" />
      <path d="M7 16h10" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7.5" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6L6 18" />,
  attack: (
    <>
      <path d="M14.5 17.5L3 6V3h3l11.5 11.5" />
      <path d="M13 19l6-6M16 16l4 4M19 21l2-2" />
    </>
  ),
  armorPen: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
    </>
  ),
  moveSpeed: (
    <>
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
      <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
      <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
    </>
  ),
  damageResist: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  sparkle: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
  ),
  heart: (
    <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
  ),
  paw: (
    <>
      <circle cx="5.5" cy="11" r="2" />
      <circle cx="9.5" cy="6" r="2" />
      <circle cx="14.5" cy="6" r="2" />
      <circle cx="18.5" cy="11" r="2" />
      <path d="M12 11c-3 0-5.5 3-5.5 6 0 2 1.6 3 3.2 3 .9 0 1.6-.5 2.3-.5s1.4.5 2.3.5c1.6 0 3.2-1 3.2-3 0-3-2.5-6-5.5-6z" />
    </>
  ),
} satisfies Record<string, React.ReactNode>;

export type IconName = keyof typeof PATHS;

export function Icon({
  name,
  className = "size-4",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}

export const CATEGORY_ICON: Record<ItemCategory, IconName> = {
  weapon: "weapon",
  armor: "armor",
  vehicle: "vehicle",
  general: "general",
};
