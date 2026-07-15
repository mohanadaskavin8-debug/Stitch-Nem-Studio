import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import ytPoster from '@assets/stitchnem_real/yt_T0DaGpd28Kk.jpg';
import avatarImg from '@assets/stitchnem_real/twitch_avatar.jpg';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden bg-black">
      
      {/* Abstract Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-30 grayscale-[0.8] blur-sm scale-105"
          style={{ backgroundImage: `url(${ytPoster})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,48,48,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Streamer Status Chip */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 p-1.5 pr-5 rounded-full"
        >
          <img src={avatarImg} alt="Stitchnem" className="w-8 h-8 rounded-full border border-primary/50 object-cover" />
          <div className="flex flex-col">
            <span className="text-[10px] text-white/50 font-sans tracking-widest uppercase leading-none mb-0.5">Streamer</span>
            <div className="flex items-center gap-2">
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(230,48,48,0.8)]"
              />
              <span className="text-xs font-bold tracking-wider text-white font-sans uppercase leading-none">@stitchnem</span>
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-[16vw] sm:text-[12vw] md:text-[10vw] leading-[0.85] font-display font-bold tracking-tight text-white uppercase text-center m-0 mix-blend-screen drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
        >
          STITCHNEM
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 mb-10 text-sm sm:text-base md:text-lg text-muted-foreground font-sans tracking-[0.3em] uppercase text-center"
        >
          No Script. No Safety Net. Real Life.
        </motion.p>

        {/* Centerpiece Music Video Embed */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full relative mx-auto group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/0 blur-lg rounded-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative w-full aspect-video bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            
            {/* Label Strip */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/80 to-transparent z-20 flex items-center px-4 md:px-6 pointer-events-none">
              <span className="text-[10px] md:text-xs font-sans font-bold tracking-widest text-primary uppercase">LATEST DROP</span>
              <span className="mx-3 text-white/30">•</span>
              <span className="text-[10px] md:text-xs font-sans tracking-widest text-white uppercase">FIRST DAY OUT (Official Video)</span>
            </div>

            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="poster"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <img src={ytPoster} alt="First Day Out" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center pl-2 shadow-[0_0_30px_rgba(230,48,48,0.6)]"
                    >
                      <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="iframe"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black"
                >
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/T0DaGpd28Kk?autoplay=1&rel=0&modestbranding=1&playsinline=1" 
                    title="FIRST DAY OUT (Official Video)" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <a 
            href="https://www.twitch.tv/stitchnem" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-display text-xl tracking-widest text-white bg-primary overflow-hidden transition-transform active:scale-95 w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              WATCH LIVE ON TWITCH
            </span>
            <div className="absolute inset-0 border border-primary/50 group-hover:border-white/50 transition-colors"></div>
          </a>
          
          <a 
            href="https://www.youtube.com/@stitchnem" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-display text-xl tracking-widest text-white bg-transparent border border-white/20 overflow-hidden transition-all hover:border-white active:scale-95 w-full sm:w-auto"
          >
            <span className="relative z-10">SUBSCRIBE TO YOUTUBE</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
