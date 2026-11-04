import { EnquiryForm } from "@/components/EnquiryForm";
import { BookingCalendar, ClinicCards, ContactLinks } from "@/components/sections";
import { CheckList, Disclaimer, PageHero, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Hair Loss Consultation",
  description:
    "Book a hair loss consultation at Harley Street Medical Wellness in London or Glasgow. Choose a time in our calendar, send an enquiry or call your nearest clinic.",
  path: "/book/",
});

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a consultation"
        title="Let's talk about your hair"
        intro="Pick a time in our calendar for your consultation, or send us your details and we'll call you back. There's no obligation to go ahead with treatment."
        crumbs={[{ name: "Book a consultation", path: "/book/" }]}
      />
      <Section tone="soft" labelledBy="calendar-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="calendar-title" className="font-serif text-2xl">
              Choose a time
            </h2>
            <p className="mt-2 mb-5 text-stone">Book your consultation directly in our calendar.</p>
            <BookingCalendar />
          </div>
          <div className="space-y-5 lg:col-span-5">
            <h2 className="font-serif text-2xl">What happens next</h2>
            <CheckList
              items={[
                "Choose a time in the calendar, or we'll call you back to arrange one.",
                "At your consultation we assess your hair and scalp and talk through your history.",
                "We explain your options and costs. You decide, with no pressure.",
              ]}
            />
            <h2 className="pt-4 font-serif text-2xl">Prefer to talk?</h2>
            <ContactLinks />
          </div>
        </div>
        <div className="mt-14">
          <h2 className="font-serif text-2xl">Or send us your details</h2>
          <p className="mt-2 mb-5 max-w-2xl text-stone">
            If you&rsquo;d rather we called you back, or you have a question first, fill in the form and a member of our team will be in
            touch.
          </p>
          <div className="max-w-3xl">
            <EnquiryForm />
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
