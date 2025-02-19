import { navLinks } from '../constants';
import { motion } from 'motion/react';
const Navigation = ({ className }) => {
  return (
    <nav className={` ${className}`}>
      <ul className="flex  gap-4  justify-between font-nunita font-semibold">
        {navLinks.map((link) => (
          <motion.li
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            key={link}
            className="cursor-pointer text-slate-300 py-3 hover:border-b hover:text-slate-100 hover:border-b-slate-300"
          >
            <a href={'#' + link}>{link}</a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
