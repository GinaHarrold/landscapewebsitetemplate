import { Link } from "@tanstack/react-router";
import { config } from "~/config";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Take the first step toward a yard you'll love. Schedule your free,
          no-obligation estimate today.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/book-estimate"
            className="inline-flex items-center justify-center rounded-xl bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 hover:scale-105 shadow-lg transition-all duration-200"
          >
            Get Your Free Estimate
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/40 px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}