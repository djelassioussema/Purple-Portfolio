import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import GeometricBackground from './components/GeometricBackground';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProductsSection from './components/ProductsSection';
import ApproachSection from './components/ApproachSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsPageSection from './components/ProjectsPageSection';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectsPageSection />;
      default:
        return (
          <>
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ProductsSection />
            <ApproachSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background elements */}
      <GeometricBackground />
      
      {/* Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Main content */}
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;