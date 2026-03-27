import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Stats } from './components/sections/Stats';
import { Connect } from './components/sections/Connect';

function App() {
  return (
    <div className="min-h-screen bg-nier-bg font-sans text-nier-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Stats />
      </main>
      <Connect />
    </div>
  );
}

export default App;
