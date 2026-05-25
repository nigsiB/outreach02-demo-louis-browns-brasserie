import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";

const heroImg = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80";
const aboutImg = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80";

const services = [
  { image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", alt: "Brasserie dining room", title: "Brasserie dining", desc: "Seasonal menus in a relaxed High Street setting." },
  { image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80", alt: "Bar and cocktails", title: "Bar & cocktails", desc: "Wines, ales, and classic cocktails through the evening." },
  { image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80", alt: "Private dining event", title: "Private events", desc: "Birthdays and gatherings with set menus." },
  { image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", alt: "Lunch service at brasserie", title: "Lunch service", desc: "Lighter plates and coffee from midday." },
];

const reviews = [
  { quote: "Finally a proper website — the evening menu is easy to find.", name: "Local diner", detail: "Concept review" },
  { quote: "Cosy atmosphere on the High Street. Beef bourguignon was excellent.", name: "Mark D.", detail: "Evening guest" },
  { quote: "Great replacement for the old Blogspot — looks the part.", name: "Cranleigh resident", detail: "Demo feedback" },
];

const menu = [
  "Beef bourguignon — £18",
  "Pan-seared sea bass — £22",
  "Wild mushroom risotto — £16",
  "Sticky toffee pudding — £8",
];

export default function Page() {
  return (
    <main>
      <section className="relative h-[85vh]">
        <Image src={heroImg} alt="Brasserie interior" fill className="object-cover opacity-60" priority sizes="100vw" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)]">High Street · Cranleigh</p>
          <h1 className="font-serif mt-4 text-5xl md:text-7xl">Louis Brown&apos;s</h1>
          <p className="mt-2 text-lg opacity-80">Brasserie &amp; bar — demo hospitality site replacing Blogspot</p>
          <Link href="/contact" className="mt-8 inline-block border border-[var(--gold)] px-8 py-3 text-sm uppercase tracking-widest">
            Reserve a table
          </Link>
        </div>
      </section>

      <section className="section-trust border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-6 py-6 text-center text-sm">
          <p><span className="font-semibold text-[var(--gold)]">Brasserie</span> &amp; bar</p>
          <p>Cranleigh High Street</p>
          <p>Evening service · lunch weekends</p>
        </div>
      </section>

      <section className="section-services py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl text-[var(--gold)]">What we offer</h2>
        </div>
        <ul className="mt-8 grid gap-0 sm:mx-auto sm:max-w-6xl sm:grid-cols-2 sm:gap-4 sm:px-6">
          {services.map((s) => (
            <ServiceCard key={s.title} image={s.image} alt={s.alt} title={s.title} desc={s.desc} />
          ))}
        </ul>
      </section>

      <section className="section-about py-14">
        <div className="grid items-center gap-10 lg:mx-auto lg:max-w-6xl lg:grid-cols-2 lg:gap-10 lg:px-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image src={aboutImg} alt="Evening dining" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="px-6 lg:px-0">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Evening at Louis Brown&apos;s</h2>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              A neighbourhood brasserie on the High Street — warm lighting, proper plates, and a bar that stays open
              after dinner. This demo showcases menu, atmosphere, and reservations in one place.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        image={aboutImg}
        imageAlt="Bar and dining room"
        title="View the evening menu"
        body="Seasonal dishes and daily specials — book for weekends and special occasions."
        primaryHref="/contact"
        primaryLabel="Reserve"
        secondaryHref="/contact"
        secondaryLabel="Group booking"
      />

      <section className="section-reviews mx-auto max-w-2xl px-6 py-14">
        <h2 className="font-serif text-3xl text-[var(--gold)]">Evening menu</h2>
        <ul className="mt-8 space-y-3 text-sm">
          {menu.map((m) => (
            <li key={m} className="flex justify-between border-b border-white/10 py-3">
              <span>{m.split(" — ")[0]}</span>
              <span className="text-[var(--gold)]">{m.split(" — ")[1]}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-gallery mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-serif text-3xl text-[var(--gold)]">Guest notes</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="rounded border border-white/10 bg-[#2a2018] p-6">
              <p className="text-sm italic opacity-75">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-4 font-semibold">{r.name}</p>
              <p className="text-xs opacity-60">{r.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        reverse
        image={heroImg}
        imageAlt="Louis Brown's Brasserie"
        title="Join us this weekend"
        body="High Street Cranleigh — brasserie lunch and evening dining. Demo site for modern hospitality."
        primaryHref="/contact"
        primaryLabel="Book a table"
      />
    </main>
  );
}
