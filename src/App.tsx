/* import { Heart, Users, Radio, Crown, Film, Mail, Phone, MapPin } from 'lucide-react'; */
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import HowToHelp from './components/HowToHelp';
import Donations from './components/Donations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Events from './components/Events';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <HowToHelp />
      <Donations />
      <Contact />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
