import Image from "next/image";
import Link from "next/link";

type CtaBandProps = {
  image: string;
  imageAlt: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  reverse?: boolean;
  className?: string;
};

export function CtaBand({
  image,
  imageAlt,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  reverse = false,
  className = "",
}: CtaBandProps) {
  return (
    <section className={`py-14 lg:mx-auto lg:max-w-6xl lg:px-6 ${className}`}>
      <div
        className={`grid items-center overflow-hidden border-slate-200 bg-white max-lg:border-y max-lg:shadow-sm lg:grid-cols-2 lg:gap-8 lg:border lg:shadow-sm ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div className="relative min-h-[240px] w-full lg:min-h-[300px]">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="px-6 py-8 lg:p-10">
          <h2 className="text-2xl font-bold text-[var(--heading)] sm:text-3xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={primaryHref} className="cta-primary">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="cta-secondary">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
