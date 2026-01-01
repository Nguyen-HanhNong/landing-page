import { motion } from "framer-motion";
import { Heart, Github, Linkedin } from "lucide-react";
import { mainBody } from "../../editable-stuff/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            className="text-slate-400 text-sm flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "}
            {mainBody.firstName} {mainBody.lastName} © {currentYear}
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {mainBody.icons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
              >
                {icon.image === "fa-github" && <Github className="w-5 h-5" />}
                {icon.image === "fa-linkedin" && <Linkedin className="w-5 h-5" />}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
