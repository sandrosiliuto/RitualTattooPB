import { motion } from "motion/react";
import { ArrowRight, Instagram } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop"
          alt="Tattoo Studio Background"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display tracking-widest text-white drop-shadow-2xl">
            RITUAL <span className="text-brand-red">TATTOO</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl font-alt uppercase tracking-[0.2em] text-neutral-300 mb-12"
        >
          PIERCING & BOUTIQUE – EL MÉDANO, TENERIFE
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="https://wa.me/34633261961"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-alt uppercase tracking-widest text-sm bg-brand-red text-white overflow-hidden w-full sm:w-auto"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative flex items-center gap-2">
              Book Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a
            href="#artists"
            className="group inline-flex items-center justify-center px-8 py-4 font-alt uppercase tracking-widest text-sm border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            View Artists
          </a>

          <a
            href="https://www.instagram.com/ritualtattooandboutique"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-4 border border-white/30 text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 rounded-full"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-alt uppercase tracking-widest text-xs text-neutral-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent"
        />
      </motion.div>
    </section>
  );
}
