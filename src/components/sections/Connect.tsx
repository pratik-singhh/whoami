import { motion } from 'framer-motion';
import { LayoutTemplate } from 'lucide-react';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolio';

export function Connect() {
  return (
    <footer className="pt-24 pb-8 border-t border-nier-border bg-nier-surface relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold mb-2 uppercase tracking-widest text-nier-dark">
              Transmission
            </h2>
            <p className="text-nier-text font-light tracking-wide uppercase text-sm">
              Open to collaborations & interesting projects.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noreferrer"
              className="p-4 bg-nier-bg border border-nier-border text-nier-text hover:text-nier-bg hover:border-nier-dark hover:bg-nier-dark transition-all group"
            >
              <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href={personalInfo.socials.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="p-4 bg-nier-bg border border-nier-border text-nier-text hover:text-nier-bg hover:border-nier-dark hover:bg-nier-dark transition-all group"
            >
              <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-4 bg-nier-bg border border-nier-border text-nier-text hover:text-nier-bg hover:border-nier-dark hover:bg-nier-dark transition-all group"
            >
              <FaEnvelope className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="border-t border-nier-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-nier-text uppercase tracking-widest text-xs font-bold">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Built with React & Tailwind 
            <LayoutTemplate className="w-4 h-4 text-nier-dark" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </footer>
  );
}
