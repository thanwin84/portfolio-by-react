import { motion, useScroll } from 'motion/react';
import Contact from './components/Contact';
import Educations from './components/Educations';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
('use client');
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: '#ff0088',
        }}
      />
      <main className="w-full bg-black/90 min-h-screen p-6 relative">
        <Header className="w-[85%] mx-auto" />
        <HeroSection className="w-[85%] mt-16 mx-auto" />
        <Educations className="w-[85%] mt-10 mx-auto" />
        <Projects className="w-[85%] mt-10 mx-auto" />
        <Contact className="w-[80%] lg:w-[40%]  mt-10 mx-auto" />
        <Footer className="w-[40%] mt-10 mx-auto" />
      </main>
    </>
  );
}

export default App;
