import { navLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="flex justify-between p-6 mt-6 ">
      <ul className="flex gap-2 text-sm text-slate-400 ">
        {navLinks.map((link) => (
          <li className="hover:text-slate-100">
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <p className="text-slate-300">
        <small>&copy; 2024 Than Win Hline. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
