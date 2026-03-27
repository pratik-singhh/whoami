import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-nier-surface/30">
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
              Directives
            </h2>
            <div className="h-[1px] w-12 bg-nier-text/30" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col h-full group"
            >
              <div className="p-8 flex-1 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-nier-border/30 transform translate-x-8 -translate-y-8 rotate-45" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h3 className="text-xl font-bold text-nier-dark group-hover:text-black transition-colors uppercase tracking-wide pr-6">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    {project.repo && (
                      <a 
                        href={project.repo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-nier-text hover:text-nier-dark transition-colors"
                        aria-label={`GitHub repostiory for ${project.title}`}
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-nier-text hover:text-nier-dark transition-colors"
                        aria-label={`Live site for ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-nier-text/90 mb-6 flex-1 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8 border-l-2 border-nier-border pl-4">
                  <h4 className="text-xs font-bold text-nier-dark mb-2 uppercase tracking-widest">Specifications</h4>
                  <ul className="list-none text-sm text-nier-text/80 space-y-1.5 font-light">
                    {project.highlights.map(highlight => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-nier-text block" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[#7a7870] bg-[#e6e4dc] border border-[#d6d4cc]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
