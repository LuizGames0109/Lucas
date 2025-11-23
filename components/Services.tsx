import React from 'react';
import { Home, Key, TrendingUp, Search, ShieldCheck, Banknote } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Avaliação Precisa",
    description: "Análise de mercado detalhada para precificar seu imóvel com inteligência e competitividade.",
    icon: TrendingUp
  },
  {
    title: "Compra Exclusiva",
    description: "Acesso a imóveis 'off-market' e curadoria personalizada baseada no seu perfil de vida.",
    icon: Home
  },
  {
    title: "Venda Estratégica",
    description: "Marketing imobiliário de alta performance para vender seu patrimônio com agilidade.",
    icon: Banknote
  },
  {
    title: "Assessoria Jurídica",
    description: "Segurança total em contratos e documentações, garantindo uma transação sem surpresas.",
    icon: ShieldCheck
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="servicos">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Expertise que <br />
              <span className="text-slate-400">Gera Resultados</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
             <p className="text-slate-600 max-w-md text-lg">
               Não vendo apenas imóveis, ofereço uma experiência de consultoria completa para maximizar seu patrimônio.
             </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1 + 0.2} width="100%">
              <div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-500 hover:shadow-2xl h-full flex flex-col justify-between cursor-default">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-300 group-hover:border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <TrendingUp size={14} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
