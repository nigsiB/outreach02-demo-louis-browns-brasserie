import Image from "next/image";

type ServiceCardProps = { image: string; alt: string; title: string; desc: string };

export function ServiceCard({ image, alt, title, desc }: ServiceCardProps) {
  return (
    <li className="overflow-hidden border-y border-black/10 bg-[var(--bg-card)] sm:border sm:shadow-sm">
      <div className="relative h-40 w-full sm:h-36">
        <Image src={image} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 28vw, 50vw" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-[var(--cream)]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--cream)]/75">{desc}</p>
      </div>
    </li>
  );
}
