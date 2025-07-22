import { motion } from "framer-motion";

const projects = [
  {
    title: "URL Shortener",
    description:
      "A Node.js-based web app to shorten long URLs with history tracking and analytics. Built using Express, MongoDB, and EJS, it tracks the number of visits, original URLs, and redirection times.",
    link: "https://github.com/Sanskruti0603/short-url",
    image:
      "data:image/webp;base64,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", // Add image path here
  },
  {
    title: "Blogify",
    description:
      "A dynamic blogging platform built using Node.js, Express, and EJS. Users can create, edit, and delete blog posts with a clean interface. It focuses on simplicity and efficient content delivery.",
    link: "https://github.com/Sanskruti0603/Blogify",
    image:
      "https://th.bing.com/th/id/OIP.DQ3QtW0XKz5LTj0CSmQDaAHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  },
  {
    title: "Glorious Gifts",
    description:
      "An e-commerce website for gift items built with JavaScript and Node.js. Features include dynamic product listings, cart functionality, and order summaries. It provides a smooth shopping experience.",
    link: "https://github.com/Sanskruti0603/Glorious_gifts",
    image:
      "https://th.bing.com/th/id/OIP.EzY-4JzKGjz7JJfNucaEPgHaE8?w=278&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
  },
  {
    title: "NestCash Bank",
    description:
      "A full-featured banking application built with the MERN stack. It includes fixed deposits, loan management, KYC verification, account details, and Razorpay payment integration.",
    link: "https://github.com/Sanskruti0603/nestcash",
    image:
      "data:image/webp;base64,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",
    live: "https://nest-i9y3.vercel.app",
  },
  {
    title: "BookHeaven",
    description:
      "An e-commerce book store built with the MERN stack. Users can browse, search, and purchase books online. Includes features like user authentication, shopping cart, product filtering, and secure checkout.",
    link: "https://github.com/Sanskruti0603/book-store",
    image:
      "https://c8.alamy.com/comp/2A24RJH/bookstore-shop-exterior-books-shop-brick-building-2A24RJH.jpg",
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
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
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

            <div className="mt-4 space-x-4">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-sky-500 underline hover:text-sky-400 transition duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
              >
                GitHub
              </motion.a>

              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400 underline hover:text-green-300 transition duration-300 inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
