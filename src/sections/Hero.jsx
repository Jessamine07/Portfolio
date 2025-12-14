/* eslint-disable react-hooks/purity */
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Facebook,
  Download,
  Instagram,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { ReactTyped } from "react-typed";


const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "GraphQL",
  "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS",
  "Vercel", "Tailwind CSS", "Prisma", "Jest",
  "Cypress", "Figma", "Git", "GitHub Actions",
];

export const Hero = () => {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 80;

    window.scrollTo({
      top:
        el.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight -
        8,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero5-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Pink floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#FFC0CB",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                20 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left section */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              IT Student • Aspiring Frontend Developer
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              <ReactTyped
                strings={[
                  `<span class="text-primary glow-text">Hi Welcome</span>`,
                  `<span class=>Nǐ hǎo</span>`,
                  `<span class="font-serif italic font-normal text-white">Annyeonghaseyo</span>`,
                ]}
                typeSpeed={60}
                backSpeed={40}
                smartBackspace
                loop
                showCursor
                cursorChar="|"
                className="block"
              />
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hi, I’m Jessamine Angelica L. De Lara, a third-year Information Technology student
              who loves creating simple and effective digital experiences. I’m always eager
              to learn new technologies and apply them to real-world projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={() => scrollToId("contact")}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>

              <a
                href="/Jessamine-De-Lara-CV.pdf"
                download="Jessamine-De-Lara-CV.pdf"
              >
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                  Download CV
             </AnimatedBorderButton>
            </a>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
  <span className="text-sm text-muted-foreground">Follow me: </span>

  <a
    href="https://github.com/Jessamine07"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
  >
    <Github className="w-5 h-5" />
  </a>

  <a
    href="https://facebook.com/Jessaminedelara"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
  >
    <Facebook className="w-5 h-5" />
  </a>

  <a
    href="https://instagram.com/j.adlr_"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
  >
    <Instagram className="w-5 h-5" />
  </a>
</div>

            </div>
          </div>

          {/* Profile section */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Profile Image"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating badge bottom-right */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Still learning, always improving.</span>
                  </div>
                </div>

                {/* Badge top-left */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3rd</div>
                  <div className="text-xs text-muted-foreground">Year BSIT.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, i) => (
                <div key={i} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("about");
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
