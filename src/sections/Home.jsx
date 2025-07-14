import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-6 pt-2"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-4 leading-tight">
            Hi, I'm <span className="text-sky-600">Sanskruti</span>
          </h1>
          <p className="text-lg text-gray-500 mb-6">
            A passionate <strong>MERN Stack Developer</strong> skilled in
            building full-stack web applications using modern technologies like{" "}
            <strong>MongoDB</strong>, <strong>Express.js</strong>,{" "}
            <strong>React</strong>, <strong>Node.js</strong>, and{" "}
            <strong>Tailwind CSS</strong>. Dedicated to creating responsive,
            accessible, and user-friendly interfaces with robust backend
            functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-sky-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-sky-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-sky-600 text-sky-600 px-6 py-3 rounded-lg font-medium hover:bg-sky-50 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-72 h-96 md:w-96 md:h-[28rem] rounded-xl border border-white/20 backdrop-blur-md bg-white/10 shadow-xl overflow-hidden cursor-pointer  duration-300 hover:scale-110">
            <img
              src="me.jpeg"
              alt="Sanskruti"
              className="w-full h-full object-cover mix-blend-lighten"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
