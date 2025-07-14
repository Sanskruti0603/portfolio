import { motion } from "framer-motion";

const projects = [
  {
    title: "URL Shortener",
    description:
      "A Node.js-based web app to shorten long URLs with history tracking and analytics. Built using Express, MongoDB, and EJS, it tracks the number of visits, original URLs, and redirection times.",
    link: "https://github.com/Sanskruti0603/short-url",
  },
  {
    title: "Blogify",
    description:
      "A dynamic blogging platform built using Node.js, Express, and EJS. Users can create, edit, and delete blog posts with a clean interface. It focuses on simplicity and efficient content delivery.",
    link: "https://github.com/Sanskruti0603/Blogify",
  },
  {
    title: "Glorious Gifts",
    description:
      "An e-commerce website for gift items built with JavaScript and Node.js. Features include dynamic product listings, cart functionality, and order summaries. It provides a smooth shopping experience.",
    link: "https://github.com/Sanskruti0603/Glorious_gifts",
  },
  {
    title: "NestCash Bank",
    description:
      "A full-featured banking application built with the MERN stack. It includes fixed deposits, loan management, KYC verification, account details, and Razorpay payment integration.",
    link: "https://github.com/Sanskruti0603/nestcash",
  },
  {
    title: "BookHeaven",
    description:
      "An e-commerce book store built with the MERN stack. Users can browse, search, and purchase books online. Includes features like user authentication, shopping cart, product filtering, and secure checkout.",
    link: "https://github.com/Sanskruti0603/book-store",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6 text-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 hover:bg-gray-700 min-h-[300px] p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-left text-white flex flex-col justify-between border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <motion.h3
                className="text-2xl font-semibold mb-2 text-sky-400 transition-all duration-300 hover:underline"
                whileHover={{ scale: 1.05 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-gray-300 text-base leading-relaxed break-words">
                {project.description}
              </p>
            </div>

            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm text-sky-500 underline hover:text-sky-400 transition duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              View on GitHub
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
