import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { KitCategory, KitItem } from "@/config/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function IconFor({ name }: { name: string }) {
  const Cmp = (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Sparkles;
  return <Cmp className="h-5 w-5 text-[color:var(--gold)]" strokeWidth={1.5} />;
}

function ItemCard({ item }: { item: KitItem }) {
  return (
    <div className="flex gap-4 rounded-lg border border-[color:var(--gold-soft)]/40 bg-[color:var(--cream)] p-5">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--sand)]/60">
        <IconFor name={item.icon} />
      </div>
      <div>
        <h4 className="font-serif text-lg text-[color:var(--cocoa)]">{item.name}</h4>
        <p className="mt-1 text-sm leading-relaxed text-[color:var(--taupe)]">{item.description}</p>
      </div>
    </div>
  );
}

export function KitCategoryList({ categories, extra }: { categories: KitCategory[]; extra?: KitItem }) {
  return (
    <div className="w-full">
      {/* Desktop / tablet grid */}
      <div className="hidden space-y-14 md:block">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="tracked-tight text-sm text-[color:var(--gold)]">{cat.title}</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item) => (
                <ItemCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
        {extra && (
          <div>
            <h3 className="tracked-tight text-sm text-[color:var(--gold)]">Ihram</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ItemCard item={extra} />
            </div>
          </div>
        )}
      </div>

      {/* Mobile accordion */}
      <div className="md:hidden">
        <Accordion type="multiple" defaultValue={[categories[0]?.title ?? ""]} className="w-full">
          {categories.map((cat) => (
            <AccordionItem key={cat.title} value={cat.title}>
              <AccordionTrigger className="tracked-tight text-xs text-[color:var(--cocoa)]">
                {cat.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-3 py-2">
                  {cat.items.map((item) => (
                    <ItemCard key={item.name} item={item} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
          {extra && (
            <AccordionItem value="ihram">
              <AccordionTrigger className="tracked-tight text-xs text-[color:var(--cocoa)]">
                Ihram
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-3 py-2">
                  <ItemCard item={extra} />
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </div>
  );
}
