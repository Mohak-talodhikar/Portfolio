import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Instagram } from "lucide-react";
import TechStackSection from "../TechStackSection/TechStackSection";
import { Button } from "../lightswind/button";
import { Badge } from "../lightswind/badge";
import { HangingIdCard } from "../lightswind/HangingIdCard";
import { AuroraTextEffect } from "../lightswind/aurora-text-effect";
import { DotPattern } from "../lightswind/dot-pattern";
import { AuroraBackground } from "../lightswind/aurora-background";
import GlowingBackground from "../lightswind/GlowingBackground";
import ParticleOrbitEffect from "../lightswind/ParticleOrbitEffect";
import EtherWavesBackground from "../lightswind/ether-waves-background";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col pt-12 md:pt-16 overflow-hidden bg-background">
      {/* Layer 1: Deep animated background with ether waves */}
      <EtherWavesBackground 
        className="absolute inset-0 z-0"
        lineCount={60}
        lineDistance={0.3}
        animationSpeed={0.15}
        interactive={true}
        parallax={true}
        parallaxStrength={0.5}
        transparentBg={true}
      />
      
      {/* Layer 2: Aurora background for atmospheric glow */}
      <AuroraBackground 
        className="absolute inset-0 z-0"
        showRadialGradient={true}
      />
      
      {/* Layer 3: Glowing background with rings */}
      <GlowingBackground 
        zIndex={1}
        height="100vh"
        ringColors={["#4c1d95", "#a78bfa", "#c084fc"]}
        blurStrength="blur-3xl"
        gradientFrom="#1e1b4b"
        gradientVia="#0f172a"
        gradientTo="#030712"
      />
      
      {/* Layer 4: Particle orbit effect for depth */}
      <div className="absolute inset-0 z-2 pointer-events-none">
        <ParticleOrbitEffect
          className="absolute inset-0"
          particleCount={25}
          radius={80}
          particleSpeed={0.02}
          intensity={0.8}
          fadeOpacity={0.05}
          colorRange={[250, 330]}
          autoColors={true}
        />
      </div>
      
      {/* Layer 5: Subtle dot pattern overlay */}
      <div className="absolute inset-0 z-5 opacity-20">
        <DotPattern width={24} height={24} cx={1} cy={1} cr={1} />
      </div>
      
      {/* Radial vignette shade for depth */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg)_100%)]" />
      
      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 pb-12">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="outline" size="lg" className="gap-2.5 py-1.5 px-4 glass-panel border-foreground/10 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-muted-foreground">Available for freelance & full-time</span>
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
              Hi, I'm
            </h1>
            
            {/* Light Theme: Clean Vibrant Gradient Text */}
            <div className="block dark:hidden">
              <span className="bg-gradient-to-r from-violet-600 via-sky-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold text-[clamp(3rem,6.5vw,5.5rem)] leading-none tracking-tight block pb-2 select-none">
                Mohak Talodhikar
              </span>
            </div>

            {/* Dark Theme: Rich Aurora Text Effect */}
            <div className="hidden dark:block">
              <AuroraTextEffect
                text="Mohak Talodhikar"
                fontSize="clamp(3rem, 6.5vw, 5.5rem)"
                className="bg-transparent overflow-visible p-0 justify-start"
                textClassName="bg-gradient-to-r from-cyan-400 via-purple-400 to-sky-300 bg-clip-text text-transparent pb-2 font-extrabold"
              />
            </div>
          </motion.div>

          <motion.div 
            className="h-1 w-full md:w-1/3 bg-gradient-to-r from-primary via-cyan-500 to-sky-400 rounded-full mb-8 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            initial={{ width: 0 }}
            animate={{ width: "33%" }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          />

          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-xl mb-8 leading-relaxed w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            AI Engineer specializing in RAG Systems, LLMs, and Cloud Architecture. Building intelligent, scalable solutions with Python, AWS, and modern AI frameworks.
          </motion.p>

          {/* Tech highlights */}
          <motion.div 
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            {["Python", "RAG", "LLMs", "AWS", "FastAPI", "React"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.05, duration: 0.4 }}
                className="px-3 py-1.5 text-xs font-medium rounded-full glass-panel border border-foreground/10 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" className="rounded-full px-7 h-12 bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1">
              View Projects <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-7 h-12 glass-panel text-foreground font-semibold flex items-center gap-2 hover:bg-foreground/10 transition-all hover:-translate-y-1 border-foreground/10">
              Resume <Download className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-5 justify-center md:justify-start w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { icon: Github, href: "https://github.com/Mohak-talodhikar", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/mohak-talodhikar", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com/mohak_talodhikar", label: "Instagram" },
              { icon: Mail, href: "mailto:mohaktalodhikar@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 hover:scale-110 transform duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Visual Hanging ID Card */}
        <motion.div 
          className="flex-1 w-full max-w-md relative flex justify-center items-center py-2"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <HangingIdCard
            name="Mohak Talodhikar"
            role="AI Engineer"
            badgeId="MT-2024-AI"
            accentColor="#8b5cf6"
            ropeLength={75}
            ropeColor="#27272a"
            cardWidth="w-72 sm:w-80 md:w-84"
          >
            <div className="flex flex-col h-full bg-card w-full">
              {/* Card Header Banner with Avatar */}
              <div className="relative px-5 pt-7 pb-6 flex flex-col items-center bg-gradient-to-br from-purple-700 via-primary to-indigo-950 text-white overflow-hidden">
                {/* Circuit background overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
                
                {/* Animated gradient orbs */}
                <div className="absolute inset-0 overflow-hidden">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full blur-3xl opacity-30"
                      style={{
                        width: 80 + i * 40,
                        height: 80 + i * 40,
                        top: 20 + i * 30,
                        left: 20 + i * 20,
                        background: i === 1 ? "radial-gradient(circle, #06d6a0, transparent)" : i === 2 ? "radial-gradient(circle, #f72585, transparent)" : "radial-gradient(circle, #8b5cf6, transparent)"
                      }}
                      animate={{ 
                        scale: [1, 1.15, 1],
                        x: [0, 10, 0],
                        y: [0, -10, 0]
                      }}
                      transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </div>

                {/* Profile Photo with Dual Glowing Ring */}
                <div className="mt-1 relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-primary to-purple-400 backdrop-blur-md shadow-2xl border border-white/50 overflow-hidden group">
                  <img 
                    src="/mohak-photo.jpg" 
                    alt="Mohak Talodhikar" 
                    className="w-full h-full object-cover rounded-full filter contrast-105"
                    loading="eager"
                  />
                  <div className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-md animate-pulse" />
                  
                  {/* Rotating border ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-tr from-cyan-400 via-primary to-purple-400 -m-1 animate-spin-slow opacity-50" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col items-center text-center bg-card text-card-foreground flex-1 gap-3">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-foreground">Mohak Talodhikar</h3>
                  <div className="inline-flex items-center gap-1.5 mt-1 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
                    <span>AI Engineer | RAG & Cloud Specialist</span>
                  </div>
                </div>

                <div className="w-full border-t border-border/60 my-0.5" />

                {/* Details 2x2 Grid */}
                <div className="grid grid-cols-2 gap-2.5 w-full text-left bg-muted/40 p-3 rounded-xl border border-border/50">
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Specialty</span>
                    <span className="font-bold text-foreground text-xs">RAG Systems & LLMs</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Location</span>
                    <span className="font-bold text-foreground text-xs">Telangana, India</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Experience</span>
                    <span className="font-bold text-foreground text-xs">2022 - Present</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Status</span>
                    <span className="font-bold text-emerald-500 text-xs flex items-center gap-1">
                      ● Open to Work
                    </span>
                  </div>
                </div>

                {/* HD Barcode & Auth Tag */}
                <div className="flex flex-col items-center mt-1 w-full gap-1">
                  <div className="flex gap-[2.5px] items-end h-7 px-3 py-0.5 bg-white/90 dark:bg-black/40 rounded-lg border border-border/40 w-full justify-center">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-foreground rounded-[1px]"
                        style={{
                          width: i % 4 === 0 ? "3.5px" : i % 2 === 0 ? "2px" : "1px",
                          height: `${50 + Math.sin(i * 1.4) * 45}%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between w-full px-1 text-[10px]">
                    <span className="font-mono font-bold tracking-widest text-primary">
                      MT-2024-AI
                    </span>
                    <span className="text-muted-foreground font-semibold text-[9px] uppercase tracking-wider">
                      MOHAK TALODHIKAR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </HangingIdCard>
        </motion.div>

      </div>

      {/* Marquee appended natively to the bottom to span Full Width */}
      <div className="relative z-20 w-full mt-auto">
        <TechStackSection />
      </div>
    </section>
  );
};