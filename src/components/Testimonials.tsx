import { config, type Config } from "~/config";

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { testimonials } = config;

  return (
    <section className="relative py-24 md:py-28 bg-white">
      {/* Top wave from previous section */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="white" />
        </svg>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-pill bg-accent/10 text-accent">
            Testimonials
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-dark">
            Trusted by Homeowners Like You
          </h2>
          <p className="mt-4 text-dark-muted max-w-2xl mx-auto text-lg">
            Don't just take our word for it — hear what our clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t: Config["testimonials"][number], index: number) => (
            <div
              key={t.name}
              className="card-elevated p-8 relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Decorative accent bar at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent/50" />

              {/* Star rating */}
              <div className="mb-5">
                <StarRating />
              </div>

              {/* Quote */}
              <p className="text-dark-muted leading-relaxed mb-6 text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="h-11 w-11 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm shadow-sm">
                  {t.name.split(" ").map((n: string) => n[0]).join("")}
                </div>
                <div>
                  <span className="font-semibold text-dark text-sm">{t.name}</span>
                  <p className="text-xs text-dark-muted">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google reviews badge */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-surface px-8 py-4">
            <svg className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <StarRating />
                <span className="text-sm font-semibold text-dark ml-1">4.9/5</span>
              </div>
              <p className="text-xs text-dark-muted mt-0.5">Based on 150+ Google reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
