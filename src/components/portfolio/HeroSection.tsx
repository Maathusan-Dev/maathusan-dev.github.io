import { ArrowRight, Download, Mail, Github, Linkedin, Instagram } from "lucide-react";
import profileHero from "@/assets/profile_cv.jpeg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20">
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-0">
        {/* Left — text */}
        <div className="flex flex-col gap-7 order-2 lg:order-1">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 w-fit"
            style={{ animation: "fade-in 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
            
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Senior Software Engineer 
            </span>
          </div>

          {/* Name */}
          <div style={{ animation: "slide-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
            <h1 className="font-display font-extrabold leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(3rem,7vw,5.5rem)" }}>
              <span className="block text-primary">Mathusan</span>
              <span className="block text-foreground">Sivarajah.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="text-primary font-display font-semibold text-lg tracking-wide"
            style={{ animation: "fade-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both" }}>
            
            Senior Android Developer · Kotlin · Java · Mobile Architect
          </p>

          {/* Intro */}
          <p
            className="text-muted-foreground leading-relaxed max-w-[520px]"
            style={{ animation: "fade-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.45s both" }}>
            
            Experienced Software Engineer with 5+ years in Android development, 
            specializing in Kotlin and Java. Skilled in building scalable,
             high-performance mobile apps using modern architectures like MVVM.
              Proven track record in leading projects, mentoring developers,
               and collaborating with teams to deliver innovative solutions.
                Aspiring to advance as a Senior Software Engineer to drive 
                impactful, tech-forward initiatives.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "fade-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}>
            
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-200 amber-glow">
              
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-primary/40 text-primary font-semibold hover:bg-primary/10 active:scale-[0.97] transition-all duration-200">
              
              <Download size={16} /> Download CV
            </a>
            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary active:scale-[0.97] transition-all duration-200">
              
              <Mail size={16} /> Contact Me
            </a> */}
          </div>

          {/* Social */}
          <div
            className="flex items-center gap-5 pt-2"
            style={{ animation: "fade-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s both" }}>
            
            {[
            { href: "https://github.com", icon: <Github size={18} /> },
            { href: "https://linkedin.com", icon: <Linkedin size={18} /> },
            { href: "#", icon: <Instagram size={18} /> }].
            map((s, i) =>
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 hover:scale-110">
              
                {s.icon}
              </a>
            )}
          </div>
        </div>

        {/* Right — image */}
        <div
          className="relative flex justify-center items-end order-1 lg:order-2"
          style={{ animation: "fade-in 1s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}>
          
          {/* Amber ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full border border-primary/20 animate-pulse-amber" />
            <div className="absolute w-56 h-56 lg:w-72 lg:h-72 rounded-full border border-primary/10" />
          </div>

          {/* Image */}
          <div className="relative w-64 h-72 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-black/50 animate-float">
            <img
              src={profileHero}
              alt="Mathusan Sivarajah"
              className="w-full h-full object-cover object-top" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Floating badge — experience */}
          


          

          {/* Floating badge — projects */}
          <div className="absolute top-6 -right-4 lg:-right-8 bg-surface-2 border border-primary/30 rounded-xl px-5 py-3 shadow-lg flex items-center gap-3">
            <span className="text-primary font-display font-extrabold text-2xl leading-none">5+</span>
            <span className="text-xs text-muted-foreground leading-tight">Years<br />Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>);

}