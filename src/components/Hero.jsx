import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import myImg from "../assets/images/myimg.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-10"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute right-[-150px] top-[15%] h-[500px] w-[500px] rounded-full bg-[#c8ff00]/5 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr]">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 flex items-center gap-3 text-sm text-white/50">
            <span className="h-2 w-2 rounded-full bg-[#c8ff00]" />
            Frontend & Full-Stack Developer
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            I build
            <span className="text-[#c8ff00]"> modern </span>
            <br />
            web experiences.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
            I'm Bashaar, a developer focused on creating clean,
            responsive and functional web applications using
            modern frontend and backend technologies.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group flex items-center gap-3 rounded-full bg-[#c8ff00] px-6 py-3 text-sm font-semibold text-[#0d0d0d] transition hover:scale-105"
            >
              View my work
              <FiArrowUpRight className="transition group-hover:rotate-45" />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Contact me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="#"
              className="text-white/40 transition hover:text-[#c8ff00]"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>

            <a
              href="#"
              className="text-white/40 transition hover:text-[#c8ff00]"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT - YOUR PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515]">

            <img
              src={myImg}
              alt="Bashaar - Full-Stack Developer"
              className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* bottom information */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-md">
              <div>
                <p className="text-xs text-white/40">
                  Currently building
                </p>

                <p className="mt-1 text-sm font-medium">
                  Full-Stack Projects
                </p>
              </div>

              <div className="h-3 w-3 rounded-full bg-[#c8ff00]" />
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-white/30 transition hover:text-white/70 sm:flex"
      >
        Scroll to explore
        <FiArrowDown />
      </a>
    </section>
  );
}

export default Hero;