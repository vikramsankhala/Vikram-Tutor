# SAP BTP Companion

A comprehensive website for learning SAP Business Technology Platform (BTP). Built with Next.js 14, TypeScript, and Mermaid diagrams.

## Features

- **Topics**: CAP, RAP, Fiori, CI/CD, MTA, Transport, Monitoring, and more
- **Departments**: The "company" metaphor—5 BTP departments with services
- **Registration & Download**: Register to download SAP Developer & DevOps Study Notes (docx)
- **Resource Library**: Quick-reference summaries, filterable by topic

## Getting Started

```bash
npm install
# Set DATABASE_URL for registration (see env.example)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Calendar & Video Conferencing

- **Schedule page** (`/schedule`): Embeds [Cal.com](https://cal.com) for free scheduling
- **Calendar**: Cal.com syncs with Google Calendar
- **Video**: When you connect Google Meet to Cal.com, bookings create Meet links automatically
- **Recording**: Google Meet records to Google Drive
- **Transcription**: Live captions in Meet; export transcripts after
- **Translation**: Meet supports real-time caption translation into 18+ languages

**Setup**: Create a free [Cal.com](https://cal.com) account, create an event type, connect Google Calendar + Google Meet. Set `NEXT_PUBLIC_CALCOM_LINK=yourusername/event-type` in env.

## Deploy to Render.com

1. Push to GitHub and connect the repo to Render
2. Create a new **Web Service**
3. Add a **PostgreSQL** database (Render Dashboard → New → PostgreSQL)
4. Link the database to the web service (add `DATABASE_URL` from database)
5. Build command: `npm install && npx prisma generate && npx prisma migrate deploy && npm run build`
6. Start command: `npm start`
7. Or use the included `render.yaml` for Blueprint deploy (creates DB + web service)

## Content Source

Content is based on:
- `BTP.txt` — BTP overview and department metaphor
- `SAP_Developer_DevOps_Study_Notes.docx` — CAP, RAP, Fiori, Security, CI/CD, MTA, Transport, Monitoring, Architecture
- SImple SAP — S/4HANA training PDFs (FI, PS, SD)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Mermaid (diagrams)
- CSS Modules
