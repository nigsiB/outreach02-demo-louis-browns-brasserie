import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e8dcc8]/15 bg-[#1a1210] text-[#e8dcc8]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
            Louis Brown's
          </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">Brasserie dining & bar on the High Street.</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">Quick links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#e8dcc8]/75 transition-colors hover:text-[var(--gold)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#e8dcc8]/75 transition-colors hover:text-[var(--gold)]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#e8dcc8]/75 transition-colors hover:text-[var(--gold)]">
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">Contact</p>
            <div className="mt-4 space-y-2 text-sm opacity-85">
              <p>Cranleigh High Street, GU6</p>
              <p>Lunch & evening service (demo)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-current/15 pt-8 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Louis Brown's Brasserie</p>
          <p>Demo concept site for outreach — not affiliated with the live business.</p>
        </div>
      </div>
    </footer>
  );
}
