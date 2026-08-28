import { createFileRoute, Link } from "@tanstack/react-router";
import Hero from "~/components/Hero";
import StatsCounter from "~/components/StatsCounter";
import FeatureCards from "~/components/FeatureCards";
import Testimonials from "~/components/Testimonials";
import CTASection from "~/components/CTASection";
import { config, type Config } from "~/config";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: config.seo.pages.home.title },
      { name: "description", content: config.seo.pages.home.description },
      { property: "og:title", content: config.seo.pages.home.title },
      {
        property: "og:description",
        content: config.seo.pages.home.description,
      },
    ],
  }),
});

const serviceIcons: Record<string, JSX.Element> = {
  leaf: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
    </svg>
  ),
  grass: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  ),
  spa: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5l1.912 1.912M12 7.5l-1.912 1.912M12 7.5V3m0 0l-1.5 1.5M12 3l1.5 1.5M7.5 12l1.912 1.912M7.5 12l-1.912 1.912M7.5 12H3m0 0l1.5 1.5M3 12l1.5-1.5m9 4.5l1.912-1.912M12 16.5l-1.912-1.912M12 16.5V21m0 0l-1.5-1.5M12 21l1.5-1.5M16.5 12l-1.912-1.912M16.5 12l1.912-1.912M16.5 12H21m0 0l-1.5 1.5M21 12l-1.5-1.5" />
    </svg>
  ),
};

function ScrollRevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "visible" : ""} ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <FeatureCards />

      {/* Services Preview */}
      <section className="py-24 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollRevealSection className="text-center mb-16">
            <span className="section-pill bg-accent/10 text-accent">
              Our Services
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-dark">
              Professional Landscaping, Done Right
            </h2>
            <p className="mt-4 text-dark-muted max-w-2xl mx-auto text-lg">
              From design to maintenance, we offer a full range of services to keep your property looking its best year-round.
            </p>
          </ScrollRevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.services.slice(0, 3).map((service: Config["services"][number], index: number) => (
              <div
                key={service.title}
                className="card-premium overflow-hidden group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.image && (
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-accent/30 group-hover:bg-accent transition-colors duration-300 rounded-full" />
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                    {serviceIcons[service.icon] || serviceIcons.leaf}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-dark-muted leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline text-base">
              View All Services
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}