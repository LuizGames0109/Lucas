import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="sobre">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <Reveal width="100%" delay={0.2}>
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src="https://picsum.photos/800/1000?grayscale" 
                  alt="Lucas Corretor" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-lg font-medium opacity-80">Lucas</p>
                  <p className="text-3xl font-bold">Especialista Imobiliário</p>
                </div>
              </div>
            </Reveal>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-pulse"></div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Mais que um corretor, <br/>
                <span className="text-brand-600">seu parceiro de negócios.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Com anos de experiência no mercado imobiliário de Curitiba, dedico minha carreira a conectar pessoas a espaços extraordinários. Meu trabalho é pautado na transparência, agilidade e, acima de tudo, na compreensão profunda do que cada cliente busca.
                </p>
                <p>
                  Entendo que comprar ou vender um imóvel é uma das decisões financeiras mais importantes da sua vida. Por isso, ofereço uma assessoria completa, desde a busca pelo imóvel ideal até a entrega das chaves.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-8 mt-10 mb-10">
              <Reveal delay={0.4}>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900">500+</h4>
                  <p className="text-slate-500">Imóveis Visitados</p>
                </div>
              </Reveal>
              <Reveal delay={0.5}>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900">98%</h4>
                  <p className="text-slate-500">Clientes Satisfeitos</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.6}>
              <Button href="https://wa.me/554184232454?text=Olá Lucas, gostaria de uma consultoria." variant="primary" icon>
                Falar Comigo
              </Button>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
