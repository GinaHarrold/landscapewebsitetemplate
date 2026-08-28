import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { config } from "~/config";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-primary"
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2C14 2 10 8 10 14C10 16.2 11.1 18.1 12.5 19.5C11.5 20.5 10 21 8 21C8 21 12 22 14 26C16 22 20 21 20 21C18 21 16.5 20.5 15.5 19.5C16.9 18.1 18 16.2 18 14C18 8 14 2 14 2Z"
                fill="currentColor"
              />
            </svg>
            {config.company.name}
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {config.nav.links.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-dark-muted hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-dark-muted hover:text-primary hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
          {config.nav.links.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-2xl font-semibold transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-dark hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={`tel:${config.company.phone.replace(/\D/g, "")}`}
            className="mt-6 btn-accent text-lg px-8 py-3 rounded-xl"
          >
            Call {config.company.phone}
          </a>
        </div>
      </div>
    </nav>
  );
}