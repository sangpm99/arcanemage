/**
 * Nền huyền bí phía sau trang: tinh vân tím, sao nhấp nháy,
 * đốm lửa vàng bay lên và viền tối quanh màn hình.
 * Chỉ dùng CSS (không JS chạy liên tục), tự tắt chuyển động
 * khi máy người xem bật "giảm chuyển động".
 */

// Sinh cố định (không random) để HTML server và client giống hệt nhau
const EMBERS = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 2 + (i % 3),
  duration: 11 + ((i * 7) % 10),
  delay: -((i * 1.9) % 16),
  drift: ((i % 5) - 2) * 18,
}));

export default function MagicBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="backdrop-nebula absolute inset-0" />
      <div className="backdrop-stars absolute inset-0 motion-safe:animate-twinkle" />
      <div className="hidden motion-safe:block">
        {EMBERS.map((e, i) => (
          <span
            key={i}
            className="ember"
            style={
              {
                left: `${e.left}%`,
                width: e.size,
                height: e.size,
                animationDuration: `${e.duration}s`,
                animationDelay: `${e.delay}s`,
                "--drift": `${e.drift}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <div className="backdrop-vignette absolute inset-0" />
    </div>
  );
}
