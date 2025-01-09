import { navLinks } from '../constants';

const Navigation = ({ className }) => {
  return (
    <nav className={` ${className}`}>
      <ul className="flex gap-4  justify-between font-nunita font-semibold">
        {navLinks.map((link) => (
          <li className="cursor-pointer text-slate-300 py-3 hover:border-b hover:text-slate-100 hover:border-b-slate-300">
            <a href={'#' + link}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
