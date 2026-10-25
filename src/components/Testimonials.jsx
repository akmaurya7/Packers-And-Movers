import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const REVIEWS_DATA = [
  {
    author: 'Suresh Prabhu',
    role: 'Household Shifting · Electronic City to Bellandur',
    avatar: 'SP',
    text: 'We booked KGF Express for household shifting from Doddathoguru to Bellandur. The team arrived at sharp 8:30 AM with bubble wrap rolls and heavy-duty blankets. They packed our wooden pooja unit and 55-inch TV with exceptional care. No scratches, extremely polite workers.'
  },
  {
    author: 'Ananya Nambiar',
    role: 'Car & Bike Relocation · Bengaluru to Hyderabad',
    avatar: 'AN',
    text: 'Transported my Royal Enfield Himalayan and Honda City through KGF Express to Hyderabad. The wooden crating for the bike was rock solid. Received on time with clean paperwork and zero dings. The best vehicle relocation team in south Bengaluru.'
  },
  {
    author: 'Rohan Kulkarni',
    role: 'Office Relocation · 30-Seater Tech Hub, HSR Layout',
    avatar: 'RK',
    text: 'Office relocation of our startup in HSR. They packed servers, dual monitors, chairs, and whiteboards over Saturday night. Monday morning we were fully operational without an hour of delay. Truly five-star execution and zero drama.'
  }
];

export default function Testimonials() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="section-header-center">
          <span className="kicker-tag mono">4.8 / 5.0 GOOGLE RATING</span>
          <h2 className="section-title">Verified Words from Bengaluru Clients</h2>
          <p className="section-subtitle">
            Every review is from an authentic homeowner, tenant, or business manager shifted by KGF Express.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS_DATA.map((rev, idx) => (
            <article key={idx} className="review-item-card">
              <div className="review-stars-row">
                <div className="star-rating-icons">
                  {'★★★★★'}
                </div>
                <span className="review-verified-pill">
                  ✓ Verified Move
                </span>
              </div>

              <p className="review-body-text">
                "{rev.text}"
              </p>

              <div className="reviewer-meta-box">
                <div className="reviewer-avatar-sq">
                  {rev.avatar}
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--ink)' }}>{rev.author}</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>{rev.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
