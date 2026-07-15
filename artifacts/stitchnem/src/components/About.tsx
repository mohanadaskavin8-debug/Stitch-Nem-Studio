import { motion } from 'framer-motion';
import avatarImg from '@assets/stitchnem_real/twitch_avatar.jpg';
import frameHq from '@assets/stitchnem_real/frame_hq720.jpg';

export default function About() {
  return (
    <section className="relative py-32 px-4 bg-background z-10 overflow-hidden border-t border-white/5">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.05] bg-cover bg-center grayscale mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url(${frameHq})` }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 group"
        >
          {/* Subtle animated red glow */}
          <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          
          <img 
            src={avatarImg} 
            alt="Stitchnem Portrait" 
            className="relative z-10 w-full h-full object-cover rounded-sm border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
          />
          
          {/* Decorative Corner Accents */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-primary/50 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-white/20 z-20"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary"></div>
            <span className="text-xs font-sans tracking-[0.3em] text-primary uppercase">The Origin</span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-wider leading-[0.9]">
            Tamil.<br/>
            <span className="text-white/40">Real Life</span><br/>
            <span className="text-primary">Broadcasted.</span>
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed max-w-xl">
            <p>
              Stitchnem is a Tamil IRL streamer who takes his audience everywhere. No script. No safety net—just his culture, his city, and the raw energy of real life on camera.
            </p>
            <p>
              Whether it's late-night city encounters, unhinged challenges, dropping music videos, or raw, unfiltered conversations, he broadcasts reality exactly as it happens while repping his Tamil roots to the fullest. You can't script this energy. You just have to show up.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-4xl font-display text-white">IRL</span>
              <span className="text-xs font-sans tracking-widest text-white/40 uppercase mt-1">Streets to Screen</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-display text-white">100%</span>
              <span className="text-xs font-sans tracking-widest text-white/40 uppercase mt-1">Authentic Energy</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
