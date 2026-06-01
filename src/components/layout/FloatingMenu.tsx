import Link from "next/link";

export default function FloatingMenu() {
  return (
    <nav className="group fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <div className="flex flex-col items-center">
        <Link
  href="/"
  className="
    font-script
    group
    relative
    z-10
    flex
    h-14
    w-14
    items-center
    justify-center
    overflow-hidden
    border
    border-neutral-300
    bg-white/40
    text-2xl
    text-black
    shadow-sm
    backdrop-blur-sm
    transition-all
    duration-500
    hover:border-black
  "
>
  {/* Gradient */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-br
      from-neutral-100
      via-white
      to-neutral-200
      opacity-80
      transition
      duration-500
      group-hover:scale-110
    "
  />

  {/* Geometric Overlay */}
  <div
    className="
      absolute
      inset-0
      opacity-20
      mix-blend-overlay
      transition
      duration-500
      group-hover:opacity-40
    "
    style={{
      clipPath:
        "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
    }}
  />

  {/* Corner Geometry */}
  <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-black/40 transition group-hover:border-black" />
  <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-black/40 transition group-hover:border-black" />
  <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-black/40 transition group-hover:border-black" />
  <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-black/40 transition group-hover:border-black" />

  {/* Text */}
  <span className="relative z-10 translate-y-[1px]">
    PS
  </span>
</Link>
        </div>
      </div>
    </nav>
  );
}
