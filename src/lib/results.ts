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

export const RESULTS: ResultPhoto[] = [];
