import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Hero from '@/components/Hero';
import LivePlayer from '@/components/LivePlayer';
import Stats from '@/components/Stats';
import Clips from '@/components/Clips';
import TikTokSection from '@/components/TikTokSection';
import About from '@/components/About';
import Socials from '@/components/Socials';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Disable scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <div className="relative min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 bg-background"
        >
          <Hero />
          <Stats />
          <LivePlayer />
          <Clips />
          <About />
          <TikTokSection />
          <Socials />
          <Footer />
        </motion.main>
      )}
    </div>
  );
}
