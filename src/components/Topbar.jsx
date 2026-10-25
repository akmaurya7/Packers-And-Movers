import React from 'react';
import { Phone, Clock, Star, MessageSquare } from 'lucide-react';

export default function Topbar() {
  return (
    <aside className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
            <span className="pulse-green"></span>
            Electronic City Hub Active
          </span>
          <span className="topbar-divider" style={{ color: '#D5CCBE' }}>•</span>
          <span className="topbar-kicker" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={13} style={{ color: 'var(--accent)' }} />
            Avg. Dispatch Response: &lt; 5 mins
          </span>
          <span className="topbar-divider" style={{ color: '#D5CCBE' }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Star size={13} style={{ fill: '#f59e0b', color: '#f59e0b' }} />
            <strong>4.8</strong> (382 Google Reviews)
          </span>
        </div>

        <div className="topbar-right">
          <a href="tel:+917338582679" className="topbar-link">
            <Phone size={13} style={{ color: 'var(--accent)' }} />
            +91 73385 82679
          </a>
          <a 
            href="https://wa.me/917338582679?text=Hi%20KGF%20Express,%20I%20need%20a%20relocation%20quote" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="topbar-wa-link"
          >
            <MessageSquare size={13} />
            WhatsApp Direct
          </a>
        </div>
      </div>
    </aside>
  );
}
