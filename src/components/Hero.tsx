import { Link } from "@tanstack/react-router";
import { config } from "~/config";

export default function Hero() {
  const { hero } = config;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary-dark">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-white/10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white/90 mb-6 backdrop-blur-sm">
          Professional Landscaping Services
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-white/80 leading-relaxed">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={hero.ctaLink}
            className="btn-accent text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            {hero.ctaText}
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/40 px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}