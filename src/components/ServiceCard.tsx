import { config, type Config } from "~/config";

const icons: Record<string, JSX.Element> = {
  leaf: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
    </svg>
  ),
  grass: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  ),
  spa: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5l1.912 1.912M12 7.5l-1.912 1.912M12 7.5V3m0 0l-1.5 1.5M12 3l1.5 1.5M7.5 12l1.912 1.912M7.5 12l-1.912 1.912M7.5 12H3m0 0l1.5 1.5M3 12l1.5-1.5m9 4.5l1.912-1.912M12 16.5l-1.912-1.912M12 16.5V21m0 0l-1.5-1.5M12 21l1.5-1.5M16.5 12l-1.912-1.912M16.5 12l1.912-1.912M16.5 12H21m0 0l-1.5 1.5M21 12l-1.5-1.5" />
    </svg>
  ),
  park: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  ),
  foundation: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  cleaning: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
};

function toWebp(src: string): string {
  return src.replace(/\.jpg$/, ".webp");
}

export default function ServiceCard({
  service,
  index,
}: {
  service: Config["services"][number];
  index: number;
}) {
  return (
    <div
      className="card-premium p-8 group animate-fade-in-up overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Service image with WebP + JPEG fallback */}
      {service.image && (
        <div className="-mx-8 -mt-8 mb-6 overflow-hidden">
          <picture>
            <source srcSet={toWebp(service.image)} type="image/webp" />
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              width={400}
              height={200}
            />
          </picture>
        </div>
      )}

      {/* Accent top bar */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-accent/30 group-hover:bg-accent transition-colors duration-300 rounded-full" />

      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
        {icons[service.icon] || icons.leaf}
      </div>
      <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
      <p className="text-dark-muted leading-relaxed">{service.description}</p>
    </div>
  );
}