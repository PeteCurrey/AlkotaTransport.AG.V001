# ALKOTA Design System & Creative Direction
**Brand:** ALKOTA Automotive Logistics | **Domain:** `alkota.co.uk` | **Document Version:** 1.0.0
**Aesthetic Heritage:** Precision Engineering (Red Bull Racing) × Immersive Digital Craft (Trionn) × Modern B2B Utility (Engineius)

---

## 1. Brand Philosophy & Visual Identity

ALKOTA represents the nexus of high-velocity precision, algorithmic predictability, and prestige automotive care. The visual language conveys:
1. **Architectural Weight & Confidence:** Deep monochromatic tones rooted in carbon, slate, and graphite.
2. **Telemetry-Grade Precision:** High-contrast neon cyan and hyper-amber accents reminiscent of Formula 1 pit-wall telemetry and aerospace avionics.
3. **Tactile Elegance:** Frosted glassmorphism (`backdrop-filter: blur`), subtle brushed metallic borders, and smooth momentum scrolling.

---

## 2. Color Palette & Token Architecture

All colors are exposed as CSS custom variables and bound into Tailwind CSS utilities.

### Primary Canvas & Neutrals (The Onyx & Titanium Range)
* `--color-surface-base`: `#080A0E` (Deep Abyss — main background)
* `--color-surface-card`: `#0E1218` (Graphite Plate — card and section surface)
* `--color-surface-overlay`: `rgba(18, 24, 34, 0.75)` (Frosted Titanium Glass)
* `--color-border-subtle`: `rgba(255, 255, 255, 0.08)` (Micro-divider lines)
* `--color-border-glow`: `rgba(0, 240, 255, 0.25)` (Active interactive state)
* `--color-text-primary`: `#F8FAFC` (Pure Titanium White)
* `--color-text-secondary`: `#94A3B8` (Cool Muted Slate)
* `--color-text-tertiary`: `#64748B` (Technical Gunmetal)

### Performance Accents (Telemetry & High-Visibility)
* `--color-accent-cyan`: `#00F0FF` (Telemetry Cyan — primary interactive accent, active route lines, digital ePOD status)
* `--color-accent-amber`: `#FF5500` (Velocity Amber — high-priority CTAs, urgent bookings, battery power indicators)
* `--color-accent-emerald`: `#10B981` (Verification Green — on-time SLAs, BVRLA sign-offs, verified driver badges)
* `--color-accent-violet`: `#8B5CF6` (EV High-Voltage — dedicated electric fleet logistics)

---

## 3. Typography Hierarchy

### Typeface Selection
* **Display / Brand Headline:** `Space Grotesk` or `Syne` (Tech-forward, architectural proportions, geometric precision).
* **Body / Technical Data:** `Inter` or `Geist Sans` (Ultra-legible, neutral, optimized for dense tabular route data and forms).
* **Telemetry / Monospace:** `JetBrains Mono` or `Geist Mono` (For VINs, postcodes, mileage readouts, GPS coordinates, and SLAs).

### Scale & Weight
* **Display Hero:** `text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight`
* **Heading 1:** `text-4xl md:text-5xl font-bold tracking-tight text-white`
* **Heading 2:** `text-2xl md:text-3xl font-semibold tracking-tight text-white`
* **Heading 3 / Subhead:** `text-lg md:text-xl font-medium text-slate-300`
* **Body Large:** `text-lg text-slate-300 leading-relaxed`
* **Body Base:** `text-base text-slate-400 leading-normal`
* **Caption / HUD:** `text-xs font-mono tracking-widest uppercase text-slate-400`

---

## 4. UI Components & Specifications

### 4.1 Buttons
* **Primary High-Velocity CTA (`Button variant="primary"`):**
  * Background: Glowing linear gradient from `#FF5500` to `#FF3300`.
  * Typography: Bold, uppercase, tracking-wider, text-white.
  * Border: 1px subtle amber glow; box-shadow: `0 0 20px rgba(255, 85, 0, 0.35)`.
  * Hover: Scaled 1.02x with accelerated rim brightness and kinetic arrow slide.
* **Secondary Telemetry HUD CTA (`Button variant="hud"`):**
  * Background: Frosted glass `#0E1218` (80% opacity) with `backdrop-filter: blur(12px)`.
  * Border: 1px solid `rgba(0, 240, 255, 0.3)`.
  * Color: `#00F0FF` with glowing dot beacon on left.
  * Hover: Background shifts to `rgba(0, 240, 255, 0.1)`, cyan border flares to 100% opacity.
* **Ghost / Text Button (`Button variant="ghost"`):**
  * Text-slate-400 with hover transition to text-white and subtle underline wipe.

### 4.2 Telemetry Metric Cards
* Dark graphite backdrop (`#0E1218`) with 1px border `rgba(255, 255, 255, 0.08)`.
* Corner technical markings (reminiscent of aerospace hud reticles or F1 telemetry screens).
* Top-left: Small monospace technical label (e.g. `SYS.METRIC // TRANSIT_TIME`).
* Center: Large kinetic numerical counter (e.g. `<TelemetryCounter end={99.8} suffix="%" />`).
* Bottom: Contextual trend indicator with glowing micro-badge.

### 4.3 Form Inputs (Instant Quote & Booking Portal)
* Dark recessed field (`#090B0F`), 1px border `rgba(255, 255, 255, 0.12)`.
* Floating uppercase label in `text-xs font-mono text-slate-400`.
* Focus state: Border illuminates to `#00F0FF` with a subtle 3px cyan focus ring (`ring-1 ring-cyan-500/40`).
* Validation: Inline real-time feedback with green tick or amber guidance message.

---

## 5. Motion Principles & Animation Orchestration

### 5.1 Lenis Inertia Scrolling
* Damping: `0.1`
* Duration: `1.2s`
* Smoothing for wheel and touch events, ensuring fluid desktop glide without cursor lag.

### 5.2 GSAP ScrollTrigger Standard Easing Curves
* **Kinetic Reveal (Fast Entry, Smooth Settling):** `power3.out`
* **Mechanical Snapping:** `power2.inOut`
* **Continuous Parallax:** Scrub `1` (1-second catchup interpolation)

### 5.3 Reduced-Motion Compliance
* Universal check via `window.matchMedia('(prefers-reduced-motion: reduce)')`.
* When triggered:
  * GSAP transforms immediately jump to `opacity: 1`, `transform: none`.
  * Smooth-scroll inertia is completely disabled, returning control to native OS scrolling.
  * 3D camera animations remain stationary; interactive 3D rotation via mouse drag remains optional.

---

## 6. 3D & WebGL Canvas Visual Standards

* **Tone of Voice:** Industrial precision, spotless automotive studio lighting.
* **Ground Plane:** Subtle dark reflective grid or matte asphalt with infinite shadow fade (`ContactShadows` in R3F).
* **Color Temperature:** Neutral daylight (5600K) key light paired with cool cyan rim light from the rear left and warm tungsten fill from front right.
* **Interactive Behavior:**
  * Cursor movements subtly tilt the model on X and Y axes (+/- 8 degrees).
  * Scroll events rotate the carrier/vehicle model 360 degrees as the user descends through the 4 movement divisions.
  * Clickable hotspots on the model reveal inspection and security checkpoints (battery casing, tie-down chassis anchors, digital seal, GPS beacon).
