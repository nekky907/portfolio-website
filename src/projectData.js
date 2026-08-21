// Project data with full details.
//
// Screenshots live in `public/Projects/` and are referenced with the Vite base
// URL so they resolve both in dev (`/`) and on GitHub Pages
// (`/portfolio-website/`). Filename convention is a per-project prefix plus a
// 1-based index:
//   LH*  London House      DP*  Daily Tracker     SC*  S-Class Villa
//   YM*  YMCA Chiang Mai   MV*  Mavis Studio      CP*  Chana Pottery
//   PEC* PEC Engineering
// To add images to a project, drop the PNGs in and list them here, e.g.
//   images: [`${import.meta.env.BASE_URL}Projects/SC1.png`]
//
// `repoUrl` is only set for PUBLIC repositories — linking a private repo from
// this public site would send visitors to a GitHub 404. Leave it '' otherwise.
export const projectsData = [
  {
    id: 1,
    title: 'London House Chiang Mai Website',
    shortDescription: 'Created and maintained the full-stack London House Chiang Mai website using React.',
    tags: ['React', 'Full-Stack', 'API Integration', 'UI/UX', 'Admin Dashboard', 'Client Work'],
    meta: 'Duration: 12 months | Budget: $450',
    liveUrl: 'https://londonhouse-cm.com',
    repoUrl: '',
    // Detailed information
    fullDescription: `A full-stack web application built for London House School of English, a Chiang Mai-based educational agency that connects Thai students with international opportunities including Disney's Cultural Exchange Program and Canadian study programs through Tamwood University.
    
    Technical Implementation
    Frontend Architecture:
    - Built with React as a single-page application for smooth, dynamic navigation
    - Component-based design for efficient code reuse across different program sections
    - Fully responsive design optimized for mobile-first Thai student demographics
    
    Interactive Features:
    - Leaflet Map API integration displaying the school's location in Chiang Mai's old city with interactive markers and nearby landmarks
    - Dynamic activities calendar managing nationwide roadshow registrations with form validation
    - YouTube video embeds for program information and virtual tours
    - Social media integration connecting to active Facebook, Instagram, and TikTok channels

    Backend & Analytics:
    - Render server deployment hosting the staff dashboard
    - Visitor tracking system providing real-time traffic insights
    - Database integration for application tracking and content management

    Tech Stack:
     Frontend: React, JavaScript ES6+, CSS3, Google Fonts API
     Mapping: Leaflet Map API
     Backend: Render server hosting
    `,
    images: [
      `${import.meta.env.BASE_URL}Projects/LH1.png`,
      `${import.meta.env.BASE_URL}Projects/LH2.png`,
      `${import.meta.env.BASE_URL}Projects/LH3.png`,
      `${import.meta.env.BASE_URL}Projects/LH4.png`
    ],
    challenge: 'London House needed a scalable platform to manage multiple educational programs (Disney placements, Canadian study programs, English courses) with frequently changing information. The agency required a system that could handle nationwide roadshow registrations, provide bilingual content, and most critically—allow non-technical staff to update program details, schedules, and activities independently without developer support.',
    solution: 'Built a React-based web application with a custom staff dashboard hosted on Render. Integrated Leaflet Maps for location visualization, implemented a dynamic activities calendar for event registration workflows, and created an intuitive content management system that empowers staff to maintain current information across all program sections. Added visitor analytics to track conversion funnels and optimize the student application journey.',
    results: [
      'SEO traffic increased',
      'More featured for admin dashboard',
      'Modern, mobile-friendly design',
      'Informative and engaging content',
      'Empowered staff with easy content updates'
    ]
  },
  {
    id: 2,
    title: 'Depression & Fibromyalgia Daily Tracker',
    shortDescription: 'A full-stack React health tracker for managing depression and fibromyalgia symptoms. Features cloud sync, analytics dashboard, medication tracking, and data export for medical appointments. Built with React and Supabase.',
    tags: ['React', 'Supabase', 'Full-Stack', 'Data Visualization', 'Health Tech'],
    meta: 'Duration: 2 Weeks | Solo Dev | Budget: $0',
    liveUrl: '',
    repoUrl: '',
    fullDescription: `A comprehensive full-stack health tracking web application designed to help individuals managing depression and fibromyalgia monitor their daily symptoms, medication adherence, and lifestyle patterns. The application provides real-time cloud synchronization, data visualization, and analytics to identify health trends and share actionable insights with healthcare providers.
    
    Core Functionality
    - Daily Health Logging: Track mood, pain levels (1-10 scale), activity levels, sleep quality, and potential triggers
- Medication Management: Monitor daily medication adherence and track extra doses of anxiety/pain relief medications
- Lifestyle Tracking: Record cannabis and alcohol usage with simple increment/decrement controls
- Side Effects Documentation: Log medication side effects and adverse reactions

Cloud Infrastructure
- Real-time Synchronization: Powered by Supabase for instant data sync across devices
- Multi-device Support: Access from phone, tablet, or desktop with seamless data continuity
- Online/Offline Detection: Visual indicators for connection status with graceful offline handling
- Automatic Backups: All entries stored securely in the cloud with update timestamps

Data Visualization & Analytics
- Interactive Dashboard: Comprehensive data table with sorting, filtering, and pagination
- Advanced Filtering: Search by keywords (mood, triggers, side effects) and filter by date ranges
- Export Capabilities: Download complete dataset as CSV for medical appointments

User Experience
- Smart Suggestions: Quick-select buttons for common moods and triggers
- Edit Existing Entries: Update entries for specific dates with clear warning indicators
- Visual Feedback: Color-coded pain levels, medication badges, and status indicators
- Responsive Design: Fully optimized for mobile, tablet, and desktop viewing
- Print Reports: Professional print-friendly reports for healthcare providers

Technical Stack
Frontend:
- React with Hooks (useState, useEffect, useCallback, useMemo)
- Lucide React icons for consistent iconography
- Custom CSS with Grid/Flexbox layouts
- Responsive design with mobile-first approach

Backend:
- Supabase (PostgreSQL) for database and real-time sync
- RESTful API integration
- Row Level Security for data privacy

Key Technical Features:
- Optimized re-rendering with useMemo for expensive calculations
- Debounced filtering and search
- Client-side CSV generation and download
- Browser online/offline event handling
- Date-based entry uniqueness validation`,
    images: [
      `${import.meta.env.BASE_URL}Projects/DP1.png`,
      `${import.meta.env.BASE_URL}Projects/DP2.png`
    ],
    challenge: 'When developing a health tracking application for individuals managing depression and fibromyalgia, I encountered a multifaceted design challenge that went far beyond simple data collection. The core problem was creating a system that chronically ill users—who often experience brain fog, fatigue, low motivation, and cognitive overwhelm—would actually use consistently over months or years, while simultaneously providing medically valuable data that could inform treatment decisions.',
    solution: 'The result is an application that meets users where they are—on difficult days, quick-select buttons enable tracking in under a minute; on better days, detailed fields support deeper reflection. Healthcare providers receive structured, analyzable data supporting evidence-based treatment adjustments. This transforms health tracking from a burden into a genuinely supportive tool for chronic illness management, demonstrating how thoughtful design can bridge the gap between technical capability and human needs in healthcare applications.',
    results: [
      '60-second average entry time (make user use less time to log)',
      'Comprehensive health reports',
      'Real-time synchronization',
      'Reduced cognitive load'
    ]
  },
  {
    id: 3,
    title: 'S Class Villa — Luxury Villa Rentals',
    shortDescription: 'A Next.js booking website for a luxury private-pool villa collection in Chiang Mai. Integrates the Hospitable property-management API for live availability and reservations, with webhook-driven booking sync, a curated gallery, and event venue and cultural experience pages.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration', 'Booking System', 'Client Work'],
    meta: 'Client Project | Live in Production',
    liveUrl: 'https://sclassvilla.com',
    repoUrl: '',
    fullDescription: `A production booking and marketing website for S Class Villa, a collection of luxury private-pool villas in Chiang Mai, Thailand. The site handles the full guest journey — from browsing properties and checking live availability through to placing and retrieving a reservation.

Booking Integration
- Direct integration with the Hospitable property-management platform via a typed API client
- Live availability endpoint so displayed dates reflect the real channel calendar rather than a stale copy
- Reservation creation and per-booking retrieval through dedicated API routes
- Inbound webhook handler that keeps booking state in sync when reservations change upstream
- Guest-facing "my booking" lookup for retrieving an existing reservation without an account

Site Architecture
- Next.js App Router with TypeScript throughout
- Dynamic per-property routes generated from slugs, alongside a properties index
- Dedicated sections for gallery, event venues, cultural experiences, and about
- Animated hero carousel and section transitions using Framer Motion
- Structured data helpers for rich search-engine results

Tech Stack
 Framework: Next.js (App Router) + TypeScript
 Styling: Tailwind CSS with clsx / tailwind-merge
 Animation: Framer Motion
 Icons: Lucide React
 Integration: Hospitable API (availability, listings, bookings, webhooks)
 Hosting: Vercel, on the sclassvilla.com custom domain`,
    images: [],
    challenge: 'A villa business that already ran its calendar through a property-management platform could not afford a website with a second, separate source of truth. Any drift between the site and the real channel calendar risks double bookings — the most expensive failure mode in hospitality. The site also had to sell an aspirational, high-end experience, which meant heavy imagery and rich motion, without that weight slowing the pages that actually convert.',
    solution: 'Rather than storing reservations locally, the site treats Hospitable as the system of record and reads through to it: a typed API client wraps availability, listings and booking endpoints, and an inbound webhook route reconciles state whenever a reservation changes upstream. Property pages are slug-driven so new villas are added as data rather than as code. The luxury presentation is carried by Next.js image optimisation and Framer Motion transitions scoped to individual sections, keeping the visual quality without a heavy client bundle on every route.',
    results: [
      'Live availability sourced from the real channel calendar',
      'Direct bookings taken without a third-party checkout',
      'Webhook-driven reservation sync, no manual reconciliation',
      'Launched on its own custom domain, sclassvilla.com'
    ]
  },
  {
    id: 4,
    title: 'YMCA Chiang Mai — Website & Back Office',
    shortDescription: 'A full-stack Next.js platform for YMCA Chiang Mai: a bilingual public site, a member portal with digital certificates and volunteer-hour tracking, and a role-based admin panel with a CMS covering five branches. Built on Supabase with row-level security.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Full-Stack', 'Admin Dashboard', 'Localization'],
    meta: 'Client Project | Full-Stack Platform | Live in Production',
    liveUrl: 'https://ymca-chiangmai.vercel.app',
    repoUrl: '',
    fullDescription: `A full-stack platform for YMCA Chiang Mai — "Building Stronger Communities Together" — combining a public marketing site, a member portal, and a role-based admin back office in a single Next.js application backed by Supabase.

Public Site
- Homepage, about, membership, donations and contact
- Programs with listing and detail pages, including enrolment
- Events with listing pages and registration flow
- News section and dedicated location pages for five branches
- Interactive branch map via Leaflet, with OpenStreetMap embeds on location pages
- Full English and Thai localisation through next-intl

Member Portal
- Personal dashboard and profile management
- Digital certificates, downloadable as PDF
- Badge collection and volunteer hour tracking
- Event registration, donation and activity history
- Membership management

Admin Back Office
- Role-based access control across seven distinct roles
- CMS for news, events, programs, pages and locations
- Member and donation management
- Certificate and badge issuance
- Branch and campaign settings
- Audit logging of administrative actions

Tech Stack
 Framework: Next.js (App Router) + TypeScript
 Database: Supabase (PostgreSQL) with Row Level Security
 Auth: Supabase Auth guarding the /member/* and /admin/* route groups
 Storage: Supabase Storage for news, badge, location and program images and certificate files
 Forms: React Hook Form + Zod validation
 i18n: next-intl (English + Thai)
 Maps: Leaflet / react-leaflet
 Testing: Playwright
 Hosting: Vercel, auto-deployed on push`,
    images: [],
    challenge: 'A community organisation operating five branches needed one system to serve three very different audiences at once: the public looking for programs and events, members tracking their own certificates and volunteer hours, and staff across branches administering all of it. Staff permissions were not uniform — a branch coordinator, a certificate issuer and a national administrator each needed a different slice. On top of that, everything had to work equally well in Thai and English, and member data such as certificates and donation history carried real privacy obligations.',
    solution: 'The platform is one Next.js App Router application partitioned into public, /member/* and /admin/* route groups, each guarded by Supabase Auth. Rather than enforcing permissions only in the UI, access is pushed down to the database with Row Level Security, so a member cannot reach another member’s records regardless of the route they hit. Seven distinct admin roles map to that policy layer, and every administrative action is written to an audit log. Bilingual content is handled by next-intl rather than duplicated pages, and forms are validated with Zod on a shared schema so client and server agree on what is valid.',
    results: [
      'Public site, member portal and admin panel unified in one codebase',
      'Seven-role permission model enforced at the database layer',
      'Full English and Thai localisation across every page',
      'Self-service member certificates, badges and volunteer hours',
      'Five branch locations managed through a single CMS'
    ]
  },
  {
    id: 5,
    title: 'Mavis Studio — Pre-Wedding Photography',
    shortDescription: 'A Next.js website for a Chiang Mai pre-wedding photography studio, with a dynamic portfolio gallery, a validated booking enquiry flow, and a secure admin dashboard. Built on Supabase, with Cloudinary image delivery and Resend transactional email.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Admin Dashboard', 'Client Work'],
    meta: 'Client Project | Live in Production',
    liveUrl: 'https://mavis-studio-website.vercel.app',
    repoUrl: 'https://github.com/nekky907/mavis-studio-wesite',
    fullDescription: `A professional website for Mavis Studio, a pre-wedding photography business based in Chiang Mai, Thailand, serving an international clientele.

Frontend
- Modern, responsive, mobile-first design built around the studio's brand palette
- Dynamic portfolio gallery driven by the database rather than hardcoded
- Team member showcase
- Multi-currency price display (THB, CNY, SGD) for an international client base
- Multi-language scaffolding (English, Chinese, Thai) via next-intl
- Smooth section animations with Framer Motion
- Contact and enquiry form with real-time validation

Backend
- Supabase (PostgreSQL) for data and authentication
- Secure admin dashboard behind Supabase Auth
- Booking management system for tracking enquiries through to confirmed shoots
- Cloudinary for image storage, transformation and optimised delivery
- Resend for transactional email notifications on new enquiries
- React Hook Form + Zod validation shared between client and server

Tech Stack
 Framework: Next.js (App Router) + TypeScript
 Styling: Tailwind CSS with the typography plugin
 Database & Auth: Supabase (PostgreSQL)
 Images: Cloudinary
 Email: Resend
 Forms: React Hook Form + Zod
 i18n: next-intl
 Hosting: Vercel`,
    images: [],
    challenge: 'Pre-wedding photography is sold on the strength of its imagery, so the portfolio had to look immaculate at full resolution — but the same gallery is browsed largely on phones, often over mobile data, by couples comparing studios. Serving originals would have made the site unusable; serving compressed thumbnails would have undercut the entire pitch. The studio also books couples from Thailand, China and Singapore, so prices needed to read naturally in each market, and the owners needed to update the portfolio and follow up on enquiries themselves without a developer in the loop.',
    solution: 'Images are offloaded to Cloudinary and requested through transformation URLs, so each viewport gets an appropriately sized, format-optimised asset from a single uploaded original. Gallery and team content is stored in Supabase and rendered dynamically, letting the studio manage the portfolio from an authenticated admin dashboard instead of a code deploy. Enquiries run through a React Hook Form + Zod flow that validates against one shared schema, writes to the database, and fires a Resend notification so no lead sits unseen. Pricing is rendered per-currency for the studio’s three main markets.',
    results: [
      'Full-resolution portfolio quality without a heavy mobile payload',
      'Portfolio and team content editable by the studio, no deploy needed',
      'Booking enquiries captured, validated and emailed automatically',
      'Prices presented in THB, CNY and SGD for international couples'
    ]
  },
  {
    id: 6,
    title: 'Chana Pottery Studio',
    shortDescription: 'A hand-built static landing page for a Chiang Mai ceramic studio — no framework, no build step. Vanilla HTML, CSS and JavaScript with WebP imagery, embedded process video, and a full SEO setup including sitemap and robots.',
    tags: ['Static Site', 'UI/UX', 'SEO', 'Client Work'],
    meta: 'Client Project | Live in Production',
    liveUrl: 'https://chana-pottery-studio.vercel.app',
    repoUrl: 'https://github.com/nekky907/chana-pottery-studio',
    fullDescription: `A single-page showcase site for Chana Pottery Studio, a handcrafted ceramic art studio in Chiang Mai, Thailand, known for its Van Gogh palettes, Color Tube vases and artist-inspired pieces, and for its Needle & Clay studio space.

Deliberately Framework-Free
Built entirely in vanilla HTML, CSS and JavaScript — roughly 850 lines of hand-written CSS and 300 lines of JavaScript, with no framework, no bundler and no build step. The result deploys as static files and loads with essentially zero JavaScript overhead.

Page Sections
- Hero with full-bleed background imagery
- Product showcase covering the studio's signature ceramic pieces
- Studio story section
- Embedded process videos showing pieces being made
- Needle & Clay studio feature
- Contact section

Performance & Media
- All photography served as WebP for a substantially smaller payload than JPEG
- Process videos embedded directly rather than through a third-party player
- Static hosting means no server-side rendering cost and near-instant delivery

Search Visibility
- Hand-written meta descriptions and semantic section markup
- sitemap.xml and robots.txt included for crawler guidance

Tech Stack
 Markup: Semantic HTML5
 Styling: Hand-written CSS3 (Flexbox / Grid)
 Behaviour: Vanilla JavaScript, no dependencies
 Media: WebP imagery, embedded MP4 video
 Hosting: Vercel static deployment`,
    images: [],
    challenge: 'A small ceramic studio needed a web presence that showed the craft properly — large photography and video of pieces being thrown and glazed — on a scale where a framework, a build pipeline and a hosting bill would all have been overhead the business could not justify maintaining. The site had to be genuinely fast for visitors browsing on phones, and it had to be discoverable by people searching for pottery in Chiang Mai.',
    solution: 'The whole site is hand-written HTML, CSS and JavaScript with no build step, so it deploys as static files and there is nothing to keep patched or upgraded. Every photograph is served as WebP and process videos are embedded directly rather than through a third-party player, keeping the page visually rich without the payload or tracking of an embed. Semantic sectioning, hand-written meta descriptions, a sitemap and a robots file give search engines a clean read of the content.',
    results: [
      'Zero-dependency site with no build step or framework to maintain',
      'WebP imagery and direct video embeds for a fast mobile load',
      'Search-ready with sitemap, robots and semantic markup',
      'Deployed as static files at effectively no running cost'
    ]
  },
  {
    id: 7,
    title: 'PEC — Potential Engineering Consultants',
    shortDescription: 'A bilingual Next.js corporate site for a Thai civil engineering consultancy established in 1995. Presents survey, design and construction-supervision services across dynamic service pages, fully localised in English and Thai.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Localization', 'SEO', 'Client Work'],
    meta: 'Client Project | Live in Production',
    liveUrl: 'https://pec-engineer-consult-website.vercel.app',
    repoUrl: '',
    fullDescription: `A corporate website for Potential Engineering Consultants Co., Ltd. (PEC), a Thai civil engineering consultancy delivering professional consulting, surveying, design and construction supervision since 1995.

Bilingual by Design
- Locale-segmented routing, so every page exists under both an English and a Thai path
- All copy — including long-form technical service descriptions — held in translation message catalogues rather than hardcoded in components
- In-page language switcher preserving the visitor's position on the site

Content
- Homepage presenting the firm's three decades of civil engineering practice
- About and company values
- Services listing plus dynamic per-service detail pages generated from slugs, covering engineering design for roads, bridges and infrastructure; survey and mapping; and environmental impact studies
- Experience section presenting the project record
- Contact and initial consultation enquiry

Technical Approach
- Next.js App Router with TypeScript and the React Compiler Babel plugin
- Tailwind CSS with class-variance-authority for typed component variants
- Server-rendered pages for search-engine visibility in both languages
- Responsive layout with a dedicated mobile navigation

Tech Stack
 Framework: Next.js (App Router) + TypeScript
 Styling: Tailwind CSS + class-variance-authority
 i18n: next-intl (English + Thai)
 Icons: Lucide React
 Hosting: Vercel`,
    images: [],
    challenge: 'An engineering consultancy with thirty years of practice had substantial, genuinely technical content to publish — detailed descriptions of road alignment and pavement design, drainage structures, bridge superstructures, survey methodology — and it all had to read correctly in both Thai and English. Translating that volume of specialist copy through a component-by-component approach would have made every future content edit a code change, and the firm needed the site to surface in search results in both languages for prospective public-sector and private clients.',
    solution: 'Content is separated from presentation entirely: all copy lives in per-locale message catalogues consumed through next-intl, and routes are locale-segmented so English and Thai are first-class parallel paths rather than one being a translation layer over the other. Individual services are slug-driven dynamic pages, so the service catalogue grows as data. Pages are server-rendered, giving crawlers real HTML in both languages, and Tailwind with class-variance-authority keeps the component variants typed and consistent across a content-heavy site.',
    results: [
      'Full English and Thai parity across every route',
      'Technical service copy editable without touching components',
      'Server-rendered pages indexable in both languages',
      'Thirty-year project record presented in a modern, responsive site'
    ]
  }
]
