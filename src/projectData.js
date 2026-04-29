// Project data with full details
export const projectsData = [
  {
    id: 1,
    title: 'London House Chiang Mai Website',
    shortDescription: 'Created and maintained the full-stack London House Chiang Mai website using React.',
    tags: ['Londonhouse-cm', 'React', 'Full-Stack Web-Dev', 'API Integration', 'UI/UX', 'Server Management'],
    meta: 'Duration: 12 months | Budget: $450',
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

     Link: https://londonhouse-cm.com
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
    tags: ['health-tracking', 'medical-app', 'full-stack-development', 'React', 'Supabase', 'Data Visualization'],
    meta: 'Duration: 2 Weeks | Solo Dev | Budget: $0',
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
  }
]