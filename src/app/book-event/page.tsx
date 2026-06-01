export default function BookEventPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] px-6 py-20 text-black">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
          Book Your Event
        </p>

        <h1 className="font-script mb-6 text-6xl md:text-8xl">
          Let’s Create Something Beautiful
        </h1>

        <p className="mx-auto max-w-2xl text-sm leading-7 tracking-[0.06em] text-neutral-600 md:text-base">
          Tell us about your celebration, and we’ll help bring the details
          together with balloon styling, grazing boards, custom decor, and
          intentional event design.
        </p>
      </section>

      <form className="mx-auto mt-14 grid max-w-2xl gap-5">
        <input className="border border-neutral-300 bg-white/70 px-5 py-4" placeholder="Your Name" />
        <input className="border border-neutral-300 bg-white/70 px-5 py-4" placeholder="Email Address" />
        <input className="border border-neutral-300 bg-white/70 px-5 py-4" placeholder="Phone Number" />
        <input className="border border-neutral-300 bg-white/70 px-5 py-4" placeholder="Event Date" />
        <input className="border border-neutral-300 bg-white/70 px-5 py-4" placeholder="Event Type" />
        <textarea className="min-h-40 border border-neutral-300 bg-white/70 px-5 py-4" placeholder="Tell us about your event vision..." />

        <button className="mt-4 border border-black px-8 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-black hover:text-white">
          Submit Inquiry
        </button>
      </form>
    </main>
  )
}
