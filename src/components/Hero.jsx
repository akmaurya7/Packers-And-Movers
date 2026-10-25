import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Phone, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container premium-hero-layout">
        <div className="hero-copy-column">
          <span className="eyebrow hero-eyebrow"><span className="pulse-green"></span> Electronic City · Bengaluru</span>

          <h1 className="hero-title">
            Move with care.<br />
            Arrive with <span className="hero-title-highlight">confidence.</span>
          </h1>

          <p className="hero-lead">
            Professional moving and packing for homes, offices and vehicles across Bengaluru. One friendly team from pickup to delivery.
          </p>

          <div className="hero-cta-row">
            <a href="#quote-section" className="btn btn-primary btn-xl">
              <span>Start booking</span>
              <ArrowRight size={16} />
            </a>
            <a href="https://wa.me/917338582679?text=Hi%20KGF%20Express,%20I%20want%20to%20book%20a%20move" className="btn btn-secondary btn-xl" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} style={{ color: 'var(--whatsapp-dark)' }} />
              <span>WhatsApp the team</span>
            </a>
          </div>

          <div className="hero-trust-list">
            <span><CheckCircle2 size={16} /> 4.8 from 382 reviews</span>
            <span><ShieldCheck size={16} /> Careful, insured handling</span>
          </div>
        </div>

        <div className="premium-hero-visual">
          <div className="hero-visual-card">
            <div className="hero-img-wrap">
              <img 
                src="/assets/service-household.png"
                alt="Carefully wrapped household furniture ready for a professional move"
                className="hero-3d-img"
                loading="eager"
              />
            </div>

            <div className="hero-contact-card">
              <span className="eyebrow">READY WHEN YOU ARE</span>
              <strong>Talk to a move coordinator</strong>
              <a href="tel:+917338582679"><Phone size={15} /> +91 73385 82679</a>
            </div>
            <div className="hero-visual-caption"><ShieldCheck size={15} /> Safe packing. Clear updates.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
