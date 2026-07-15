import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CLIPS = [
  {
    id: "FuriousBoredKangarooJonCarnage-Z_s9vwA_WYOYvwKp",
    title: "END OF DAY 3",
  },
  {
    id: "PluckyHonorableHerbsRedCoat-GeWZaQeypC5zU7AK",
    title: "WHOS MANS IS THIS",
  }
];

export default function Clips() {
  const [host, setHost] = useState("");

  useEffect(() => {
    setHost(window.location.hostname);
  }, []);

  return (
    <section className="relative py-24 bg-[#0a0a0a] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-wider mb-2">
            RECENT <span className="text-primary">MOMENTS</span>
          </h2>
          <p className="text-muted-foreground font-sans tracking-widest text-sm uppercase">
            Highlights straight from the stream
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CLIPS.map((clip, idx) => (
            <motion.div
              key={clip.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group flex flex-col"
            >
              <div className="relative w-full aspect-video bg-card border border-white/10 rounded-xl overflow-hidden shadow-lg group-hover:border-primary/50 transition-colors duration-500">
                {host ? (
                  <iframe
                    src={`https://clips.twitch.tv/embed?clip=${clip.id}&parent=${host}&autoplay=false`}
                    height="100%"
                    width="100%"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-sans tracking-widest text-sm">
                    LOADING CLIP...
                  </div>
                )}
                
                {/* Decorative glowing background that appears on hover, sitting behind the iframe visually if it could, but iframe covers it. We put it on the container wrapper instead. */}
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-xl font-display font-bold text-white tracking-wide uppercase">
                  {clip.title}
                </h3>
                <div className="h-0.5 w-8 bg-primary mt-2 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
