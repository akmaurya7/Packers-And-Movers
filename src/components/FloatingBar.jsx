import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingBar() {
  return (
    <aside className="floating-action-pill" aria-label="Quick Action Bar">
      <div className="float-status-text">
        <span className="pulse-green"></span>
        <span>KGF Express Dispatch · 73385 82679</span>
      </div>

      <div className="float-button-group">
        <a href="tel:+917338582679" className="btn btn-secondary btn-sm" aria-label="Call Dispatch Hotline">
          <Phone size={13} style={{ color: 'var(--accent)' }} />
          <span>Call Now</span>
        </a>
        <a 
          href="https://wa.me/917338582679?text=Hi%20KGF%20Express,%20I%20want%20a%20quick%20quote%20for%20my%20move" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary btn-sm"
          style={{ background: 'var(--whatsapp)', borderColor: 'var(--whatsapp)', color: '#fff' }}
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={13} />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
