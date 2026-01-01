import { motion } from "framer-motion";
import { Briefcase, Building2, Code2 } from "lucide-react";
import { stats } from "../../editable-stuff/config";

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Building2,
  Code2,
};

export function Stats() {
  if (!stats.show) return null;

  return (
    <section id="stats" className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.data.map((stat, index) => {
            const IconComponent = iconComponents[stat.icon];
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10"
                  whileHover={{ scale: 1.1 }}
                >
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  )}
                </motion.div>
                <motion.h3
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-slate-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
