import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden relative">
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(45deg, #6366f1, #a855f7, #ec4899, #6366f1)",
                  backgroundSize: "300% 300%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />
              <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                {/* Placeholder for actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-6xl">
                  AI
                </div>
              </div>
            </div>

            {/* Floating animation */}
            <motion.div
              className="absolute inset-0"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hi, I'm [Your Name]
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-2 mb-6"
          >
            <p className="text-xl md:text-2xl text-gray-300">
              Machine Learning Engineer | AI Chatbot Developer | Data Science Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-2xl">
              I build AI-powered systems, intelligent chatbots, automation tools, and real-world ML solutions.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center gap-2 transition-all"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-500/50 rounded-full flex items-center gap-2 backdrop-blur-sm hover:bg-blue-500/10 transition-all"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
