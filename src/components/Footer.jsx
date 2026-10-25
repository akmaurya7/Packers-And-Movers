import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Star } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-col-brand">
            <div className="brand-wrap">
              <div className="brand-icon-box" style={{ width: '38px', height: '38px' }}>
                <img src="/assets/logo-3d.jpg" alt="KGF Express" className="brand-logo-img" />
              </div>
              <div className="brand-text-col">
                <span className="brand-name" style={{ fontSize: '1.1rem' }}>KGF EXPRESS</span>
                <span className="brand-sub">PACKERS &amp; MOVERS</span>
              </div>
            </div>

            <p className="footer-bio-text">
              Careful local and long-distance moves from Electronic City, with sturdy packing, clear communication and a crew that treats your things like their own.
            </p>

            <div className="footer-rating-pill">
              <Star size={16} style={{ fill: '#f59e0b', color: '#f59e0b' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--ink)' }}>Google Rating: 4.8 / 5.0</strong>
                <span style={{ fontSize: '0.74rem', color: 'var(--ink-muted)' }}>382+ Verified Relocations in Bengaluru</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="footer-h4">Services</h4>
            <ul className="footer-link-list">
              <li><a href="#household">Household Shifting</a></li>
              <li><a href="#services">Office Relocation</a></li>
              <li><a href="#services">Car Transportation</a></li>
              <li><a href="#services">Bike Transportation</a></li>
              <li><a href="#services">Warehouse &amp; Storage</a></li>
              <li><a href="#services">Packing &amp; Loading</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-h4">Bengaluru Coverage</h4>
            <ul className="footer-link-list">
              <li><a href="#hub">Electronic City Phase 1 &amp; 2</a></li>
              <li><a href="#hub">Doddathoguru &amp; Neeladri Rd</a></li>
              <li><a href="#hub">HSR Layout &amp; Koramangala</a></li>
              <li><a href="#hub">Bellandur &amp; Sarjapur Road</a></li>
              <li><a href="#hub">Whitefield &amp; Marathahalli</a></li>
              <li><a href="#hub">All India Interstate Moves</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-h4">Head Hub &amp; Contact</h4>
            <div className="footer-contact-row">
              <MapPin size={15} style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }} />
              <span>Doddathogur Rd, near Circle, Electronic City, Doddathoguru, Bengaluru 560100</span>
            </div>
            <div className="footer-contact-row">
              <Phone size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <a href="tel:+917338582679" style={{ fontWeight: 600, color: 'var(--ink)' }}>+91 73385 82679</a>
            </div>
            <div className="footer-contact-row">
              <MessageSquare size={15} style={{ color: 'var(--whatsapp-dark)', flexShrink: 0 }} />
              <a href="https://wa.me/917338582679?text=Hi%20KGF%20Express,%20I%20want%20to%20book%20a%20move" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--whatsapp-dark)', fontWeight: 600 }}>
                WhatsApp: 73385 82679
              </a>
            </div>
            <div className="footer-contact-row">
              <Clock size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span>Hours: 7:00 AM – 11:00 PM (Daily)</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="mono" style={{ margin: 0 }}>© {currentYear} KGF Express Packers and Movers. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <span>IBA &amp; ISO Materials</span>
            <span>•</span>
            <span>Safe Transit Verified</span>
            <span>•</span>
            <a href="#quote-section" style={{ color: 'var(--accent)', fontWeight: 600 }}>Book a Move</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
