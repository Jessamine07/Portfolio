import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import idImage from "../assets/id2.png";
import { useEffect, useRef, useState } from "react";

export const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            {/* Label */}
            <span
              className={`
                text-secondary-foreground text-sm font-medium tracking-wider uppercase
                transition-all duration-700
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              About Me
            </span>

            {/* Title */}
            <h2
              className={`
                text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground
                transition-all duration-700 delay-150
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              Learning technology,
              <span className="font-serif italic font-normal text-white">
                {" "} one project at a time.
              </span>
            </h2>

            {/* Description */}
            <div
              className={`
                space-y-4 text-muted-foreground
                transition-all duration-700 delay-300
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              <p>
                I’m a third-year IT student with a strong interest in software
                development and technology.
              </p>
              <p>
                I enjoy learning new tools, building small projects, and improving
                my skills through hands-on experience.
              </p>
              <p>
                I’m always eager to grow and explore new opportunities in the tech field.
              </p>
            </div>

            {/* Quote Card */}
            <div
              className={`
                glass rounded-2xl p-6 glow-border
                transition-all duration-700 delay-500
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to design and build experiences people can enjoy."
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — IMAGE */}
          <div
            className={`
              flex justify-center items-center
              transition-all duration-700 delay-300
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
          >
            <div
              className="relative w-full max-w-sm rounded-2xl overflow-hidden"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = ((y - rect.height / 2) / 20) * -1;
                const rotateY = (x - rect.width / 2) / 20;

                e.currentTarget.style.transform = `
                  perspective(800px)
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                  scale(1.05)
                `;
                e.currentTarget.style.transition = "transform 0.1s ease-out";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
                e.currentTarget.style.transition = "transform 0.3s ease-out";
              }}
            >
              <img
                src={idImage}
                alt="ID"
                className="
                  w-full h-full object-cover rounded-2xl
                  shadow-[0_10px_30px_rgba(255,192,203,0.35)]
                "
                style={{
                  objectPosition: "center",
                  clipPath: "inset(3% 10% 1% 10%)",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
