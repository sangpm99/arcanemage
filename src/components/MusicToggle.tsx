"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const UNLOCK_EVENTS = ["pointerdown", "keydown", "touchstart"] as const;

/**
 * Lựa chọn bật/tắt nhạc của người xem, lưu trong bộ nhớ của trang:
 * - Giữ nguyên khi chuyển qua lại giữa các trang trong web.
 * - Tự reset về mặc định (muốn nghe) khi F5 hoặc mở tab mới.
 */
let wantMusic = true;

/**
 * Nhạc nền + nút bật/tắt (chỉ đặt ở trang chủ).
 * - Nút luôn hiển thị đúng trạng thái THẬT của audio: chỉ hiện "đang bật"
 *   khi nhạc thực sự đang phát, nên không bao giờ lệch khi trình duyệt chặn.
 * - Thử tự phát; nếu bị chặn thì phát ở lần click / bấm phím / chạm đầu tiên.
 * - Rời trang chủ → effect cleanup → dừng nhạc và gỡ mọi listener.
 */
export default function MusicToggle({ src }: { src: string }) {
  const t = useTranslations("Home");
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const removeUnlockRef = useRef<() => void>(() => {});
  // true khi trang chủ đang hiển thị (dùng chung cho mọi lần chạy effect)
  const mountedRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.2;

    // false khi lần chạy effect này đã bị dọn: không được gắn thêm listener nào
    let active = true;
    mountedRef.current = true;

    const play = () => {
      audio
        .play()
        .then(() => {
          // play() xong muộn, lúc đó người xem đã rời trang → tắt ngay.
          // Dùng mountedRef (không dùng `active`): ở dev React chạy effect 2 lần,
          // lần đầu xong muộn không được tắt nhạc của lần chạy sau.
          if (!mountedRef.current) audio.pause();
        })
        .catch(() => {
          // Bị chặn autoplay → chờ thao tác đầu tiên của người xem
          if (active) addUnlock();
        });
    };

    const unlock = (e: Event) => {
      // Lần chạm đầu tiên vào chính nút nhạc → để nút tự xử lý
      if (buttonRef.current?.contains(e.target as Node)) return;
      removeUnlock();
      if (active && wantMusic) play();
    };
    const addUnlock = () =>
      UNLOCK_EVENTS.forEach((ev) => document.addEventListener(ev, unlock));
    const removeUnlock = () =>
      UNLOCK_EVENTS.forEach((ev) => document.removeEventListener(ev, unlock));
    removeUnlockRef.current = removeUnlock;

    if (wantMusic) play();

    return () => {
      active = false;
      mountedRef.current = false;
      removeUnlock();
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    removeUnlockRef.current();

    if (audio.paused) {
      wantMusic = true;
      audio.play().catch(() => {});
    } else {
      wantMusic = false;
      audio.pause();
    }
  };

  const label = playing ? t("musicOff") : t("musicOn");

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={label}
        title={label}
        className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-[color,border-color,box-shadow] ${
          playing
            ? "border-[#d9a441] bg-[#1c1534] text-[#f8cf6a] shadow-[0_0_10px_rgb(245_180_70/0.45)]"
            : "border-[#d9a441]/40 bg-[#1c1534] text-slate-300 hover:text-[#f8cf6a]"
        }`}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M11 5L6 9H3v6h3l5 4V5z" fill="currentColor" />
          {playing ? (
            <path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13" />
          ) : (
            <path d="M16 9l5 6M21 9l-5 6" />
          )}
        </svg>
        {label}
      </button>
    </>
  );
}
