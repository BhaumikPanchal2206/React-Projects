import { useEffect } from 'react';
import "./styles/wow-animation/style.css"
import './styles/style.css';
import HeroSection from './components/hero-section';
import AboutUs from './components/about-us';
import Contact from './components/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/hero-layout';
import Skills from './components/skills';
import Projects from './components/projects';

const WOW = require('wow.js');

function App() {
  useEffect(() => { new WOW().init() }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<HeroSection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
