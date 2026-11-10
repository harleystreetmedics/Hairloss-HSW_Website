import { RESULTS } from "@/lib/results";

/** Before-and-after photos. Renders nothing until photos are added to src/lib/results.ts. */
export function ResultsGallery({ limit }: { limit?: number }) {
  const photos = limit ? RESULTS.slice(0, limit) : RESULTS;
  if (photos.length === 0) return null;
  return (
    <>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <li key={p.src}>
            <figure className="h-full overflow-hidden rounded-xl border border-gold/20 bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are already sized */}
              <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" className="w-full" />
              <figcaption className="p-5">
                <p className="font-serif text-xl text-cream">{p.caption}</p>
                {p.detail && <p className="mt-1 text-sm text-stone">{p.detail}</p>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-stone">
        Real patients treated at our clinics, published with their consent. The photos are unedited. Results vary from person to person and
        are not guaranteed.
      </p>
    </>
  );
}
