import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiInstagram,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const contacts = [
  {
    name: "Email",
    value: "bashaaraptech@gmail.com",
    href: "mailto:bashaaraptech@gmail.com",
    icon: FiMail,
  },
  {
    name: "WhatsApp",
    value: "Message me",
    href: "https://wa.me/923132917263",
    icon: FaWhatsapp,
  },
  {
    name: "Phone",
    value: "Call me",
    href: "tel:+923132917263",
    icon: FiPhone,
  },
  {
    name: "GitHub",
    value: "bashaaraptech-Bashaar",
    href: "https://github.com/bashaaraptech-Bashaar",
    icon: FiGithub,
  },
  {
    name: "Instagram",
    value: "@bashaar__5643",
    href: "https://www.instagram.com/bashaar__5643/",
    icon: FiInstagram,
  },
];

function Contact() {
  return (
    <section className="min-h-screen border-t border-white/10 px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm text-[#c8ff00]">03</span>

          <span className="h-px w-12 bg-white/20" />

          <span className="text-sm uppercase tracking-[0.2em] text-white/40">
            Contact
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-[#111111] px-6 py-20 text-center sm:px-10 lg:py-28"
        >

          <p className="text-sm uppercase tracking-[0.2em] text-[#c8ff00]">
            Let's connect
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Have a project
            <span className="text-white/30"> in mind?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg leading-7 text-white/40">
            I'm currently looking for internship opportunities
            and I'm always interested in learning, building and
            working on interesting web projects.
          </p>

        </motion.div>

        {/* CONTACT LINKS */}

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target={
                  contact.name === "Phone" ||
                  contact.name === "Email"
                    ? undefined
                    : "_blank"
                }
                rel="noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.06,
                }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#c8ff00]/30"
              >

                <div className="flex items-center justify-between">

                  <Icon
                    size={21}
                    className="text-white/40 transition group-hover:text-[#c8ff00]"
                  />

                  <FiArrowUpRight
                    className="text-white/20 transition group-hover:text-[#c8ff00] group-hover:rotate-45"
                  />

                </div>

                <p className="mt-8 text-xs uppercase tracking-[0.15em] text-white/30">
                  {contact.name}
                </p>

                <p className="mt-2 truncate text-sm text-white/65">
                  {contact.value}
                </p>

              </motion.a>
            );
          })}

        </div>

        {/* EMAIL CTA */}

        <div className="mt-20 text-center">

          <p className="text-sm text-white/30">
            Prefer email?
          </p>

          <a
            href="mailto:bashaaraptech@gmail.com"
            className="mt-3 inline-flex items-center gap-2 text-xl font-medium text-white transition hover:text-[#c8ff00] sm:text-2xl"
          >
            bashaaraptech@gmail.com
            <FiArrowUpRight />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;