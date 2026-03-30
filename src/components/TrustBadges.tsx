import Image from "next/image";

const badges = [
  {
    name: "Top 10 Trucking Trial Lawyers",
    href: "https://badges.thenationaltriallawyers.org/en/verify/83695412777973",
    image: "/top-10-trucking-badge.png",
  },
  {
    name: "Academy of Truck Accident Attorneys",
    href: "https://ataalaw.org/",
    image: "/academy-of-truck-accident-attorneys.svg",
  },
  {
    name: "The National Top 100 Trial Lawyers",
    href: "https://thenationaltriallawyers.org/members/laura-ramos-james/",
    image: "/NTL-Top-100-Brass-Badge.png",
  },
];

export default function TrustBadges() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-14">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
          Recognized &amp; Trusted
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {badges.map((b) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-[150px] w-[150px] shrink-0 transition-opacity hover:opacity-80"
              aria-label={b.name}
            >
              <Image
                src={b.image}
                alt={b.name}
                fill
                className="object-contain"
                sizes="150px"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
