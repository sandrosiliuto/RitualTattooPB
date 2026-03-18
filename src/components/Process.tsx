import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We discuss your ideas, placement, and sizing. Bring references if you have them, or let us design something from scratch.",
  },
  {
    number: "02",
    title: "Design",
    description: "Your artist will create a custom design based on your consultation. We'll refine it until it's exactly what you want.",
  },
  {
    number: "03",
    title: "Tattoo Session",
    description: "The main event. We ensure a sterile, comfortable environment while your artist brings the design to life on your skin.",
  },
  {
    number: "04",
    title: "Healing",
    description: "We provide detailed aftercare instructions and premium products to ensure your new tattoo heals perfectly.",
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-800 -z-10 hidden lg:block"></div>
      
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="How It Works" 
          subtitle="Our process from concept to healed tattoo."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-brand-gray p-8 border-t-4 border-brand-red group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-10 left-8 font-display text-7xl text-brand-dark group-hover:text-brand-red transition-colors duration-500 opacity-50">
                {step.number}
              </div>
              
              <h3 className="font-display text-3xl text-white mt-4 mb-4 relative z-10">{step.title}</h3>
              <p className="text-neutral-400 font-sans leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
