import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const skills = [
  { name: "Machine Learning", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Data Science", level: 85, color: "from-purple-500 to-pink-500" },
  { name: "Python", level: 95, color: "from-green-500 to-emerald-500" },
  { name: "AI Chatbots", level: 90, color: "from-orange-500 to-yellow-500" },
  { name: "OpenAI API", level: 88, color: "from-indigo-500 to-purple-500" },
  { name: "TensorFlow", level: 80, color: "from-pink-500 to-rose-500" },
  { name: "Next.js", level: 85, color: "from-cyan-500 to-blue-500" },
  { name: "FastAPI", level: 87, color: "from-violet-500 to-purple-500" },
  { name: "MongoDB", level: 82, color: "from-teal-500 to-cyan-500" },
];

export function Skills() {
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
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="space-y-3">
                  <h3 className="text-xl text-white">{skill.name}</h3>
                  <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: index * 0.05 + 0.2, duration: 1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                  <p className="text-sm text-gray-400">{skill.level}%</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
