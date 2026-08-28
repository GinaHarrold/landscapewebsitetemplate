import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect } from "react";
import appCss from "~/styles/app.css?url";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { config } from "~/config";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: config.seo.siteName },
      { name: "description", content: config.seo.defaultDescription },

      // Open Graph
      { property: "og:title", content: config.seo.siteName },
      { property: "og:description", content: config.seo.defaultDescription },
      { property: "og:type", content: "website" },
      { property: "og:image", content: config.seo.ogImage },
      { property: "og:site_name", content: config.company.name },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: config.seo.siteName },
      { name: "twitter:description", content: config.seo.defaultDescription },

      // Theme color
      { name: "theme-color", content: config.colors.primary },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        404
      </span>
      <h1 className="text-4xl font-bold text-dark">Page Not Found</h1>
      <p className="text-dark-muted max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="btn-primary"
      >
        Back to Home
      </a>
    </div>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </RootDocument>
  );
}

function ScrollObserver() {
  useEffect(() => {
    // Make all hidden-on-load elements visible immediately
    document.querySelectorAll(".hidden-on-load").forEach((el) => {
      el.classList.add("always-visible");
    });

    // Also set up intersection observer for smooth scroll-triggered animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("always-visible");
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".hidden-on-load").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* JSON-LD LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: config.company.name,
              image: config.seo.ogImage,
              url: config.seo.siteUrl,
              telephone: config.company.phone,
              email: config.company.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: config.company.address.split(",")[0],
                addressLocality: "Anytown",
                addressRegion: "USA",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
              description: config.seo.defaultDescription,
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
        <ScrollObserver />
      </body>
    </html>
  );
}