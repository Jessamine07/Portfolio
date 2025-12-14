import { Github, Instagram, Heart, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Jessamine07", label: "Github"},
  { icon: Facebook, href: "https://www.facebook.com/jessamine.delara/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/j.adlr_/", label: "Instagram" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Gallery" },
  { href: "#journal", label: "Journal" }, 
  { href: "#experience", label: "Projects" },
  { href: "#testimonials", label: "Certificates" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              Jessamine<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-sm text-muted-foreground transition-all duration-300 rounded-full px-3 py-1
                  hover:text-primary
                  hover:bg-[rgba(255,192,203,0.15)]
                  hover:shadow-[0_0_15px_rgba(255,192,203,0.6)]
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="
                  p-2 rounded-full glass transition-all duration-300
                  hover:bg-primary/10 hover:text-primary
                  hover:shadow-[0_0_15px_rgba(255,192,203,0.6)]
                "
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
