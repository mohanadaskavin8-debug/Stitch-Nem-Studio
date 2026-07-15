import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-background pt-24 pb-12 px-4 border-t border-white/5 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative"
        >
          <h2 className="text-[15vw] sm:text-[12vw] leading-none font-display font-bold tracking-tight text-white/5 select-none pointer-events-none w-full flex justify-center">
            STITCHNEM
          </h2>
          {/* Subtle gradient overlay to fade the bottom of the text into the background */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-6 relative z-10"
        >
          <p className="text-sm sm:text-base font-sans tracking-[0.2em] text-muted-foreground uppercase bg-background px-4">
            Built for the ones who show up every stream
          </p>
          <div className="w-16 h-px bg-primary/50"></div>
          <p className="text-[10px] sm:text-xs font-sans tracking-[0.2em] text-white/20 uppercase mt-4">
            &copy; {new Date().getFullYear()} Stitchnem. All rights reserved.
          </p>
        </motion.div>
        
      </div>
    </footer>
  );
}
