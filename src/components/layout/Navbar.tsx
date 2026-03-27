import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Tech', href: '#tech' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stats', href: '#stats' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass border-b border-nier-border shadow-sm backdrop-blur-xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter text-nier-dark">
            <span className="text-nier-text font-normal">pratik.</span>
            singh
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-nier-text hover:text-nier-dark uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-5 border-l border-nier-border pl-6">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-nier-text hover:text-nier-dark transition-colors">
                <span className="sr-only">GitHub</span>
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="text-nier-text hover:text-nier-dark transition-colors">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-nier-text hover:text-nier-dark transition-colors">
                <span className="sr-only">Email</span>
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-nier-text hover:text-nier-dark focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-nier-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-sm font-medium uppercase tracking-wider text-nier-text hover:text-nier-dark hover:bg-black/5 rounded-sm transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 pt-4 mt-2 flex space-x-6 border-t border-nier-border">
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-nier-text hover:text-nier-dark">
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="text-nier-text hover:text-nier-dark">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-nier-text hover:text-nier-dark">
                  <span className="sr-only">Email</span>
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
