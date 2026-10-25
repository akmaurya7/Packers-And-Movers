import React from 'react';

const STEPS = [
  {
    num: '01 · FOLD',
    title: 'Flat packs, folded in minutes.',
    desc: 'Heavy-gauge boxes arrive as flat sheets. Walls up, bottom flaps interlocked, ready before the coffee cools.'
  },
  {
    num: '02 · PACK',
    title: 'Taped, wrapped & labelled.',
    desc: 'High-density bubble rolls for glassware, corner guards for mirrors, and room labels so the kitchen never lands in the bedroom.'
  },
  {
    num: '03 · LOAD',
    title: 'Loaded in unpacking order.',
    desc: 'Heavy wardrobes strapped in front. The items you need on day one go in last so they come out first. Nothing slides.'
  },
  {
    num: '04 · DRIVE',
    title: 'Closed container, one route.',
    desc: 'Weatherproof container fleet routed from Electronic City across Bengaluru or nationwide. Real-time GPS transit monitoring.'
  },
  {
    num: '05 · SETTLE',
    title: 'Carried in, assembled, done.',
    desc: 'Beds assembled, boxes placed in their designated rooms, discarded packing debris cleared. You settle right in.'
  }
];

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="the-move">
      <div className="container">
        <div className="section-header-center">
          <span className="kicker-tag mono">A MOVE IN FIVE CAREFUL STEPS</span>
          <h2 className="section-title">The Move, Told from Start to Finish</h2>
          <p className="section-subtitle">
            Every household and corporate move is choreographed with zero guesswork. Here is exactly how our crew operates on moving day.
          </p>
        </div>

        <div className="steps-timeline-grid">
          {STEPS.map((step, idx) => (
            <article key={idx} className="step-card">
              <span className="step-kicker-num">{step.num}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
