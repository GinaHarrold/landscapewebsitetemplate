import { config, type Config } from "~/config";

export default function Testimonials() {
  const { testimonials } = config;

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            What Our Clients Say
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Trusted by Homeowners Like You
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t: Config["testimonials"][number], index: number) => (
            <div
              key={t.name}
              className="hidden-on-load rounded-2xl bg-surface p-8 relative"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote mark */}
              <svg
                className="h-10 w-10 text-primary/20 absolute top-6 left-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-dark-muted leading-relaxed relative z-10 mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {t.name.split(" ").map((n: string) => n[0]).join("")}
                </div>
                <span className="font-medium text-dark">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}