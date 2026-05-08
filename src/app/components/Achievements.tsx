import { motion } from "motion/react";
import { CheckCircle2, Trophy, Code, Briefcase, Award, Github } from "lucide-react";
import { useInView } from "./hooks/useInView";

const achievements = [
  { icon: Code, text: "Built AI Chatbot Projects", color: "from-blue-500 to-cyan-500" },
  { icon: Trophy, text: "Machine Learning Projects", color: "from-purple-500 to-pink-500" },
  { icon: Briefcase, text: "Solar Industry Automation Work", color: "from-orange-500 to-yellow-500" },
  { icon: Award, text: "SAP ABAP + AI Learning", color: "from-green-500 to-emerald-500" },
  { icon: Github, text: "Data Science & Predictive Analytics", color: "from-indigo-500 to-purple-500" },
  { icon: CheckCircle2, text: "Freelancing & Real-World Projects", color: "from-pink-500 to-rose-500" },
];

export function Achievements() {
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
            Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-200 group-hover:text-white transition-colors">
                      {achievement.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
