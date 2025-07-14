import { motion } from "framer-motion";

const education = [
  {
    degree:
      "MSC.(CA & IT) – Master of Science in Computer Application and Information Technology",
    institution:
      "K.S. School of Business Management and IT, Gujarat University",
    duration: "2024 – 2026",
  },
  {
    degree:
      "BSC.(CA & IT) – Bachelor of Science in Computer Application and Information Technology",
    institution:
      "K.S. School of Business Management and IT, Gujarat University",
    duration: "2021 – 2024",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Gyanda Girl's High School",
    duration: "2019 – 2021",
  },
];

const Qualification = () => {
  return (
    <section
      id="qualification"
      className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white text-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-16 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Qualification
      </motion.h2>

      <div className="relative max-w-4xl mx-auto before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-700">
        {education.map((item, idx) => (
          <motion.div
            key={idx}
            className={`relative w-full md:w-1/2 px-4 py-6 ${
              idx % 2 === 0 ? "md:pr-10 md:ml-auto" : "md:pl-10 md:mr-auto"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
              <h3 className="text-lg font-semibold text-sky-400 mb-1">
                {item.degree}
              </h3>
              <p className="text-gray-300 mb-1">{item.institution}</p>
              <p className="text-sm text-gray-400">{item.duration}</p>
            </div>
            <div className="absolute top-6 w-4 h-4 bg-sky-500 rounded-full border-4 border-gray-900 left-1/2 transform -translate-x-1/2"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Qualification;
