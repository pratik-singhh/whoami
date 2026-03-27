import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolio';
import { LinkButton } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-sm p-1 bg-nier-border mx-auto transition-transform duration-500 shadow-sm relative group overflow-hidden">
              <img 
                src="/profile.png" 
                alt="Pratik's Profile Picture" 
                className="w-full h-full object-cover border border-nier-bg grayscale group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Pratik&background=e2dfd5&color=413f38&size=200';
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1 border border-nier-border text-nier-text text-xs uppercase tracking-widest font-medium mb-8 bg-nier-surface/50"
          >
            <span className="w-1.5 h-1.5 bg-nier-dark block"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-nier-dark"
          >
            I'm {personalInfo.name}.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-nier-text mb-4 font-light tracking-wide uppercase"
          >
            {personalInfo.role} <span className="mx-2 opacity-50">/</span> {personalInfo.tagline}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-base md:text-lg text-nier-text/80 mb-10 leading-relaxed font-light"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <LinkButton
              href="#projects"
              variant="primary"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </LinkButton>
            
            <LinkButton
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              <FaGithub className="w-4 h-4" />
              GitHub Profile
            </LinkButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
