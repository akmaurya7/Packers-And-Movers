import React from 'react';
import { Calculator, ArrowRight, ShieldCheck, MapPin, Star, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-layout">
        <div className="hero-copy-column">
          <div className="hero-pill-row">
            <span className="kicker-tag mono">
              <span className="pulse-green"></span>
              BENGALURU RELOCATION CO. · 3+ YEARS OF TRUST
            </span>
          </div>

          <h1 className="hero-title">
            Flat boxes.<br />
            Full fleet.<br />
            <span className="hero-title-highlight">New front door.</span>
          </h1>

          <p className="hero-lead">
            We arrive with heavy-duty flat-packed boxes, tape and wrap every piece with you, then drive your life across Bengaluru in the order you unpack. Zero damage, zero hidden fees.
          </p>

          <div className="hero-cta-row">
            <a href="#quote-section" className="btn btn-primary btn-xl">
              <span>Request Instant Quote</span>
              <ArrowRight size={16} />
            </a>
            <a href="#estimator" className="btn btn-secondary btn-xl">
              <Calculator size={16} style={{ color: 'var(--accent)' }} />
              <span>Estimate Move Size</span>
            </a>
          </div>

          <div className="hero-metrics-bar">
            <div className="hero-metric-item">
              <div className="metric-num">
                4.8<span className="metric-star">★</span>
              </div>
              <span className="metric-lbl">382 GOOGLE REVIEWS</span>
            </div>
            <div className="metric-sep"></div>
            <div className="hero-metric-item">
              <div className="metric-num">
                3+<span className="metric-star" style={{ fontSize: '1.1rem' }}>YRS</span>
              </div>
              <span className="metric-lbl">PROVEN TRACK RECORD</span>
            </div>
            <div className="metric-sep"></div>
            <div className="hero-metric-item">
              <div className="metric-num">
                100<span className="metric-star" style={{ fontSize: '1.1rem' }}>%</span>
              </div>
              <span className="metric-lbl">ZERO DAMAGE PLEDGE</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-column">
          <div className="hero-visual-card">
            <div className="hero-img-wrap">
              <img 
                src="/assets/hero-3d.jpg" 
                alt="3D isometric rendering of KGF Express moving vehicle loaded with packaged household boxes" 
                className="hero-3d-img"
                loading="eager"
              />
            </div>

            {/* Floating Top Badge */}
            <div className="badge-floating badge-top">
              <div className="badge-icon-sq">
                <Truck size={18} />
              </div>
              <div className="badge-text-block">
                <span className="badge-title">Electronic City Hub</span>
                <span className="badge-subtitle">Rapid Dispatch Fleet</span>
              </div>
            </div>

            {/* Floating Bottom Badge */}
            <div className="badge-floating badge-bottom">
              <div className="badge-icon-sq" style={{ background: '#ecfdf5', color: '#10b981' }}>
                <ShieldCheck size={18} />
              </div>
              <div className="badge-text-block">
                <span className="badge-title">IBA &amp; ISO Approved Supplies</span>
                <span className="badge-subtitle">5-Layer Shockproof Wrap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
