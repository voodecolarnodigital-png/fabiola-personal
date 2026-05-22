import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Check, Dumbbell, Calendar, Clock, Activity, Home, ChevronDown, ChevronUp, Star, Menu, X, ChevronLeft, ChevronRight, Zap, PlayCircle, ListTodo, Headset, Users, BicepsFlexed, Scale, RefreshCw, Waves, ShieldCheck, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-50">
      <div className="bg-gold text-white text-center text-sm font-semibold py-2 px-4">
        VAGAS ABERTAS | Queima Turbo Max 2.0 - Recupere sua energia na Menopausa
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 px-4 md:px-8 py-6 max-w-7xl mx-auto relative">
        <span className="text-2xl md:text-3xl font-serif italic text-white tracking-widest drop-shadow-md whitespace-nowrap">
          Queima Turbo Max 2.0
        </span>
        
        {/* Menu (Visible on both mobile and desktop with responsive adjustments) */}
        <div className="flex gap-3 md:gap-8 items-center bg-glass px-6 md:px-8 py-3 rounded-full shadow-lg overflow-x-auto max-w-full no-scrollbar justify-center">
          <a href="#metodologia" onClick={(e) => { e.preventDefault(); document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-black-text text-[11px] md:text-base font-medium hover:text-gold-dark transition whitespace-nowrap uppercase tracking-wider">Metodologia</a>
          <a href="#treinos" onClick={(e) => { e.preventDefault(); document.getElementById('treinos')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-black-text text-[11px] md:text-base font-medium hover:text-gold-dark transition whitespace-nowrap uppercase tracking-wider">Treinos</a>
          <a href="#bonus" onClick={(e) => { e.preventDefault(); document.getElementById('bonus')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-black-text text-[11px] md:text-base font-medium hover:text-gold-dark transition whitespace-nowrap uppercase tracking-wider">Aulas Bônus</a>
          <a href="#fabi" onClick={(e) => { e.preventDefault(); document.getElementById('fabi')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-black-text text-[11px] md:text-base font-medium hover:text-gold-dark transition whitespace-nowrap uppercase tracking-wider">A Fabi</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center pt-32 pb-32 md:pb-40">
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/Video pagina hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black-text/70" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto flex flex-col items-center w-full">
        <h1 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] mb-6 leading-tight w-full">
          {/* Mobile version */}
          <span className="block md:hidden">Transforme seu corpo na menopausa com um</span>
          <span className="block md:hidden">método que realmente funciona</span>
          
          {/* Desktop version */}
          <span className="hidden md:block">Transforme seu corpo na menopausa</span>
          <span className="hidden md:block">com um método que realmente funciona</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl px-4">
          Treinos simples, rápidos e pensados para o seu corpo nessa fase.
        </p>
        
        <a href="https://pay.kiwify.com.br/a1AR20y" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-gold hover:bg-gold-dark text-[#2c1e16] px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(194,162,93,0.6)] hover:shadow-[0_0_35px_rgba(194,162,93,0.9)] hover:scale-105">
          Quero Transformar meu corpo
        </a>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20 py-4 overflow-hidden block">
        <div className="flex w-[200%] animate-marquee-hero">
          <div className="flex-1 flex justify-around items-center text-white/90">
            <span className="font-serif text-lg md:text-2xl px-8 whitespace-nowrap">Método criado na prática</span>
            <span className="text-gold">•</span>
            <span className="font-serif text-lg md:text-2xl px-8 whitespace-nowrap">Feito por quem vive isso</span>
            <span className="text-gold">•</span>
            <span className="font-serif text-lg md:text-2xl px-8 whitespace-nowrap">Pensado para o seu corpo</span>
            <span className="text-gold">•</span>
            <span className="font-serif text-lg md:text-2xl px-8 whitespace-nowrap">Pra quem já tentou de tudo</span>
            <span className="text-gold">•</span>
          </div>
          <div className="flex-1 flex justify-around items-center text-white/90">
            <span className="font-serif text-lg md:text-2xl px-8 whitespace-nowrap">Método criado na prática</span>
            <span className="text-gold">•</span>
            <span className="font-serif text-lg md:text-2xl px-8 whitespace-nowrap">Feito por quem vive isso</span>
            <span className="text-gold">•</span>
            <span className="font-serif text-lg md:text-2xl px-8 whitespace-nowrap">Pensado para o seu corpo</span>
            <span className="text-gold">•</span>
            <span className="font-serif text-lg md:text-2xl px-8 whitespace-nowrap">Pra quem já tentou de tudo</span>
            <span className="text-gold">•</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemAwareness() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className="relative order-2 md:order-1 mt-8 md:mt-0 max-w-sm mx-auto md:ml-auto md:mr-0">
        <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] w-full">
          <motion.img 
            src="/pronto.JPG" 
            alt="Desafio com sorriso no rosto: Fabi sorrindo enquanto levanta peso na academia" 
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
            initial={{ scale: 1.25 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </div>
        <div className="absolute -bottom-4 md:-bottom-6 right-0 md:-right-6 bg-white/95 backdrop-blur-md border border-surface-grey/30 p-5 rounded-2xl shadow-lg w-[85%] max-w-[260px] z-10">
          <p className="font-serif italic text-mute-text text-sm md:text-base text-center leading-snug">
            "A constância é o que separa o desejo do resultado."
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center order-1 md:order-2">
        <span className="text-gold font-bold tracking-widest text-xs uppercase mb-3 md:mb-4">Você não está sozinha</span>
        <h2 className="font-serif text-3xl md:text-4xl text-black-text leading-tight mb-4 md:mb-6">
          Se você sente que nunca consegue manter uma rotina...
        </h2>
        <p className="text-mute-text text-base md:text-lg mb-5 leading-relaxed">
          A correria do dia a dia, a falta de direção clara e a pressão estética muitas vezes nos paralisam. O problema não é você, é o método rígido que tentaram te impor.
        </p>
        <p className="text-black-text font-bold italic text-base md:text-lg opacity-90">
          Aqui, focamos na "constância possível".
        </p>
      </div>
    </section>
  );
}

function MethodFeatures() {
  return (
    <section id="metodologia" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-black-text mb-4">
          Um método pensado pra sua vida real
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
      </div>

      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div 
          className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-surface-grey flex flex-col items-start gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <Clock className="text-gold" size={32} strokeWidth={2} />
          <div>
            <h3 className="font-serif text-xl text-black-text mb-3">Treinos Curtos</h3>
            <p className="text-mute-text text-sm leading-relaxed">
              Sessões otimizadas que cabem na sua agenda, sem perder a eficiência.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-surface-grey flex flex-col items-start gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <Dumbbell className="text-gold" size={32} strokeWidth={2} />
          <div>
            <h3 className="font-serif text-xl text-black-text mb-3">Foco em Definição</h3>
            <p className="text-mute-text text-sm leading-relaxed">
              Protocolos estratégicos para queima de gordura e tonificação muscular.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-surface-grey flex flex-col items-start gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <Calendar className="text-gold" size={32} strokeWidth={2} />
          <div>
            <h3 className="font-serif text-xl text-black-text mb-3">Rotina Sustentável</h3>
            <p className="text-mute-text text-sm leading-relaxed">
              Chega de efeito sanfona. Construa hábitos que você realmente consegue manter.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-surface-grey flex flex-col items-start gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <Zap className="text-gold" size={32} strokeWidth={2} />
          <div>
            <h3 className="font-serif text-xl text-black-text mb-3">Energia Vital</h3>
            <p className="text-mute-text text-sm leading-relaxed">
              Melhore sua disposição e recupere sua autoestima logo nas primeiras semanas.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ImageGallery() {
  const testimonials = [
    {
      beforeSrc: "/antes 1.png",
      afterSrc: "/Depois 1.png",
      caption: "A menopausa tinha travado meu corpo e agora mudei por completo. O Turbo Max foi minha salvação.",
      author: "Vanessa G."
    },
    {
      beforeSrc: "/antes 2.png",
      afterSrc: "/depois 2.png",
      caption: "Finalmente um método que funciona pro meu corpo e pra minha rotina real.",
      author: "Cláudia M."
    },
    {
      beforeSrc: "/antes 3.png",
      afterSrc: "/depois 3.png",
      caption: "Minha barriga diminuiu muito e eu voltei a ter energia de sobra!",
      author: "Solange"
    },
    {
      beforeSrc: "/Antes 4.png",
      afterSrc: "/Depois 4.png",
      caption: "Fazer parte do Queima Turbo Max me devolveu a autoestima e a autoconfiança.",
      author: "Marta S."
    },
    {
      beforeSrc: "/antes 5.png",
      afterSrc: "/Depois 5.png",
      caption: "Resultados que eu nunca tinha conseguido antes, nem com horas de academia.",
      author: "Rita"
    },
    {
      beforeSrc: "/antes 6.png",
      afterSrc: "/depois 6.png",
      caption: "Treinos simples e rápidos que transformam de verdade o corpo da mulher.",
      author: "Fabiana Feitosa"
    },
    {
      beforeSrc: "/antes 8.png",
      afterSrc: "/depois 8.png",
      caption: "A liberdade de treinar onde eu quiser e ver o resultado aparecendo no espelho.",
      author: "Lúcia Santos"
    }
  ];

  // Extend the array for infinite loop
  const carouselTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="pt-16 pb-24 overflow-hidden w-full bg-[#fcfaf8]">
      <div className="text-center mb-12 px-8 max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-4 text-black-text">Veja as transformações reais das nossas alunas</h2>
        <p className="text-mute-text">Arraste para ver os resultados do antes e depois e o que elas dizem</p>
      </div>
      
      <div className="relative flex w-[max-content] animate-marquee hover:[animation-play-state:paused] gap-6 pl-6">
        {carouselTestimonials.map((item, i) => (
          <div 
            key={i} 
            className="w-[300px] md:w-[400px] shrink-0 bg-white rounded-[2rem] shadow-sm border border-outline-grey/10 overflow-hidden flex flex-col hover:shadow-lg transition-all cursor-grab active:cursor-grabbing"
          >
            {/* Imagens */}
            <div className="flex w-full h-[240px] md:h-[280px]">
              <div className="relative w-1/2 border-r border-white">
                <img src={item.beforeSrc} alt="Antes" className="w-full h-full object-cover" loading="lazy" />
                <span className="absolute bottom-3 left-3 bg-black/70 text-white text-[10px] md:text-xs font-bold uppercase px-2 py-1 rounded backdrop-blur-sm shadow-md">
                  Antes
                </span>
              </div>
              <div className="relative w-1/2 border-l border-white">
                <img src={item.afterSrc} alt="Depois" className="w-full h-full object-cover" loading="lazy" />
                <span className="absolute bottom-3 right-3 bg-gold text-white text-[10px] md:text-xs font-bold uppercase px-2 py-1 rounded shadow-md">
                  Depois
                </span>
              </div>
            </div>
            {/* Depoimento */}
            <div className="p-6 md:p-8 flex flex-col gap-3 flex-1 justify-between">
              <div>
                <div className="flex gap-1 text-gold mb-3">
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                </div>
                <p className="text-black-text font-serif italic text-sm md:text-base leading-relaxed">
                  "{item.caption}"
                </p>
              </div>
              <div className="mt-2 pt-3 border-t border-outline-grey/10">
                <span className="text-gold font-bold text-xs tracking-wide">{item.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 mb-4 px-6">
         <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-block text-center bg-gold hover:bg-gold-dark text-[#2c1e16] px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:scale-105 animate-button-pulse">
           Quero viver essa transformação
         </a>
      </div>
    </section>
  );
}

function EverythingYouNeed() {
  return (
    <section id="treinos" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center">
      {/* Left Content */}
      <div>
        <h2 className="font-serif text-4xl md:text-5xl text-black-text leading-tight mb-12">
          Tudo o que você precisa <br/> pra sair da estagnação
        </h2>

        <div className="space-y-10">
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-full bg-gold shrink-0 flex items-center justify-center shadow-lg text-white">
              <PlayCircle size={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-black-text mb-2">Treinos Guiados</h3>
              <p className="text-mute-text leading-relaxed text-[15px]">
                Vídeos detalhados mostrando a execução correta de cada movimento.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-full bg-gold-dark shrink-0 flex items-center justify-center shadow-lg text-white">
              <ListTodo size={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-black-text mb-2">Rotina Estruturada</h3>
              <p className="text-mute-text leading-relaxed text-[15px]">
                Saiba exatamente o que fazer em cada dia da semana, sem dúvidas.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-full bg-gold shrink-0 flex items-center justify-center shadow-lg text-white">
              <Home size={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-black-text mb-2">Opções Casa/Academia</h3>
              <p className="text-mute-text leading-relaxed text-[15px]">
                Flexibilidade total para treinar onde você se sentir mais confortável.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Bento Grid */}
      <div className="grid grid-cols-2 gap-4 auto-rows-[200px]">
        {/* Top Left - Women Exercising */}
        <div className="row-span-1 rounded-[2rem] overflow-hidden shadow-lg border border-surface-grey/50">
          <video 
            src="/video-casa.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Tall - Gym Equipment */}
        <div className="row-span-2 rounded-[2.5rem] overflow-hidden shadow-lg border border-surface-grey/50">
          <img 
            src="/foto-mosaico.JPG" 
            alt="Fabi na academia treinando com halter" 
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
 
        {/* Bottom Left - Illustration / Lifestyle */}
        <div className="row-span-1 rounded-[2rem] overflow-hidden shadow-lg border border-surface-grey/50">
          <video 
            src="/video-academia.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const CustomPulseIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size * 1.5} height={size} viewBox="0 0 30 24" fill="none" className={className}>
    <defs>
      <linearGradient id="cutoutPulse" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#110804" />
        <stop offset="50%" stopColor="#3a1d0f" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>
    </defs>
    <path d="M 4 12 L 10 12 L 13 6 L 17 18 L 20 12 L 26 12" stroke="url(#cutoutPulse)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function AboutChallenge() {
  return (
    <section 
      id="bonus"
      className="py-24 relative overflow-hidden text-surface-offwhite"
      style={{
        background: 'linear-gradient(135deg, #000000, #3a1d0f, #110804, #000000)',
        backgroundSize: '300% 300%',
        animation: 'animated-gradient 9.5s ease infinite'
      }}
    >
      <style>{`
        @keyframes animated-gradient {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-[#a88655] font-bold text-sm mb-4">Sobre o Queima Turbo Max 2.0</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white">O que você vai receber</h2>
          <p className="text-surface-grey mt-4 max-w-2xl mx-auto">Um programa criado especialmente para mulheres na menopausa que querem emagrecer, desinchar e recuperar a autoestima sem precisar viver na academia.</p>
        </div>

        {/* --- CARROSSEL INFINITO EM ONDAS --- */}
        <div 
          className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-[24px] mb-16 overflow-hidden bg-gold shadow-[0_0_20px_rgba(194,162,93,0.6)] transition-all duration-300 hover:bg-gold-dark hover:shadow-[0_0_35px_rgba(194,162,93,0.9)]"
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;700&display=swap');
            
            @keyframes rollercoaster-track {
              0%, 100% { transform: translateY(-28px); }
              50% { transform: translateY(28px); }
            }
          `}</style>
          <div className="relative flex w-[max-content] animate-marquee hover:[animation-play-state:paused] h-16 items-center" style={{ animationDirection: 'reverse' }}>
            {[0, 1, 2, 3, 4].map((blockIdx) => {
              // Inverter a ordem das palavras para que "HIIT" seja a locomotiva entrando primeiro pela Esquerda
              const baseItems = [
                { icon: CustomPulseIcon, text: "NUTRICIONISTA" },
                { icon: CustomPulseIcon, text: "SAMBA" },
                { icon: CustomPulseIcon, text: "ABDOMINAL" },
                { icon: CustomPulseIcon, text: "SUPER BAND" },
                { icon: CustomPulseIcon, text: "SPINNING" },
                { icon: CustomPulseIcon, text: "FULL BODY" },
                { icon: CustomPulseIcon, text: "HIT" }
              ];
              
              // ACHATANDO TUDO PARA UMA LINHA ÚNICA (LETRAS, ÍCONES, ESPAÇOS E PONTOS)
              const sequence = baseItems.flatMap(item => [
                { type: 'char', char: '•' },
                { type: 'space', w: 2 },
                { type: 'icon', element: item.icon },
                { type: 'space', w: 2 },
                { type: 'char', char: '•' },
                { type: 'space', w: 3 },
                ...item.text.split('').map(char => char === ' ' ? { type: 'space', w: 1.5 } : { type: 'char', char }),
                { type: 'space', w: 3 }
              ]);

              return (
                <div key={blockIdx} className="flex flex-row items-center shrink-0">
                  {sequence.map((item, i) => {
                    const globalIdx = (blockIdx * sequence.length) + i;
                    // CALCULANDO O ATRASO PERFEITO PARA A DIREÇÃO INVERSA (-90 garante que já inicie avançado)
                    const delay = (globalIdx * -0.07) - 90;

                    if (item.type === 'space') {
                      return <div key={i} style={{ width: `${item.w * 8}px` }} />;
                    }

                    return (
                      <div
                        key={i}
                        className="flex items-center justify-center font-bold"
                        style={{
                           fontFamily: '"Sarabun", sans-serif',
                           animation: 'rollercoaster-track 4.5s ease-in-out infinite',
                           animationDelay: `${delay}s`,
                           padding: item.type === 'char' ? '0 1.5px' : '0 4px',
                        }}
                      >
                        {item.type === 'icon' ? <item.element size={26} /> : null}
                        {item.type === 'char' ? (
                          <span 
                             className="text-[18px] uppercase bg-clip-text text-transparent"
                             style={{
                               background: 'linear-gradient(135deg, #000000, #3a1d0f, #110804, #000000)',
                               backgroundSize: '300% 300%',
                               animation: 'animated-gradient 9.5s ease infinite',
                               WebkitBackgroundClip: 'text',
                               color: 'transparent'
                             }}
                          >{item.char}</span>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4 py-4 border-b border-surface-grey/20">
              <Clock className="text-[#a88655] shrink-0" />
              <span className="font-serif text-xl flex-1 text-surface-offwhite">Aulas curtinhas guiadas passo a passo</span>
              <span className="text-[#a88655] font-light text-2xl">+</span>
            </div>
            <div className="flex items-center gap-4 py-4 border-b border-surface-grey/20">
              <Star className="text-[#a88655] shrink-0" />
              <span className="font-serif text-xl flex-1 text-surface-offwhite">Método simples, direto e adaptado à menopausa</span>
              <span className="text-[#a88655] font-light text-2xl">+</span>
            </div>
            <div className="flex items-center gap-4 py-4 border-b border-surface-grey/20">
              <Home className="text-[#a88655] shrink-0" />
              <span className="font-serif text-xl flex-1 text-surface-offwhite">Acesse de casa, ou da academia</span>
              <span className="text-[#a88655] font-light text-2xl">+</span>
            </div>
            <div className="flex items-center gap-4 py-4 border-b border-surface-grey/20">
              <Activity className="text-[#a88655] shrink-0" />
              <span className="font-serif text-xl flex-1 text-surface-offwhite">Estratégia pensada para o seu momento atual</span>
              <span className="text-[#a88655] font-light text-2xl">+</span>
            </div>
            
            <div className="mt-10 text-center lg:text-left">
              <h3 className="font-serif text-2xl mb-4 text-white">Como funciona na prática</h3>
              <p className="text-surface-grey mb-6">Você vai acessar os treinos de forma simples e seguir no seu ritmo. Sem complicação. Sem pressão. Sem precisar "se matar" pra ver resultado.</p>
              <div className="flex justify-center lg:justify-start">
                <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-block text-center text-[#2c1e16] px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 animate-button-pulse hover:scale-105 bg-gold hover:bg-gold-dark shadow-[0_0_20px_rgba(194,162,93,0.6)] hover:shadow-[0_0_35px_rgba(194,162,93,0.9)]">
                  Quero treinar no meu tempo
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
             <div className="relative w-full max-w-[320px] aspect-[9/16] bg-black rounded-3xl p-1 md:p-2 shadow-2xl overflow-hidden shadow-gold/20">
               <video 
                 src="/novo-video-sobre.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover rounded-2xl opacity-90" 
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 max-w-6xl mx-auto px-8 relative">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Pronto para começar?</h2>
        <p className="text-mute-text mb-6">Voltar a se sentir bem no seu corpo. Voltar a ter energia. Voltar a se olhar no espelho com prazer.</p>
        <p className="text-mute-text font-bold text-lg mb-2">Agora me responde com sinceridade…</p>
        <p className="text-mute-text mb-8">Quanto tempo você já perdeu tentando sozinha?</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-surface-offwhite rounded-[2rem] p-8 flex flex-col justify-between">
           <div className="space-y-4">
              <div className="border-2 border-gold rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center bg-white cursor-pointer hover:border-gold-dark transition shadow-lg">
                <div className="mb-4 sm:mb-0 text-center sm:text-left">
                  <span className="font-bold text-lg">Acesso Completo Turbo Max 2.0</span>
                  <p className="text-sm text-mute-text line-through mt-2">De: R$ 997,00</p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-sm text-mute-text mb-1">Por apenas</p>
                  <span className="font-bold text-2xl md:text-3xl whitespace-nowrap">12x R$ 28,92</span>
                  <p className="text-sm font-bold text-gold-dark mt-1 whitespace-nowrap">ou R$ 347,00 à vista</p>
                </div>
              </div>
           </div>

           <div className="mt-6 flex flex-col gap-3">
             <div className="flex items-center gap-3 text-[#6b7c59]">
               <Smartphone size={20} className="shrink-0" />
               <span className="text-sm font-medium">Acesso Imediato</span>
             </div>
             <div className="flex items-center gap-3 text-[#6b7c59]">
               <ShieldCheck size={20} className="shrink-0" />
               <span className="text-sm font-medium">Garantia incondicional de 7 dias</span>
             </div>
           </div>
           
           <div className="mt-8 pt-8 border-t border-surface-grey text-center">
             <a href="https://pay.kiwify.com.br/a1AR20y" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-[#6b7c59] hover:bg-[#586649] text-[#2c1e16] px-10 py-4 rounded-full font-bold shadow-lg transition animate-button-pulse">
               Quero começar hoje
             </a>
           </div>
        </div>
        
        <div className="relative rounded-[2rem] overflow-hidden aspect-video lg:aspect-square max-w-sm mx-auto w-full shadow-lg border border-surface-grey/30">
          <img src="/novo-ambiente-academia.JPG" alt="Halteres no ambiente de academia" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute top-4 right-4 bg-glass px-3 py-1.5 rounded-lg !bg-black/60 !backdrop-blur text-white flex items-center gap-2">
             <div className="flex text-gold">
                <Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" />
             </div>
             <span className="text-xs font-bold">92% recomendariam</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoachesSection() {
  return (
    <section id="fabi" className="py-24 bg-surface-white">
      {/* Coach 1 */}
      <div className="max-w-7xl mx-auto px-8 mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden rounded-bl-[10rem] shadow-xl">
          <img src="/foto-precos.JPG" alt="Fabiola sentada na escadaria" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <p className="text-mute-text text-sm uppercase tracking-wider font-bold mb-4">Quem está por trás do método</p>
          <h2 className="font-serif text-4xl leading-tight mb-8">Eu testei de tudo… até entender o que <span className="italic">realmente funciona</span></h2>
          <div className="text-lg text-mute-text leading-relaxed mb-12 space-y-4">
            <p>Meu nome é Fabiola Feliciano, sou personal trainer e também estou vivendo a menopausa.</p>
            <p>Por muito tempo, eu fiz tudo “certo”… treinava, me dedicava… e mesmo assim, o resultado não vinha.</p>
            <p>Eu me sentia cansada, desmotivada e frustrada. Comecei a achar que o problema era comigo. Que talvez fosse a minha idade… ou até mesmo a menopausa.</p>
            <p className="font-medium text-[#4a3f35] pt-2">Até entender uma coisa que mudou tudo: não era falta de esforço era o método errado pro meu momento.</p>
            <p className="pt-2">Foi quando eu decidi parar de seguir fórmulas prontas e comecei a treinar respeitando o meu corpo, o meu ritmo e a fase que eu estava vivendo.</p>
            <p>E foi aí que tudo começou a responder.</p>
            <p>Hoje, eu aplico exatamente esse método em mim e em outras mulheres que também querem voltar a se sentir bem no próprio corpo com leveza, consistência e resultado de verdade.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
             <div className="bg-white px-6 py-5 rounded-[1.5rem] border border-[#64523c]/20 transition-all shadow-[0_10px_40px_rgba(100,82,60,0.08)] hover:shadow-[0_15px_50px_rgba(100,82,60,0.12)] hover:-translate-y-1 flex items-center gap-4">
               <BicepsFlexed className="text-[#64523c] shrink-0" size={28} strokeWidth={1.5} />
               <span className="text-[#4a3f35] font-bold text-lg">Constância</span>
             </div>
             <div className="bg-white px-6 py-5 rounded-[1.5rem] border border-[#64523c]/20 transition-all shadow-[0_10px_40px_rgba(100,82,60,0.08)] hover:shadow-[0_15px_50px_rgba(100,82,60,0.12)] hover:-translate-y-1 flex items-center gap-4">
               <Scale className="text-[#64523c] shrink-0" size={28} strokeWidth={1.5} />
               <span className="text-[#4a3f35] font-bold text-lg">Equilíbrio</span>
             </div>
             <div className="bg-white px-6 py-5 rounded-[1.5rem] border border-[#64523c]/20 transition-all shadow-[0_10px_40px_rgba(100,82,60,0.08)] hover:shadow-[0_15px_50px_rgba(100,82,60,0.12)] hover:-translate-y-1 flex items-center gap-4">
               <RefreshCw className="text-[#64523c] shrink-0" size={28} strokeWidth={1.5} />
               <span className="text-[#4a3f35] font-bold text-lg">Resultado</span>
             </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-10 mb-10">
         <a href="https://pay.kiwify.com.br/a1AR20y" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:scale-105 animate-button-pulse">
           QUERO TREINAR COM A FABI
         </a>
      </div>
    </section>
  );
}

function FAQ() {
  const qas = [
    { q: "Preciso ter experiência com treinos?", a: "Não! O método é adaptável para iniciantes até níveis avançados. Cada exercício possui demonstrações para todos os níveis." },
    { q: "Posso treinar apenas em casa?", a: "Sim! Temos protocolos específicos para quem treina em casa com pouco ou nenhum equipamento." },
    { q: "Quanto tempo dura cada treino?", a: "Em média entre 15 e 25 minutos. Focamos em intensidade e técnica para maximizar o seu tempo." },
    { q: "Vou conseguir emagrecer com o método?", a: "Sim, os treinos são estruturados para acelerar o metabolismo e promover a queima calórica mesmo após o exercício." },
    { q: "Como funciona o suporte?", a: "Você terá acesso a uma área de suporte dentro da plataforma e também ao nosso canal exclusivo da comunidade." },
    { q: "Qual é a garantia do programa?", a: "Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo sentir que o método não é para você, basta solicitar o reembolso integral dentro desse prazo, sem burocracia." }
  ];
  
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 max-w-3xl mx-auto px-8">
      <h2 className="font-serif text-4xl text-center mb-16">FAQs</h2>
      <div className="space-y-4">
        {qas.map((qa, i) => (
           <div key={i} className="border-b justify-between border-surface-grey pb-4">
             <button 
               className="w-full flex justify-between items-center py-4 text-left font-serif text-xl hover:text-mute-text transition"
               onClick={() => setOpenIdx(openIdx === i ? null : i)}
             >
               {qa.q}
               <span className="w-8 h-8 rounded-full bg-surface-grey flex items-center justify-center shrink-0">
                 {openIdx === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
               </span>
             </button>
             {openIdx === i && (
               <p className="text-mute-text pb-4">{qa.a}</p>
             )}
           </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <FadeInSection><ProblemAwareness /></FadeInSection>
      <FadeInSection><MethodFeatures /></FadeInSection>
      <FadeInSection><ImageGallery /></FadeInSection>
      <FadeInSection><EverythingYouNeed /></FadeInSection>
      <FadeInSection><AboutChallenge /></FadeInSection>
      <FadeInSection>
        <div className="bg-surface-offwhite py-16">
          <div className="max-w-5xl md:flex mx-auto px-8 items-center gap-16">
             <div className="flex-1 space-y-6">
               <h2 className="font-serif text-4xl">Pra quem é o Queima Turbo Max 2.0?</h2>
               <ul className="space-y-4 text-mute-text text-lg">
                 <li><span className="text-gold font-bold mr-2">✔</span> Mulheres na menopausa</li>
                 <li><span className="text-gold font-bold mr-2">✔</span> Que estão cansadas de tentar sem resultado</li>
                 <li><span className="text-gold font-bold mr-2">✔</span> Que querem algo simples, possível e real</li>
               </ul>
             </div>
             <div className="flex-1 mt-10 md:mt-0">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-surface-grey">
                   <h2 className="font-serif text-3xl mb-4 text-center">Você não fará isso sozinha</h2>
                   <p className="text-mute-text text-lg text-center mb-8">Você vai fazer parte de um ambiente com mulheres que estão passando pelo mesmo momento que você.</p>
                   <ul className="space-y-6 font-bold text-black-text text-xl pt-4 border-t border-surface-grey">
                     <li className="flex items-center gap-3"><span className="text-gold"><Activity /></span> Mais apoio</li>
                     <li className="flex items-center gap-3"><span className="text-gold"><Play /></span> Mais motivação</li>
                     <li className="flex items-center gap-3"><span className="text-gold"><Dumbbell /></span> Mais constância</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection><PricingSection /></FadeInSection>
      <FadeInSection><CoachesSection /></FadeInSection>
      <FadeInSection><FAQ /></FadeInSection>
      
      <FadeInSection>
        <footer className="bg-surface-offwhite pt-24 pb-12">
          <div className="max-w-2xl mx-auto text-center px-8 mb-16">
             <h2 className="font-serif text-4xl mb-4">Você pode continuar tentando sozinha…</h2>
             <p className="text-mute-text mb-8">Ou pode começar com um método que já funciona.</p>
             
             <a href="https://pay.kiwify.com.br/a1AR20y" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:scale-105 animate-button-pulse">
               Quero entrar no Queima Turbo Max 2.0
             </a>
          </div>
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-mute-text border-t border-surface-grey pt-8 pb-12">
             <span className="text-center md:text-left">&copy; 2026 Fabiola Feliciano &bull; Todos os direitos reservados.</span>
             <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
               <a href="https://wa.me/5511916255137" target="_blank" rel="noopener noreferrer" className="hover:text-black-text transition-colors">Suporte</a>
               <Link to="/termos" className="hover:text-black-text transition-colors">Termos</Link>
               <Link to="/privacidade" className="hover:text-black-text transition-colors">Privacidade</Link>
               <a href="https://www.instagram.com/paulamarkbr/" target="_blank" rel="noopener noreferrer" className="hover:text-black-text transition-colors">Feito por @paulamarkbr</a>
             </div>
          </div>
        </footer>
      </FadeInSection>
    </div>
  );
}
