import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import Analytics from './components/Analytics';
import Stats from './components/Stats';
import MoreFeatures from './components/MoreFeatures';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Features />
        <Analytics />
        <Stats />
        <MoreFeatures />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;