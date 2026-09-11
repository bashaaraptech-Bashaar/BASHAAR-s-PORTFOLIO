import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className={featured ? "lg:col-span-2" : ""}
    >
      {/* PROJECT IMAGE */}
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="group block"
      >
        <div
  className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] ${
    featured
      ? "aspect-[16/9]"
      : "aspect-[16/10]"
  }`}
>
         <div className="flex h-full w-full items-center justify-center bg-[#111111] p-3 sm:p-5">
  <img
    src={project.image}
    alt={`${project.title} project screenshot`}
    className="max-h-full max-w-full object-contain transition duration-700 group-hover:scale-[1.02]"
  />
</div>

          {/* dark hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">
            <div className="flex h-16 w-16 scale-75 items-center justify-center rounded-full bg-[#c8ff00] text-[#0d0d0d] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
              <FiArrowUpRight size={25} />
            </div>
          </div>

          {/* category */}
          <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-white/70 backdrop-blur-md">
            {project.category}
          </div>
        </div>
      </a>

      {/* INFO */}
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:max-w-xs sm:justify-end">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* GITHUB */}
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-xs text-white/30 transition hover:text-[#c8ff00]"
      >
        <FiGithub />
        Source code
      </a>
    </motion.article>
  );
}

export default ProjectCard;