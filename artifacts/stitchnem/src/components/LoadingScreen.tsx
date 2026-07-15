import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import avatarImg from '@assets/stitchnem_real/twitch_avatar.jpg';

const bootLines = [
  "> INITIALIZING BROADCAST PROTOCOLS...",
  "> CONNECTING TO @stitchnem",
  "> SYNCING STREET CAMERAS...",
  "> BYPASSING SAFETY NETS...",
  "> BUFFERING STREAM...",
  "> SIGNAL ACQUIRED."
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 100;
        // speed up near the end
        const increment = p > 80 ? 8 : (p > 40 ? 4 : 2);
        return Math.min(100, p + increment);
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress > 15 && lineIdx < 1) setLineIdx(1);
    if (progress > 30 && lineIdx < 2) setLineIdx(2);
    if (progress > 50 && lineIdx < 3) setLineIdx(3);
    if (progress > 70 && lineIdx < 4) setLineIdx(4);
    if (progress > 90 && lineIdx < 5) setLineIdx(5);
  }, [progress, lineIdx]);

  useEffect(() => {
    if (progress >= 100 && !completedRef.current) {
      completedRef.current = true;
      const t1 = setTimeout(() => setShowFinal(true), 300);
      // Wait for final animation to play out before unmounting
      const t2 = setTimeout(() => onComplete(), 2800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden font-mono"
      exit={{ 
        opacity: 0,
        scale: 1.05,
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      {/* Scanlines & CRT Effects */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-20"></div>
      
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <AnimatePresence>
        {!showFinal ? (
          <motion.div 
            key="console"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl px-6 relative z-30"
          >
            <div className="text-primary text-xs sm:text-sm tracking-widest mb-8 flex justify-between border-b border-primary/30 pb-2">
              <span>SYS.BOOT.V1</span>
              <span>{String(progress).padStart(3, '0')}%</span>
            </div>

            <div className="space-y-2 h-40">
              {bootLines.slice(0, lineIdx + 1).map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-white/80 text-xs sm:text-sm tracking-wider"
                >
                  {line}
                </motion.div>
              ))}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2.5 h-4 bg-primary inline-block ml-2 align-middle"
              />
            </div>

            {/* Equalizer / Signal Bar */}
            <div className="mt-12 flex gap-1 h-12 items-end">
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-primary/40"
                  initial={{ height: "10%" }}
                  animate={{ 
                    height: progress > (i * 3.3) ? `${Math.max(20, Math.random() * 100)}%` : "10%",
                    backgroundColor: progress > (i * 3.3) ? "#e63030" : "rgba(230, 48, 48, 0.2)"
                  }}
                  transition={{ duration: 0.1 }}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="final"
            className="relative z-30 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 100 }}
          >
            {/* Hard Glitch Container */}
            <motion.div
              animate={{ 
                x: [0, -10, 10, -5, 5, 0],
                y: [0, 5, -5, 10, -10, 0],
                filter: [
                  "drop-shadow(0 0 0px red)",
                  "drop-shadow(-5px 0 0px red) drop-shadow(5px 0 0px blue)",
                  "drop-shadow(5px 0 0px red) drop-shadow(-5px 0 0px blue)",
                  "drop-shadow(0 0 0px red)"
                ]
              }}
              transition={{ duration: 0.4, ease: "linear" }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6">
                <motion.div 
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute -inset-4 bg-primary/40 blur-xl rounded-full"
                />
                <img 
                  src={avatarImg} 
                  alt="Avatar" 
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-primary z-10"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-black z-20 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  LIVE
                </div>
              </div>

              <h1 className="text-6xl sm:text-8xl md:text-9xl font-display font-bold tracking-widest text-white uppercase text-center m-0 leading-none">
                STITCHNEM
              </h1>
            </motion.div>

            {/* Screen Tear Flash */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1, 0] }}
              transition={{ delay: 1.5, duration: 0.4 }}
              className="fixed inset-0 bg-white mix-blend-difference pointer-events-none z-50"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
