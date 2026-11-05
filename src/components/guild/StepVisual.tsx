import type { GuildStepId } from "@/data/guild";
import { GuildIcon } from "./GuildIcon";

/** Minh họa nhỏ bên phải mỗi bước (vẽ bằng CSS, không dùng ảnh). Ẩn trên màn nhỏ. */
export function StepVisual({
  step,
  modName,
  labels,
}: {
  step: GuildStepId;
  modName: string;
  labels: { subscribe: string; createWorld: string; mods: string };
}) {
  const wrap = "hidden shrink-0 md:block";

  switch (step) {
    /* Nút Subscribe kiểu Workshop */
    case "subscribe":
      return (
        <span aria-hidden className={wrap}>
          <span className="flex items-center gap-1.5 rounded-md border border-[#a4d007]/40 bg-linear-to-b from-[#75b022] to-[#4c7a12] px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_14px_rgb(117_176_34/0.35)]">
            <span className="text-sm leading-none">+</span>
            {labels.subscribe}
          </span>
        </span>
      );

    /* Dòng mod đã tích + công tắc bật */
    case "enable":
      return (
        <span aria-hidden className={wrap}>
          <span className="flex items-center gap-2 rounded-lg border border-white/15 bg-black/40 px-2.5 py-1.5 text-xs text-slate-200">
            <span className="grid size-4 place-items-center rounded-sm border border-[#f5c46b] text-[#f5c46b]">
              <GuildIcon name="check" className="size-3" />
            </span>
            <span className="whitespace-nowrap">{modName}</span>
            <span className="relative h-4 w-7 rounded-full bg-[#d9a441] shadow-[0_0_8px_rgb(245_180_70/0.6)]">
              <span className="absolute right-0.5 top-0.5 size-3 rounded-full bg-white" />
            </span>
          </span>
        </span>
      );

    /* Tấm giấy da "Tạo thế giới / ☑ Mods" */
    case "world":
      return (
        <span aria-hidden className={wrap}>
          <span className="block -rotate-2 rounded-md border border-[#6b4a22] bg-linear-to-b from-[#e8d3a6] to-[#c9a96b] px-3 py-1.5 text-xs font-semibold text-[#3b2610] shadow-[0_4px_10px_rgb(0_0_0/0.5)]">
            <span className="block text-center">{labels.createWorld}</span>
            <span className="mt-1 flex items-center gap-1.5 border-t border-[#6b4a22]/40 pt-1">
              <span className="grid size-3.5 place-items-center rounded-sm border border-[#3b2610]">
                <GuildIcon name="check" className="size-2.5" />
              </span>
              {labels.mods}
            </span>
          </span>
        </span>
      );

    /* 3 người chơi cạnh nhau */
    case "friends":
      return (
        <span aria-hidden className="hidden shrink-0 -space-x-2 md:flex">
          {["text-sky-300", "text-amber-300", "text-rose-300"].map((c) => (
            <span
              key={c}
              className={`grid size-9 place-items-center rounded-full border border-white/15 bg-[#1a1030] ${c} shadow-[0_0_10px_currentColor]`}
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" fillOpacity={0.85}>
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21a8 8 0 0 1 16 0z" />
              </svg>
            </span>
          ))}
        </span>
      );
  }
}
