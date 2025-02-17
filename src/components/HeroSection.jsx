import profile from '../assets/images/hero-profile.png';
import { profileLinks } from '../ProfileLinks';
const HeroSection = ({ className }) => {
  const heroTags = [
    'Full Stack Developer',
    'JavaScript Enthusiast',
    'Problem Solver',
  ];
  return (
    <section
      id="ABOUT ME"
      className={`bg-gradient-to-r from-black via-neutral-900 to-transparent flex gap-10  justify-between border border-blue-800 rounded-3xl p-6 ${className}`}
    >
      <div className="text-center flex-1 space-y-4 my-auto">
        <span className="font-nunita text-2xl text-slate-300 font-semibold">
          Hi, I am
        </span>
        <p className="text-5xl font-oswald font-bold tracking-widest bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-clip-text text-transparent">
          Than Win Hline
        </p>
        <ul className="text-lg flex  justify-center text-slate-200">
          {heroTags.map((tag) => (
            <li
              key={tag}
              className="font-nunita px-2   border-r-2 last:border-r-0 text-nowrap"
            >
              {tag}
            </li>
          ))}
        </ul>
        <ul className="flex gap-4   justify-center">
          {profileLinks.map((item) => (
            <li
              key={item.name}
              className="text-2xl text-slate-400 hover:text-slate-200 hover:text-3xl h-10 w-8"
            >
              <a target="_blank" href={item.href}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <img
          className="w-56 h-56 rotate-3 object-cover border-4 rounded-md"
          src={profile}
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
