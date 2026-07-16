import { createFileRoute, Link } from "@tanstack/react-router";
import Hero from "~/components/Hero";
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
      <FeatureCards />

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollRevealSection className="text-center mb-14">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              Professional Landscaping, Done Right
            </h2>
            <p className="mt-4 text-dark-muted max-w-2xl mx-auto">
              From design to maintenance, we offer a full range of services to keep your property looking its best year-round.
            </p>
          </ScrollRevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.slice(0, 3).map((service: Config["services"][number], index: number) => (
              <div
                key={service.title}
                className="hidden-on-load group rounded-xl bg-surface p-6 hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {serviceIcons[service.icon] || serviceIcons.leaf}
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{service.title}</h3>
                <p className="text-dark-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}