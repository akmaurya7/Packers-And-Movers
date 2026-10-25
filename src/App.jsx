import React, { useState } from 'react';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import HouseholdSpotlight from './components/HouseholdSpotlight';
import ServicesGrid from './components/ServicesGrid';
import MoveEstimator from './components/MoveEstimator';
import QuoteForm from './components/QuoteForm';
import MapModal from './components/MapModal';
import LocalHub from './components/LocalHub';
import Testimonials from './components/Testimonials';
import FaqAccordion from './components/FaqAccordion';
import Footer from './components/Footer';
import FloatingBar from './components/FloatingBar';

export default function App() {
  const [selectedService, setSelectedService] = useState('Household Shifting');
  const [prefilledMessage, setPrefilledMessage] = useState('');
  
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

  const handleApplyEstimatorSpec = ({ service, message }) => {
    setSelectedService(service);
    setPrefilledMessage(message);
  };

  return (
    <div className="app-root">
      <Topbar />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <HouseholdSpotlight onSelectService={(srv) => setSelectedService(srv)} />
        <ServicesGrid onSelectService={(srv) => setSelectedService(srv)} />
        <MoveEstimator onApplySpec={handleApplyEstimatorSpec} />
        <QuoteForm 
          prefilledService={selectedService} 
          prefilledMessage={prefilledMessage} 
          onOpenMapModal={handleOpenMapModal} 
        />
        <LocalHub />
        <Testimonials />
        <FaqAccordion />
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
