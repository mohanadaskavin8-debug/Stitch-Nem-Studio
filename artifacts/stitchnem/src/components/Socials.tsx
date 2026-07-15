import { motion } from 'framer-motion';
import { SiTwitch, SiYoutube, SiTiktok, SiInstagram, SiThreads } from 'react-icons/si';

const socials = [
  { name: "Twitch", url: "https://www.twitch.tv/stitchnem", icon: SiTwitch, colorHex: "#9146FF" },
  { name: "YouTube", url: "https://www.youtube.com/@stitchnem", icon: SiYoutube, colorHex: "#FF0000" },
  { name: "TikTok", url: "https://www.tiktok.com/@stitchnemm", icon: SiTiktok, colorHex: "#FFFFFF" },
  { name: "Instagram", url: "https://www.instagram.com/stitchnem/", icon: SiInstagram, colorHex: "#E1306C" },
  { name: "Threads", url: "https://www.threads.net/@stitchnem", icon: SiThreads, colorHex: "#FFFFFF" },
];

export default function Socials() {
  return (
    <section className="relative py-32 px-4 bg-[#050505] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-7xl font-display font-bold text-white uppercase tracking-wider mb-2">
            Join The <span className="text-primary">Community</span>
          </h2>
          <p className="text-muted-foreground font-sans tracking-widest text-sm uppercase">
            Connect on every platform
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            
            // Adjust Thread's hover text color slightly so it isn't pure white on pure white
            const isWhiteTheme = social.colorHex === "#FFFFFF";

            return (
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col items-center justify-center p-8 bg-card border border-white/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 rounded-xl"
                style={{ '--social-color': social.colorHex } as React.CSSProperties}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                  style={{ backgroundColor: social.colorHex }}
                />
                
                <Icon 
                  className="text-4xl sm:text-5xl text-white/40 transition-all duration-300 mb-6 relative z-10 group-hover:text-[var(--social-color)] group-hover:scale-110 drop-shadow-[0_0_15px_transparent] group-hover:drop-shadow-[0_0_15px_var(--social-color)]" 
                />
                
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-widest uppercase relative z-10 transition-colors">
                  {social.name}
                </h3>
                
                <div className="mt-4 px-4 py-1.5 border border-white/10 rounded-full text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase group-hover:border-[var(--social-color)] group-hover:text-[var(--social-color)] transition-all duration-300 relative z-10">
                  Follow
                </div>

                <div 
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
                  style={{ backgroundColor: social.colorHex }}
                />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  );
}
