import { useState } from 'react';
import { navLinks } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
const MobileNavigation = ({ className }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`md:hidden ${className}`}>
      {!open ? (
        <Menu
          className="text-slate-300 hover:text-slate-100 cursor-pointer"
          onClick={() => setOpen(true)}
        />
      ) : (
        <AnimatePresence key={'modal'}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="shadow-md shadow-blue-400 rounded-2xl text-center z-50 w-[80%] bg-neutral-900 fixed border top-10 right-20 left-20 transform  flex flex-col gap-2  justify-between font-nunita font-semibold"
          >
            <X
              onClick={() => setOpen(false)}
              className="mt-4 self-end mr-5 text-slate-400 hover:text-slate-200 cursor-pointer"
            />
            <ul className="py-4">
              {navLinks.map((link) => (
                <motion.li
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-slate-300 py-3  hover:text-slate-100 hover:border-b-slate-300"
                >
                  <a href={'#' + link}>{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </nav>
  );
};

export default MobileNavigation;
