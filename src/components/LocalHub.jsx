import React from 'react';
import { MapPin, Phone, MessageSquare, Compass, ArrowUpRight } from 'lucide-react';

export default function LocalHub() {
  return (
    <section className="location-section" id="hub">
      <div className="container">
        <div className="location-layout">
          <div className="loc-info-column">
            <span className="kicker-tag mono">BENGALURU OPERATIONAL BASE</span>
            <h2 className="section-title">Rooted in Electronic City, Relocating Pan-India</h2>
            <p className="section-subtitle">
              Located right by the Circle on Doddathogur Road. Fast access to the Elevated Highway, NICE Ring Road, and Silk Board junction.
            </p>

            <div className="loc-info-list">
              <div className="loc-info-card">
                <div className="loc-icon-bubble">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="loc-card-title">Headquarters Address</span>
                  <p className="loc-card-val">
                    Doddathogur Rd, near Circle, Electronic City, Doddathoguru, Bengaluru, Karnataka 560100
                  </p>
                </div>
              </div>

              <div className="loc-info-card">
                <div className="loc-icon-bubble">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="loc-card-title">Direct Dispatch Hotline &amp; WhatsApp</span>
                  <p className="loc-card-val">
                    <a href="tel:+917338582679" style={{ color: 'var(--accent)', fontWeight: 700 }}>+91 73385 82679</a> (73385 82679)
                  </p>
                </div>
              </div>

              <div className="loc-info-card">
                <div className="loc-icon-bubble">
                  <Compass size={18} />
                </div>
                <div>
                  <span className="loc-card-title">Daily Service Corridors</span>
                  <p className="loc-card-val" style={{ fontSize: '0.86rem', color: 'var(--ink-secondary)' }}>
                    Electronic City Phase 1 &amp; 2, HSR Layout, Koramangala, Bellandur, Sarjapur Rd, Whitefield, Bannerghatta Rd &amp; All Bengaluru.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href="https://maps.google.com/?q=Doddathogur+Rd+near+Circle+Electronic+City+Bengaluru+560100" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight size={14} />
              </a>
              <a 
                href="https://wa.me/917338582679?text=Hi%20KGF%20Express,%20I%20am%20located%20near%20Electronic%20City%20and%20need%20a%20quote" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>

          <div className="map-frame-box">
            <div className="map-frame-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.56734320953!2d77.6582!3d12.8452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c888e6e8eab%3A0x6b1f24d7768a4e8!2sDoddathoguru%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="KGF Express Electronic City Headquarters Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
