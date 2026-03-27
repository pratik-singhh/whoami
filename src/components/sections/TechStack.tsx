import { motion } from 'framer-motion';
import { techStack } from '../../data/portfolio';
import { Badge } from '../ui/Badge';

export function TechStack() {
  return (
    <section id="tech" className="py-24 relative border-y border-nier-border">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-nier-text/30" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-nier-dark">
              Systems
            </h2>
            <div className="h-[1px] w-12 bg-nier-text/30" />
          </div>
          <p className="mt-6 text-nier-text/80 max-w-2xl mx-auto font-light tracking-wide">
            Operational framework and technological capabilities.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, delay: i * 0.02 }}
            >
              <Badge variant="default">{tech}</Badge>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 flex justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          <img 
            src="https://skillicons.dev/icons?i=react,ts,js,nodejs,express,postgres,html,css,tailwind,git,linux,vite,vercel,railway" 
            alt="Skills icons"
            className="w-full max-w-4xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
