import { createFileRoute } from "@tanstack/react-router";
import ServiceCard from "~/components/ServiceCard";
import CTASection from "~/components/CTASection";
import WaveDivider from "~/components/WaveDivider";
import { config, type Config } from "~/config";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: config.seo.pages.services.title },
      { name: "description", content: config.seo.pages.services.description },
      { property: "og:title", content: config.seo.pages.services.title },
      {
        property: "og:description",
        content: config.seo.pages.services.description,
      },
    ],
  }),
});

function Services() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/[0.04] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/[0.04] -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-pill bg-white/15 text-white mb-6">
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Our Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            From routine lawn care to complete landscape transformations, we provide
            everything your outdoor space needs to thrive.
          </p>
        </div>
        <WaveDivider fill="white" height={60} />
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.services.map((service: Config["services"][number], index: number) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}