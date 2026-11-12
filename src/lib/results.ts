// Before-and-after photos. Only real patients treated at our clinics, published with written
// consent, unedited apart from removing a clinic logo (docs/review-checklist.md).
// Files live in public/results/. Leave this list empty and nothing is shown.

export type ResultPhoto = {
  /** Served path, e.g. /results/crown-1.jpg */
  src: string;
  width: number;
  height: number;
  /** What the photo shows, for people who can't see it. */
  alt: string;
  /** Shown under the photo. */
  caption: string;
  /** Treatment and the time between the two photos, when the clinic has confirmed them. */
  detail?: string;
};

export const RESULTS: ResultPhoto[] = [
  {
    src: "/results/crown-back.webp",
    width: 800,
    height: 804,
    alt: "Before and after photos of the back of a man's head, taken from behind. The before photo shows a thinning crown with scalp showing through; the after photo shows denser hair across the same area.",
    caption: "Crown thinning",
    detail: "Back of the head, before and after treatment at our clinics.",
  },
  {
    src: "/results/parting-top.webp",
    width: 800,
    height: 804,
    alt: "Before and after photos of a woman's parting, seen from above. The before photo shows a wide parting with the scalp visible either side; the after photo shows a narrower parting with more hair around it.",
    caption: "Widening parting",
    detail: "Top of the scalp, before and after treatment at our clinics.",
  },
  {
    src: "/results/scalp-close-up.webp",
    width: 800,
    height: 804,
    alt: "Close-up scalp photographs taken with a magnifier. The before photo shows sparse, fine hairs between follicles; the after photo shows more hairs across the same area.",
    caption: "Scalp close-up",
    detail: "Magnified scalp photographs taken at review appointments. Lighting differs between the two photos.",
  },
];
