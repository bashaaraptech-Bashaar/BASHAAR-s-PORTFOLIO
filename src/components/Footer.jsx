import {
  FiGithub,
  FiInstagram,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-10">

      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="font-semibold">
            BASHAAR<span className="text-[#c8ff00]">.</span>
          </p>

          <p className="mt-1 text-xs text-white/30">
            Full-Stack Web Developer
          </p>
        </div>

        <div className="flex items-center gap-5">

          <a
            href="https://github.com/bashaaraptech-Bashaar"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-white/35 transition hover:text-[#c8ff00]"
          >
            <FiGithub size={18} />
          </a>

          <a
            href="https://www.instagram.com/bashaar__5643/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-white/35 transition hover:text-[#c8ff00]"
          >
            <FiInstagram size={18} />
          </a>

          <a
            href="https://wa.me/923132917263"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="text-white/35 transition hover:text-[#c8ff00]"
          >
            <FaWhatsapp size={18} />
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
            <FiMail size={18} />
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="ml-2 flex items-center gap-2 text-xs text-white/30 transition hover:text-white"
          >
            Top
            <FiArrowUpRight />
          </a>

        </div>

      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6">
        <p className="text-xs text-white/20">
          © 2026 Bashaar. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;