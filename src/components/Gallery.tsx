import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Instagram } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590246814883-57832b001d84?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621517409267-27e163b05a62?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeading 
            title="Recent Work" 
            subtitle="Follow us on Instagram for daily updates."
          />
          <a
            href="https://www.instagram.com/ritualtattooandboutique"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 font-alt uppercase tracking-widest text-sm text-brand-red hover:text-white transition-colors duration-300"
          >
            <Instagram size={20} /> @ritualtattooandboutique
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={src}
                alt={`Tattoo Work ${index + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={32} className="text-white transform scale-50 group-hover:scale-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="https://www.instagram.com/ritualtattooandboutique"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-alt uppercase tracking-widest text-sm text-brand-red hover:text-white transition-colors duration-300"
          >
            <Instagram size={20} /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
