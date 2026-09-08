import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";
import { Input } from "../lightswind/input";
import { Textarea } from "../lightswind/textarea";
import { Button } from "../lightswind/button";

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "mohaktalodhikar@gmail.com",
      href: "mailto:mohaktalodhikar@gmail.com",
      primary: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mohak-talodhikar",
      href: "https://linkedin.com/in/mohak-talodhikar",
      primary: false,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Mohak-talodhikar",
      href: "https://github.com/Mohak-talodhikar",
      primary: false,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Mohak-talodhikar",
      username: "@Mohak-talodhikar",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohak-talodhikar",
      username: "mohak-talodhikar",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/mohak_talodhikar",
      username: "@mohak_talodhikar",
    },
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-foreground/10 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Let's <span className="text-gradient-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground">
                Currently open for new opportunities and exciting collaborations. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`flex items-center gap-4 group transition-all hover:translate-x-1 ${
                    method.primary ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    method.primary 
                      ? "bg-primary/20 text-primary shadow-[0_0_20px_rgba(139,92,246,0.3)]" 
                      : "glass-panel group-hover:scale-110"
                  }`}>
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground block">{method.label}</span>
                    <span className="font-medium">{method.value}</span>
                  </div>
                  {method.primary && (
                    <span className="ml-auto text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Mail <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-foreground/10">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Find me online</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl glass-panel border border-foreground/10 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="text-left">
                      <span className="text-xs font-medium text-muted-foreground block">{social.label}</span>
                      <span className="text-sm font-medium group-hover:text-foreground transition-colors">{social.username}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-foreground/10 relative">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Name</label>
                <Input 
                  type="text" 
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Email</label>
                <Input 
                  type="email" 
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Subject</label>
                <Input 
                  type="text" 
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Message</label>
                <Textarea 
                  rows={4}
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary resize-none placeholder:text-muted-foreground/50 min-h-[120px]"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button size="lg" className="w-full rounded-xl bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] mt-4 h-12 transition-all hover:scale-[1.02]">
                Send Message <Send className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};