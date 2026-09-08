import { Section, SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { FlipCard } from "@/components/FlipCard";
import { services } from "@/data/site";

export function Services() {
  return (
    <Section id="services" className="bg-soft">
      <SectionHeader
        eyebrow="Our Services"
        title="Everything your brand needs to grow"
        lead="Strategy, creativity, and growth — under one roof."
        action={
          <Button href="/contact" variant="secondary" arrow>
            Start a project
          </Button>
        }
      />

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <StaggerItem key={s.title}>
            <FlipCard
              icon={<s.icon className="h-6 w-6" strokeWidth={1.8} />}
              title={s.title}
              body={s.body}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
