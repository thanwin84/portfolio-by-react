import Contact from './components/Contact';
import Educations from './components/Educations';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';

function App() {
  return (
    <main className="bg-zinc-900 min-h-screen p-6">
      <Header className="w-[85%] mx-auto" />
      <HeroSection className="w-[85%] mt-16 mx-auto" />
      <Educations className="w-[85%] mt-10 mx-auto" />
      <Projects className="w-[85%] mt-10 mx-auto" />
      <Contact className="w-[40%] mt-10 mx-auto" />
      <Footer className="w-[40%] mt-10 mx-auto" />
    </main>
  );
}

export default App;
