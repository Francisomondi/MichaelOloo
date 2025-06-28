import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Motion Variants
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, delay },
  },
});

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Section Title */}
      <motion.h1
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-semibold"
      >
        My Projects
      </motion.h1>

      <div className="space-y-12">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center">
            {/* Project Image */}
            <motion.div
              variants={fadeIn("left", index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="rounded-lg shadow-md"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              variants={fadeIn("right", index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4 lg:pl-8"
            >
              {/* Project Title with Link */}
              <h2 className="mb-2 text-xl font-semibold">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                >
                  {project.title} <FaExternalLinkAlt className="inline-block ml-1 text-sm" />
                </a>
              </h2>

              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-purple-900 px-3 py-1 text-sm font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Button & GitHub Link */}
              <div className="flex gap-4">
                

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-500 hover:text-purple-400 transition"
                  >
                   
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
