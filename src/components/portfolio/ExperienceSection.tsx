import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const experiences = [
{
  role: "Software Engineer",
  company: "Smartzi Lanka (Pvt) Ltd",
  period: "2021 – Present",
  type: "Full-Time",
  bullets: [
  "Promoted from Associate Software Engineer → Software Engineer",
  "Improved app performance and reduced crash rates by 60%",
  "Led code reviews, enforced coding standards, and mentored junior developers.",
  "Led the development of scalable and maintainable Android applications using Kotlin, MVVM, and Hilt/Dagger.",
  "Implemented Jetpack Compose to modernize UI development."]

},
{
  role: "Trainee Associate Software Engineer",
  company: "Elegant Media (Pvt) Ltd",
  period: "2021",
  type: "Trinee",
  bullets: [
  "Assisted in developing multi-module Android applications using Kotlin.",
  "Fixed production bugs and improved user experience.",
  "Worked with Jetpack components to enhance UI/UX."]

}];


export default function ExperienceSection() {
  const ref = useReveal();

  return (
    <section id="experience" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Experience</span>
        </div>
        <h2 className="reveal font-display font-extrabold mb-16"
        style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
          
          Work <span className="gradient-text">History</span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Timeline */}
          <div className="lg:col-span-3 space-y-8">
            {experiences.map((e, i) =>
            <div key={i} className="reveal relative pl-6 border-l-2 border-border hover:border-primary transition-colors duration-300">
                {/* Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />

                <div className="bg-background border border-border rounded-2xl p-6 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground">{e.role}</h3>
                      <p className="text-primary font-medium text-sm mt-0.5">{e.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar size={12} /> {e.period}
                      </span>
                      <span className="text-xs bg-primary/15 text-primary px-2.5 py-0.5 rounded-full font-medium">
                        {e.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {e.bullets.map((b) =>
                  <li key={b} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary" />
                        {b}
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Education sidebar */}
          <div className="lg:col-span-2 space-y-6" id="education">
            <div className="reveal flex items-center gap-3 mb-6">
              <GraduationCap size={20} className="text-primary" />
              <span className="font-display font-bold text-xl text-foreground">Education</span>
            </div>
            <div className="reveal bg-background border border-primary/25 rounded-2xl p-7 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground leading-snug">BSc (hons) Computer Science in Software Engineering
                </h3>
                <p className="text-primary font-medium text-sm mt-1">Kingston University London</p>
                <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1.5">
                  <Calendar size={11} /> 2022 – 2023
                </p>
              </div>
             </div>
            <div className="reveal bg-background border border-primary/25 rounded-2xl p-7 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground leading-snug">Higher National Diploma in Information Technology
                </h3>
                <p className="text-primary font-medium text-sm mt-1">Advanced Technological Institute - Jaffna</p>
                <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1.5">
                  <Calendar size={11} /> 2018 – 2022
                </p>
              </div>
             
              </div>

            {/* Certifications mini */}
            {/* <div className="reveal space-y-3">
              <p className="text-sm font-semibold text-foreground">Certifications</p>
              {["Google Android Developer", "Firebase Specialist", "Jetpack Compose Essentials"].map((c) =>
              <div key={c} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{c}</span>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </section>);

}