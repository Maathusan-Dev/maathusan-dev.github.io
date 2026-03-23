import { Smartphone, Palette, Zap, Plug } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: <Smartphone size={24} />,
    title: "Android App Development",
    desc: "End-to-end Android application development using Kotlin, Jetpack, and Clean Architecture for scalable, maintainable apps.",
    accent: "bg-amber-500/15 border-amber-500/30 text-amber-400",
  },
  {
    icon: <Palette size={24} />,
    title: "App UI Optimization",
    desc: "Revamp existing Android UIs with modern Material Design 3 components, smooth animations, and improved user flows.",
    accent: "bg-blue-500/15 border-blue-500/30 text-blue-400",
  },
  {
    icon: <Zap size={24} />,
    title: "Bug Fixing & Performance",
    desc: "Diagnose crashes, memory leaks, and ANR issues. Reduce app start time, improve battery efficiency, and optimize rendering.",
    accent: "bg-green-500/15 border-green-500/30 text-green-400",
  },
  {
    icon: <Plug size={24} />,
    title: "API Integration",
    desc: "Seamlessly connect Android apps with RESTful backends and Firebase services using Retrofit, OkHttp, and Hilt DI.",
    accent: "bg-purple-500/15 border-purple-500/30 text-purple-400",
  },
];

export default function ServicesSection() {
  const ref = useReveal();

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute right-1/3 top-0 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Services</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="reveal font-display font-extrabold"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="reveal text-muted-foreground max-w-xs text-sm">
            Professional freelance Android development services tailored to your product needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal card-hover bg-surface border border-border rounded-2xl p-7 flex flex-col gap-5 group"
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${s.accent}`}>
                {s.icon}
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
              <a
                href="#contact"
                className="text-xs font-semibold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                Get a quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
