import React, { useState } from 'react';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import QuoteForm from './components/QuoteForm';
import MapModal from './components/MapModal';
import Footer from './components/Footer';
import FloatingBar from './components/FloatingBar';
import PremiumSections from './components/PremiumSections';

export default function App() {
  const [selectedService, setSelectedService] = useState('Household Shifting');
  
  // Map Modal State
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [mapTarget, setMapTarget] = useState('from'); // 'from' or 'to'
  const [mapCallback, setMapCallback] = useState(null);

  const handleOpenMapModal = (target, onConfirmAddress) => {
    setMapTarget(target);
    setMapCallback(() => onConfirmAddress);
    setMapModalOpen(true);
  };

  const handleMapConfirm = (address) => {
    if (mapCallback) {
      mapCallback(address);
    }
  };

  return (
    <div className="app-root premium-page">
      <Topbar />
      <Header />
      <main>
        <Hero />
        <ServicesGrid onSelectService={(srv) => setSelectedService(srv)} />
        <PremiumSections />
        <QuoteForm 
          prefilledService={selectedService} 
          onOpenMapModal={handleOpenMapModal} 
        />
      </main>
      <Footer />
      <FloatingBar />

      {/* Interactive Leaflet Map Modal */}
      <MapModal 
        isOpen={mapModalOpen} 
        onClose={() => setMapModalOpen(false)} 
        target={mapTarget} 
        onConfirm={handleMapConfirm} 
      />
    </div>
  );
}
