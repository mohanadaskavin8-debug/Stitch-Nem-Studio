import { motion } from 'framer-motion';

export default function Stats() {
  return (
    <div className="relative w-full border-y border-white/10 bg-primary/5 py-4 overflow-hidden z-10 flex flex-col gap-4">
      
      {/* Ticker / Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex items-center gap-8 text-sm sm:text-base font-display tracking-[0.2em] text-white/50 uppercase"
        >
          {/* Repeat multiple times to ensure seamless loop. Width will be fixed by content. */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span>LIVE. UNFILTERED. UNDENIABLE.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>IRL STREET STREAMER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>JUST CHATTING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>OFFICIAL VIDEO OUT NOW</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-12 mt-4 pb-2">
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-3xl sm:text-5xl font-display font-bold text-white">1.9K</span>
          <span className="text-[10px] sm:text-xs font-sans tracking-widest text-primary uppercase">Twitch Followers</span>
        </div>
        <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-3xl sm:text-5xl font-display font-bold text-white">100%</span>
          <span className="text-[10px] sm:text-xs font-sans tracking-widest text-primary uppercase">Unscripted</span>
        </div>
        <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-3xl sm:text-5xl font-display font-bold text-white">24/7</span>
          <span className="text-[10px] sm:text-xs font-sans tracking-widest text-primary uppercase">Street Energy</span>
        </div>
      </div>

    </div>
  );
}
