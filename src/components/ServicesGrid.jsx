import React from 'react';
import { Home, Building2, Car, Bike, Warehouse, PackageCheck, ArrowRight, Check } from 'lucide-react';

const SERVICES_DATA = [
  {
    title: 'Household Shifting',
    badge: 'Popular',
    icon: Home,
    desc: 'Bespoke apartment and villa moving for 1BHK, 2BHK, 3BHK, and luxury penthouses. Multi-layer bubble wrapping, furniture disassembly, and doorstep reassembly.',
    features: ['5-Layer protective packaging', 'Electronics wooden crating', 'Same-day local Bengaluru delivery']
  },
  {
    title: 'Office Relocation',
    badge: 'Corporate',
    icon: Building2,
    desc: 'Zero-downtime commercial shifting designed for IT companies, startups, and clinics. Secure server racks packing, anti-static computer bags, and weekend shifts.',
    features: ['Anti-static IT handling', 'Overnight & weekend scheduling', 'Asset tag & inventory ledger']
  },
  {
    title: 'Car Transportation',
    badge: 'Enclosed Carrier',
    icon: Car,
    desc: 'Door-to-door hydraulic enclosed car trailers. Wheel chocks, tie-down safety straps, transit insurance, and real-time highway GPS tracking.',
    features: ['Hydraulic enclosed car trailers', 'Full vehicle inspection checklist', 'Transit insurance included']
  },
  {
    title: 'Bike Transportation',
    badge: 'Crate Protection',
    icon: Bike,
    desc: 'Scratch-proof triple-layer packaging and reinforced wooden crate framing for commuter bikes, sports tourers, and vintage motorcycles.',
    features: ['Wooden frame crate crating', 'Safe fuel drainage protocol', 'Interstate express delivery']
  },
  {
    title: 'Warehouse & Storage',
    badge: 'Flexible Lease',
    icon: Warehouse,
    desc: 'Clean, climate-monitored, 24/7 CCTV-guarded secure storage in Bengaluru. Flexible weekly, monthly, or yearly terms with doorstep pickup.',
    features: ['24/7 CCTV & pest-controlled facility', 'Dedicated barcoded pallet storage', 'Doorstep pickup from your home']
  },
  {
    title: 'Packing & Loading',
    badge: 'Materials & Labor',
    icon: PackageCheck,
    desc: 'Standalone master packing and heavy-lifting crews equipped with hydraulic dollies, safety harnesses, and ISO-grade packaging supplies.',
    features: ['Vetted, full-time movers', 'Heavy appliance moving dollies', 'ISO corrugated boxes & bubble rolls']
  }
];

export default function ServicesGrid({ onSelectService }) {
  const handleSelect = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header-center">
          <span className="kicker-tag mono">SPECIALIZED CAPABILITIES</span>
          <h2 className="section-title">Engineered Relocation Services</h2>
          <p className="section-subtitle">
            Tailored logistics for homeowners, software professionals, founders, and vehicle collectors across Bengaluru and pan-India.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <article 
                key={idx} 
                className="service-item-card" 
                onClick={() => handleSelect(srv.title)}
              >
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <span className="service-badge">{srv.badge}</span>
                </div>

                <h3 className="service-card-title">{srv.title}</h3>
                <p className="service-card-desc">{srv.desc}</p>

                <ul className="service-card-features">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <Check size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-action">
                  <span>Select &amp; Quote</span>
                  <ArrowRight size={15} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
