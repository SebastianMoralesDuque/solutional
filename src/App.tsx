import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroVideo from "./video.mp4";
import { Logo } from "./Logo";



export default function App() {
  return (
    <div className="h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col p-1 md:p-2 overflow-hidden">
      {/* Hero Content */}
      <main className="flex-grow flex flex-col w-full h-full relative">
        {/* Mac OS Style Card Container */}
        <div className="relative flex-grow w-full rounded-2xl md:rounded-3xl border border-black/5 overflow-hidden flex flex-col items-center justify-center shadow-lg bg-black text-white">

          {/* Navbar */}
          <header className="absolute top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-8">
            <nav className="max-w-6xl mx-auto glass-nav rounded-2xl px-6 py-1 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Logo />
                <span className="font-display font-bold tracking-wider text-base sm:text-lg md:text-xl whitespace-nowrap hidden sm:inline">SOLUTIONAL TECH</span>
              </div>

              <div className="hidden md:flex items-center gap-8">
                {['Inicio', 'Nosotros', 'Explorar', 'Clientes', 'Carrera', 'Blog'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <button className="bg-white text-black px-5 py-2 rounded-xl text-sm font-bold hover:bg-opacity-90 transition-all active:scale-95">
                Contáctanos
              </button>
            </nav>
          </header>

          {/* Background Video for Hero Section */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 pointer-events-none"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>


          {/* Large Spaced Text (Agency Name) */}
          <div className="absolute bottom-24 w-full text-center z-10 pointer-events-none px-4">
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.8em" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-2xl md:text-5xl lg:text-6xl font-display font-light tracking-[0.8em] mr-[-0.8em] uppercase text-white/90 drop-shadow-2xl"
            >
              SOLUTIONAL TECH
            </motion.h1>
          </div>

          {/* Scroll Down */}
          <div className="absolute bottom-8 flex flex-col items-center gap-3 z-10">
            <motion.span
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-[10px] uppercase tracking-[0.6em] text-white font-medium"
            >
              Desliza
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[2px] h-10 bg-gradient-to-b from-white via-white/50 to-transparent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-black text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 group"
      >
        <span className="font-bold text-sm hidden group-hover:block">Empezar ahora</span>
        <ArrowRight size={20} />
      </motion.button>
    </div>
  );
}
