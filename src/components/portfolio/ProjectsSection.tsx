import { ExternalLink, Github, ShoppingCart, CheckSquare, MessageCircle, Receipt, Pizza, Music, Newspaper } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const projects = [
  {
    icon: <Pizza size={22} />,
    tag: "Booking",
    title: "Table Pick (Food Ordering)",
    description:
      "Developed a restaurant booking and food ordering app with real-time order management.Integrated Stripe Payment Gateway for seamless transactions.Implemented REST APIs with Retrofit, optimizing data fetching.Improved UI responsiveness and animation using Lottie & Material Design.",
    tech: ["Java","Android SDK", "MVVM", "Retrofit", "Firebase", "Stripe","Lottie"],
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/25",
  },
  {
    icon: <Music size={22} />,
    tag: "FM Radio",
    title: "FM Bangladesh",
    description:
      "FM Player is an Android application built with Kotlin that allows users to stream Bangladesh radio stations online. The app leverages Firebase for storing station data in JSON format, Retrofit for fetching the radio station list, and ExoPlayer for smooth audio streaming. It provides a simple, modern, and responsive interface for radio listeners.",
    tech: ["React native", "Firebase", "Retrofit", "Exo player", "Material Design "],
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/25",
  },
  {
    icon: <Newspaper size={22} />,
    tag: "Gulf Tamil",
    title: "Gulf Tamil News",
    description:
      "Real-time messaging app powered by Firebase Firestore. Features push notifications, secure authentication, end-to-end message delivery, and media sharing.",
    tech: ["Kotlin", "Firebase Firestore", "FCM", "Hilt", "Coroutines"],
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/25",
  },
];

export default function ProjectsSection() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[130px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Projects</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="reveal font-display font-extrabold"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            Selected <span className="gradient-text">Works</span>
          </h2>
          <p className="reveal text-muted-foreground max-w-xs text-sm">
            A selection of Android projects demonstrating my depth in mobile architecture and development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal card-hover relative bg-surface border ${p.border} rounded-2xl p-7 flex flex-col gap-5 overflow-hidden`}
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-40 pointer-events-none`} />

              {/* Icon + tag */}
              <div className="relative flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
                  {p.icon}
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative flex-1 space-y-3">
                <h3 className="font-display font-bold text-xl text-foreground">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>

              {/* Tech stack */}
              <div className="relative flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="relative flex items-center gap-4 pt-1 border-t border-border">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={13} /> Source Code
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
