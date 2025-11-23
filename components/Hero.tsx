import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <Reveal delay={0.1} width="100%">
             <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 backdrop-blur-md border border-slate-600 text-slate-100 text-sm font-medium mb-6">
                Consultoria Imobiliária Premium
             </span>
          </Reveal>

          <Reveal delay={0.2} width="100%">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              A Chave Para o Seu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Novo Estilo de Vida
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.4} width="100%">
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Encontre exclusividade e conforto. Curadoria de imóveis de alto padrão em Curitiba e região, selecionados para quem não abre mão da excelência.
            </p>
          </Reveal>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
             <Reveal delay={0.6}>
                <Button href="https://wa.me/554184232454?text=Olá Lucas, gostaria de agendar uma visita." variant="white" icon>
                  Falar com Lucas
                </Button>
             </Reveal>
             <Reveal delay={0.7}>
                <Button variant="outline" className="!text-white !border-white hover:!bg-white/10" href="#imoveis">
                  Ver Coleção
                </Button>
             </Reveal>
          </div>
        </div>
      </div>

      {/* Floating Info Cards */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden lg:block absolute bottom-12 right-12 bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 max-w-xs"
      >
        <p className="text-white font-semibold text-lg mb-1">+150 Famílias</p>
        <p className="text-slate-300 text-sm">Realizadas com o lar dos sonhos nos últimos 2 anos.</p>
      </motion.div>
    </section>
  );
};
