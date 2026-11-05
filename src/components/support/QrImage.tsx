"use client";

import { useState } from "react";
import { SupportIcon } from "./SupportIcon";

/** Ảnh QR ủng hộ. Chưa upload lên R2 (lỗi tải) → ô chờ có icon trái tim. */
export default function QrImage({
  src,
  alt,
  pendingText,
}: {
  src: string;
  alt: string;
  pendingText: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed)
    return (
      <div
        role="img"
        aria-label={alt}
        className="item-placeholder grid aspect-square w-full place-items-center rounded-xl p-6 text-center"
      >
        <div>
          <SupportIcon name="heart" className="mx-auto size-14 text-rose-300 drop-shadow-[0_0_12px_currentColor]" />
          <p className="mt-3 text-sm text-violet-100/80">{pendingText}</p>
        </div>
      </div>
    );

  return (
    // eslint-disable-next-line @next/next/no-img-element -- ảnh tĩnh trên R2
    <img
      src={src}
      alt={alt}
      width={400}
      height={400}
      onError={() => setFailed(true)}
      ref={(el) => {
        if (el?.complete && el.naturalWidth === 0) setFailed(true);
      }}
      className="block aspect-square w-full rounded-xl bg-white object-contain p-2"
    />
  );
}
