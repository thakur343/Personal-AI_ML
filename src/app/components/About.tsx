import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am an AI and Machine Learning enthusiast with experience in chatbot development,
                data science, electrical engineering systems, and intelligent automation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in building real-world AI applications including solar industry automation,
                AI assistants, predictive systems, and smart dashboards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
