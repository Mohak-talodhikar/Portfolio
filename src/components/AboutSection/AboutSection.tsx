import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Target } from "lucide-react";

const highlights = [
  { icon: <Brain className="w-6 h-6" />, label: "AI & RAG Systems", value: "Specialized" },
  { icon: <Code2 className="w-6 h-6" />, label: "Full-Stack Development", value: "Proficient" },
  { icon: <Rocket className="w-6 h-6" />, label: "Cloud Architecture", value: "AWS & Firebase" },
  { icon: <Target className="w-6 h-6" />, label: "Currently Seeking", value: "AI Engineer Role" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        className="flex flex-col md:flex-row gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              B.Tech CSE graduate specializing in AI architecture and intelligent application design. 
              Experienced in engineering and deploying scalable web platforms and advanced RAG pipelines 
              using TypeScript, React, Firebase, and Google Gemini APIs. Currently expanding my expertise 
              in vector search optimization (FAISS) and intelligent workflow automation (n8n), while 
              actively seeking an entry-level AI Engineer or AI Intern role to build next-generation AI solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {["AI Enthusiast", "RAG Systems", "LLM Integration", "Cloud Native"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="px-4 py-2 text-sm font-medium rounded-full glass-panel border border-foreground/10 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="glass-panel p-6 rounded-2xl border border-foreground/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="text-primary mb-4 p-3 bg-primary/10 w-max rounded-xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{item.value}</h3>
              <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};