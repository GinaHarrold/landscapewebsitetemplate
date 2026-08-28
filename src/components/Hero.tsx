import { Link } from "@tanstack/react-router";
import { config } from "~/config";

export default function Hero() {
  const { hero } = config;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Hero background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.webp')",
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />

      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative circles */}
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/[0.04]" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-white/[0.03]" />

        {/* Subtle grid/dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating dots */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-white/20 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-white/15 animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-white/25 animate-pulse" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white mb-8 backdrop-blur-sm border border-white/10">
          <span className="h-2 w-2 rounded-full bg-accent-light animate-pulse" />
          Professional Landscaping Services
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
          {hero.headline}
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-white/75 leading-relaxed font-light">
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to={hero.ctaLink}
            className="btn-white text-lg px-10 py-5 rounded-2xl font-bold"
          >
            {hero.ctaText}
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 px-10 py-5 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Our Services
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Licensed &amp; Insured
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            5-Star Rated
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
            </svg>
            Free Estimates
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" fill="white" />
        </svg>
      </div>

      </section>
  );
}
