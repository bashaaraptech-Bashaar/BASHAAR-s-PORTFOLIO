import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  const fullStack = projects.filter(
    (project) => project.category === "FULL-STACK"
  );

  const frontend = projects.filter(
    (project) => project.category === "FRONTEND"
  );

  const backend = projects.filter(
    (project) => project.category === "BACKEND"
  );

  return (
    <section className="min-h-screen border-t border-white/10 px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm text-[#c8ff00]">02</span>

          <span className="h-px w-12 bg-white/20" />

          <span className="text-sm uppercase tracking-[0.2em] text-white/40">
            Selected Work
          </span>
        </div>

        <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl"
          >
            Things I've
            <span className="text-white/30"> built.</span>
          </motion.h1>

          <p className="max-w-sm text-sm leading-6 text-white/40">
            A selection of frontend and full-stack projects I've
            built while developing my skills.
          </p>

        </div>

        {/* FULL STACK */}

        {fullStack.length > 0 && (
          <div className="mb-24">

            <div className="mb-8 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#c8ff00]">
                FULL-STACK
              </span>

              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {fullStack.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={index === 0}
                />
              ))}
            </div>

          </div>
        )}

        {/* FRONTEND */}

        {frontend.length > 0 && (
          <div className="mb-24">

            <div className="mb-8 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#c8ff00]">
                FRONTEND
              </span>

              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {frontend.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

          </div>
        )}

        {/* BACKEND */}

        {backend.length > 0 && (
          <div>

            <div className="mb-8 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#c8ff00]">
                BACKEND
              </span>

              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {backend.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;