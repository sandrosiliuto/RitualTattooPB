import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gray/30 -skew-x-12 translate-x-1/4 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop"
                alt="Tattoo Artist at Work"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-brand-red/50 -z-10"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-10 -left-10 bg-black p-8 border-l-4 border-brand-red shadow-2xl hidden md:block"
            >
              <p className="font-display text-5xl text-white">10+</p>
              <p className="font-alt uppercase tracking-widest text-neutral-400 text-sm mt-2">Years of Experience</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div>
            <SectionHeading 
              title="The Studio" 
              subtitle="Where art meets skin in a professional, sterile environment."
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-neutral-300 font-sans leading-relaxed text-lg"
            >
              <p>
                Located in the heart of El Médano, Tenerife, <strong>Ritual Tattoo Piercing and Boutique</strong> is more than just a tattoo shop. We are a dedicated space for premium body art, professional piercing, and curated alternative fashion.
              </p>
              <p>
                Our specialized artists and piercers work closely with you to ensure the highest quality results in a clean, welcoming, and sterile environment. Explore our boutique for exclusive apparel and fine body jewelry.
              </p>
              
              <ul className="mt-8 space-y-4 font-alt uppercase tracking-wider text-sm">
                {[
                  "Custom Tattoos & Cover-ups",
                  "Professional Body Piercing",
                  "Fine Body Jewelry Selection",
                  "Exclusive Boutique Apparel"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="pt-8">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
                  alt="Founder Signature" 
                  className="h-16 invert opacity-50"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
