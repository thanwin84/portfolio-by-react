import { projects } from '../constants';

const Projects = ({ className }) => {
  return (
    <section id="PROJECTS" className={` ${className}`}>
      <h2 className="mb-4 text-3xl font-oswald font-bold text-center text-blue-400 tracking-wide">
        Projects
      </h2>
      <ul className="flex gap-4 mt-4 font-nunita">
        {projects.map((project) => (
          <li
            className="bg-zinc-800  shadow-md px-4 py-4 hover:scale-105 rounded-md"
            key={project.title}
          >
            <img
              className="object-cover"
              src={project.imgUrl}
              alt={project.title}
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold font-oswald text-slate-200">
                {project.title}
              </h2>
              <p className="font-nunita text-slate-400">
                {project.description}
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  className="text-center rounded-md flex-1 px-4 py-2 border text-slate-200 hover:bg-zinc-100 hover:text-slate-800 "
                  href={project.liveDemoLink}
                >
                  Live Demo
                </a>
                <a
                  className="text-center rounded-md flex-1 px-4 py-2 border text-slate-200 hover:bg-zinc-100 hover:text-slate-800"
                  href={project.repoLink}
                >
                  Github Repo
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
