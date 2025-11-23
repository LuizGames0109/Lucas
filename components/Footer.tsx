import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Lucas Imóveis</h2>
            <p className="text-slate-400">Transformando sonhos em endereços.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10">
              <Linkedin size={20} />
            </a>
            <a href="https://wa.me/554184232454" className="hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Lucas Consultoria Imobiliária. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacidade</a>
            <a href="#" className="hover:text-slate-300">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
