const portfolioItems = [
  "Balloon Installations",
  "Grazing Boards",
  "Baby Showers",
  "Birthday Parties",
  "Banners",
  "Custom Decor",
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] px-6 py-20 text-black">
      <section className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
          Portfolio
        </p>

        <h1 className="font-script mb-6 text-6xl md:text-8xl">
          Styled Moments
        </h1>

        <p className="mx-auto max-w-2xl text-sm leading-7 tracking-[0.06em] text-neutral-600 md:text-base">
          A collection of celebrations, installations, grazing tables, and
          handcrafted event details created with care.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
        {portfolioItems.map((item) => (
          <div
            key={item}
            className="flex aspect-[4/5] items-end border border-neutral-200 bg-white/70 p-6 shadow-sm"
          >
            <h2 className="text-lg font-light tracking-[0.12em]">{item}</h2>
          </div>
        ))}
      </section>
    </main>
  )
}
