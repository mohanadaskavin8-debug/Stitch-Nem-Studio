import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import avatarImg from '@assets/stitchnem_real/twitch_avatar.jpg';

const FAKE_CHAT = [
  { u: "street_king99", c: "W STREAM", color: "#FF5733" },
  { u: "glitch_hunter", c: "bro is actually crazy for this", color: "#33FF57" },
  { u: "night_owl_tv", c: "LMAOOOO", color: "#3357FF" },
  { u: "urban_myth", c: "W", color: "#F333FF" },
  { u: "neon_shadows", c: "he's back out there let's go", color: "#FF33A8" },
  { u: "concrete_jungle", c: "AURA +1000", color: "#33FFF3" },
  { u: "static_noise", c: "can't script this", color: "#FF8F33" },
  { u: "void_walker", c: "WWWWWWWW", color: "#8FFF33" },
];

export default function LivePlayer() {
  const [host, setHost] = useState("");
  const [messages, setMessages] = useState<typeof FAKE_CHAT>([]);

  useEffect(() => {
    setHost(window.location.hostname);
  }, []);

  // Faux chat effect
  useEffect(() => {
    // start with a few messages
    setMessages(FAKE_CHAT.slice(0, 4));

    const interval = setInterval(() => {
      setMessages(prev => {
        const nextMsg = FAKE_CHAT[Math.floor(Math.random() * FAKE_CHAT.length)];
        const updated = [...prev, nextMsg];
        if (updated.length > 20) updated.shift(); // keep it contained
        return updated;
      });
    }, 1500 + Math.random() * 2000); // random interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-background z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary p-1 shrink-0 relative">
              <img src={avatarImg} alt="Stitchnem" className="w-full h-full rounded-full object-cover" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                LIVE
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wide leading-none">
                THE BROADCAST
              </h2>
              <p className="text-muted-foreground font-sans tracking-widest text-xs sm:text-sm mt-1 uppercase">
                Real life streaming
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-sm font-sans tracking-widest text-white/60 bg-white/5 px-4 py-2 rounded border border-white/10"
          >
            <div className="flex items-center gap-2 text-primary font-bold">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              REC
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div>IRL / JUST CHATTING</div>
          </motion.div>
        </div>

        {/* Player & Chat Layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:h-[600px]">
          
          {/* Main Player */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 aspect-video lg:aspect-auto bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl relative"
          >
            {host ? (
              <iframe
                src={`https://player.twitch.tv/?channel=stitchnem&parent=${host}&muted=true&autoplay=false`}
                height="100%"
                width="100%"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white/20 font-sans tracking-widest text-sm">
                INITIALIZING PLAYER...
              </div>
            )}
          </motion.div>

          {/* Faux Chat Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-80 bg-[#0a0a0a] border border-white/10 rounded-xl flex flex-col overflow-hidden shrink-0 h-80 lg:h-auto"
          >
            <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <span className="text-xs font-sans tracking-widest text-white/80 uppercase">Stream Chat</span>
              <span className="text-[10px] text-white/40">Ambience</span>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 font-sans text-sm hide-scrollbar" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
              <div className="flex flex-col gap-3">
                {messages.map((msg, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="break-words"
                  >
                    <span className="font-bold mr-2" style={{ color: msg.color }}>{msg.u}</span>
                    <span className="text-white/80">{msg.c}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-3 border-t border-white/10 bg-black">
              <div className="bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white/30 tracking-wider">
                Send a message...
              </div>
            </div>
          </motion.div>

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
