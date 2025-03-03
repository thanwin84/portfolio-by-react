import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const Header = ({ className }) => {
  return (
    <header className={`flex justify-between ${className}`}>
      <div>
        <h1 className="text-slate-100 font-bold font-oswald text-xl tracking-widest">
          Than Win Hline
        </h1>
        <span className="ml-4 text-slate-200 text-sm font-nunita tracking-widest">
          FULLSTACK DEVELOPER
        </span>
      </div>
      <Navigation className="hidden md:flex" />
      <MobileNavigation />
    </header>
  );
};

export default Header;
