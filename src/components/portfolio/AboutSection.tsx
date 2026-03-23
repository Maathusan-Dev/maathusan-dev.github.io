import { CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const specialisms = [
  "Kotlin & Java",
  "MVVM / Clean Architecture",
  "REST API Integration",
  "Firebase & Backend Services",
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Projects Built" },
  { value: "BSc(Hons)", label: "Computer science in Software Engineering" },
  { value: "100%", label: "Remote-Ready" },
];

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-7">
            <h2 className="reveal font-display font-extrabold leading-[1.08]"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              Crafting exceptional
              <span className="gradient-text"> Android experiences</span>
            </h2>

            <p className="reveal text-muted-foreground leading-relaxed">
              I am a dedicated Android Developer with a{" "}
              <span className="text-primary font-medium">BSc (Hons) Computer Science in Software Engineering</span>{" "}
              and hands-on experience building robust mobile applications. I specialize
              in writing clean, maintainable code that scales.
            </p>

            <p className="reveal text-muted-foreground leading-relaxed">
              I'm currently looking for{" "}
              <span className="text-foreground font-medium">remote international opportunities</span>{" "}
              where I can contribute to impactful products and grow as a full-stack engineer.
            </p>

            {/* Specialisms */}
            <ul className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {specialisms.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="reveal pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group"
              >
                Let's work together
                <span className="w-6 h-px bg-primary group-hover:w-10 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="reveal card-hover bg-surface border border-border rounded-2xl p-7 flex flex-col gap-2"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-display font-extrabold text-4xl gradient-text leading-none">
                  {s.value}
                </span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
