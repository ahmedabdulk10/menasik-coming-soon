import { siteConfig } from "@/config/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-3xl sm:text-4xl">Questions, answered</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-[color:var(--taupe)]">
          The things pilgrims ask us most before they travel.
        </p>

        <Accordion type="single" collapsible className="mt-12">
          {siteConfig.faqs.map((faq) => (
            <AccordionItem
              key={faq.q}
              value={faq.q}
              className="border-b border-[color:var(--gold-soft)]/40"
            >
              <AccordionTrigger className="text-left font-serif text-lg text-[color:var(--cocoa)] hover:no-underline sm:text-xl">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-[color:var(--taupe)]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
