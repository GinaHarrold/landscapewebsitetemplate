import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "~/components/ContactForm";
import WaveDivider from "~/components/WaveDivider";
import { config } from "~/config";

export const Route = createFileRoute("/book-estimate")({
  component: BookEstimate,
  head: () => ({
    meta: [
      { title: config.seo.pages.bookEstimate.title },
      {
        name: "description",
        content: config.seo.pages.bookEstimate.description,
      },
      { property: "og:title", content: config.seo.pages.bookEstimate.title },
      {
        property: "og:description",
        content: config.seo.pages.bookEstimate.description,
      },
    ],
  }),
});

function BookEstimate() {
  const { estimate } = config;

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
            Get Started
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            {estimate.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {estimate.description}
          </p>
        </div>
        <WaveDivider fill="white" height={60} />
      </section>

      {/* Form + Info */}
      <section className="py-24 md:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm
                title="Tell Us About Your Project"
                description="Fill out the form and we'll contact you within 24 hours to schedule your free estimate."
                submitText="Request Free Estimate"
                fields={[
                  {
                    name: "name",
                    label: "Full Name",
                    type: "text",
                    placeholder: "John Smith",
                    required: true,
                  },
                  {
                    name: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "(555) 123-4567",
                    required: true,
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "john@example.com",
                    required: true,
                  },
                  {
                    name: "address",
                    label: "Property Address",
                    type: "text",
                    placeholder: "123 Your Street, Anytown, USA",
                    required: true,
                  },
                  {
                    name: "service",
                    label: "Service Needed",
                    type: "select",
                    required: true,
                    options: estimate.serviceOptions,
                  },
                  {
                    name: "preferred_date",
                    label: "Preferred Date",
                    type: "date",
                    required: true,
                  },
                  {
                    name: "message",
                    label: "Tell Us About Your Project",
                    type: "textarea",
                    placeholder:
                      "Describe the work you're looking for, the approximate size of the area, and any specific ideas or questions you have...",
                    required: false,
                  },
                ]}
              />
            </div>

            {/* Sidebar info */}
            <div className="space-y-8">
              <div className="card-elevated p-8">
                <h3 className="text-lg font-semibold text-dark mb-4">
                  Why Request an Estimate?
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: "No Obligation",
                      desc: "There's no commitment — we'll assess your project and give you a clear quote with no pressure.",
                    },
                    {
                      title: "On-Site Visit",
                      desc: "We come to your property to understand the scope and provide an accurate estimate.",
                    },
                    {
                      title: "Transparent Pricing",
                      desc: "No hidden fees or surprise charges. We break everything down so you know exactly what to expect.",
                    },
                    {
                      title: "Expert Advice",
                      desc: "Get professional recommendations for your landscaping project, even if you decide not to move forward.",
                    },
                  ].map((item) => (
                    <li key={item.title}>
                      <h4 className="font-medium text-dark text-sm">
                        {item.title}
                      </h4>
                      <p className="text-sm text-dark-muted mt-1">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-elevated p-8">
                <h3 className="text-lg font-semibold text-dark mb-4">
                  Or Call Us Directly
                </h3>
                <p className="text-dark-muted text-sm mb-4">
                  Prefer to speak with someone right away? Give us a call during
                  business hours.
                </p>
                <a
                  href={`tel:${config.company.phone.replace(/\D/g, "")}`}
                  className="btn-primary w-full text-center block"
                >
                  Call {config.company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}