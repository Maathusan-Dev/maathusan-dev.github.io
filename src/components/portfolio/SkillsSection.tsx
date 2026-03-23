import { useEffect, useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";

const groups = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Kotlin", level: 95 },
      { name: "Java", level: 85 },
      { name: "Android SDK", level: 90 },
      { name: "Compose UI", level: 88 },
    ],
  },
  {
    title: "Architecture & Tools",
    skills: [
      { name: "MVVM / Clean Architecture", level: 92 },
      { name: "Retrofit", level: 90 },
      { name: "Room Database", level: 87 },
      { name: "Git / GitHub", level: 93 },
    ],
  },
  {
    title: "Backend & Others",
    skills: [
      { name: "Firebase (Auth, Firestore, Crashlytics)", level: 88 },
      { name: "REST APIs", level: 91 },
      { name: "Spring boot / Backend", level: 62 },
      { name: "UI/UX (Material Design)", level: 80 },
    ],
  },
];

const tags = [
  "Kotlin","Java","Android SDK","Jetpack","MVVM","Retrofit","Room DB",
  "Firebase","REST API","Git","Material Design","Clean Architecture",
  "LiveData","Coroutines","Hilt/Dagger","Spring boot",
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fill = el.querySelector<HTMLDivElement>(".skill-fill");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && fill) {
          fill.style.width = `${level}%`;
          fill.classList.add("animate");
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-semibold tabular-nums">{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: 0 }} />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Skills</span>
        </div>

        <h2 className="reveal font-display font-extrabold mb-16"
          style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
        >
          Technical <span className="gradient-text">Expertise</span>
        </h2>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {groups.map((g) => (
            <div
              key={g.title}
              className="reveal bg-background border border-border rounded-2xl p-7 space-y-6"
            >
              <h3 className="font-display font-bold text-lg text-foreground">{g.title}</h3>
              <div className="space-y-5">
                {g.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="reveal flex flex-wrap gap-3">
          {tags.map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
