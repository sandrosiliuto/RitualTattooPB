import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { MapPin, Mail, Instagram, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <div>
            <SectionHeading 
              title="Location & Booking" 
              subtitle="Ready for your next piece? Reach out via WhatsApp to book your appointment."
            />
            
            <div className="space-y-8 mt-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-brand-gray flex items-center justify-center text-brand-red shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-alt uppercase tracking-widest text-sm text-white mb-1">Location</h4>
                  <p className="text-neutral-400 font-sans">
                    Calle Principal 123<br />
                    38612 El Médano<br />
                    Santa Cruz de Tenerife, Spain
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-brand-gray flex items-center justify-center text-brand-red shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-alt uppercase tracking-widest text-sm text-white mb-1">Email</h4>
                  <a href="mailto:info@ritualtattooandboutique.com" className="text-neutral-400 font-sans hover:text-brand-red transition-colors">
                    info@ritualtattooandboutique.com
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex gap-4"
            >
              <a
                href="https://www.instagram.com/ritualtattooandboutique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-neutral-800 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-neutral-800 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300"
              >
                <MapPin size={20} />
              </a>
            </motion.div>
          </div>

          {/* WhatsApp Booking CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-brand-gray p-8 md:p-16 text-center flex flex-col items-center justify-center min-h-[400px] border border-neutral-800"
          >
            <MessageCircle size={48} className="text-brand-red mb-6" />
            <h3 className="font-display text-4xl text-white mb-6">Book Your Session</h3>
            <p className="text-neutral-400 font-sans mb-10 max-w-md mx-auto leading-relaxed">
              We handle all our bookings directly through WhatsApp to ensure personalized attention for your custom design or piercing.
            </p>
            <a 
              href="https://wa.me/34633261961"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-red text-white font-alt uppercase tracking-widest text-sm px-10 py-5 hover:bg-white hover:text-black transition-colors duration-300"
            >
              <MessageCircle size={20} />
              Book Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
