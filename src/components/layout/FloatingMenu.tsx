import Link from "next/link";

export default function FloatingMenu() {
  return (
    <nav className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <div className="flex items-center gap-5 border border-neutral-300 bg-[#f8f6f2]/80 px-6 py-3 text-xs uppercase tracking-[0.25em] shadow-sm backdrop-blur-md">
        <Link href="/" className="transition hover:text-neutral-500">
          Home
        </Link>

        <Link href="/portfolio" className="transition hover:text-neutral-500">
          Portfolio
        </Link>

        <Link href="/book-event" className="transition hover:text-neutral-500">
          Book
        </Link>

        <Link href="/dashboard" className="transition hover:text-neutral-500">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
