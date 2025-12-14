import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

// ✅ ONLY ONE CERTIFICATE FOR NOW
import cert11 from "../assets/cert11.png";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.png";

const testimonials = [
  {
    quote: "...",
    author: "Sarah Chen",
    role: "...",
    avatar: "...",
    certificate: cert11,

    // ✅ REQUIRED
    certificateTitle: "Certificate of Completion in Educational Tour",
    certificateYear: "2025",
  },
  {
    quote: "...",
    author: "Sarah Chen",
    role: "...",
    avatar: "...",
    certificate: cert1,

    // ✅ REQUIRED
    certificateTitle: "JavaScript Tutorial",
    certificateYear: "2023",
  },
  {
    quote: "...",
    author: "...",
    role: "...",
    avatar: "...",
    certificate: cert2,

    // ✅ REQUIRED
    certificateTitle: "Certificate of Participation in DACUN",
    certificateYear: "2025",
  },
  {
    quote: "...",
    author: "...",
    role: "...",
    avatar: "...",
    certificate: cert3,

    // ✅ REQUIRED
    certificateTitle: "Certificate of Completion in IM Codechum",
    certificateYear: "2025",
  },
  {
    quote: "...",
    author: "...",
    role: "...",
    avatar: "...",
    certificate: cert4,

    // ✅ REQUIRED
    certificateTitle: "Certificate of Appreciation as ITS Officer",
    certificateYear: "2025",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-9 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2
        w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Certificates
          </span>

          <h2 className="text-4xl md:text-4xl font-bold mt-4 mb-1 animate-fade-in animation-delay-100 text-secondary-foreground">
          Achievements that mark{" "}
            <span className="font-serif italic font-normal text-white">
            my journey.
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="flex justify-center">
        <div className="relative -mt-10">
            {/* Card */}
            <div className="glass px-4 py-4 rounded-3xl glow-border animate-fade-in animation-delay-200 mx-auto inline-block">
              {/* Quote Icon (DESIGN KEPT) */}
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* ✅ CERTIFICATE IMAGE */}
              <div className="pt-6">
                <img
                  src={testimonials[activeIdx].certificate}
                  alt="Certificate"
                  className="
                    w-full max-h-[300px]
                    object-contain
                    rounded-xl
                    shadow-[0_0_40px_rgba(255,192,203,0.35)]
                  "
                />
              </div>
              <div className="mt-4 text-center">
  <div className="text-sm font-semibold text-secondary-foreground">
    {testimonials[activeIdx].certificateTitle}
  </div>
  <div className="text-xs text-muted-foreground">
    {testimonials[activeIdx].certificateYear}
  </div>
</div>


            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
