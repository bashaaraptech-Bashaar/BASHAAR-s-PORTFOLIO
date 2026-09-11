import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJsonwebtokens,
  SiVite,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";

const developmentSkills = [
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: FaJs },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "Git", icon: FaGitAlt },
  { name: "Vite", icon: SiVite },
  { name: "Figma", icon: SiFigma },
  { name: "Photoshop", icon: SiAdobephotoshop },
];

const otherSkills = [
  "React Router",
  "REST APIs",
  "Mongoose",
  "Framer Motion",
  "Adobe Illustrator",
  "Microsoft Word",
  "Microsoft Excel",
];

function About() {
  return (
    <section className="min-h-screen border-t border-white/10 px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-20 flex items-center gap-4">
          <span className="text-sm text-[#c8ff00]">01</span>

          <span className="h-px w-12 bg-white/20" />

          <span className="text-sm uppercase tracking-[0.2em] text-white/40">
            About
          </span>
        </div>

        {/* INTRO */}

        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl"
          >
            Turning ideas into
            <span className="text-white/30">
              {" "}
              real products.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-lg leading-8 text-white/60">
              I'm a web developer who enjoys building modern,
              responsive interfaces and full-stack applications.
              I like understanding how the frontend, backend and
              database work together to create a complete product.
            </p>

            <p className="mt-6 leading-7 text-white/40">
              My development work mainly revolves around React,
              JavaScript, Node.js, Express and MongoDB. Through
              personal projects and professional training, I've
              worked on everything from responsive interfaces to
              authentication, REST APIs, databases and e-commerce
              functionality.
            </p>

            <p className="mt-6 leading-7 text-white/40">
              I'm currently pursuing my BS in Computer Science and
              looking for opportunities where I can continue
              learning, contribute to real-world projects and
              grow as a developer.
            </p>
          </motion.div>

        </div>

        {/* EDUCATION / TRAINING */}

        <div className="mt-28 grid gap-6 md:grid-cols-2">

          {/* MAJU */}

          <motion.a
            href="https://www.jinnah.edu/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
            className="group rounded-[1.5rem] border border-white/10 bg-[#111111] p-7 transition hover:border-[#c8ff00]/30"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#c8ff00]">
              Education
            </p>

            <h2 className="mt-5 text-2xl font-semibold">
              BS Computer Science
            </h2>

            <p className="mt-2 text-white/40">
              Muhammad Ali Jinnah University (MAJU)
            </p>

            <p className="mt-6 text-sm text-white/30">
              Currently pursuing my degree in Computer Science.
            </p>

            <span className="mt-7 inline-flex items-center gap-2 text-sm text-white/50 transition group-hover:text-[#c8ff00]">
              Visit MAJU
              <span>↗</span>
            </span>
          </motion.a>

          {/* NEXSKILL */}

          <motion.a
            href="https://www.nexskill.com/full-stack-javascript/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
            className="group rounded-[1.5rem] border border-white/10 bg-[#111111] p-7 transition hover:border-[#c8ff00]/30"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#c8ff00]">
              Professional Training
            </p>

            <h2 className="mt-5 text-2xl font-semibold">
              Full-Stack Development
            </h2>

            <p className="mt-2 text-white/40">
              NexSkill
            </p>

            <p className="mt-6 text-sm text-white/30">
              Practical full-stack development training covering
              modern frontend and backend technologies.
            </p>

            <span className="mt-7 inline-flex items-center gap-2 text-sm text-white/50 transition group-hover:text-[#c8ff00]">
              View NexSkill
              <span>↗</span>
            </span>
          </motion.a>

        </div>

        {/* SKILLS */}

        <div className="mt-28">

          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c8ff00]">
              Skills
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Tools I work with.
            </h2>

            <p className="mt-4 max-w-xl text-white/40">
              A combination of development, design and productivity
              tools I use while building digital products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

            {developmentSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#c8ff00]/30"
                >
                  <Icon
                    size={22}
                    className="text-white/40 transition group-hover:text-[#c8ff00]"
                  />

                  <span className="text-sm text-white/70">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}

          </div>

          {/* OTHER SKILLS */}

          <div className="mt-3 flex flex-wrap gap-2">

            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/35"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* CURRENT STATUS */}

        <div className="mt-28 border-t border-white/10 pt-10">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#c8ff00]">
                Currently
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Looking for internship opportunities.
              </h2>
            </div>

            <a
              href="mailto:bashaaraptech@gmail.com"
              className="w-fit rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-[#c8ff00]/40 hover:text-[#c8ff00]"
            >
              Get in touch →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;