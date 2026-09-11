import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0d0d0d]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* LOGO */}

        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight"
        >
          BASHAAR<span className="text-[#c8ff00]">.</span>
        </Link>

        {/* DESKTOP NAV */}

        <div className="hidden items-center gap-10 md:flex">

          <Link
            to="/"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm text-white/70 transition hover:text-white"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Contact
          </Link>

        </div>

        {/* AVAILABLE */}

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/80 transition hover:border-[#c8ff00]/50 hover:text-[#c8ff00] lg:flex"
        >
          <span className="h-2 w-2 rounded-full bg-[#c8ff00]" />

          Available for work

          <FiArrowUpRight />
        </Link>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </nav>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0d0d0d] px-6 py-6 md:hidden">

          <div className="flex flex-col gap-6">

            <Link
              to="/"
              onClick={closeMenu}
              className="text-lg text-white/80"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="text-lg text-white/80"
            >
              About
            </Link>

            <Link
              to="/projects"
              onClick={closeMenu}
              className="text-lg text-white/80"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-lg text-white/80"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#c8ff00]" />

              Available for work
            </Link>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;