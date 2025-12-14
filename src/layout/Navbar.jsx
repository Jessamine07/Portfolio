import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Gallery" },
  { href: "#journal", label: "Journal" }, 
  { href: "#experience", label: "Projects" },
  { href: "#testimonials", label: "Certificates" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 80;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      8;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const goToContact = () => scrollToId("contact");

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold tracking-tight hover:text-primary"
        >
          Jessamine<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(link.href.replace("#", ""));
                }}
                className="
                  px-4 py-2 text-sm text-muted-foreground rounded-full 
                  transition-all duration-300
                  hover:text-primary 
                  hover:bg-[rgba(255,192,203,0.15)]
                  hover:shadow-[0_0_15px_rgba(255,192,203,0.6)]
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button size="sm" onClick={goToContact}>Contact Me</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  scrollToId(link.href.replace("#", ""));
                }}
                className="
                  text-lg text-muted-foreground py-2 
                  transition-all duration-300
                  hover:text-primary 
                  hover:bg-[rgba(255,192,203,0.15)]
                  hover:shadow-[0_0_15px_rgba(255,192,203,0.6)]
                  rounded-xl
                "
              >
                {link.label}
              </a>
            ))}

            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                goToContact();
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
