"use client";

import { useState } from "react";
import { Icon, type IconName } from "./icons";

/**
 * Ảnh vật phẩm có khung nâu → vàng.
 * Ảnh chưa upload lên R2 (lỗi tải) thì hiện ô thay thế: nền tím + icon nhóm.
 */
export default function ItemArt({
  src,
  alt,
  fallbackIcon,
  active = false,
  className = "",
  lazy = true,
}: {
  src: string;
  alt: string;
  fallbackIcon: IconName;
  active?: boolean;
  className?: string;
  lazy?: boolean;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = failedSrc === src;

  return (
    <span
      className={`item-frame shine ${active ? "item-frame-active motion-safe:before:animate-[sweep_0.9s_ease-out]" : ""} ${className}`}
    >
      {failed ? (
        <span
          role="img"
          aria-label={alt}
          className="item-art item-placeholder grid size-full place-items-center"
        >
          <Icon name={fallbackIcon} className="size-[45%]" />
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={lazy ? "lazy" : "eager"}
          onError={() => setFailedSrc(src)}
          // Ảnh lỗi trước khi React kịp gắn onError (lúc tải trang) → kiểm tra lại
          ref={(el) => {
            if (el?.complete && el.naturalWidth === 0) setFailedSrc(src);
          }}
          className="item-art block size-full object-cover"
        />
      )}
    </span>
  );
}
