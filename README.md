# StreamHub

StreamHub is a modern live event streaming web app built with Next.js.  
It lets users discover live streams across categories, watch event pages, and join real-time-style chat experiences.

##  Features

- Browse live events by category (Music, Gaming, Ambient, Talk Shows, Education, and more)
- Dedicated event stream pages with:
  - Embedded video player
  - Live chat panel UI
  - Event description, tags, and viewer metrics
- Clean, responsive interface built with reusable UI components
- Modern design system powered by Tailwind CSS + Radix UI components

##  Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** React, Tailwind CSS, Radix UI
- **Icons:** Lucide React
- **Forms/Validation:** React Hook Form, Zod
- **Charts/Extras:** Recharts, Sonner, and more

##  Project Structure

```bash
co/
├── app/                    # App Router pages and layout
│   ├── event/[id]/         # Dynamic event stream page
│   └── page.tsx            # Main discovery/home page
├── components/
│   ├── streaming/          # Stream-specific components (video/chat/description)
│   └── ui/                 # Reusable UI primitives
├── lib/                    # Utilities
├── public/                 # Static assets
└── styles/                 # Global styles
