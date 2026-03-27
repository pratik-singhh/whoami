import { motion } from 'framer-motion';

export function Stats() {
  return (
    <section id="stats" className="py-24 relative overflow-hidden bg-nier-bg">
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
              Records
            </h2>
            <div className="h-[1px] w-12 bg-nier-text/30" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="p-1 inline-block transform transition-transform duration-300 w-full max-w-2xl overflow-x-auto border border-nier-border bg-nier-surface">
            {/* Setting a neutral/light theme by removing tokyonight */}
            <img 
              src="https://github-readme-streak-stats.herokuapp.com?user=pratik-singhh&hide_border=true&background=TRANSPARENT&currStreakNum=2a2822&sideNums=413f38&sideLabels=413f38&ring=2a2822&fire=413f38&dates=413f38&currStreakLabel=413f38" 
              alt="pratik-singhh's GitHub streak stats" 
              className="w-full min-w-[400px] opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
