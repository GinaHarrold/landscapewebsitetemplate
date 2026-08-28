import { Link } from "@tanstack/react-router";
import { config } from "~/config";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-primary text-white overflow-hidden">
      {/* Top wave transition from previous section */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V0H0V40Z" fill="white" />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/[0.04] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/[0.04] -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 text-center">
        <span className="section-pill bg-white/15 text-white mb-6">
          Get Started Today
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
          Take the first step toward a yard you'll love coming home to. Schedule your free, no-obligation estimate today — we'll visit your property and provide an honest, transparent quote.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/book-estimate"
            className="btn-white text-lg px-10 py-5 rounded-2xl font-bold"
          >
            Get Your Free Estimate
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <a
            href={`tel:${config.company.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 px-10 py-5 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call {config.company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
