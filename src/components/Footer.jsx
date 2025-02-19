import { navLinks } from '../constants';

const Footer = () => {
  return (
    <footer className=" px-6 py-10 mt-6 border border-blue-800  rounded-3xl ">
      <div className="flex flex-col items-center md:items-end md:flex-row justify-between">
        <ul className="flex gap-2 text-sm text-slate-400 ">
          {navLinks.map((link) => (
            <li key={link} className="hover:text-slate-100">
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
        <p className="text-slate-300 ">
          <small>&copy; 2024 Than Win Hline. All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
