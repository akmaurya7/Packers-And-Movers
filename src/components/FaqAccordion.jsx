import React, { useState } from 'react';

const FAQS = [
  {
    q: 'How does KGF Express ensure 100% safety during Household Shifting?',
    a: 'We use a specialized 5-layer packing system: high-density bubble wrap, heavy corrugated sheets, waterproof stretch film, corner edge protectors, and custom wooden crating for delicate items like LED TVs, glass tables, and fine art.'
  },
  {
    q: 'How does Warehouse & Storage work?',
    a: 'For Warehouse & Storage, our team comes directly to your current address, packs and inventory-tags all your household or commercial items, and transports them to our climate-controlled, 24/7 CCTV-monitored warehouse in Electronic City. You do not need to provide a destination moving address until you are ready to have your items delivered.'
  },
  {
    q: 'Where is your registered hub located in Bengaluru?',
    a: 'Our central hub is located at Doddathogur Rd, near Circle, Electronic City, Doddathoguru, Bengaluru, Karnataka 560100. We operate across all zones of Bengaluru and provide nationwide interstate connectivity.'
  },
  {
    q: 'Do you provide carpentry services for dismantling and reassembling beds?',
    a: 'Yes! Every household shifting crew includes experienced carpenters equipped with power tools to disassemble hydraulic storage beds, sliding wardrobes, dining tables, and reassemble them at your new home.'
  },
  {
    q: 'How far in advance should I book my move?',
    a: 'For weekends and month-end dates, we recommend booking 2 to 4 days in advance to reserve your preferred truck size and crew. However, for urgent or same-day moves within Electronic City and South Bengaluru, call us directly on 73385 82679 for emergency dispatch.'
  },
  {
    q: 'Are there any hidden costs, elevator charges, or surprise fees?',
    a: 'Zero hidden costs. Once our team reviews your inventory and building conditions (lift availability, floor count), we issue a comprehensive, fixed quote that covers packaging materials, labor, transportation, fuel, and taxes.'
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header-center">
          <span className="kicker-tag mono">CLARITY &amp; TRUST</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about packing materials, safety, storage, and pricing.
          </p>
        </div>

        <div className="faq-list-container">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card-row ${isOpen ? 'open' : ''}`}>
                <button 
                  type="button" 
                  className="faq-button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="faq-expand-icon">{isOpen ? '×' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-body-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
