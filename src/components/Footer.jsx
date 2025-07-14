import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 text-center">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-4">
        <a
          href="https://www.linkedin.com/in/sanskruti-darji-7640232b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-sky-400 transition"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="https://github.com/Sanskruti0603"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-sky-400 transition"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="mailto:sanskrutidarji2@gmail.com"
          className="flex items-center gap-2 hover:text-sky-400 transition"
        >
          <FaEnvelope />
          sanskrutidarji2@gmail.com
        </a>
        <a
          href="tel:+916359482594"
          className="flex items-center gap-2 hover:text-sky-400 transition"
        >
          <FaPhone />
          +91 6359482594
        </a>
      </div>

      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Sanskruti. All rights reserved.
      </p>
    </footer>
  );
}
