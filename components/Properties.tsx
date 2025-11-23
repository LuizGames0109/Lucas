import React from 'react';
import { BedDouble, Bath, Maximize, MapPin } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { Property } from '../types';

const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Mansão Batel Soho",
    price: "R$ 4.500.000",
    location: "Batel, Curitiba",
    image: "https://picsum.photos/800/600?random=1",
    specs: { beds: 4, baths: 5, sqm: 450 }
  },
  {
    id: 2,
    title: "Penthouse Ecoville",
    price: "R$ 3.200.000",
    location: "Ecoville, Curitiba",
    image: "https://picsum.photos/800/600?random=2",
    specs: { beds: 3, baths: 4, sqm: 280 }
  },
  {
    id: 3,
    title: "Casa Condomínio Água Verde",
    price: "R$ 2.800.000",
    location: "Água Verde, Curitiba",
    image: "https://picsum.photos/800/600?random=3",
    specs: { beds: 4, baths: 4, sqm: 320 }
  }
];

export const Properties: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="imoveis">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Acervo Exclusivo</h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
             <p className="text-slate-500 max-w-2xl mx-auto">
               Uma seleção criteriosa dos melhores imóveis disponíveis no mercado. 
               Oportunidades únicas de viver bem.
             </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <Reveal key={property.id} delay={index * 0.2}>
              <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                    Exclusivo
                  </div>
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{property.title}</h3>
                      <div className="flex items-center text-slate-500 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {property.location}
                      </div>
                    </div>
                    <span className="text-lg font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                      {property.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-4 border-t border-slate-100 text-slate-600">
                    <div className="flex items-center gap-2">
                      <BedDouble size={18} />
                      <span className="text-sm font-medium">{property.specs.beds} Quartos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={18} />
                      <span className="text-sm font-medium">{property.specs.baths} Banheiros</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize size={18} />
                      <span className="text-sm font-medium">{property.specs.sqm}m²</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button 
                      href={`https://wa.me/554184232454?text=Olá, tenho interesse no imóvel: ${property.title}`} 
                      variant="outline" 
                      className="w-full !py-3"
                    >
                      Agendar Visita
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Reveal>
            <Button href="https://wa.me/554184232454?text=Gostaria de ver o catálogo completo." icon>
              Ver Catálogo Completo
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
