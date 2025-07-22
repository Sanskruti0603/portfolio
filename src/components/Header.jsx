import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Qualification",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white shadow-lg  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <a
          href="#home"
          className="flex flex-col items-center text-center leading-none"
          style={{ lineHeight: "1.1" }}
        >
          <span className="text-4xl sm:text-5xl font-[Satisfy] italic text-cyan-300 leading-none">
            Sanskruti
          </span>
          <span className="text-xs sm:text-sm text-white font-light tracking-wide -mt-1">
            - MERN Dev
          </span>
        </a>

        <nav className="hidden md:flex gap-6 font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-white/80 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white font-medium hover:text-white/80 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
