import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "~/components/ContactForm";
import WaveDivider from "~/components/WaveDivider";
import { config } from "~/config";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: config.seo.pages.contact.title },
      { name: "description", content: config.seo.pages.contact.description },
      { property: "og:title", content: config.seo.pages.contact.title },
      {
        property: "og:description",
        content: config.seo.pages.contact.description,
      },
    ],
  }),
});

function Contact() {
  const { company } = config;

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
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out with questions, project ideas,
            or just to say hello.
          </p>
        </div>
        <WaveDivider fill="white" height={60} />
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 md:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="card-elevated p-8 flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">Phone</h3>
                  <a
                    href={`tel:${company.phone.replace(/\D/g, "")}`}
                    className="text-primary hover:text-primary-dark font-medium transition-colors"
                  >
                    {company.phone}
                  </a>
                  <p className="text-sm text-dark-muted mt-1">
                    Call us during business hours for a quick response.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="card-elevated p-8 flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">Email</h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-accent hover:text-primary font-medium transition-colors"
                  >
                    {company.email}
                  </a>
                  <p className="text-sm text-dark-muted mt-1">
                    We'll respond within 24 hours.
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="card-elevated p-8 flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">Address</h3>
                  <p className="text-dark-muted">{company.address}</p>
                  <p className="text-sm text-dark-muted mt-1">
                    Serving Anytown and surrounding areas.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="card-elevated p-8 flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">Business Hours</h3>
                  <ul className="space-y-1 text-dark-muted">
                    <li className="flex justify-between gap-6">
                      <span>Monday – Friday</span>
                      <span className="font-medium text-dark">7am – 6pm</span>
                    </li>
                    <li className="flex justify-between gap-6">
                      <span>Saturday</span>
                      <span className="font-medium text-dark">8am – 4pm</span>
                    </li>
                    <li className="flex justify-between gap-6 text-gray-400">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Google Maps placeholder */}
              <div className="card-elevated p-8">
                <h3 className="text-lg font-semibold text-dark mb-4">Our Service Area</h3>
                <div className="aspect-video rounded-xl bg-surface flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <svg
                      className="h-10 w-10 text-dark-muted/50 mx-auto mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                      />
                    </svg>
                    <p className="text-dark-muted text-sm">
                      Google Maps Integration
                    </p>
                    <p className="text-dark-muted/60 text-xs mt-1">
                      Replace with your embed code in production
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <ContactForm
                title={config.contact.formTitle}
                description={config.contact.formDescription}
                submitText="Send Message"
                fields={[
                  {
                    name: "name",
                    label: "Full Name",
                    type: "text",
                    placeholder: "John Smith",
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
                    name: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "(555) 123-4567",
                    required: false,
                  },
                  {
                    name: "message",
                    label: "Message",
                    type: "textarea",
                    placeholder:
                      "Tell us about your project, ask a question, or just say hello...",
                    required: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}