import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "JavaScript",
    icon: FaJs,
  },
  {
    name: "HTML",
    icon: FaHtml5,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
  },
];

function Skills() {
  return (
    <section className="border-t border-white/10 px-6 py-28 lg:px-10">

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm text-[#c8ff00]">
            02
          </span>

          <span className="h-px w-12 bg-white/20" />

          <span className="text-sm uppercase tracking-[0.2em] text-white/40">
            Skills
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">

          <div>
            <h2 className="text-4xl font-semibold tracking-tight">
              Tools I use
            </h2>

            <p className="mt-5 max-w-sm text-white/40">
              Technologies I use to design, develop and
              connect modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

            {skills.map((skill, index) => {

              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#c8ff00]/30"
                >

                  <Icon
                    size={23}
                    className="text-white/50 transition group-hover:text-[#c8ff00]"
                  />

                  <span className="text-sm text-white/70">
                    {skill.name}
                  </span>

                </motion.div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;