import profile from '../assets/images/hero-profile.png';
import { profileLinks } from '../ProfileLinks';
import { motion } from 'motion/react';
const HeroSection = ({ className }) => {
  const heroTags = [
    'Full Stack Developer',
    'JavaScript Enthusiast',
    'Problem Solver',
  ];
  return (
    <section
      id="ABOUT ME"
      className={` flex flex-col md:flex-row gap-10  justify-between  rounded-3xl p-6 ${className}`}
    >
      <div className="text-center flex-1 space-y-4 my-auto">
        <span className="font-nunita text-2xl text-slate-300 font-semibold">
          Hi, I am
        </span>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-5xl font-oswald font-bold tracking-widest bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-clip-text text-transparent"
        >
          Than Win Hline
        </motion.p>
        <ul className="text-sm lg:text-base flex flex-wrap justify-center text-slate-200">
          {heroTags.map((tag) => (
            <li
              key={tag}
              className="font-nunita px-2   border-r-2 last:border-r-0 text-nowrap"
            >
              {tag}
            </li>
          ))}
        </ul>
        <ul className="flex  gap-4   justify-center">
          {profileLinks.map((item) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              key={item.name}
              className="text-2xl text-slate-400 hover:text-slate-200  h-10 w-8"
            >
              <a target="_blank" href={item.href}>
                {item.icon}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="flex-1 order-first md:order-last">
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: 10 }}
          whileHover={{ rotate: 0, delay: 0, duration: 0.1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="z-10 w-48 h-48 md:w-56 md:h-56  object-cover border-4 rounded-md mx-auto"
          src={profile}
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
