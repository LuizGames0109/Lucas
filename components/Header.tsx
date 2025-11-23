import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Imóveis', href: '#imoveis' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 py-4 px-6"
    >
      <nav className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 py-3 flex justify-between items-center">
          
          <a href="#" className="text-xl font-bold tracking-tighter text-slate-900 z-50">
            LUCAS<span className="text-brand-600">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:block">
             <a 
               href="https://wa.me/554184232454"
               className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
             >
               Contato
             </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 md:hidden"
          >
            <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4 border border-slate-100">
              {links.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-800 p-2 border-b border-slate-50 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
               <a 
                 href="https://wa.me/554184232454"
                 className="bg-slate-900 text-white text-center py-3 rounded-full font-bold mt-2"
                 onClick={() => setIsOpen(false)}
               >
                 Falar no WhatsApp
               </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};
