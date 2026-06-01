export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <h1 className="mb-4 text-5xl font-light tracking-[0.2em]">
          Paper Swan Co.
        </h1>

        <p className="max-w-xl text-sm uppercase tracking-[0.3em] text-neutral-600">
          Handcrafted paper artistry for meaningful moments
        </p>

        <button className="mt-10 border border-black px-8 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-black hover:text-white">
          View Collection
        </button>

      </section>
    </main>
  )
}
