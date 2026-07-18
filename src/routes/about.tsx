import { createFileRoute } from "@tanstack/react-router";
import CTASection from "~/components/CTASection";
import WaveDivider from "~/components/WaveDivider";
import { config } from "~/config";
import { useScrollReveal } from "~/components/useScrollReveal";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: config.seo.pages.about.title },
      { name: "description", content: config.seo.pages.about.description },
      { property: "og:title", content: config.seo.pages.about.title },
      {
        property: "og:description",
        content: config.seo.pages.about.description,
      },
    ],
  }),
});

function About() {
  const storyRef = useScrollReveal();
  const missionRef = useScrollReveal();
  const valuesRef = useScrollReveal();

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
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Dedicated to Making Your Yard Beautiful
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            We're a team of landscaping professionals who take pride in helping
            homeowners create outdoor spaces they love.
          </p>
        </div>
        {/* Bottom wave */}
        <WaveDivider fill="white" height={60} />
      </section>

      {/* Story */}
      <section className="py-24 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Team photo */}
            <div
              ref={storyRef.ref}
              className={`transition-all duration-700 ${
                storyRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <img
                src="/images/about-team.jpg"
                alt="Our landscaping team at work"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>

            {/* Story text */}
            <div
              className={`transition-all duration-700 delay-150 ${
                storyRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="section-pill bg-primary/10 text-primary mb-4">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-dark mb-8">How It All Started</h2>
              <div className="space-y-5 text-dark-muted leading-relaxed text-lg">
                {config.about.story.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-28 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            ref={missionRef.ref}
            className={`transition-all duration-700 ${
              missionRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="card-elevated p-10 text-center">
              <svg
                className="h-12 w-12 text-primary mx-auto mb-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                />
              </svg>
              <h2 className="text-3xl font-bold text-dark mb-4">Our Mission</h2>
              <p className="text-dark-muted text-lg leading-relaxed max-w-2xl mx-auto">
                {config.about.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            ref={valuesRef.ref}
            className={`transition-all duration-700 ${
              valuesRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">
              Why Homeowners Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {config.about.whyChoose.map((reason, i) => (
                <div key={i} className="card-elevated p-5 flex items-start gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <svg
                      className="h-4 w-4 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-dark-muted">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}