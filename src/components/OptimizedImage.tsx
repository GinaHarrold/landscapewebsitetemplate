import { useState, type JSX } from "react";

interface OptimizedImageProps {
  src: string; // without extension, e.g. "/images/hero-bg"
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // skip lazy loading for above-fold images
}

/**
 * OptimizedImage — WebP-first with JPEG fallback, lazy loading, and blur-up.
 *
 * Given `src="/images/hero-bg"`, it tries:
 *   1. /images/hero-bg.webp (if available, modern browsers load this)
 *   2. /images/hero-bg.jpg  (fallback for older browsers)
 *
 * Images below the fold are lazy-loaded with a CSS blur-up effect.
 */
export default function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
}: OptimizedImageProps): JSX.Element {
  const [loaded, setLoaded] = useState(false);
  const webp = `${src}.webp`;
  const jpg = `${src}.jpg`;

  return (
    <picture className={`relative block overflow-hidden ${className}`}>
      {/* Blur placeholder */}
      <div
        className={`absolute inset-0 bg-surface transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <source srcSet={webp} type="image/webp" />
      <img
        src={jpg}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    </picture>
  );
}