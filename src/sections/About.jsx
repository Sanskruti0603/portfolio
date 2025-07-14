import { motion } from "framer-motion";
import "./about.css"; // 👈 Add this line if using external CSS for scrollbar

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6 text-center py-2 sm:py-0 sm:h-[80vh] sm:px-4"
    >
      <div className="sm:h-[80vh] sm:overflow-y-scroll sm:pr-2 sm:-mr-2 scrollable">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 py-10 px-6 bg-slate-800 rounded-xl shadow-lg  duration-300 hover:scale-110 cursor-pointer "
        >
          <h2 className="text-4xl font-bold mb-6 text-slate-100">About Me</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            I'm a passionate{" "}
            <strong className="text-sky-400">MERN Stack Developer</strong> with
            a deep interest in building full-stack web applications using{" "}
            <strong className="text-sky-400">MongoDB</strong>,{" "}
            <strong className="text-sky-400">Express.js</strong>,{" "}
            <strong className="text-sky-400">React</strong>, and{" "}
            <strong className="text-sky-400">Node.js</strong>. I enjoy crafting
            responsive, accessible, and visually appealing interfaces using{" "}
            <strong className="text-sky-400">Tailwind CSS</strong>.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Currently pursuing my degree in{" "}
            <strong className="text-sky-400">Computer Science</strong>, I’m
            constantly exploring new technologies, frameworks, and tools to
            improve both frontend and backend skills.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            I love working on real-world projects, collaborating with teams, and
            solving problems that create impact. My goal is to become a
            well-rounded full-stack engineer who writes clean, scalable, and
            efficient code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
