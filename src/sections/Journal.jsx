import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// SAMPLE IMAGES (replace or reuse later)
import journal1 from "@/assets/journal1.jpg";
import journal2 from "@/assets/journal2.jpg";
import journal3 from "@/assets/journal3.jpg";
import journal4 from "@/assets/journal4.jpg";
import journal5 from "@/assets/journal5.jpg";
import journal6 from "@/assets/journal6.jpg";
import journal7 from "@/assets/journal7.jpg";



export const Journal = () => {
  const images = [journal1,journal2,journal3,journal4,journal5,journal6,journal7];
  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="journal" className="py-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Journal
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My Learnings{" "}
            <span className="font-serif italic font-normal text-white">
              in Cebu & Bohol.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A personal reflection of my educational tour, experiences, and memories.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT — DESCRIPTION */}
          <div className="space-y-6 -mt-25 animate-fade-in animation-delay-300">
            <h3 className="text-2xl font-semibold text-secondary-foreground">
              Educational Tour Journal
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              This journal documents my Cebu–Bohol educational tour where I explored
              universities, IT companies, cultural landmarks, and unforgettable
              travel moments. Each photo represents learning, growth, and memories
              I will carry forward in my journey as an IT student.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              From company visits and campus tours to scenic destinations, this
              experience helped shape my perspective on technology, teamwork,
              and real-world applications.
            </p>
          </div>

          {/* RIGHT — IMAGE CARD */}
          <div className="flex justify-center -mt-16 animate-fade-in animation-delay-500">

          <div className="relative glass rounded-3xl p-3 w-fit">

              {/* Image */}
              <img
  src={images[index]}
  alt="Journal"
  onClick={() => setSelectedImage(images[index])}
  className="
   w-[380px] h-[430px]
    object-contain
    rounded-2xl
    shadow-[0_0_45px_rgba(255,192,203,0.45)]
    cursor-pointer
    transition-transform duration-300
    hover:scale-105
  "
/>

<p className="mt-3 text-center text-xs text-muted-foreground animate-fade-in animation-delay-700">
  Click the image for full view
</p>


              {/* Controls */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-surface rounded-full p-2 shadow-lg"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-surface rounded-full p-2 shadow-lg"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Fullscreen Image Viewer */}
{selectedImage && (
  <div
    className="
      fixed inset-0 z-[999]
      bg-black/90
      backdrop-blur-md
      flex items-center justify-center
      animate-fade-in
    "
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      alt="Full Journal"
      className="max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-2xl"
    />
  </div>
)}

    </section>
  );
};
