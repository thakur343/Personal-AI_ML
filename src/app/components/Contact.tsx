import { motion } from "motion/react";
import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react";
import { useInView } from "./hooks/useInView";

const contactMethods = [
  { icon: Mail, label: "Email", value: "yourname@gmail.com", href: "mailto:yourname@gmail.com", color: "from-red-500 to-orange-500" },
  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", href: "tel:+91XXXXXXXXXX", color: "from-green-500 to-emerald-500" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/91XXXXXXXXXX", color: "from-green-400 to-green-600" },
  { icon: Github, label: "GitHub", value: "github.com/yourname", href: "https://github.com/yourname", color: "from-gray-600 to-gray-800" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourname", href: "https://linkedin.com/in/yourname", color: "from-blue-600 to-blue-800" },
];

export function Contact() {
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
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${method.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg text-white">{method.label}</h3>
                    <p className="text-sm text-gray-400 break-all">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-16 text-gray-500"
          >
            <p>© 2026 [Your Name]. Built with React, Tailwind CSS & Motion.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
