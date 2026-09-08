import { motion } from "framer-motion";

const technologies = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "bg-[#3776AB]" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", color: "bg-[#000000]" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg", color: "bg-[#FFCA28]" },
  { name: "Render", icon: null, color: "bg-[#46E3B7]" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "bg-[#FF9900]" },
  { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg", color: "bg-[#00C7B7]" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", color: "bg-[#009688]" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "bg-[#61DAFB]" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "bg-[#F05032]" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", color: "bg-[#181717]" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", color: "bg-[#2496ED]" },
  { name: "RAG", icon: null, color: "bg-[#8A2BE2]" },
  { name: "Transformer", icon: null, color: "bg-[#FF3333]" },
  { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", color: "bg-[#F9AB00]" },
  { name: "LLM", icon: null, color: "bg-[#008000]" },
];

const TechStackSection = () => {
  return (
    <div className="w-full py-6 border-t border-b border-foreground/10 bg-foreground/[0.02] flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full overflow-hidden relative flex items-center"
      >
        {/* Gradients to fade edges */}
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Marquee Animation */}
        <div className="flex w-max animate-[marquee_35s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused] py-1">
          {[...technologies, ...technologies].map((tech, i) => (
            <div 
              key={i} 
              className={`mx-2 px-4 py-2 rounded-lg text-white font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 cursor-default shadow-md shrink-0 ${tech.color}`}
            >
              {tech.icon ? (
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-4 h-4 object-contain" 
                  loading="lazy"
                  decoding="async" 
                />
              ) : (
                <span className="w-4 h-4 flex items-center justify-center text-[10px]">{tech.name[0]}</span>
              )}
              <span className="tracking-wide uppercase">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default TechStackSection;