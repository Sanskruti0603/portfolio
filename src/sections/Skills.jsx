import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: "React.js", icon: <FaReact className="text-sky-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-400 text-3xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-300 text-3xl" />,
  },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6 text-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-white border border-gray-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
            <span className="mt-3 font-semibold text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
