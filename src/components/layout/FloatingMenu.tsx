import Link from "next/link";

export default function FloatingMenu() {
  return (
    <nav className="group fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <div className="flex flex-col items-center">
        <Link
          href="/"
          className="font-script relative z-10 flex h-16 w-16 items-center justify-center border border-neutral-300 bg-[#f8f6f2]/90 text-4xl text-black shadow-sm backdrop-blur-md transition duration-500 group-hover:border-black"
        >
          PS
        </Link>

        <div className="pointer-events-none mt-3 flex translate-y-[-10px] items-center gap-5 border border-neutral-300 bg-[#f8f6f2]/90 px-6 py-3 text-xs uppercase tracking-[0.25em] opacity-0 shadow-sm backdrop-blur-md transition duration-500 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
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
      </div>
    </nav>
  );
}
