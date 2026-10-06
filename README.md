# TravelBuddy customer app

A responsive travel discovery app with experiences, local guides, travel buddies, maps, booking flows, and customer account pages.

## Run

Requires Node.js 20 or later and pnpm 11.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

For a production build:

```bash
pnpm build
pnpm start
```

## What is included

- Experience discovery with list and map views, sorting, and category, date, price, duration, and cancellation filters.
- Guide discovery with area, specialty, language, and tour style filters.
- Buddy discovery with age, gender, interest, and travel pace filters.
- Experience details, saved items, cart, booking and review screens.
- Responsive layouts and optimized image delivery through Next.js. Profile portraits live in `public/profiles`.

## Current integrations

This repository is the customer frontend. Account state, bookings, reviews, and messages are stored in the browser. Checkout and provider replies are simulated. Map tiles come from OpenStreetMap, and experience photography comes from Unsplash. A live release needs server authentication, booking and payment services, provider data, and durable storage.

## Project structure

- `src/app` — routes and styles
- `src/components` — discovery, map, account, booking, and shared UI
- `src/lib` — catalog and customer domain logic
- `public` — brand and profile images
- `scripts` — local validation utilities

The app uses Next.js 14, React 18, TypeScript, Leaflet, and Lucide icons.
