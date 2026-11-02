import { EnquiryForm } from "@/components/EnquiryForm";
import { ClinicCards, ContactLinks } from "@/components/sections";
import { CheckList, Disclaimer, PageHero, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Hair Loss Consultation",
  description:
    "Request a hair loss consultation at Harley Street Aesthetics in London or Glasgow. Send an enquiry, call, or message us on WhatsApp.",
  path: "/book/",
});

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a consultation"
        title="Let's talk about your hair"
        intro="Send us your details and we'll call you to arrange your consultation. There's no obligation to go ahead with treatment."
        crumbs={[{ name: "Book a consultation", path: "/book/" }]}
      />
      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="sr-only">Enquiry form</h2>
            <EnquiryForm />
          </div>
          <div className="space-y-5 lg:col-span-5">
            <h2 className="font-serif text-2xl">What happens next</h2>
            <CheckList
              items={[
                "A member of our team contacts you to arrange a time.",
                "At your consultation we assess your hair and scalp and talk through your history.",
                "We explain your options and costs. You decide, with no pressure.",
              ]}
            />
            <h2 className="pt-4 font-serif text-2xl">Prefer to talk?</h2>
            <ContactLinks />
          </div>
        </div>
        <div className="mt-12">
          <ClinicCards />
        </div>
        <Disclaimer className="mt-12" />
      </Section>
    </>
  );
}
