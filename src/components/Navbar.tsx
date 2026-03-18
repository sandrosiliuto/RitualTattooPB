import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Styles", href: "#styles" },
    { name: "Artists", href: "#artists" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-lg shadow-black/50" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50 relative">
          <img src="/logo.png" alt="Ritual Tattoo" className="h-10 md:h-12 w-auto object-contain" onError={(e) => {
            e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ritual+Tattoo&background=0D0D0D&color=C5A059&size=128&font-size=0.33';
          }} />
          <span className="sr-only">Ritual Tattoo Piercing and Boutique</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-alt uppercase tracking-widest text-sm text-neutral-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://www.instagram.com/ritualtattooandboutique"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/34633261961"
            target="_blank"
            rel="noopener noreferrer"
            className="font-alt uppercase tracking-wider text-sm bg-white text-black px-6 py-2.5 hover:bg-brand-red hover:text-white transition-colors duration-300"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 pt-20"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-4xl tracking-widest text-white hover:text-brand-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-6 mt-8">
              <a
                href="https://www.instagram.com/ritualtattooandboutique"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-red transition-colors"
              >
                <Instagram size={32} />
              </a>
            </div>
            <a
              href="https://wa.me/34633261961"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 font-alt uppercase tracking-wider text-lg bg-brand-red text-white px-10 py-4 hover:bg-white hover:text-black transition-colors duration-300"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
