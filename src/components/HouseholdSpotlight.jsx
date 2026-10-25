import React from 'react';
import { Check, ArrowRight, Shield, Box, Sparkles } from 'lucide-react';

export default function HouseholdSpotlight({ onSelectService }) {
  const handleBook = () => {
    if (onSelectService) {
      onSelectService('Household Shifting');
    }
    document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="household-section" id="household">
      <div className="container">
        <div className="section-header-center">
          <span className="kicker-tag mono">
            <Sparkles size={13} style={{ color: 'var(--accent)' }} />
            SIGNATURE FLAGSHIP CAPABILITY
          </span>
          <h2 className="section-title">Household Shifting Reimagined</h2>
          <p className="section-subtitle">
            Relocating a home is personal. From delicate crockery and 65-inch OLED screens to designer sofas and marble dining tops, we treat every possession as priceless.
          </p>
        </div>

        <div className="household-layout">
          <div className="household-visual-wrap">
            <div className="household-img-box">
              <img 
                src="/assets/household-3d.jpg" 
                alt="3D isometric rendering of living room with wrapped sofa and wooden television crating" 
                className="household-img"
                loading="lazy"
              />
              <div className="household-tag-bar">
                <span className="pulse-green"></span> 5-Layer Precision Wrap Architecture
              </div>
            </div>

            <div className="household-subfeatures">
              <div className="hf-subcard">
                <span className="hf-num">01</span>
                <h4>Crated Electronics</h4>
                <p>Heavy wooden frames for large screens and framed artwork.</p>
              </div>
              <div className="hf-subcard">
                <span className="hf-num">02</span>
                <h4>Quilted Blankets</h4>
                <p>High-density fabric wrapping to shield wooden edges and leather.</p>
              </div>
              <div className="hf-subcard">
                <span className="hf-num">03</span>
                <h4>Labelled Zones</h4>
                <p>Color-coded numbering so boxes are carried directly to their rooms.</p>
              </div>
            </div>
          </div>

          <div className="household-checklist-card paper-card">
            <div className="hh-card-header">
              <span className="kicker-tag mono">WHAT WE BRING</span>
              <h3>White-Glove Inclusions in Every Move</h3>
              <p style={{ color: 'var(--ink-secondary)', fontSize: '0.94rem' }}>
                We don't simply transport boxes — our dedicated full-time crew packs, disassembles, moves, and reassembles.
              </p>
            </div>

            <ul className="clean-checklist">
              <li>
                <div className="chk-icon"><Check size={12} /></div>
                <div>
                  <strong>Complete 5-Layer Bubble &amp; Foam Wrap</strong>
                  <span>Sofas, mattresses, dining tables, glass consoles, and mirrors.</span>
                </div>
              </li>
              <li>
                <div className="chk-icon"><Check size={12} /></div>
                <div>
                  <strong>Skilled Bed &amp; Wardrobe Carpentry</strong>
                  <span>Disassembly of hydraulic beds, study tables, and reassembly at destination.</span>
                </div>
              </li>
              <li>
                <div className="chk-icon"><Check size={12} /></div>
                <div>
                  <strong>Double-Fluted Kitchen Cartons</strong>
                  <span>Honeycomb cushioning and divider partitions for china and glassware.</span>
                </div>
              </li>
              <li>
                <div className="chk-icon"><Check size={12} /></div>
                <div>
                  <strong>Floor &amp; Doorway Neoprene Runners</strong>
                  <span>Floor runners installed in both apartments to prevent tile scuffs and door scratches.</span>
                </div>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-block" onClick={handleBook}>
              <span>Book Household Shifting</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
