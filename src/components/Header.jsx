import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand-wrap" aria-label="KGF Express Home">
          <div className="brand-icon-box">
            <img src="/assets/logo-3d.jpg" alt="KGF Express 3D Logo" className="brand-logo-img" width="44" height="44" />
          </div>
          <div className="brand-text-col">
            <span className="brand-name">KGF EXPRESS</span>
            <span className="brand-sub">PACKERS &amp; MOVERS</span>
          </div>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} aria-label="Primary Navigation">
          <a href="#services" className="nav-item" onClick={closeMenu}>Services</a>
          <a href="#process" className="nav-item" onClick={closeMenu}>How it works</a>
          <a href="#reviews" className="nav-item" onClick={closeMenu}>Reviews</a>
          <a href="#contact" className="nav-item" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <a href="tel:+917338582679" className="header-phone-link">
            <Phone size={14} style={{ color: 'var(--accent)' }} />
            <span>73385 82679</span>
          </a>
          <a href="#quote-section" className="btn btn-primary btn-sm">
            <span>Book a move</span>
            <ArrowRight size={14} />
          </a>
          <button 
            type="button" 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
