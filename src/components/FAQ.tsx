import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need an appointment?",
    answer: "We highly recommend booking an appointment to guarantee your spot, especially for larger custom pieces. However, we do accept walk-ins based on artist availability.",
  },
  {
    question: "Do I need an appointment for a piercing?",
    answer: "While we recommend booking ahead for specific jewelry requests or complex piercings, we gladly accept walk-ins for standard piercings based on our piercer's availability.",
  },
  {
    question: "What kind of jewelry do you use?",
    answer: "We only use implant-grade titanium and solid gold for initial piercings to ensure the best healing process and minimize allergic reactions. You can browse our full collection in our boutique.",
  },
  {
    question: "Can I bring my own design?",
    answer: "Absolutely! We encourage you to bring reference images or your own designs. Our artists will work with you to refine them and ensure they translate well into a tattoo.",
  },
  {
    question: "What is the minimum price?",
    answer: "Our shop minimum is €80. This covers the cost of setup, sterilization, and the artist's time. Prices vary based on the size, detail, and placement of the tattoo.",
  },
  {
    question: "How should I prepare for my tattoo?",
    answer: "Get a good night's sleep, eat a solid meal before your appointment, and stay hydrated. Avoid alcohol and blood-thinning medications for 24 hours prior. Wear comfortable clothing that allows easy access to the area being tattooed.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-brand-gray">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Everything you need to know before getting inked."
          centered
        />

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-neutral-800 bg-brand-dark overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-inset"
              >
                <span className="font-display text-2xl text-white">{faq.question}</span>
                <span className="text-brand-red ml-4 flex-shrink-0">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-neutral-400 font-sans leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
