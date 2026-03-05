import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, Code2, Sparkles, Zap, Shield, Rocket } from "lucide-react";
import heroVideo from "./video.mp4";
import { Logo } from "./Logo";
import { InteractiveGlobe } from "@/components/ui/interactive-globe";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { InteractiveArrow } from "@/components/ui/interactive-arrow";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee, type MarqueeProps } from '@/components/ui/marquee';
import { Typewriter } from "@/components/ui/typewriter";
import DotCard from "@/components/ui/moving-dot-card";
import { HoverFooter } from "@/components/ui/hover-footer";
import SnowBallLoadingSpinner from "@/components/ui/snow-ball-loading-spinner";
import DataAnalysisLottie from "@/components/ui/data-analysis-lottie";
import { ContactSection } from "@/components/ui/contact-section";
import type { CSSProperties } from "react";
import { useRef, useState, useEffect, lazy, Suspense } from "react";

const IsometricFeature = lazy(() => import("@/components/ui/isometric-feature").then(m => ({ default: m.default })));
const IntegrationHero = lazy(() => import("@/components/ui/integration-hero").then(m => ({ default: m.default })));

// Lottie assets
import lottieDataAnalysis from "@/assets/isometric-data-analysis.json";
import lottieInternetShop from "@/assets/isometric-internet-shop.json";
import lottieAIBrain from "@/assets/technology-isometric-ai-robot-brain.json";
import lottiePredictiveAnalysis from "@/assets/crypto-animation.json";
// Testimonials data...
interface Testimonial {
  name: string;
  username: string;
  body: string;
  img: string;
  country: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ana García',
    username: '@ana_dev',
    body: 'Solutional Tech transformó nuestro flujo de trabajo por completo.',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    country: '🇪🇸 España',
  },
  {
    name: 'Noah Smith',
    username: '@noah_ops',
    body: 'La infraestructura Edge es asombrosamente rápida.',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    country: '🇺🇸 USA',
  },
  {
    name: 'Mateo Rossi',
    username: '@mat_it',
    body: 'Las automatizaciones de IA nos ahorran 20 horas a la semana.',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    country: '🇮🇹 Italia',
  },
  {
    name: 'Maya Patel',
    username: '@maya_growth',
    body: 'El mejor soporte técnico que he tenido nunca.',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
    country: '🇮🇳 India',
  },
  {
    name: 'Lucas Stone',
    username: '@luc_ux',
    body: 'Diseño impecable y funcionalidad robusta.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    country: '🇫🇷 Francia',
  },
  {
    name: 'Ava Green',
    username: '@ava_eco',
    body: 'Innovación constante. Son líderes en el sector.',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    country: '🇦🇺 Australia',
  },
  {
    name: 'Carlos Ruiz',
    username: '@cruiz_dev',
    body: 'Implementación impecable de modelos de lenguaje.',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
    country: '🇲🇽 México',
  },
  {
    name: 'Emma Watson',
    username: '@emma_fintech',
    body: 'La seguridad en sus despliegues es insuperable.',
    img: 'https://randomuser.me/api/portraits/women/62.jpg',
    country: '🇬🇧 UK',
  },
  {
    name: 'Leo Messi',
    username: '@leo_ai',
    body: 'No sabía que se podía automatizar el éxito hasta que los conocí.',
    img: 'https://randomuser.me/api/portraits/men/10.jpg',
    country: '🇦🇷 Argentina',
  },
  {
    name: 'Sophie Müller',
    username: '@sophie_m',
    body: 'La mejor decisión tecnológica del año para nuestra startup.',
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
    country: '🇩🇪 Alemania',
  },
];

function TestimonialCard({
  img,
  name,
  username,
  body,
  country
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  country: string;
  key?: string | number;
}) {
  return (
    <Card className="w-64 bg-zinc-50 dark:bg-zinc-900 border-black/5 dark:border-white/5 text-black dark:text-white transition-colors duration-500 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <Avatar className="size-10 border border-black/10 dark:border-white/10">
            <AvatarImage src={img} alt={name} loading="lazy" />
            <AvatarFallback className="bg-black/5 dark:bg-white/10">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="text-sm font-bold flex items-center gap-1.5">
              {name} <span className="text-xs opacity-60 font-normal">{country}</span>
            </div>
            <p className="text-xs text-black/40 dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-4 text-sm text-black/70 dark:text-white/70 leading-relaxed italic">"{body}"</blockquote>
      </CardContent>
    </Card>
  );
}

export default function App() {
  const contactBtnRef = useRef<HTMLButtonElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-black selection:bg-blue-500 selection:text-white flex flex-col p-1 md:p-2 overflow-x-hidden">
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white dark:bg-black flex flex-col items-center justify-center transition-colors duration-500"
          >
            <SnowBallLoadingSpinner />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-black dark:text-white tracking-[0.3em] uppercase text-xs font-medium animate-pulse transition-colors duration-500"
            >
              Conectando Nodos Edge...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Arrow Incentive */}
      <InteractiveArrow targetRef={contactBtnRef} active={isAtTop} />

      {/* Navbar (Fixed to follow scroll) */}
      <header className="fixed top-3 md:top-5 left-1 md:left-2 right-1 md:right-2 z-50 px-4 md:px-8 pointer-events-none">
        <nav className="max-w-6xl mx-auto glass-nav rounded-2xl px-6 py-1 flex items-center justify-between pointer-events-auto shadow-xl text-black dark:text-white transition-colors duration-500">
          <div className="flex items-center gap-3">
            <Logo className="w-12 h-12 md:w-16 md:h-16 text-black dark:text-white" />
            <span className="font-display font-bold tracking-wider text-base sm:text-lg md:text-xl whitespace-nowrap hidden sm:inline">SOLUTIONAL TECH</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Inicio', id: '#inicio' },
              { label: 'Servicios', id: '#servicios' },
              { label: 'Red', id: '#red' },
              { label: 'Clientes', id: '#clientes' },
              { label: 'Nosotros', id: '#nosotros' },
              { label: 'Contacto', id: '#contacto' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.id}
                className="text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-xl text-sm font-bold hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-all active:scale-95"
          >
            Contáctanos
          </a>
        </nav>
      </header>



      {/* Hero Area */}
      <main id="inicio" className="flex-none flex flex-col w-full h-[80vh] md:h-screen px-4 md:px-8 pb-4 md:pb-8 relative">
        {/* Mac OS Style Card Container */}
        <div className="relative flex-grow w-full rounded-2xl md:rounded-3xl border border-black/5 overflow-hidden flex flex-col items-center justify-center shadow-lg bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors duration-500">

          {/* Background Video for Hero Section */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000' width='1920' height='1080'/%3E%3C/svg%3E"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>


          {/* Large Spaced Text (Agency Name) */}
          <div className="absolute bottom-24 w-full text-center z-10 pointer-events-none px-4 flex flex-col items-center gap-4">
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.8em" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-2xl md:text-5xl lg:text-6xl font-display font-bold tracking-[0.8em] mr-[-0.8em] uppercase text-black dark:text-white drop-shadow-2xl transition-colors duration-500"
            >
              SOLUTIONAL TECH
            </motion.h1>
            <div className="h-8 flex items-center justify-center">
              <Typewriter
                text={["Automatización IA", "Desarrollo Web", "Agentes Autónomos", "Estrategia Digital"]}
                speed={100}
                waitTime={2000}
                deleteSpeed={50}
                className="text-blue-700 dark:text-blue-400 text-sm md:text-lg font-bold tracking-[0.2em] uppercase transition-colors"
                cursorChar="_"
                cursorClassName="text-blue-700 dark:text-blue-400 ml-1 font-bold"
              />
            </div>
          </div>

          {/* Scroll Down */}
          <div className="absolute bottom-8 flex flex-col items-center gap-3 z-10">
            <motion.span
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-[10px] uppercase tracking-[0.6em] text-black/60 dark:text-white/60 font-medium transition-colors duration-500"
            >
              Desliza
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[2px] h-10 bg-gradient-to-b from-black dark:from-white via-black/50 dark:via-white/50 to-transparent rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-colors duration-500"
            />
          </div>
        </div>
      </main>
      {/* Explosive Impact Section */}
      <section className="w-full px-4 md:px-8 pb-4 md:pb-8">
        <BackgroundBeamsWithCollision className="rounded-2xl md:rounded-3xl border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-950 p-8 md:p-20 transition-colors duration-500">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-display font-bold text-center text-black dark:text-white font-sans tracking-tight max-w-4xl px-4">
            ¿Qué es más potente que la IA?{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-blue-600 via-indigo-600 to-cyan-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">IA que Colisiona.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 py-4">
                <span className="">IA que Colisiona.</span>
              </div>
            </div>
            <p className="text-base md:text-xl font-medium text-black/40 dark:text-white/40 mt-8 max-w-xl mx-auto tracking-normal font-sans">
              Fusionamos algoritmos avanzados con diseño de vanguardia para crear impacto real en tu industria.
            </p>
          </h2>
        </BackgroundBeamsWithCollision>
      </section>


      {/* White Background Features Section */}
      <section id="servicios" className="w-full px-4 md:px-8 pb-4 md:pb-8">
        <div className="bg-white dark:bg-zinc-950 rounded-2xl md:rounded-3xl border border-black/5 dark:border-white/5 shadow-sm p-8 md:p-20 transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-black dark:text-white mb-6 tracking-tight leading-[1.1]">
                Soluciones de <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent italic">
                  Nueva Generación
                </span>
              </h2>
              <p className="text-black/60 dark:text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Aprovechamos las últimas tecnologías tridimensionales e IA para escalar tu negocio hacia el futuro.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
              <Suspense fallback={<div className="h-48 animate-pulse bg-zinc-100 dark:bg-zinc-800 rounded-xl" />}>
                <IsometricFeature
                  animationData={lottieDataAnalysis}
                  title="Análisis Masivo"
                  description="Procesamiento isométrico de grandes volúmenes de datos. Convierte la complejidad del Big Data en paneles de control intuitivos."
                />
              </Suspense>
              <Suspense fallback={<div className="h-48 animate-pulse bg-zinc-100 dark:bg-zinc-800 rounded-xl" />}>
                <IsometricFeature
                  animationData={lottieInternetShop}
                  title="E-Commerce Inteligente"
                  description="Tiendas online hiper-optimizadas con recomendaciones IA, carritos predictivos y una experiencia de usuario sin fricción."
                />
              </Suspense>
              <Suspense fallback={<div className="h-48 animate-pulse bg-zinc-100 dark:bg-zinc-800 rounded-xl" />}>
                <IsometricFeature
                  animationData={lottieAIBrain}
                  title="Cerebro Robótico"
                  description="Integramos modelos fundacionales de IA directamente en tu núcleo operativo, creando automatizaciones cognitivas ininterrumpidas."
                />
              </Suspense>
              <Suspense fallback={<div className="h-48 animate-pulse bg-zinc-100 dark:bg-zinc-800 rounded-xl" />}>
                <IsometricFeature
                  animationData={lottiePredictiveAnalysis}
                  title="Análisis Predictivo"
                  description="Algoritmos de inteligencia predictiva en tiempo real para anticipar tendencias y optimizar la toma de decisiones estratégicas."
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Global Edge Network Section */}
      <section id="red" className="w-full px-4 md:px-8 pb-4 md:pb-8">
        <div className="w-full rounded-2xl md:rounded-3xl border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-950 overflow-hidden relative shadow-lg transition-colors duration-500">
          {/* Ambient glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
            {/* Left content */}
            <div className="flex-1 flex flex-col justify-center p-10 md:p-14 lg:p-20 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-1 text-xs text-black/60 dark:text-white/60 mb-6 w-fit backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Sistemas operativos 100%
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-black dark:text-white leading-[1.1] mb-6">
                Red Global<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent italic">
                  de Borde (Edge)
                </span>
              </h2>

              <p className="text-sm md:text-base text-black/60 dark:text-white/60 max-w-md leading-relaxed mb-8">
                Desplegados en más de 150 puntos de presencia mundial.
                Tus datos servidos desde el nodo más cercano en menos de 50ms.
                Arrastra el globo para explorar nuestra red.
              </p>

              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-black dark:text-white">150+</p>
                  <p className="text-xs text-black/40 dark:text-white/40 uppercase tracking-widest">Nodos Edge</p>
                </div>
                <div className="hidden sm:block w-px h-8 bg-black/10 dark:bg-white/10" />
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-black dark:text-white">&lt;50ms</p>
                  <p className="text-xs text-black/40 dark:text-white/40 uppercase tracking-widest">Latencia Media</p>
                </div>
                <div className="hidden sm:block w-px h-8 bg-black/10 dark:bg-white/10" />
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-black dark:text-white">99.99%</p>
                  <p className="text-xs text-black/40 dark:text-white/40 uppercase tracking-widest">Disponibilidad</p>
                </div>
              </div>
            </div>

            {/* Right — Globe */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-0 min-h-[400px]">
              <InteractiveGlobe
                size={window.innerWidth < 768 ? 320 : 500}
                dotColor="rgba(0, 0, 0, ALPHA)"
                arcColor="rgba(59, 130, 246, 0.4)"
                markerColor="rgba(37, 99, 235, 1)"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Integration Hero Section */}
      <section className="w-full px-4 md:px-8 pb-4 md:pb-8">
        <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-950 py-8 md:py-20 px-0 shadow-2xl transition-colors duration-500">
          <Suspense fallback={<div className="h-48 animate-pulse bg-zinc-100 dark:bg-zinc-800 rounded-xl" />}>
            <IntegrationHero />
          </Suspense>
        </div>
      </section>

      <section id="clientes" className="w-full px-4 md:px-8 pb-4 md:pb-8">
        <div className="rounded-2xl md:rounded-3xl border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-950 p-8 md:p-20 shadow-sm relative overflow-hidden transition-colors duration-500">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 italic text-black dark:text-white">Lo que dicen de nosotros</h2>
            <p className="text-black/60 dark:text-white/60 max-w-xl mx-auto">Empresas líderes confían en nuestra infraestructura para escalar su visión.</p>
          </div>

          <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden [perspective:1000px]">
            <div
              className="flex flex-row items-center gap-4 h-full"
              style={{
                transform: 'rotateX(20deg) rotateZ(-5deg) skewX(5deg)',
              }}
            >
              {/* Vertical Marquee 1 */}
              <Marquee vertical pauseOnHover repeat={2} style={{ '--duration': '30s' } as CSSProperties}>
                {testimonials.map((review) => (
                  <TestimonialCard
                    key={review.username}
                    img={review.img}
                    name={review.name}
                    username={review.username}
                    body={review.body}
                    country={review.country}
                  />
                ))}
              </Marquee>
              {/* Vertical Marquee 2 (Reverse) */}
              <Marquee vertical pauseOnHover reverse repeat={2} style={{ '--duration': '35s' } as CSSProperties}>
                {testimonials.slice().reverse().map((review) => (
                  <TestimonialCard
                    key={review.username + "-rev"}
                    img={review.img}
                    name={review.name}
                    username={review.username}
                    body={review.body}
                    country={review.country}
                  />
                ))}
              </Marquee>
              {/* Vertical Marquee 3 */}
              <Marquee vertical pauseOnHover repeat={2} style={{ '--duration': '40s' } as CSSProperties}>
                {testimonials.map((review) => (
                  <TestimonialCard
                    key={review.username + "-3"}
                    img={review.img}
                    name={review.name}
                    username={review.username}
                    body={review.body}
                    country={review.country}
                  />
                ))}
              </Marquee>
              {/* Vertical Marquee 4 (Reverse) */}
              <Marquee vertical pauseOnHover reverse repeat={2} style={{ '--duration': '25s' } as CSSProperties}>
                {testimonials.slice().reverse().map((review) => (
                  <TestimonialCard
                    key={review.username + "-rev-4"}
                    img={review.img}
                    name={review.name}
                    username={review.username}
                    body={review.body}
                    country={review.country}
                  />
                ))}
              </Marquee>
            </div>

            {/* Gradients to fade edges */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-zinc-950 transition-colors duration-500"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-zinc-950 transition-colors duration-500"></div>
          </div>
        </div>
      </section>

      {/* About Us Card */}
      <section id="nosotros" className="w-full px-4 md:px-8 pb-4 md:pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl md:rounded-3xl bg-white dark:bg-zinc-950 text-black dark:text-white p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-black/5 dark:border-white/5 shadow-lg relative overflow-hidden transition-colors duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />

          <div className="flex-1 space-y-6 z-10">
            <h2 className="text-4xl md:text-6xl font-display font-light">
              La IA <span className="font-medium">trabaja duro.</span><br />
              Tú solo <span className="font-medium">disfruta el resultado.</span>
            </h2>
            <p className="text-black/60 dark:text-zinc-400 text-lg md:text-xl max-w-2xl transition-colors duration-500">
              Somos una agencia tecnológica revolucionaria que fusiona el desarrollo web de alta gama con agentes de inteligencia artificial. Eliminamos tareas repetitivas y escalamos tu negocio. Rápido. Fácil. Increíble.
            </p>
          </div>

          <div className="flex-none flex flex-col gap-8 w-full md:w-auto z-10">
            <DotCard target={999000} label="Impacto Global" duration={3000} />
            <DotCard target={450000} label="Agentes Activos" duration={2500} />
            <DotCard target={150} label="Empresas Scale-up" duration={2000} />
          </div>
        </motion.div>
      </section>


      <ContactSection />
      <HoverFooter />

    </div>
  );
}
