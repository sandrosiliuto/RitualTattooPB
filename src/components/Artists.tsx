import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Instagram } from "lucide-react";

const artists = [
  {
    name: "Artist 01",
    specialty: "Tattoo Artist",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1974&auto=format&fit=crop",
    instagram: "https://www.instagram.com/ritualtattooandboutique",
  },
  {
    name: "Artist 02",
    specialty: "Professional Piercer",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1974&auto=format&fit=crop",
    instagram: "https://www.instagram.com/ritualtattooandboutique",
  },
  {
    name: "Artist 03",
    specialty: "Tattoo Artist",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1974&auto=format&fit=crop",
    instagram: "https://www.instagram.com/ritualtattooandboutique",
  },
];

export function Artists() {
  return (
    <section id="artists" className="py-24 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Resident Artists" 
          subtitle="Meet the talented individuals who will bring your vision to life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-black"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-display text-4xl text-white mb-2">{artist.name}</h3>
                <p className="font-alt uppercase tracking-widest text-sm text-brand-red mb-6">
                  {artist.specialty}
                </p>
                <a
                  href="#gallery"
                  className="inline-block border-b border-neutral-600 pb-1 font-alt uppercase tracking-wider text-sm text-neutral-400 hover:text-white hover:border-white transition-colors duration-300"
                >
                  View Portfolio
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
