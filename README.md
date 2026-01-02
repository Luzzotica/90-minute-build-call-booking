# 90-Minute Build - Qualification Flow

A Next.js qualification flow website that guides prospects through a series of questions before booking a 90-minute build session.

## Features

- **Multi-step qualification form** - Collects contact info, business type, revenue, and sales challenges
- **Revenue-based qualification** - Only allows prospects making $10K+/month to book
- **GHL Integration** - Saves contacts to GoHighLevel CRM automatically
- **Booking calendar embed** - Integrates your GHL booking widget
- **Post-booking confirmation** - Shows prospects exactly what to expect in the session

## Flow

1. **Contact Info** → Name, email, phone (saved to GHL immediately)
2. **Business Type** → Multiple choice selection
3. **Revenue Question** → Qualification checkpoint ($10K+ required)
4. **Problem Description** → Free text about their sales challenge
5. **Booking Calendar** → Embedded GHL calendar widget
6. **Confirmation** → "What We'll Build Together" explanation

If a prospect doesn't qualify (revenue < $10K), they're redirected to a friendly "not ready yet" page with an alternative resource.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the root directory:

```env
GHL_API_KEY=your_ghl_api_key_here
GHL_LOCATION_ID=your_ghl_location_id_here
```

**Getting your GHL credentials:**
- Log into GoHighLevel
- Go to Settings → Business Profile to find your Location ID
- Go to Settings → API Keys to generate an API key

### 3. Customize the booking calendar

The booking widget is already configured in `app/book/page.tsx`. If you need to change the calendar, update the iframe src URL.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Customization

### Update the alternative resource

Edit `app/not-ready/page.tsx` to change:
- The free resource link (currently a placeholder `#`)
- Your LinkedIn profile URL
- The resource name and description

### Update contact email

Edit `app/confirmed/page.tsx` to change the email link from `hello@example.com` to your actual email.

### Adjust qualification threshold

Edit `components/steps/RevenueStep.tsx` to modify the `isQualified` function and revenue ranges.

## Tech Stack

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **React Hook Form** for form state management
- **GoHighLevel API** for CRM integration

## Project Structure

```
app/
├── page.tsx           # Landing page
├── qualify/page.tsx   # Qualification form
├── book/page.tsx      # Booking calendar
├── confirmed/page.tsx # Post-booking confirmation
└── not-ready/page.tsx # Disqualified prospects page

components/
├── QualificationForm.tsx   # Main form with step logic
├── steps/                  # Individual form steps
│   ├── ContactStep.tsx
│   ├── BusinessTypeStep.tsx
│   ├── RevenueStep.tsx
│   └── ProblemStep.tsx
├── ProcessTimeline.tsx     # 90-min session breakdown
├── ProgressBar.tsx
└── Button.tsx

lib/
└── ghl.ts             # GoHighLevel API integration
```

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Don't forget to add your environment variables in your hosting platform's settings.
