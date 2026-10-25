import React from 'react';
import { ArrowRight, CheckCircle2, Clock3, MapPin, MessageCircle, Phone, ShieldCheck, Star } from 'lucide-react';

const STEPS = [
  ['01', 'Tell us what is moving', 'Share your pickup, destination and service.'],
  ['02', 'Get a clear quote', 'We confirm the plan and price on WhatsApp.'],
  ['03', 'Move without the stress', 'Our crew packs, moves and settles everything.']
];

export default function PremiumSections() {
  return (
    <>
      <section className="premium-proof-band" aria-label="KGF Express benefits">
        <div className="container premium-proof-grid">
          <span><ShieldCheck size={18} /> Careful handling</span>
          <span><CheckCircle2 size={18} /> Upfront pricing</span>
          <span><Clock3 size={18} /> Fast dispatch</span>
          <span><Star size={18} /> 4.8 rated</span>
        </div>
      </section>

      <section className="premium-process-section" id="process">
        <div className="container">
          <div className="premium-section-heading">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>A better moving day starts here.</h2>
            <p>Simple planning. Careful people. No guessing.</p>
          </div>
          <div className="premium-process-grid">
            {STEPS.map(([number, title, description]) => (
              <article className="premium-process-card" key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-contact-section" id="contact">
        <div className="container premium-contact-card">
          <div>
            <span className="eyebrow">BENGALURU &amp; BEYOND</span>
            <h2>Need to move soon?</h2>
            <p>Talk to the Electronic City dispatch desk. We usually reply in under five minutes.</p>
            <div className="premium-location-row"><MapPin size={16} /> Electronic City · Bengaluru · Pan-India</div>
          </div>
          <div className="premium-contact-actions">
            <a className="btn btn-primary btn-xl" href="tel:+917338582679"><Phone size={17} /> Call the team</a>
            <a className="btn btn-whatsapp btn-xl" href="https://wa.me/917338582679?text=Hi%20KGF%20Express,%20I%20need%20a%20moving%20quote" target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> WhatsApp us</a>
            <a className="premium-text-link" href="#quote-section">Book online <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="premium-review-section" id="reviews">
        <div className="container premium-review-layout">
          <div>
            <span className="eyebrow">A FEW WORDS FROM CLIENTS</span>
            <h2>Handled with care. Delivered on time.</h2>
          </div>
          <blockquote>
            “The team packed our TV and pooja unit with exceptional care. No scratches, no drama, and everything arrived when promised.”
            <cite>Suresh P. · Electronic City to Bellandur</cite>
          </blockquote>
        </div>
      </section>
    </>
  );
}
