/** Icon tự vẽ cho trang Hội quán (nét + tô mờ) */
const soft = { fill: "currentColor", fillOpacity: 0.2 } as const;

const PATHS = {
  quill: (
    <>
      <path {...soft} d="M20.5 3.5C14 4 8.5 8.5 7 15l2 2c6.5-1.5 11-7 11.5-13.5z" />
      <path d="M7 15 3 21M9.5 11.5l3 3M12.5 8.5l2 2" />
      <path d="M3 21h8" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12M7 10l5 5 5-5" />
      <path {...soft} d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
    </>
  ),
  /* Biểu tượng kiểu Steam: bánh răng nối piston */
  steam: (
    <>
      <circle {...soft} cx="12" cy="12" r="9.5" />
      <circle cx="15.5" cy="9" r="2.6" />
      <circle cx="9" cy="15.5" r="1.8" />
      <path d="M10.6 14.3 13.4 10.6M3 13.5l4.4 1.6" />
    </>
  ),
  puzzle: (
    <path
      {...soft}
      d="M9 4a2 2 0 0 1 4 0v2h4a1 1 0 0 1 1 1v4h-2a2 2 0 0 0 0 4h2v4a1 1 0 0 1-1 1h-4v-2a2 2 0 0 0-4 0v2H5a1 1 0 0 1-1-1v-4h2a2 2 0 0 0 0-4H4V7a1 1 0 0 1 1-1h4z"
    />
  ),
  globe: (
    <>
      <circle {...soft} cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </>
  ),
  users: (
    <>
      <circle {...soft} cx="12" cy="8" r="3.2" />
      <path {...soft} d="M6.5 20v-1.5a5.5 5.5 0 0 1 11 0V20z" />
      <circle cx="5" cy="10" r="2.2" />
      <circle cx="19" cy="10" r="2.2" />
      <path d="M2 18.5v-.8a3.5 3.5 0 0 1 4-3.4M22 18.5v-.8a3.5 3.5 0 0 0-4-3.4" />
    </>
  ),
  question: (
    <>
      <circle {...soft} cx="12" cy="12" r="9.5" />
      <path d="M9.3 9.2a2.8 2.8 0 0 1 5.4 1c0 1.9-2.7 2.4-2.7 4.1M12 17.6h.01" />
    </>
  ),
  /* Biểu tượng kiểu Discord: tay cầm game có mắt */
  discord: (
    <>
      <path
        {...soft}
        d="M8 5.5 6.5 5C5 5.3 3.8 5.9 3 6.6 1.6 9.6 1 12.7 1.3 16c1.4 1.3 3 2.1 4.7 2.6l1.2-1.9M16 5.5l1.5-.5c1.5.3 2.7.9 3.5 1.6 1.4 3 2 6.1 1.7 9.4-1.4 1.3-3 2.1-4.7 2.6l-1.2-1.9"
      />
      <path d="M7 16.5c3.2 1.4 6.8 1.4 10 0M8 6.5c2.6-.7 5.4-.7 8 0" />
      <circle cx="9" cy="12" r="1.5" fill="currentColor" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  warning: (
    <>
      <path {...soft} d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  chevron: <path d="M6 9l6 6 6-6" />,
  sparkle: <path {...soft} d="M12 3l1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8z" />,
} as const;

export type GuildIconName = keyof typeof PATHS;

export function GuildIcon({
  name,
  className = "size-5",
}: {
  name: GuildIconName;
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
