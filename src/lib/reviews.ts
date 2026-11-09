// Patient reviews exactly as published on the clinic's own websites (read 4 and 9 Nov 2026).
// Nothing here is edited or invented. They are clinic reviews, not hair loss reviews: each card
// shows what the review is about or where it came from (docs/research.md §12 and §13).

export type Review = { name: string; service: string; quote: string; date?: string };

/** Rating lines, each quoted from the website it appears on. */
export const REVIEW_SOURCES = [
  "Rated Excellent based on 17 Google reviews, as published on harleystreetmedics.clinic.",
  "5.0 average rating based on Google reviews, as published on harleystreetmedicalwellness.co.uk.",
];

export const REVIEWS: Review[] = [
  // Google reviews, from harleystreetmedics.clinic (Trustindex widget, read 9 Nov 2026).
  {
    name: "Phillip MacDonald",
    service: "Google review",
    date: "1 year ago",
    quote:
      "The team at the surgery are great. This is my second trip and would highly recommend anyone else to see the team here. Professional, meticulous, friendly and welcoming",
  },
  {
    name: "Roisin Mackenzie",
    service: "Google review · Glasgow",
    date: "1 year ago",
    quote:
      "Excellent service from the Harley Street team in Glasgow for 2 cyst removals. All staff were friendly and welcoming including surgeon (Dr Kabeya) and Fraser. Procedure was painfree. Stitches healed up really well and I'm really happy with how it looks. I would definitely go back if I needed to again. Thank you!",
  },
  {
    name: "Kathryn McVey",
    service: "Google review",
    date: "1 year ago",
    quote:
      "Absoutley blown away with the service. Could not recommend Harley Street Medics enough! They were super kind and supportive from beginning to end. Would definitely come back again!",
  },
  {
    name: "Steve Rudland",
    service: "Google review",
    date: "1 year ago",
    quote: "Excellent service. Very skilled surgeon. No fuss. Very efficient admin and no price creep.",
  },
  {
    name: "Rab Nawaz Hattar",
    service: "Google review",
    date: "1 year ago",
    quote:
      "I had a great experience with this clinic. The staff displayed a high level of professionalism and made me feel comfortable throughout my visit.",
  },
  {
    name: "David Mullan",
    service: "Google review",
    date: "1 year ago",
    quote: "Great service, fitted me in on a cancellation. Friendly staff, keeping you informed at all times",
  },
  // Patient stories, from harleystreetmedicalwellness.co.uk (read 4 Nov 2026).
  {
    name: "Sarah Mitchell",
    service: "NAD+ IV therapy",
    quote:
      "After months of chronic fatigue, I tried the NAD+ IV therapy at Harley Street Wellness. Dr. Ahmad and his team were incredibly professional and took time to understand my lifestyle and health goals. Within three sessions, my energy levels transformed completely. I can now power through my 12-hour workdays and still have energy for evening workouts. Absolutely life-changing!",
  },
  {
    name: "James Patterson",
    service: "Metabolic health programme",
    quote:
      "I was skeptical about IV therapy until a friend recommended Harley Street Wellness. The metabolic health programme has been a game-changer for my performance and mental clarity. Dr. Husnara explained everything in detail, and the clinic's atmosphere is incredibly calming. Three months in, I've lost 15 pounds, my sleep has improved dramatically, and my focus is sharper than it's been in years.",
  },
  {
    name: "Amelia Chen",
    service: "Detox IV drip",
    quote:
      "The detox IV drip treatment helped me recover from burnout faster than I ever imagined. The team at Harley Street Wellness doesn't just treat symptoms—they take a holistic approach to wellness. Every visit feels luxurious yet medical-grade professional. The results speak for themselves: clearer skin, better digestion, and renewed vitality. Worth every penny.",
  },
  {
    name: "Robert Thompson",
    service: "IV drip therapy",
    quote:
      "As someone who travels frequently for work, jet lag and fatigue were constant companions. The IV drip therapy at Harley Street Wellness has become my secret weapon. Dr. Vincent tailored a programme specifically for my travel schedule. The difference in my recovery time and overall wellbeing is remarkable. I now book sessions before and after major trips—it's become essential to my routine.",
  },
  {
    name: "Priya Sharma",
    service: "IV therapy and wellness guidance",
    quote:
      "Running a startup meant sacrificing sleep, nutrition, and self-care. I came to Harley Street Wellness completely depleted. Their comprehensive approach—combining IV therapy with personalized wellness guidance—helped me rebuild my health without compromising my business. Six months later, I'm more productive, focused, and healthy than ever. The team genuinely cares about long-term results, not just quick fixes.",
  },
  {
    name: "David Williams",
    service: "Metabolic health assessment",
    quote:
      "I've tried various wellness treatments across London, but Harley Street Wellness stands apart. The medical expertise is unquestionable, the facilities are pristine, and the results are consistently exceptional. After my first metabolic health assessment, Dr. Ahmad created a bespoke treatment plan that's significantly improved my cardiovascular health and energy levels. If you're serious about optimizing your health, this is where you come.",
  },
];
