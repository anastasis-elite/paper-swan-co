import Link from "next/link";
import GeometricButton from "@/components/ui/GeometricButton";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
  <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
    Boutique Event Styling
  </p>

  <Image
    src="/paper_swan.png"
    alt="/paperswanco.png"
    width={140}
    height={140}
    className="mb-6 object-contain"
    priority
  />

  <h1 className="font-script mb-5 text-6xl md:text-8xl">
    Paper Swan Co.
  </h1>

  <p className="max-w-2xl text-sm leading-7 tracking-[0.08em] text-neutral-600 md:text-base">
    Thoughtfully styled celebrations, balloon installations, grazing
    tables, custom details, and event decor for moments worth remembering.
  </p>

  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
    <GeometricButton
      href="/portfolio"
      text="View Portfolio"
    />

    <GeometricButton
      href="/book-event"
      text="Book Your Event"
    />
  </div>
</section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
            What We Create
          </p>

          <h2 className="mb-12 max-w-3xl text-4xl font-light leading-tight md:text-5xl">
            Elegant party details designed to make your event feel effortless,
            personal, and beautifully put together.
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Balloon Arches",
              "Grazing Tables",
              "Event Styling",
              "Custom Decor",
            ].map((service) => (
              <div
                key={service}
                className="border border-neutral-200 bg-white/60 p-8 shadow-sm"
              >
                <h3 className="mb-4 text-lg font-light tracking-[0.12em]">
                  {service}
                </h3>
                <p className="text-sm leading-6 text-neutral-600">
                  Custom-designed details styled with care, intention, and a
                  polished event-ready finish.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
