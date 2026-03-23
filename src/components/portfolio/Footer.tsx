import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Code2 size={15} className="text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-foreground">Maathusan Sivarajah</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          © 2026 Maathusan Sivarajah
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {[
            { icon: <Github size={16} />, href: "https://github.com" },
            { icon: <Linkedin size={16} />, href: "https://linkedin.com" },
            { icon: <Mail size={16} />, href: "mailto:maathusan@example.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
