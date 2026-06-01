import Link from "next/link";

type GeometricButtonProps = {
  href: string;
  text: string;
};

export default function GeometricButton({
  href,
  text,
}: GeometricButtonProps) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        border
        border-neutral-300
        bg-white/40
        px-8
        py-4
        text-xs
        uppercase
        tracking-[0.28em]
        backdrop-blur-sm
        transition-all
        duration-500
        hover:border-black
      "
    >
      {/* Gradient Glow */}
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
      <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-black/40 transition group-hover:border-black" />
      <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-black/40 transition group-hover:border-black" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-black/40 transition group-hover:border-black" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-black/40 transition group-hover:border-black" />

      {/* Text */}
      <span className="relative z-10 text-black transition duration-500 group-hover:tracking-[0.34em]">
        {text}
      </span>
    </Link>
  );
}
