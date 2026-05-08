import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "./hooks/useInView";

const projects = [
  {
    title: "Solar AI Assistant",
    description: "AI-powered chatbot for solar industry automation with predictive analytics and smart recommendations.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tech: ["Python", "OpenAI API", "FastAPI", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "Fault Detection System",
    description: "Machine learning model for real-time fault detection in electrical systems with 95% accuracy.",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tech: ["TensorFlow", "Python", "Scikit-learn", "Flask"],
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Chatbot Platform",
    description: "Multi-purpose intelligent chatbot with NLP capabilities for customer service automation.",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tech: ["Next.js", "OpenAI", "MongoDB", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "ML Dashboard",
    description: "Interactive dashboard for visualizing machine learning model performance and data insights.",
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    tech: ["React", "D3.js", "Python", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all group"
              >
                {/* Project Image */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
