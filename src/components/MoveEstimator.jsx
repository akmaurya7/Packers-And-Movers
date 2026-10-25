import React, { useState } from 'react';
import { Sofa, Bed, Tv, Refrigerator, Bike, Car, ArrowRight, MessageSquare, ClipboardList } from 'lucide-react';

const PROPERTY_CONFIGS = [
  { type: '1 BHK', baseVol: 350, truck: 'Tata Ace / 10ft Closed Container', crew: '2-3 Movers', boxes: '18-24 Boxes' },
  { type: '2 BHK', baseVol: 650, truck: '14ft Closed Container (Waterproof)', crew: '3-4 Movers', boxes: '30-45 Boxes' },
  { type: '3 BHK', baseVol: 1050, truck: '17ft High-Capacity Truck', crew: '4-5 Movers', boxes: '50-65 Boxes' },
  { type: '4+ BHK / Villa', baseVol: 1500, truck: '19ft/22ft Multi-Axle Fleet', crew: '6+ Movers', boxes: '70-90 Boxes' },
  { type: 'Office Move', baseVol: 800, truck: 'Dedicated Fleet Container', crew: '4-6 Corporate Crew', boxes: '40+ IT Crates' },
  { type: 'Vehicle Only', baseVol: 250, truck: 'Enclosed Auto Carrier', crew: 'Vehicle Logistics Team', boxes: 'Crated Framing' },
];

export default function MoveEstimator({ onApplySpec }) {
  const [selectedConfig, setSelectedConfig] = useState(PROPERTY_CONFIGS[1]); // Default 2 BHK
  const [counts, setCounts] = useState({
    sofa: 1,
    bed: 2,
    tv: 1,
    fridge: 1,
    bike: 0,
    car: 0,
  });

  const itemVolumes = {
    sofa: 40,
    bed: 60,
    tv: 25,
    fridge: 45,
    bike: 70,
    car: 220,
  };

  const handleCountChange = (item, delta) => {
    setCounts(prev => ({
      ...prev,
      [item]: Math.max(0, prev[item] + delta)
    }));
  };

  // Dynamic Volume Calculation
  let totalVolume = selectedConfig.baseVol;
  for (const [key, qty] of Object.entries(counts)) {
    totalVolume += qty * (itemVolumes[key] || 0);
  }

  // Dynamic truck and crew adjustments if volume scales
  let vehicle = selectedConfig.truck;
  let crew = selectedConfig.crew;
  let boxes = selectedConfig.boxes;

  if (totalVolume > 1400) {
    vehicle = '19ft / 22ft Closed Fleet Container';
    crew = '5-6 Master Movers';
    boxes = '60-80 Heavy Duty Cartons';
  } else if (totalVolume > 900) {
    vehicle = '17ft High-Capacity Closed Container';
    crew = '4-5 Master Movers';
    boxes = '45-60 Heavy Duty Cartons';
  } else if (totalVolume > 550) {
    vehicle = '14ft Closed Container (Waterproof)';
    crew = '3-4 Master Movers';
    boxes = '30-45 Heavy Duty Cartons';
  }

  const handleApplyToForm = () => {
    if (onApplySpec) {
      const summary = `Config: ${selectedConfig.type} | Volume: ~${totalVolume} cu. ft. | Items: ${counts.sofa} Sofa, ${counts.bed} Bed, ${counts.tv} TV, ${counts.fridge} Fridge, ${counts.bike} Bike, ${counts.car} Car`;
      onApplySpec({
        service: selectedConfig.type.includes('Office') ? 'Office Relocation' : selectedConfig.type.includes('Vehicle') ? 'Car Transportation' : 'Household Shifting',
        message: summary
      });
    }
    document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendToWhatsApp = () => {
    const lines = [
      '*KGF EXPRESS - ESTIMATED MOVE SPECIFICATION*',
      '────────────────────────',
      `*Configuration:* ${selectedConfig.type}`,
      `*Estimated Volume:* ~${totalVolume} cu. ft.`,
      `*Recommended Fleet:* ${vehicle}`,
      `*Crew Allocation:* ${crew}`,
      `*Packing Boxes:* ${boxes}`,
      '',
      '*Key Inventory Items:*',
      `• Sofas: ${counts.sofa}`,
      `• Beds: ${counts.bed}`,
      `• TV/Electronics: ${counts.tv}`,
      `• Refrigerator & Appliances: ${counts.fridge}`,
      `• Two-Wheeler: ${counts.bike}`,
      `• Four-Wheeler: ${counts.car}`,
      '────────────────────────',
      '*Dispatch Hub:* Doddathogur Rd, Electronic City, Bengaluru',
      'Please share quotation & truck availability for this move!'
    ];

    const encoded = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/917338582679?text=${encoded}`, '_blank');
  };

  return (
    <section className="estimator-section" id="estimator">
      <div className="container">
        <div className="estimator-shell">
          <div className="section-header-center" style={{ marginBottom: '38px' }}>
            <span className="kicker-tag mono">MOVE SIZE ESTIMATOR</span>
            <h2 className="section-title">How Big Is Your Move?</h2>
            <p className="section-subtitle">
              Configure your rooms and large items below. The calculator turns them into boxes, a vehicle specification, and crew requirement in real time.
            </p>
          </div>

          <div className="estimator-cols">
            <div className="estimator-left-controls">
              <div className="est-control-title">
                <span className="est-step-circle">1</span>
                <span>Select Home or Move Type</span>
              </div>

              <div className="size-pill-row">
                {PROPERTY_CONFIGS.map((cfg, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`size-button ${selectedConfig.type === cfg.type ? 'active' : ''}`}
                    onClick={() => setSelectedConfig(cfg)}
                  >
                    {cfg.type}
                  </button>
                ))}
              </div>

              <div className="est-control-title">
                <span className="est-step-circle">2</span>
                <span>Major Heavy Items &amp; Vehicles</span>
              </div>

              <div className="item-counter-list">
                <div className="counter-box">
                  <div className="counter-label">
                    <Sofa size={18} />
                    <span>Sofa Sets</span>
                  </div>
                  <div className="counter-btn-row">
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('sofa', -1)}>−</button>
                    <span className="qty-display">{counts.sofa}</span>
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('sofa', 1)}>+</button>
                  </div>
                </div>

                <div className="counter-box">
                  <div className="counter-label">
                    <Bed size={18} />
                    <span>Beds / Mattresses</span>
                  </div>
                  <div className="counter-btn-row">
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('bed', -1)}>−</button>
                    <span className="qty-display">{counts.bed}</span>
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('bed', 1)}>+</button>
                  </div>
                </div>

                <div className="counter-box">
                  <div className="counter-label">
                    <Tv size={18} />
                    <span>TV &amp; Electronics</span>
                  </div>
                  <div className="counter-btn-row">
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('tv', -1)}>−</button>
                    <span className="qty-display">{counts.tv}</span>
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('tv', 1)}>+</button>
                  </div>
                </div>

                <div className="counter-box">
                  <div className="counter-label">
                    <Refrigerator size={18} />
                    <span>Fridge &amp; Large Appl.</span>
                  </div>
                  <div className="counter-btn-row">
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('fridge', -1)}>−</button>
                    <span className="qty-display">{counts.fridge}</span>
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('fridge', 1)}>+</button>
                  </div>
                </div>

                <div className="counter-box">
                  <div className="counter-label">
                    <Bike size={18} />
                    <span>Bike / Two-Wheeler</span>
                  </div>
                  <div className="counter-btn-row">
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('bike', -1)}>−</button>
                    <span className="qty-display">{counts.bike}</span>
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('bike', 1)}>+</button>
                  </div>
                </div>

                <div className="counter-box">
                  <div className="counter-label">
                    <Car size={18} />
                    <span>Car Transport</span>
                  </div>
                  <div className="counter-btn-row">
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('car', -1)}>−</button>
                    <span className="qty-display">{counts.car}</span>
                    <button type="button" className="btn-qty" onClick={() => handleCountChange('car', 1)}>+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="estimator-right-blueprint">
              <div className="estimator-blueprint">
                <div className="blueprint-header">
                  <span className="kicker-tag mono" style={{ marginBottom: '6px' }}>ESTIMATED LOGISTICS BLUEPRINT</span>
                  <h3 className="blueprint-title">{selectedConfig.type} Move Spec</h3>
                </div>

                <div className="blueprint-specs">
                  <div className="spec-line">
                    <span className="spec-kicker">Estimated Volume</span>
                    <strong className="spec-value-main">~{totalVolume} cu. ft.</strong>
                  </div>

                  <div className="spec-line">
                    <span className="spec-kicker">Recommended Vehicle</span>
                    <strong className="spec-value-main">{vehicle}</strong>
                  </div>

                  <div className="spec-line">
                    <span className="spec-kicker">Crew Allocation</span>
                    <strong className="spec-value-main">{crew}</strong>
                  </div>

                  <div className="spec-line">
                    <span className="spec-kicker">Corrugated Cartons</span>
                    <strong className="spec-value-main">{boxes}</strong>
                  </div>

                  <div className="spec-line">
                    <span className="spec-kicker">Packaging Layer Standard</span>
                    <strong className="spec-value-main" style={{ fontSize: '0.92rem' }}>5-Layer Shockproof Wrap (Bubble + Foam + Film)</strong>
                  </div>
                </div>

                <div className="blueprint-actions">
                  <button type="button" className="btn btn-primary btn-block" onClick={handleSendToWhatsApp}>
                    <MessageSquare size={16} />
                    <span>Send Spec via WhatsApp</span>
                  </button>

                  <button type="button" className="btn btn-secondary btn-block" onClick={handleApplyToForm}>
                    <ClipboardList size={16} style={{ color: 'var(--accent)' }} />
                    <span>Apply to Quote Form</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
