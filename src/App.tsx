import React from 'react';
import Header from './components/Header';
import GeometricBackground from './components/GeometricBackground';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProductsSection from './components/ProductsSection';
import ApproachSection from './components/ApproachSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background elements */}
      <GeometricBackground />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ProductsSection />
        <ApproachSection />
      </main>
    </div>
  );
}

export default App;