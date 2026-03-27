import { motion } from 'framer-motion';
import { Terminal, Database, Shield, Rocket } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const elements = [
  { icon: Terminal, title: 'Frontend', desc: 'React, TypeScript, Tailwind' },
  { icon: Database, title: 'Backend', desc: 'Node.js, Express, PostgreSQL' },
  { icon: Shield, title: 'Security', desc: 'JWT, Auth Patterns' },
  { icon: Rocket, title: 'DevOps', desc: 'Vercel, Railway, CI/CD' },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-nier-surface/30">
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
              About
            </h2>
            <div className="h-[1px] w-12 bg-nier-text/30" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-nier-text leading-relaxed text-lg font-light mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-nier-text/80 leading-relaxed font-light">
              I specialize in building robust full-stack solutions. 
              Whether it's designing a relational database schema in PostgreSQL, 
              securing APIs with modern patterns, or creating a seamless frontend experience in React, 
              I bring ideas to production gracefully.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {elements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="h-10 w-10 flex items-center justify-center mb-4 border-b border-nier-dark pb-2">
                  <item.icon className="w-5 h-5 text-nier-dark" strokeWidth={1.5} />
                </div>
                <h3 className="text-nier-dark font-medium uppercase tracking-wider text-sm mb-2">{item.title}</h3>
                <p className="text-nier-text/80 text-xs font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
