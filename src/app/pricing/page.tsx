import Link from "next/link";
import { CtaBand } from "@/components/sections";
import { CheckList, Disclaimer, PageHero, Section, SectionHeading, Tbc } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { BRAND, CONSULTATIONS } from "@/lib/site";
import { TREATMENTS, VIRTUE_TBC } from "@/lib/treatments";

export const metadata = pageMetadata({
  title: "Hair Loss Treatment Prices",
  description:
    "How pricing works for hair loss consultations and treatments at Harley Street Aesthetics in London and Glasgow. Your plan and cost are confirmed before treatment.",
  path: "/pricing/",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Hair loss treatment prices"
        intro="Your plan and its cost are agreed with you in writing after your consultation, before any treatment starts."
        crumbs={[{ name: "Pricing", path: "/pricing/" }]}
      />
      <Section labelledBy="table-title">
        <SectionHeading id="table-title" eyebrow="Guide prices" title="Consultation and treatments" />
        <div className="overflow-x-auto rounded-2xl border border-cream/10 bg-card shadow-card">
          <table className="w-full min-w-[36rem] text-left">
            <caption className="sr-only">Hair loss consultation and treatment prices</caption>
            <thead>
              <tr className="border-b border-cream/10 text-xs tracking-[0.15em] text-stone uppercase">
                <th scope="col" className="p-5 font-semibold">
                  Treatment
                </th>
                <th scope="col" className="p-5 font-semibold">
                  Price
                </th>
                <th scope="col" className="p-5 font-semibold">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cream/10">
              <tr>
                <th scope="row" className="p-5 font-serif text-lg font-normal text-cream">
                  <Link href="/diagnosis/" className="hover:text-gold">
                    Online consultation
                  </Link>
                </th>
                <td className="p-5 text-cream">{CONSULTATIONS.online.price}</td>
                <td className="p-5 text-sm text-stone">
                  {CONSULTATIONS.online.time}. {CONSULTATIONS.online.detail}
                </td>
              </tr>
              <tr>
                <th scope="row" className="p-5 font-serif text-lg font-normal text-cream">
                  <Link href="/diagnosis/" className="hover:text-gold">
                    In-clinic consultation
                  </Link>
                </th>
                <td className="p-5 text-cream">{CONSULTATIONS.inClinic.price}</td>
                <td className="p-5 text-sm text-stone">
                  {CONSULTATIONS.inClinic.time}. {CONSULTATIONS.inClinic.detail}
                </td>
              </tr>
              {TREATMENTS.flatMap((t) =>
                t.prices
                  ? t.prices.map((p) => (
                      <tr key={p.option}>
                        <th scope="row" className="p-5 font-serif text-lg font-normal text-cream">
                          <Link href={`/treatments/${t.slug}/`} className="hover:text-gold">
                            {p.option}
                          </Link>
                        </th>
                        <td className="p-5 text-cream">
                          {p.single} <span className="text-sm text-stone">per session</span>
                          <br />
                          {p.course} <span className="text-sm text-stone">for a course of 3</span>
                        </td>
                        <td className="p-5 text-sm text-stone">
                          Number of sessions agreed at consultation.
                          {p.option.startsWith("Virtue") && (
                            <>
                              {" "}
                              <Tbc>{VIRTUE_TBC}</Tbc>
                            </>
                          )}
                        </td>
                      </tr>
                    ))
                  : [
                      <tr key={t.slug}>
                        <th scope="row" className="p-5 font-serif text-lg font-normal text-cream">
                          <Link href={`/treatments/${t.slug}/`} className="hover:text-gold">
                            {t.name}
                          </Link>
                        </th>
                        <td className="p-5">
                          <Tbc>{t.priceTbc}</Tbc>
                        </td>
                        <td className="p-5 text-sm text-stone">Number of sessions agreed at consultation</td>
                      </tr>,
                    ],
              )}
              <tr>
                <th scope="row" className="p-5 font-serif text-lg font-normal text-cream">
                  Blood tests
                </th>
                <td className="p-5">
                  <Tbc>blood test price, if offered</Tbc>
                </td>
                <td className="p-5 text-sm text-stone">Only when clinically indicated</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-stone">
          Prices are the same at our London and Glasgow clinics. Your plan and its cost are confirmed at consultation.
        </p>
      </Section>
      <Section tone="soft" labelledBy="how-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="how-title" eyebrow="How pricing works" title="No surprises" className="mb-8!" />
            <CheckList
              items={[
                "Your practitioner recommends a plan only after assessing you.",
                "You'll receive the full cost of your plan before you agree to anything.",
                "There is no obligation to go ahead with treatment after your consultation.",
                CONSULTATIONS.deposit,
              ]}
            />
          </div>
          <div>
            <SectionHeading id="finance-title" eyebrow="Spreading the cost" title="Finance" className="mb-8!" />
            <p className="text-lg leading-relaxed text-stone">
              You may be able to spread the cost with Klarna (pay in 3), Clearpay (pay in 4) or Ideal4Finance (interest-free finance
              over up to 12 months on treatment over £1,000), subject to status. Applicants must be 18 or over and UK residents.{" "}
              <Tbc>FCA credit broker statement and representative example, if required</Tbc>
            </p>
            <a href={BRAND.finance} className="mt-6 inline-flex items-center gap-2 font-semibold text-gold underline underline-offset-2 hover:text-cream">
              Finance at Harley Street Aesthetics
            </a>
          </div>
        </div>
        <Disclaimer className="mt-12" />
      </Section>
      <CtaBand />
    </>
  );
}
