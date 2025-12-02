import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-gray-800 text-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-bold text-xl tracking-tight">DS.</a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;