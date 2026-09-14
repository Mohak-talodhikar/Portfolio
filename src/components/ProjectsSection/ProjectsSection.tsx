import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight, Code2, Brain, Zap, Globe, MessageSquare } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Aura Finance",
    subtitle: "Privacy-focused AI finance management platform",
    category: "AI / FinTech",
    link: "https://github.com/Mohak-talodhikar/Aura-Finance",
    image: "https://images.pexels.com/photos/6169673/pexels-photo-6169673.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gridClass: "md:col-span-7 h-[420px]",
    description: "A privacy-focused finance app for personal finance management, with multi-model AI insights and plain-language recommendations. Built with secure data handling by default.",
    features: ["AI-Powered Insights", "Privacy Focused", "Multi-Model AI", "Financial Analytics"],
    metrics: { type: "TypeScript", license: "MIT", status: "Active" },
    tech: ["TypeScript", "React", "AI/ML", "Privacy-First"]
  },
  {
    id: 2,
    title: "RAG ChatBot",
    subtitle: "End-to-end RAG chatbot with PDF processing",
    category: "AI / RAG",
    link: "https://github.com/Mohak-talodhikar/RAG-ChatBot",
    image: "https://images.pexels.com/photos/8294591/pexels-photo-8294591.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gridClass: "md:col-span-5 h-[420px]",
    description: "An end-to-end Retrieval-Augmented Generation (RAG) chatbot that processes PDF documents and generates grounded, context-aware answers with semantic search over FAISS and a local Hugging Face LLM.",
    features: ["PDF Processing", "Semantic Search", "Hugging Face LLM", "Grounded Answers"],
    metrics: { type: "Python", license: "MIT", status: "Active" },
    tech: ["Python", "RAG", "Hugging Face", "FAISS"]
  },
  {
    id: 3,
    title: "Personalize-AI ChatBot",
    subtitle: "Zia Assistant - AI-powered voice & text chatbot",
    category: "AI / Assistant",
    link: "https://github.com/Mohak-talodhikar/Personalize-AI-ChatBot",
    image: "https://images.pexels.com/photos/15595050/pexels-photo-15595050.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gridClass: "md:col-span-5 h-[360px]",
    description: "Zia Assistant is an AI-powered voice and text chatbot built using Python. It acts as a smart personal assistant capable of understanding voice commands, answering user queries, and engaging in natural conversations.",
    features: ["Voice Commands", "Text Chat", "Python AI", "Natural Language"],
    metrics: { type: "Python/HTML", license: "MIT", status: "Active" },
    tech: ["Python", "NLP", "Voice Recognition", "AI Assistant"]
  },
  {
    id: 4,
    title: "Serverless Online Voting System",
    subtitle: "Digital voting platform for student elections",
    category: "Web App",
    link: "https://github.com/Mohak-talodhikar/Online-voting-system",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gridClass: "md:col-span-7 h-[360px]",
    description: "A serverless digital voting platform designed for student elections. Features secure authentication, real-time vote counting, and an intuitive interface for electoral management.",
    features: ["Secure Voting", "Real-time Results", "Student Elections", "Serverless"],
    metrics: { type: "AWS Serverless", license: "MIT", status: "Active" },
    tech: ["AWS Lambda", "IAM", "DynamoDB", "Cognito", "CloudWatch", "S3", "GitHub Actions"]
  },
];

const categoryColors: Record<string, string> = {
  "AI / FinTech": "from-orange-500 to-rose-600",
  "AI / RAG": "from-violet-500 to-purple-600",
  "AI / Assistant": "from-cyan-500 to-blue-600",
  "Web App": "from-emerald-500 to-teal-600",
};

const categoryIcons: Record<string, React.ReactNode> = {
  "AI / FinTech": <Zap className="w-4 h-4" />,
  "AI / RAG": <Brain className="w-4 h-4" />,
  "AI / Assistant": <MessageSquare className="w-4 h-4" />,
  "Web App": <Globe className="w-4 h-4" />,
};

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          Selected <span className="text-gradient-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          Grounded RAG systems, AI assistants, and serverless web apps — every project links to its repo.
        </p>
      </motion.div>

      {/* Featured Project - Page Transition Style */}
      <div className="mb-16">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeProject}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <a 
              href={projects[activeProject].link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${projects[activeProject].title} repository in a new tab`}
              className="group relative overflow-hidden rounded-[2.25rem] shadow-2xl border border-foreground/10 h-[620px] min-[480px]:h-[580px] md:h-[550px] block"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-neutral-950">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 min-[480px]:p-8 md:p-12 flex flex-col justify-between">
                {/* Top: Category Badge */}
                <div className="flex justify-between items-start">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[projects[activeProject].category]} text-white text-sm font-semibold shadow-lg`}
                  >
                    {categoryIcons[projects[activeProject].category]}
                    {projects[activeProject].category}
                  </motion.span>
                  
                  <div className="flex items-center gap-2">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      aria-hidden="true"
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.span>
                  </div>
                </div>

                {/* Bottom: Project Info */}
                <div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight"
                  >
                    {projects[activeProject].title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-base min-[480px]:text-lg md:text-xl text-white/90 mb-4 max-w-3xl line-clamp-4 min-[480px]:line-clamp-none"
                  >
                    {projects[activeProject].description}
                  </motion.p>

                  {/* Features */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {projects[activeProject].features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90"
                      >
                        {feature}
                      </span>
                    ))}
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4 flex-wrap"
                  >
                    {projects[activeProject].tech.map((tech, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-white/70">
                        <Code2 className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">{tech}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Metrics */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center flex-wrap gap-x-6 gap-y-3 mt-4"
                  >
                    {Object.entries(projects[activeProject].metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm font-bold text-white">{value}</div>
                        <div className="text-xs text-white/60 uppercase tracking-wider">{key}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute bottom-6 right-6 flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Show previous project"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); handlePrev(); }}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  type="button"
                  aria-label="Show next project"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleNext(); }}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-8 left-6 right-36 min-[480px]:right-40 flex flex-wrap items-center gap-1 md:left-1/2 md:right-auto md:-translate-x-1/2">
                {projects.map((project, i) => (
                  <button
                    key={project.id}
                    type="button"
                    aria-label={`Go to project: ${project.title}`}
                    aria-current={i === activeProject ? "true" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setDirection(i > activeProject ? 1 : -1);
                      setActiveProject(i);
                    }}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeProject ? "w-8 bg-primary" : "w-2 bg-white/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* All Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} repository in a new tab`}
            className="group relative overflow-hidden rounded-[2rem] block shadow-xl border border-foreground/10 h-[320px] md:h-[360px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 bg-neutral-950">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90 transform-gpu"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 pointer-events-none" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start gap-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${categoryColors[project.category]} text-white text-xs font-semibold shadow-lg`}>
                  {categoryIcons[project.category]}
                  {project.category}
                </span>
                <div className="w-12 h-12 shrink-0 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity duration-300 rotate-45 [@media(hover:hover)]:group-hover:rotate-0 shadow-lg" aria-hidden="true">
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base font-medium text-white/80 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};