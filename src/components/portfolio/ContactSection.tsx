import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, FolderGit, GitBranchIcon, Code } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "maathusan876@gmail.com",
    href: "mailto:maathusan876@gmail.com",
  },
  {
    icon: <Code size={18} />,
    label: "Bit Bucket",
    value: "https://bitbucket.org/maathusan/",
    href: "https://bitbucket.org/maathusan/",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "www.linkedin.com/in/maathusan",
    href: "https://www.linkedin.com/in/maathusan"},
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Sri Lanka · Open to Remote",
    href: "#",
  },
];

export default function ContactSection() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 bottom-0 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[130px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Contact</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-8">
            <h2 className="reveal font-display font-extrabold"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              Let's build something{" "}
              <span className="gradient-text">great together</span>
            </h2>

            <p className="reveal text-muted-foreground leading-relaxed max-w-sm">
              I'm open to remote opportunities, freelance projects, and collaborations.
              Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="reveal space-y-4">
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary/15 group-hover:border-primary/30 group-hover:text-primary transition-all duration-200">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal bg-background border border-border rounded-2xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Send size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I'll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Arjun Patel"
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="arjun@company.com"
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Hi Maathusan, I'd like to discuss a project opportunity..."
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 active:scale-[0.98] transition-all duration-200 amber-glow"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
