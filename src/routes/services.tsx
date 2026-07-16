import { createFileRoute } from "@tanstack/react-router";
import ServiceCard from "~/components/ServiceCard";
import CTASection from "~/components/CTASection";
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white/90 mb-4 backdrop-blur-sm">
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            From routine lawn care to complete landscape transformations, we provide
            everything your outdoor space needs to thrive.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
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