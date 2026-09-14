import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

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

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-6 min-[480px]:p-8 md:p-12 rounded-[2rem] min-[480px]:rounded-[3rem] border border-foreground/10 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Let's <span className="text-gradient-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Open to full-time AI Engineer roles and freelance AI work. Email is fastest — I read every message.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="flex flex-wrap gap-6 mb-8">
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
                <div className="min-w-0">
                  <span className="text-xs font-medium text-muted-foreground block">{method.label}</span>
                  <span className="font-medium break-all">{method.value}</span>
                </div>
                {method.primary && (
                  <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Send email <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </span>
                )}
              </motion.a>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};