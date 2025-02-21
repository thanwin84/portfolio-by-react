import { projects } from '../constants';
import { motion } from 'motion/react';

const Projects = ({ className }) => {
  return (
    <section id="PROJECTS" className={` ${className}`}>
      <h2 className="mb-4 text-3xl font-oswald font-bold text-center bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-clip-text text-transparent tracking-wide">
        Projects
      </h2>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 font-nunita">
        {projects.map((project) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-800   px-4 py-4   rounded-md  hover:shadow-md hover:shadow-blue-400"
            key={project.title}
          >
            <img
              className="object-cover"
              src={project.imgUrl}
              alt={project.title}
            />
            <div className="mt-4   flex flex-col justify-between gap-4 h-48 ">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold font-oswald text-slate-200">
                  {project.title}
                </h2>
                <p className="font-nunita text-slate-400">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  className="w-full text-center  rounded-md flex-1 px-4 py-2 border text-slate-200 hover:bg-zinc-100 hover:text-slate-800 "
                  href={project.liveDemoLink}
                >
                  Live Demo
                </a>
                <a
                  className="w-full text-center rounded-md flex-1 px-4 py-2 border text-slate-200 hover:bg-zinc-100 hover:text-slate-800"
                  href={project.repoLink}
                >
                  Github Repo
                </a>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
