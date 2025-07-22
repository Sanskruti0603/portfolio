import { motion } from "framer-motion";
import "./about.css";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4 py-6 sm:px-6 text-center sm:py-0 overflow-hidden"
    >
      <div className="sm:h-[80vh] sm:overflow-y-scroll sm:pr-2 sm:-mr-2 scrollable">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-10 sm:mt-8 py-8 px-4 sm:px-6 bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-default sm:cursor-pointer"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
            About Me
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
            I'm a dedicated{" "}
            <strong className="text-sky-400">MERN Stack Developer</strong> who
            enjoys building full-stack web applications using{" "}
            <strong className="text-sky-400">MongoDB</strong>,{" "}
            <strong className="text-sky-400">Express.js</strong>,{" "}
            <strong className="text-sky-400">React</strong>, and{" "}
            <strong className="text-sky-400">Node.js</strong>. I love crafting
            responsive and accessible interfaces with{" "}
            <strong className="text-sky-400">Tailwind CSS</strong>.
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
            Currently, I'm pursuing my{" "}
            <strong className="text-sky-400">
              5th year of MSc in Information Technology
            </strong>{" "}
            at{" "}
            <strong className="text-sky-400">
              K.S. School of Business Management and Information Technology,
              Gujarat University
            </strong>
            , where I’m diving deep into software development, data structures,
            and system architecture.
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
            My goal is to become a well-rounded full-stack engineer who writes
            clean, scalable, and efficient code while contributing meaningfully
            to impactful projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
