import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";


// IMPORT YOUR IMAGE
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import image7 from "@/assets/image7.jpg";
import image8 from "@/assets/image8.jpg";
import image9 from "@/assets/image9.jpg";
import image10 from "@/assets/image10.jpg";
import image11 from "@/assets/image11.jpg";
import image12 from "@/assets/image12.jpg";
import image13 from "@/assets/image13.jpg";
import image14 from "@/assets/image14.jpg";
import image15 from "@/assets/image15.jpg";
import image16 from "@/assets/image16.jpg";
import image17 from "@/assets/image17.jpg";
import image18 from "@/assets/image18.jpg";
import image19 from "@/assets/image19.jpg";
import image20 from "@/assets/image20.jpg";
import image21 from "@/assets/image21.jpg";
import image22 from "@/assets/image22.jpg";
import image23 from "@/assets/image23.jpg";
import image24 from "@/assets/image24.jpg";
import image25 from "@/assets/image25.jpg";
import image26 from "@/assets/image26.jpg";
import image27 from "@/assets/image27.jpg";
import image28 from "@/assets/image28.jpg";
import image29 from "@/assets/image29.jpg";
import image30 from "@/assets/image30.jpg";
import image32 from "@/assets/image32.jpg";
import image33 from "@/assets/image33.jpg";
import image34 from "@/assets/image34.jpg";
import image35 from "@/assets/image35.jpg";
import image36 from "@/assets/image36.jpg";
import image37 from "@/assets/image37.jpg";
import image38 from "@/assets/image38.jpg";
import image39 from "@/assets/image39.jpg";
import image40 from "@/assets/image40.jpg";
import image41 from "@/assets/image41.jpg";
import image42 from "@/assets/image42.jpg";
import image43 from "@/assets/image43.jpg";
import image44 from "@/assets/image44.jpg";
import image45 from "@/assets/image45.jpg";
import image46 from "@/assets/image46.jpg";
import image47 from "@/assets/image47.jpg";
import image49 from "@/assets/image49.jpg";
import image50 from "@/assets/image50.jpg";
import image51 from "@/assets/image51.jpg";
import image511 from "@/assets/image511.jpg";
import image52 from "@/assets/image52.jpg";
import image53 from "@/assets/image53.jpg";
import image54 from "@/assets/image54.jpg";
import image55 from "@/assets/image55.jpg";
import image56 from "@/assets/image56.jpg";
import image57 from "@/assets/image57.jpg";
import image58 from "@/assets/image58.jpg";
import image59 from "@/assets/image59.jpg";
import image60 from "@/assets/image60.jpg";
import image61 from "@/assets/image61.jpg";
import image62 from "@/assets/image62.jpg";
import image63 from "@/assets/image63.jpg";
import image64 from "@/assets/image64.jpg";
import image65 from "@/assets/image65.jpg";
import image66 from "@/assets/image66.jpg";
import image67 from "@/assets/image67.jpg";
import image68 from "@/assets/image68.jpg";
import image69 from "@/assets/image69.jpg";
import image70 from "@/assets/image70.jpg";
import image71 from "@/assets/image71.jpg";
import image72 from "@/assets/image72.jpg";
import image73 from "@/assets/image73.jpg";
import image733 from "@/assets/image733.jpg";
import image74 from "@/assets/image74.jpg";
import image75 from "@/assets/image75.jpg";
import image76 from "@/assets/image76.jpg";
import image766 from "@/assets/image766.jpg";
import image77 from "@/assets/image77.jpg";
import image78 from "@/assets/image78.jpg";
import image79 from "@/assets/image79.jpg";
import image80 from "@/assets/image80.jpg";
import image81 from "@/assets/image81.jpg";
import image82 from "@/assets/image82.jpg";
import image83 from "@/assets/image83.jpg";
import image84 from "@/assets/image84.jpg";
import image85 from "@/assets/image85.jpg";
import image86 from "@/assets/image86.jpg";




// PROJECTS LIST — FIXED (exactly 8 images each)
const projects = [
  {
    title: "Cebu Day 1",
    description:
      "My first day in Cebu was exciting and memorable. After arriving at Davao Airport, we finally touched down in Cebu, eager to explore the city. Our first stop was the Mactan Shrine, where I appreciated the rich history and culture of the area.We then had a delicious lunch at Somac Korean Buffet, recharging for the afternoon. Later, we visited WorldTech Information Solution INC., our first company stop, which gave me a glimpse of the professional world and inspired me as a student.The day ended with checking in at Bai Hotel, enjoying the night view, and having some free time to reflect on the day’s experiences. It was a fulfilling start to our Cebu journey. (Please click each photos for a better view)",
    images: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
    ],
    imageTitles: [
      "Arrived at Davao Airport",
      "Arrived at Davao Airport",
      "Arrived at Davao Airport",
      "Touchdown Cebu",
      "Mactan Shrine Visit",
      "Mactan Shrine Visit",
      "Mactan Shrine Visit",
      "Lunch Buffet at Somac Korean Buffet",
      "Lunch Buffet at Somac Korean Buffet",
      "First Company Visit: WorldTech Information Solution INC.",
      "First Company Visit: WorldTech Information Solution INC.",
      "First Company Visit: WorldTech Information Solution INC.",
      "First Company Visit: WorldTech Information Solution INC.",
      "Check-in at Bai Hotel Cebu",
      "Night View at Bai Hotel Cebu",
      "Check-in at Bai Hotel Cebu",
      "Free time at Bai",
      "End of Day",
    ],
  },
  {
    title: "Cebu Day 2",
    description:
      "Day 2 started with a beautiful morning view at Bai Hotel Cebu, followed by my first breakfast at the hotel. There were many food options to choose from, and I enjoyed my breakfast before preparing for the day’s activities.After breakfast, we went to Cebu Institute of Technology – University (CIT-U) where we met the CodeChum CPO. We had a campus tour and took several group pictures around the university, which made the experience more memorable.We then had lunch at Buffet 101, where we enjoyed a variety of delicious food. In the afternoon, we visited Rivan IT Cebu for our third company visit and participated in a small activity during the visit. We also went to Santo Niño: Hope of the Pilgrim Church, which was a peaceful and meaningful experience. The day ended with a relaxing swim at the pool in Bai Hotel Cebu.",
    images: [
      image18,
      image19,
      image20,
      image21,
      image22,
      image23,
      image24,
      image25,
      image26,
      image27,
      image28,
      image29,
      image30,
      image32,
      image33,
      image34,
      image35,
      image36,
      image37,
      image38,
    ],
    imageTitles: [
      "Morning View at Bai Hotel Cebu",
      "First Breakfast at Bai Hotel Cebu",
      "Has a lot of food option to eat :)",
      "My Breakfast Food",
      "At Cebu Institute of Technology - University (CIT-U)",
      "With Codechum CPO",
      "Campus Tour",
      "Campus Tour",
      "Group picture with Codechum CPO",
      "Group picture at Campus",
      "Group picture at Campus",
      "Group picture at Campus",
      "Lunch Buffet at Buffet 101",
      "Lunch Buffet at Buffet 101",
      "Third Company Visit: Rivan IT Cebu",
      "Third Company Visit: Rivan IT Cebu",
      "Little activity during the visit",
      "At Santo Nino: Hope of the Pilgrim Church",
      "At Santo Nino: Hope of the Pilgrim Church",
      "At Santo Nino: Hope of the Pilgrim Church",
      "Swimming pool at Bai Hotel Cebu",
    ],
  },
  {
    title: "Cebu Day 3",
    description:
      "Day 3 started with getting ready for our next company visit. On the way to Mata Technologies, Inc., we were excited to learn more about technology and innovation. During our fourth company visit, Sir Kemuel Andre Tantuan guided us and introduced their systems. We also had the chance to try their VR technology and games, which was a fun and educational experience.After the visit, we had lunch at Vikings and enjoyed a variety of food. Later that day, we traveled to Bohol and safely arrived in Tagbilaran. We checked in at Panglao Vista Suites and enjoyed the beautiful view from the hotel.In the evening, we spent time relaxing at the hotel pool before heading to Alona Beach. We enjoyed the fresh air, the sound of the waves, and the beautiful view, making Day 3 both productive and relaxing.",
    images: [
      image39,
      image40,
      image41,
      image42,
      image43,
      image44,
      image45,
      image46,
      image47,
      image49,
      image50,
      image51,
      image511,
      image52,
      image53,
      image54,
      image55,
      image56,
      image57,
      image58,
      image59,
      image60,
      image61,
    ],
    imageTitles: [
      "Get ready for Day 4 Company Visit",
      "On the way to Mata Technologies, INC.",
      "Fourth Company Visit: Mata Technologies, INC.",
      "Sir Kemuel Andre Tantuan as our Facilitator",
      "Trying their VR Technology and games",
      "Introducing their systems",
      "Mata Tour",
      "Lunch at Vikings",
      "Lunch at Vikings",
      "On the way to Bohol",
      "Touchdown Bohol",
      "Touchdown Bohol",
      "Tagbilaran",
      "BOHOL",
      "Check-in at Panglao Vista Suites",
      "Check-in at Panglao Vista Suites",
      "View from Panglao Vista Suites",
      "Spending time at the Hotel pool",
      "On the way to Alona Beach",
      "On the way to Alona Beach",
      "Alona Beach",
      "Alona Beach",
      "Alona Beach",
      "Alona Beach",
    ],
  },
  {
    title: "Bohol Day 4",
    description:
      "Day 4 began with a peaceful morning view at Vista Suites Panglao and our first breakfast at the hotel. After eating, we headed out for a full day of sightseeing around Bohol.We visited Tagbilaran 911, followed by the famous Chocolate Hills, where we enjoyed the beautiful scenery and took many photos. We also went to the Bohol Tarsier Conservation Area, saw the tarsier up close, and took a group picture to remember the experience.For lunch, we enjoyed a fiesta buffet at a floating restaurant while cruising along the Loboc River. The relaxing river view made the meal even more special. We also visited the Mirror of the World and the historic Baclayon Church, which allowed us to appreciate culture and history. The day ended as we traveled off to Davao, bringing Day 4 to a meaningful close.",
    images: [
      image62,
      image63,
      image64,
      image65,
      image66,
      image67,
      image68,
      image69,
      image70,
      image71,
      image72,
      image73,
      image733,
      image74,
      image75,
      image76,
      image766,
      image77,
      image78,
      image79,
      image80,
      image81,
      image82,
      image83,
      image84,
      image85,
      image86,
    ],
    imageTitles: [
      "Morning View at Vista Suites Panglao",
      "First Breakfast at Vista Suites Panglao",
      "On the way to T.A.R.S.I.E.R. 117",
      "Tagbilaran 911",
      "Tagbilaran 911",
      "Tagbilaran 911",
      "Chocolate Hills",
      "Chocolate Hills",
      "Chocolate Hills",
      "Chocolate Hills",
      "Bohol Tarsier Conservation Area",
      "Bohol Tarsier Conservation Area",
      "Group pic at Bohol Tarsier Conservation Area",
      "Tarsier",
      "Lunch Fiesta Buffet at Floating Restaurant while cruising Loboc River",
      "Lunch Fiesta Buffet at Floating Restaurant while cruising Loboc River",
      "View of Loboc River",
      "View of Loboc River",
      "Loboc River",
      "Mirror of the world",
      "Mirror of the world",
      "Mirror of the world",
      "Mirror of the world",
      "Baclayon Church",
      "Baclayon Church",
      "Baclayon Church",
      "Off to Davao",
      "Off to Davao",
    ],
  },
];

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  

  // ✅ ADDED: track active image index per project
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const [expandedDesc, setExpandedDesc] = useState({});


  // ESC key closes viewer
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="py-3 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Photos
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My Gallery{" "}
            <span className="font-serif italic font-normal text-white">
              in CebuBohol Tour.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my travel memories captured during Cebu & Bohol trip.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 animate-fade-in relative"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2 text-secondary-foreground">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
  {expandedDesc[idx]
    ? project.description
    : `${project.description.slice(0, 160)}...`}
</p>

<button
  onClick={() =>
    setExpandedDesc((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }
  className="text-xs text-pink-400 hover:text-pink-300 transition-colors mb-4"
>
  {expandedDesc[idx] ? "Hide description" : "View description"}
</button>


              {/* Scroll Controls */}
              <div className="relative">
                {/* Left Button */}
                <button
                  aria-label="previous"
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-surface rounded-full p-2 shadow-lg z-10"
                  onClick={() => {
                    const reel = document.getElementById(`reel-${idx}`);
                    if (!reel) return;
                    const item = reel.querySelector("[data-snap]");
                    const step =
                      item
                        ? item.clientWidth +
                          parseFloat(getComputedStyle(item).marginRight || 0)
                        : reel.clientWidth;
                    reel.scrollBy({ left: -step, behavior: "smooth" });
                  }}
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>

                {/* Right Button */}
                <button
                  aria-label="next"
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-surface rounded-full p-2 shadow-lg z-10"
                  onClick={() => {
                    const reel = document.getElementById(`reel-${idx}`);
                    if (!reel) return;
                    const item = reel.querySelector("[data-snap]");
                    const step =
                      item
                        ? item.clientWidth +
                          parseFloat(getComputedStyle(item).marginRight || 0)
                        : reel.clientWidth;
                    reel.scrollBy({ left: step, behavior: "smooth" });
                  }}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                {/* Image Reel */}
                <div
                  id={`reel-${idx}`}
                  className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
                  onScroll={(e) => {
                    const reel = e.currentTarget;
                    const item = reel.querySelector("[data-snap]");
                    if (!item) return;

                    const index = Math.round(
                      reel.scrollLeft / item.clientWidth
                    );
                    setActiveImageIndex((prev) => ({
                      ...prev,
                      [idx]: index,
                    }));
                  }}
                >
                  <div className="flex gap-6 w-max py-2 px-10">
                    {project.images.map((img, i) => (
                      <div
                        key={i}
                        className="rounded-2xl transition-all duration-300 hover:shadow-[0_0_55px_rgba(255,192,203,0.95)]"
                      >
                        <img
                          src={img}
                          alt=""
                          data-snap
                          onClick={() => {
                            setSelectedImage(img);
                            setActiveImageIndex((prev) => ({
                              ...prev,
                              [idx]: i,
                            }));
                          }}
                          className="
                            w-96 h-64
                            object-cover 
                            rounded-xl 
                            shadow-[0_0_35px_rgba(255,192,203,0.45)]
                            snap-center
                            cursor-pointer
                            transition-transform duration-300
                            hover:scale-105
                          "
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ✅ ADDED: Dynamic image title */}
                <p className="mt-4 text-center text-sm text-muted-foreground transition-all duration-300">
                {project.imageTitles?.[activeImageIndex[idx] ?? 0] ?? project.title}
                </p>
              </div>
            </div>
          ))}
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
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};
