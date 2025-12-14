import { Github } from "lucide-react";

const experiences = [
  {
    period: "2nd Year",
    role: "HCDC-Grab",
    company: "This project is a website where people can easily order products online. Users can browse items, place orders, and receive confirmation through the website. The system is designed to make ordering fast, simple, and convenient for users.",
    github: "https://github.com/Jessamine07/Hcdc-Grab",
    technologies: ["Html", "Css", "JavaScript"],
    current: true,
  },
  {
    period: "1st Year",
    role: "Pet Adoption Website",
    company: "This project is a pet adoption website that helps people find and adopt pets easily. Users can view available pets, see their details, and contact shelters or owners through the website. The goal is to promote responsible pet adoption and help pets find loving homes.",
    github: "https://github.com/jessamine0704/Pet-Adoption-Website",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    current: false,
  },
  {
    period: "2nd Year",
    role: "Android Studio Coffee Homepage",
    company: "This project is a coffee ordering mobile app made in Android Studio. It includes a login page and a homepage where users can choose and order coffee. The app is designed to make coffee ordering easy and convenient for users.",
    github: "https://github.com/Jessamine07/ipt102_homePage",
    technologies: ["Java"],
    current: true,
  },

];

export const Experience = () => {
  return (
    <section id="experience" className="py-10 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96
        bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects built{" "}
            <span className="font-serif italic font-normal text-white">
              with purpose.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A showcase of projects where concepts became functional designs,
            reflecting my growth, creativity, and technical skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass inline-block w-fit max-w-md p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-muted-foreground">{exp.company}</p>

                    {/* GitHub Link */}
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      View project on GitHub →
                    </a>

                    {/* Technologies */}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
