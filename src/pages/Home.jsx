import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import myImg from "../assets/images/myimg.jpg";

function Home() {
  return (
    <section className="min-h-screen px-6 pb-20 pt-32 lg:px-10">
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT */}

        <div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-[#c8ff00]" />

            <span className="text-sm text-white/50">
              Frontend & Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
          >
            I build modern
            <span className="block text-white/30">
              web experiences.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 max-w-xl text-base leading-7 text-white/45 sm:text-lg"
          >
            I'm a developer focused on creating responsive interfaces
            and full-stack web applications using modern technologies.
            I enjoy turning ideas into practical digital products.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="group flex items-center gap-3 rounded-full bg-[#c8ff00] px-6 py-3.5 text-sm font-semibold text-[#0d0d0d] transition hover:scale-105"
            >
              View my work

              <FiArrowUpRight className="transition group-hover:rotate-45" />
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
            >
              Let's talk
            </Link>
          </motion.div>

          {/* SOCIAL ICONS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="https://github.com/bashaaraptech-Bashaar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/35 transition hover:text-[#c8ff00]"
            >
              <FiGithub size={19} />
            </a>

            <a
              href="https://www.instagram.com/bashaar__5643/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-white/35 transition hover:text-[#c8ff00]"
            >
              <FiInstagram size={19} />
            </a>

            <a
              href="https://wa.me/923132917263"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-white/35 transition hover:text-[#c8ff00]"
            >
              <FaWhatsapp size={19} />
            </a>

            <a
              href="tel:+923132917263"
              aria-label="Phone"
              className="text-white/35 transition hover:text-[#c8ff00]"
            >
              <FiPhone size={18} />
            </a>

            <a
              href="mailto:bashaaraptech@gmail.com"
              aria-label="Email"
              className="text-white/35 transition hover:text-[#c8ff00]"
            >
              <FiMail size={19} />
            </a>
          </motion.div>

        </div>

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515]">

            <img
              src={myImg}
              alt="Bashaar - Full-Stack Developer"
              className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#c8ff00]" />

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Currently
                </span>
              </div>

              <p className="mt-2 text-sm text-white/80">
                Building full-stack projects
              </p>

            </div>
          </div>

          <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-[#c8ff00]/20" />
          <div className="absolute -bottom-3 -left-3 h-10 w-10 rounded-full bg-[#c8ff00]" />

        </motion.div>

      </div>
    </section>
  );
}

export default Home;