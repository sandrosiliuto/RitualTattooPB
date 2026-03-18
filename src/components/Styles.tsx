import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const styles = [
  {
    name: "Black & Grey",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Fine Line",
    image: "https://images.unsplash.com/photo-1590246814883-57832b001d84?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Traditional",
    image: "https://images.unsplash.com/photo-1621517409267-27e163b05a62?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Body Piercing",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Fine Jewelry",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Boutique Apparel",
    image: "https://images.unsplash.com/photo-1550614000-4b95d415dc14?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Custom Designs",
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop",
  },
];

export function Styles() {
  return (
    <section id="styles" className="py-24 md:py-32 bg-brand-gray">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Styles & Services" 
          subtitle="From custom ink to professional piercings and exclusive apparel."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16">
          {styles.map((style, index) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden aspect-[4/5] cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-auto" : ""
              }`}
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-3xl md:text-4xl text-white mb-2">{style.name}</h3>
                <div className="h-0.5 w-0 bg-brand-red group-hover:w-12 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: styles.length * 0.1 }}
            className="bg-brand-red p-8 flex flex-col justify-center items-center text-center aspect-[4/5] group hover:bg-white transition-colors duration-500"
          >
            <h3 className="font-display text-4xl text-white group-hover:text-black mb-4">Not sure?</h3>
            <p className="font-alt uppercase tracking-widest text-sm text-white/80 group-hover:text-black/80 mb-8">
              Let's discuss your idea
            </p>
            <a
              href="#contact"
              className="inline-block border-2 border-white group-hover:border-black text-white group-hover:text-black px-6 py-3 font-alt uppercase tracking-wider text-sm hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
