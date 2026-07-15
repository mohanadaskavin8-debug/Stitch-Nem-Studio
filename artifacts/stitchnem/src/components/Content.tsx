import { motion } from 'framer-motion';
import content1 from '../../attached_assets/generated_images/content-1.jpg';
import content2 from '../../attached_assets/generated_images/content-2.jpg';
import content3 from '../../attached_assets/generated_images/content-3.jpg';
import content4 from '../../attached_assets/generated_images/content-4.jpg';
import content5 from '../../attached_assets/generated_images/content-5.jpg';
import { SiTwitch } from 'react-icons/si';

const clips = [
  { id: 1, title: "NOS NEVER BACKSDOWN", image: content1 },
  { id: 2, title: "THEY DONT WANNA SEE BRO", image: content2 },
  { id: 3, title: "STITCH LOSES MORE AURA", image: content3 },
  { id: 4, title: "IRL STREET CHALLENGE", image: content4 },
  { id: 5, title: "STITCH TRIES TO DEAD THE B...", image: content5 },
];

export default function Content() {
  return (
    <section className="relative py-32 bg-[#111] z-10 border-t border-b border-white/5">
      <div className="max-w-[100vw] mx-auto px-4 sm:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-7xl font-display font-bold text-white uppercase tracking-wider mb-2">
            Featured <span className="text-primary">Moments</span>
          </h2>
          <p className="text-muted-foreground font-sans tracking-widest text-sm sm:text-base uppercase">Highlights from the streets</p>
        </motion.div>
      </div>

      <div className="w-full overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
        <div className="flex gap-6 sm:gap-10 px-4 sm:px-8 w-max">
          {clips.map((clip, idx) => (
            <motion.a
              href="https://www.twitch.tv/stitchnem"
              target="_blank"
              rel="noopener noreferrer"
              key={clip.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative block w-[85vw] sm:w-[450px] aspect-[4/3] shrink-0 overflow-hidden bg-card snap-center"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <img 
                src={clip.image} 
                alt={clip.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(230,48,48,0.5)]">
                  <SiTwitch className="text-white text-2xl ml-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-30 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide uppercase line-clamp-2">
                  {clip.title}
                </h3>
                <div className="w-0 h-0.5 bg-primary mt-3 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>

              <div className="absolute inset-0 border border-white/10 group-hover:border-primary/50 z-40 transition-colors duration-300 pointer-events-none"></div>
            </motion.a>
          ))}
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
