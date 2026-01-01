import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { getInTouch, mainBody } from "../../editable-stuff/config";

export function Contact() {
  if (!getInTouch.show) return null;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {getInTouch.heading}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {getInTouch.message}
          </p>
        </motion.div>

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardContent className="p-8">
              {/* Email CTA */}
              <div className="text-center mb-8">
                <motion.a
                  href={`mailto:${getInTouch.email}`}
                  className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-white hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-8 h-8" />
                  {getInTouch.email}
                </motion.a>
              </div>

              {/* Send Email Button */}
              <div className="flex justify-center mb-8">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8"
                  asChild
                >
                  <a href={`mailto:${getInTouch.email}`}>
                    <Send className="w-5 h-5" />
                    Send an Email
                  </a>
                </Button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-slate-500 text-sm">or connect with me on</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {mainBody.icons.map((icon, index) => (
                  <motion.a
                    key={index}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {icon.image === "fa-github" && (
                      <Github className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                    )}
                    {icon.image === "fa-linkedin" && (
                      <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    )}
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
