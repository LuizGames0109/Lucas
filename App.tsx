import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Properties } from './components/Properties';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Properties />
        
        {/* CTA Section */}
        <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
              Vamos encontrar seu imóvel ideal?
            </motion.h2>
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
            >
              <Button 
                href="https://wa.me/554184232454?text=Olá Lucas, vamos conversar sobre imóveis?" 
                variant="white"
                className="text-lg px-10 py-5"
                icon
              >
                Iniciar Conversa no WhatsApp
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky Floating WhatsApp Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <a 
          href="https://wa.me/554184232454"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-colors hover:shadow-[#25D366]/40 hover:shadow-2xl"
        >
          <MessageCircle size={28} fill="white" className="text-white" />
        </a>
      </motion.div>
    </div>
  );
}

export default App;
