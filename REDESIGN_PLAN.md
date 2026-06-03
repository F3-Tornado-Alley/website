# Tornado Alley — Website Redesign Plan

> Status: Draft for discussion · Branch: `rsp/revamp` · Last updated: 2026-06-01
>
> This plan is based on a competitive review of 8 F3 sites and a full audit of our
> current site. It is a **proposal**, not a committed scope. Open decisions are
> collected at the bottom.

---

## 1. Goal

Bring the Tornado Alley site up to (and past) the bar set by the strongest F3
regional sites — a clearer brand identity, stronger newcomer funnel, and more
social proof — while **keeping the things we already do better than most peers**
(notably our interactive map + structured city schedules).

---

## 2. Sites reviewed

| Site | What it's good at |
|---|---|
| [f3nation.com](https://f3nation.com/) | The canonical brand voice: dark/cinematic, ALL-CAPS, orange+blue accents, transformation stories, press strip |
| [f3twincities.com/brand-style-guide](https://f3twincities.com/brand-style-guide/) | A real, documented brand system (hex + fonts + usage rules) |
| [f3metro.com](https://www.f3metro.com/) | Polished funnel; dropdown nav ("Start Here"), press strip, exposed Slack/BackBlast, map locator |
| [f3houston.com](https://f3houston.com/) | Clean dual-CTA hero, press credibility, "Locations/AOs" dual-labeling |
| [f3dfw.com](https://f3dfw.com/) | Memorable 3-F metaphors (Magnet/Glue/Dynamite), region federation, glossary, photo gallery |
| [f3northlake.com/locations](https://f3northlake.com/locations/) | Best-in-class newcomer objection Q&A; compact `Day @ time [Type]` schedule format |
| [f3delta.com](https://www.f3delta.com/home) | Photo-card locations w/ addresses, national-media wall, 3-CTA hero |
| [f3coloradosprings.com](https://www.f3coloradosprings.com/) | Stats block, testimonial carousel, excuse-busting About copy |

---

## 3. Common threads across the strongest sites

### Visual / brand
- **Two visual modes exist**: dark/cinematic/military (Nation, Twin Cities) vs. light/clean
  (Metro, Houston, Delta, CO Springs). **The national site sets the official tone and it's
  dark + bold + ALL-CAPS.** Leaning dark reads as "more official F3."
- **ALL-CAPS display headings** are pervasive, especially on the brand-forward sites.
- **One sparingly-used accent color**: Nation uses orange/coral + a blue button;
  Twin Cities codifies coral `#EE6059`. The discipline ("use sparingly") is the pattern.
- **A bold/condensed/stencil display typeface** for headings (Twin Cities = Black Ops One;
  Nation = heavy bold sans) over a clean sans body.
- **Tagline is universal**: "Fitness. Fellowship. Faith."

### Content (the recurring homepage skeleton)
Nearly every strong site follows roughly this order:
1. **Hero** — full-bleed action photo + tagline + 1–2 CTAs (*Find a Workout* / *New to F3*)
2. **Mission statement** (canonical wording — see §6)
3. **The Three Fs** (Fitness / Fellowship / Faith) — DFW's *Magnet / Glue / Dynamite* metaphors are the stickiest version
4. **The 5 Core Principles** (canonical wording + short taglines)
5. **Social proof** — at least one of: *In the News* press logos, stats block, testimonials, transformation stories, photo gallery
6. **Locations CTA** → map + schedule
7. **Motto** as a recurring "north star" ("Leave no man behind…")

### Newcomer (FNG) funnel
- A dedicated **"New to F3" / "Start Here"** path is always a primary nav item and hero CTA.
- The best version (**Northlake**) is an **objection-busting Q&A**: *"No one will yell at you.
  It's not a competition." / "No forms. No RSVPs. No waivers." / "It's completely free. No strings."*
- "What to bring" = open mind + outdoor clothes (+ gloves). Consistent everywhere.

### Lingo handling
- Spell the jargon out where outsiders see it (**Twin Cities** nav: `WORKOUT LOCATIONS [AO]`,
  `NEW TO F3 [FNG]`; Houston: `Locations/AOs`).
- Define COT/Q minimally inline; **defer the deep glossary to the Lexicon/Exicon** rather than
  over-explaining.

### Community plumbing
- Metro surfaces **Slack** and **BackBlasts** right on the homepage — community infrastructure
  shown up front as an engagement driver.

---

## 4. Where Tornado Alley stands today (honest audit)

**Stack:** Next 16 static export, Tailwind v4, Titillium Web headings / Geist body.

### Strengths to KEEP
- ✅ **Interactive F3 Nation map embed + per-region cards → city pages** ([app/locations/page.tsx](app/locations/page.tsx)).
  This is *more* sophisticated than nearly every peer (most just link out to a Google My Map).
- ✅ **Structured per-city schedule data** — each city page has a typed `Workout[]` with
  name, address, `schedule[{day,time,type}]`, notes, lat/long, mapUrl
  ([app/locations/edmond/page.tsx](app/locations/edmond/page.tsx)). Clean foundation to build on.
- ✅ **Black sticky nav** ([app/components/Navigation.tsx](app/components/Navigation.tsx)) — already
  closest to the national dark aesthetic.
- ✅ Correct **5 Core Principles** with icons and canonical taglines ([app/page.tsx](app/page.tsx)).
- ✅ Solid **SEO/metadata + JSON-LD** foundation.

### Gaps vs. peers
- ❌ **Generic visual identity** — white/gray + `blue-600` reads as a default template, not an
  F3 brand. No accent color discipline, headings aren't ALL-CAPS or bold/branded, no documented
  brand system.
- ❌ **No social proof of any kind** — no press strip, no stats, no testimonials, no transformation
  stories, no photo gallery. This is the single most common element we're missing.
- ❌ **No "Three Fs" content** — we have the 5 principles but never explain Fitness/Fellowship/Faith.
- ❌ **Weak newcomer funnel** — [getting-started/page.tsx](app/getting-started/page.tsx) is a
  generic 3-step list; lacks the warm, objection-busting tone that converts FNGs. No hero CTA
  points to it.
- ❌ **Social links live in the hero** ([app/page.tsx:85](app/page.tsx#L85)) — peers put social in
  the footer and reserve the hero for *Find a Workout* / *New to F3* CTAs.
- ❌ **No "About / What is F3" story** (origin, mission framing). No glossary bridge for lingo.
- ❌ **No community plumbing** surfaced (Slack, BackBlasts, newsletter).

---

## 5. Redesign recommendations

### 5.1 Brand system (do this first — everything else depends on it)
Create a documented brand system (à la Twin Cities) and encode it as Tailwind v4 theme tokens
in [app/globals.css](app/globals.css):

- **Direction: dark + bold + ALL-CAPS**, to match the national brand. (Decision needed — see §8.)
- **Palette (proposed):**
  - Base dark: charcoal/near-black (e.g. `#1A1D1E`–`#242A2B`)
  - Surface: white sections for contrast
  - **One accent used sparingly** — propose a Tornado-Alley-appropriate accent (storm orange or
    coral). Avoid the current generic `blue-600` as the brand color.
- **Type:** keep Titillium Web but push headings to **700/900 weight, ALL-CAPS**; consider a
  condensed/stencil display face for hero headlines only. Keep Geist for body.
- Document it on a `/brand` page or in the repo so it's reusable.

### 5.2 Page-by-page

**Home** ([app/page.tsx](app/page.tsx)) — restructure to the proven skeleton:
1. Hero: keep the full-bleed photo, but replace the lone "Tornado Alley" h1 + social buttons with
   tagline + **two CTAs: `FIND A WORKOUT` and `NEW TO F3`**. Move social to the footer.
2. Mission statement (canonical).
3. **NEW: The Three Fs** section (adopt DFW's Magnet/Glue/Dynamite framing).
4. 5 Core Principles (keep — already good).
5. **NEW: Social proof** — start with a stats block (workouts/week, # of AOs, PAX count; we can
   pull from pax-vault) and an "In the News"/F3 Nation press strip. Add testimonials later.
6. Locations CTA → map.
7. Motto banner.

**Locations** ([app/locations/page.tsx](app/locations/page.tsx)) — keep map + region cards (our
edge). Enhancements: adopt the compact **`Day @ 0530–0615 [Bootcamp]`** schedule format
(Northlake) consistently on city pages, ensure every AO has a Google Maps link (Delta), and
consider AO "personality" blurbs (Northlake names like *Ground Zero*, *The Jungle* are already great).

**New to F3** (rework [getting-started](app/getting-started/page.tsx)) — rename toward "New to F3 /
FNG", rewrite in the warm **objection-busting Q&A** voice (Northlake). Keep "What to bring."
Add a short, friendly lingo primer (FNG/PAX/AO/Q/COT) that links out to the Lexicon.

**Resources** ([app/resources/page.tsx](app/resources/page.tsx)) — fine as-is; restyle to the new
brand. Consider adding Slack/newsletter here or in the footer.

**NEW: About / What is F3** — origin story (Charlotte, 2011), mission framing, the Three Fs in
depth, founders. Improves SEO and credibility.

**Contact Us** — keep; restyle.

**Navigation** — adopt **lingo dual-labeling** (`LOCATIONS [AO]`, `NEW TO F3 [FNG]`) per Twin
Cities/Houston. Consider grouping under a "Start Here" dropdown (Metro) if nav grows.

### 5.3 New shared components
- `PressStrip` (logos: Men's Health, Today Show, Art of Manliness, NYT, *Freed to Lead*)
- `StatsBlock` (data from pax-vault region stats)
- `ThreeFs` section
- `Testimonials` (carousel; later phase)
- `Footer` (move social here; add Slack/newsletter)

---

## 6. Canonical copy (standardize on F3 Nation's wording)

- **Mission:** *"The Mission of F3 is to plant, grow and serve small workout groups for men for the
  invigoration of male community leadership."* ✅ (already used correctly)
- **5 Core Principles** (name + tagline):
  1. **Free of Charge** — "Never pay to workout, ever."
  2. **Open to all Men** — "No matter the man, you are welcome here."
  3. **Held Outdoors** — "Rain or shine, hot or cold, we are out there."
  4. **Peer Led** — "Leading each other in a rotating fashion."
  5. **Ends with a COT** — "Always ends with a Circle of Trust."
- **The Three Fs:** Fitness, Fellowship, Faith ("a belief in something bigger than yourself, not
  tied to a specific religion").
- **Motto:** *"Leave no man behind, but leave no man where you find him."*
  ⚠️ **Note the verb:** Nation uses **"find"** (present); some regions (CO Springs) use "found."
  Recommend standardizing on national's **"find."**

---

## 7. Phased roadmap

- **Phase 0 — Foundation:** brand system (palette + type tokens) in `globals.css`; document it.
- **Phase 1 — Home restructure:** hero CTAs + move social to footer; Three Fs; restyle 5 principles.
- **Phase 2 — Newcomer funnel:** rewrite "New to F3" in objection-busting voice; nav dual-labeling;
  About/What-is-F3 page.
- **Phase 3 — Social proof:** stats block + press strip; testimonials.
- **Phase 4 — Locations polish:** unify schedule format, ensure map links, AO blurbs.
- **Phase 5 — Community:** Slack/newsletter/BackBlast surfacing; photo gallery (optional).

Each phase is independently shippable via the existing PR → Cloudflare preview flow.

---

## 8. Open decisions (need input)

1. **Visual direction:** go **dark/cinematic** (matches national brand, bolder) or keep
   **light/clean** (lower-risk, closer to today)? *Recommendation: dark.*
2. **Accent color:** storm-orange, coral (`#EE6059`-ish), or keep blue? *Recommendation: a storm
   orange that nods to "Tornado Alley."*
3. **Display font:** introduce a condensed/stencil face for hero headlines, or just push Titillium
   to ALL-CAPS bold?
4. **Scope of social proof:** do we have press mentions / testimonials / a photo library to use, or
   should we start with just a stats block?
5. **New pages:** is an **About / What is F3** page in scope? Rename "Getting Started" → "New to F3"?
6. **Community tools:** do we have a public **Slack** and want it surfaced on-site?
