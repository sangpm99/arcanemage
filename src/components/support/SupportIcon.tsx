/** Icon tự vẽ cho trang Góp ý & Ủng hộ */
const soft = { fill: "currentColor", fillOpacity: 0.2 } as const;

const PATHS = {
  letter: (
    <>
      <rect {...soft} x="2.5" y="8" width="15" height="12" rx="1.5" />
      <path d="M2.5 9.5 10 15l7.5-5.5" />
      <path d="M21.5 2.5C17 3 13.5 6 12.5 10.5l1.2 1.2c4.5-1 7.5-4.5 7.8-9.2zM12.5 10.5 10 13.5" />
    </>
  ),
  chat: (
    <>
      <path {...soft} d="M21 12a8.5 8.5 0 0 1-12.4 7.5L3 21l1.5-5.2A8.5 8.5 0 1 1 21 12z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" strokeWidth={2.6} />
    </>
  ),
  mail: (
    <>
      <rect {...soft} x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  doc: (
    <>
      <path {...soft} d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6M9 9h2" />
    </>
  ),
  calc: (
    <>
      <rect {...soft} x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
    </>
  ),
  refresh: <path d="M20 11a8 8 0 0 0-14.7-4.3M4 4v3h3M4 13a8 8 0 0 0 14.7 4.3M20 20v-3h-3" />,
  send: (
    <>
      <path {...soft} d="M21.5 2.5 2.5 10l7 3 3 7z" />
      <path d="M21.5 2.5 9.5 13" />
    </>
  ),
  heart: (
    <path
      {...soft}
      d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"
    />
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  check: (
    <>
      <circle {...soft} cx="12" cy="12" r="9.5" />
      <path d="M7.5 12.5l3 3 6-6.5" />
    </>
  ),
  alert: (
    <>
      <circle {...soft} cx="12" cy="12" r="9.5" />
      <path d="M12 7.5v5.5M12 16.5h.01" />
    </>
  ),
  sparkle: <path {...soft} d="M12 3l1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8z" />,
} as const;

export type SupportIconName = keyof typeof PATHS;

export function SupportIcon({
  name,
  className = "size-5",
}: {
  name: SupportIconName;
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
