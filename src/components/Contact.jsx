import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-32 lg:px-10"
    >

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex items-center gap-4">

          <span className="text-sm text-[#c8ff00]">
            04
          </span>

          <span className="h-px w-12 bg-white/20" />

          <span className="text-sm uppercase tracking-[0.2em] text-white/40">
            Contact
          </span>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-[#111111] px-6 py-16 text-center sm:px-10 lg:py-24"
        >

          <p className="text-sm uppercase tracking-[0.2em] text-[#c8ff00]">
            Let's connect
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Have a project
            <span className="text-white/35"> in mind?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-white/40">
            I'm always interested in learning, building and
            working on interesting web projects.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="group mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-[#c8ff00] px-7 py-4 text-sm font-semibold text-[#0d0d0d] transition hover:scale-105"
          >
            <FiMail />
            Send me an email
            <FiArrowUpRight className="transition group-hover:rotate-45" />
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;