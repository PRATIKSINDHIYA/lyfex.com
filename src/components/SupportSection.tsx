import { Palette, FileText, Globe } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const supportItems = [
  {
    title: "Create a Logo",
    description: "Need a visual identity? Let's figure it out together.",
    icon: Palette,
    budget: "₹5k - ₹20k",
<<<<<<< HEAD
    timeline: "2-3 weeks",
  },
  {
    title: "Write a Thesis",
    description: "Need a visual identity? Let's figure it out together.",
    icon: FileText,
    budget: "₹5k - ₹20k",
    timeline: "2-3 weeks",
  },
  {
    title: "Create a Webpage",
    description: "Need a visual identity? Let's figure it out together.",
    icon: Globe,
    budget: "₹5k - ₹20k",
    timeline: "2-3 weeks",
=======
    timeline: "2–3 weeks",
  },
  {
    title: "Write a Thesis",
    description: "Structured writing with clarity & originality.",
    icon: FileText,
    budget: "₹5k - ₹20k",
    timeline: "2–3 weeks",
  },
  {
    title: "Create a Webpage",
    description: "Simple, fast & modern web presence.",
    icon: Globe,
    budget: "₹5k - ₹20k",
    timeline: "2–3 weeks",
  },
  {
    title: "UI Review",
    description: "Get expert feedback on your product design.",
    icon: Palette,
    budget: "₹3k - ₹10k",
    timeline: "1 week",
>>>>>>> 449b9e7 (sa)
  },
  {
    title: "UI Review",
    description: "Get expert feedback on your product design.",
    icon: Palette,
    budget: "₹3k - ₹10k",
    timeline: "1 week",
  },
];

export default function SupportSection() {
  return (
<<<<<<< HEAD
    <section className="py-12 sm:py-20 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#2A1E14] border border-orange/30 text-orange font-semibold text-sm">
              📍 SUPPORT 🤝
            </span>

            <p className="text-foreground/80 mt-4 text-lg">
              Get Help, Give Help
            </p>
          </div>

          <button className="btn-primary self-start hidden sm:inline-flex">
=======
    <section className="py-24 bg-[#070B24] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <span className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#2A1E14] border border-orange-400/30 text-orange-400 font-semibold">
              📍 SUPPORT 🤝
            </span>

            <p className="text-white/70 mt-6 text-lg">
              Get help, give help
            </p>
          </div>

          <button className="px-7 py-2.5 rounded-full bg-orange-500 text-black font-medium hover:bg-orange-400 transition">
>>>>>>> 449b9e7 (sa)
            View all
          </button>
        </div>

        {/* SLIDER */}
        <Carousel opts={{ align: "start", loop: true }}>
<<<<<<< HEAD
          <CarouselContent className="gap-6 sm:gap-8">
            {supportItems.map((item, i) => (
              <CarouselItem
                key={i}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                {/* CARD (RESPONSIVE DESIGN) */}
                <div
                  className="
                    h-[280px] sm:h-[320px]
                    rounded-2xl sm:rounded-[48px]
                    p-6 sm:p-8
                    bg-gradient-to-b from-[#9B5E33] via-[#A8683A] to-[#C87A2F]
                    flex flex-col justify-between
                    card card-hover
                  "
                >
                  {/* ICON */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#D8754A] flex items-center justify-center">
                    <item.icon size={24} className="text-white" />
=======
          <CarouselContent>
            {supportItems.map((item, i) => (
              <CarouselItem
                key={i}
                className="lg:basis-1/3 md:basis-1/2 px-6"
              >
                {/* CARD */}
                <div
                  className="
                    h-300px]
                    rounded-[32px]
                    p-6
                    bg-gradient-to-b from-[#9B5E33] via-[#A8683A] to-[#C87A2F]
                    flex flex-col justify-between
                  "
                >
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-xl bg-[#D8754A] flex items-center justify-center">
                    <item.icon size={26} className="text-white" />
>>>>>>> 449b9e7 (sa)
                  </div>

                  {/* TEXT */}
                  <div>
<<<<<<< HEAD
                    <h3 className="text-white text-lg sm:text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-2">
=======
                    <h3 className="text-white text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-2 leading-relaxed">
>>>>>>> 449b9e7 (sa)
                      {item.description}
                    </p>
                  </div>

                  {/* META */}
<<<<<<< HEAD
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span>Budget</span>
                    <span className="text-yellow-300">{item.budget}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span>Timeline</span>
                    <span>{item.timeline}</span>
=======
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-white/80">
                      <span>Budget</span>
                      <span className="text-yellow-300 font-medium">
                        {item.budget}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-white/80">
                      <span>Timeline</span>
                      <span>{item.timeline}</span>
                    </div>
>>>>>>> 449b9e7 (sa)
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

<<<<<<< HEAD
          {/* ARROWS */}
          <CarouselPrevious className="-left-6 sm:-left-10 bg-orange text-black hover:opacity-90" />
          <CarouselNext className="-right-6 sm:-right-10 bg-orange text-black hover:opacity-90" />
=======
          <CarouselPrevious className="-left-8 bg-orange-500 text-black hover:bg-orange-400" />
          <CarouselNext className="-right-8 bg-orange-500 text-black hover:bg-orange-400" />
>>>>>>> 449b9e7 (sa)
        </Carousel>
      </div>
    </section>
  );
}
