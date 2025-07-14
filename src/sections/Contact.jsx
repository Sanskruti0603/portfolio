import { FaEnvelope, FaGithub, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6 text-center text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-lg text-gray-300 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Let's build something great together. Reach out to me!
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6">
       
        <motion.a
          href="mailto:sanskrutidarji2@gmail.com"
          className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-md shadow transition"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <FaEnvelope />
          Email Me
        </motion.a>

        
        <motion.a
          href="https://github.com/Sanskruti0603"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border-2 border-sky-500 text-sky-400 px-6 py-3 rounded-md hover:bg-gray-700 transition"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <FaGithub />
          GitHub
        </motion.a>

        
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <FaEye />
          View Resume
        </motion.a>
      </div>
    </section>
  );
}
