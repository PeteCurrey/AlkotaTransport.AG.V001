import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Legacy Alkota Cleaning Equipment paths that must return HTTP 410 Gone
// To prevent Soft 404 penalties and accelerate Google's entity reassignment to Automotive Logistics
const LEGACY_410_PATTERNS = [
  /^\/pressure-washers/i,
  /^\/hot-water/i,
  /^\/cold-water/i,
  /^\/steam-cleaners/i,
  /^\/industrial-parts-washers/i,
  /^\/cleaning-equipment/i,
  /^\/spares/i,
  /^\/accessories/i,
  /^\/wash-bays/i,
  /^\/products\//i,
  /^\/category\//i,
];

// Legacy corporate pages with genuine modern successors (HTTP 301 Redirect)
const LEGACY_301_REDIRECTS: Record<string, string> = {
  "/contact-us": "/contact",
  "/contact-us/": "/contact",
  "/about-us": "/",
  "/about-us/": "/",
  "/privacy": "/#privacy",
  "/privacy-policy": "/#privacy",
  "/privacy-policy/": "/#privacy",
  "/terms": "/#terms",
  "/terms-and-conditions": "/#terms",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Check for legacy 301 redirects
  if (LEGACY_301_REDIRECTS[pathname.toLowerCase()]) {
    const destination = LEGACY_301_REDIRECTS[pathname.toLowerCase()];
    return NextResponse.redirect(new URL(destination, request.url), 301);
  }

  // 2. Check for legacy cleaning products -> 410 Gone
  for (const pattern of LEGACY_410_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse(
        `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <title>410 Gone | Resource Permanently Retired</title>
  <meta name="robots" content="noindex, follow">
  <style>
    body { background: #080A0E; color: #F8FAFC; font-family: -apple-system, sans-serif; padding: 4rem 2rem; text-align: center; }
    h1 { font-size: 2.5rem; margin-bottom: 1rem; color: #00F0FF; }
    p { max-width: 600px; margin: 0 auto 2rem; color: #94A3B8; line-height: 1.6; }
    a { color: #00F0FF; text-decoration: none; border: 1px solid #00F0FF; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>410 // Resource Permanently Retired</h1>
  <p>The legacy industrial cleaning equipment catalog previously hosted on this domain has been retired. Alkota now operates as a UK vehicle movement and automotive logistics platform.</p>
  <a href="/">Go to ALKOTA Automotive Logistics</a>
</body>
</html>`,
        {
          status: 410,
          statusText: "Gone",
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "X-Robots-Tag": "noindex",
          },
        }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.svg, robots.txt, sitemap.xml
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)",
  ],
};
