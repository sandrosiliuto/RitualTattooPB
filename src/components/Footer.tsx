import { Instagram, MapPin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Ritual Tattoo" className="h-12 w-auto object-contain" onError={(e) => {
                e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ritual+Tattoo&background=0D0D0D&color=C5A059&size=128&font-size=0.33';
              }} />
              <span className="sr-only">Ritual Tattoo Piercing and Boutique</span>
            </a>
            <p className="text-neutral-500 font-sans text-sm leading-relaxed mb-6">
              Premium custom tattoo, piercing, and boutique studio located in Tenerife. Specializing in unique, high-quality body art in a sterile and welcoming environment.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ritualtattooandboutique"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-brand-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@ritualtattooandboutique.com"
                className="text-neutral-500 hover:text-brand-red transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-brand-red transition-colors"
                aria-label="Location"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-alt uppercase tracking-widest text-sm text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              {["About", "Styles", "Artists", "Gallery", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-neutral-500 hover:text-white transition-colors text-sm font-sans"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Styles */}
          <div>
            <h4 className="font-alt uppercase tracking-widest text-sm text-white mb-6">Styles</h4>
            <ul className="space-y-4">
              {["Black & Grey", "Fine Line", "Traditional", "Japanese", "Minimal", "Custom Designs"].map((style) => (
                <li key={style}>
                  <a 
                    href="#styles"
                    className="text-neutral-500 hover:text-white transition-colors text-sm font-sans"
                  >
                    {style}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-alt uppercase tracking-widest text-sm text-white mb-6">Hours</h4>
            <ul className="space-y-4 text-sm font-sans text-neutral-500">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">11:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">11:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-brand-red">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs font-sans">
            &copy; {currentYear} Ritual Tattoo Piercing and Boutique. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-sans text-neutral-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
