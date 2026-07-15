import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TikTokSection() {
  useEffect(() => {
    const SRC = "https://www.tiktok.com/embed.js";
    const render = () => (window as any).tiktokEmbed?.lib?.render?.();

    // If the shared embed script is already present, just (re)render the embeds.
    if (document.querySelector(`script[src="${SRC}"]`)) {
      render();
      return;
    }

    const script = document.createElement('script');
    script.src = SRC;
    script.async = true;
    script.onload = render;
    document.body.appendChild(script);
    // Leave the shared script in place on unmount; other mounts may rely on it.
  }, []);

  return (
    <section className="relative py-24 bg-[#111] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-wider mb-2">
            STRAIGHT OFF THE <span className="text-primary">FYP</span>
          </h2>
          <p className="text-muted-foreground font-sans tracking-widest text-sm uppercase">
            Viral moments & short form
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-[780px] bg-black border border-white/10 rounded-xl overflow-hidden p-4 shadow-2xl relative"
        >
          <blockquote 
            className="tiktok-embed" 
            cite="https://www.tiktok.com/@stitchnemm" 
            data-unique-id="stitchnemm" 
            data-embed-type="creator" 
            style={{ maxWidth: '780px', minWidth: '288px', margin: '0 auto' }}
          >
            <section>
              <a target="_blank" href="https://www.tiktok.com/@stitchnemm" rel="noopener noreferrer">
                @stitchnemm
              </a>
            </section>
          </blockquote>
          
          <div className="absolute bottom-4 right-4 z-0 pointer-events-none opacity-50 text-[10px] text-white/30 font-sans tracking-widest uppercase">
            TIKTOK FEED
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <a 
            href="https://www.tiktok.com/@stitchnemm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-[0.2em] text-white/50 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
          >
            VIEW ALL ON TIKTOK
          </a>
        </motion.div>

      </div>
    </section>
  );
}
