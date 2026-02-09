import React from 'react';
import { SPONSORS } from '../data';

const Sponsors = () => (
  <section id="sponsors" className="section dark-section">
    <div className="container">
      <div className="section-header reveal">
        <span className="eyebrow">POWERED BY</span>
        <h2>Our Sponsors</h2>
      </div>
      <div className="sponsor-grid reveal">
        {SPONSORS.map((sp, i) => (
          <div key={i} className={`sp-card ${sp.invert ? 'invert' : ''}`}>
            <div className="sp-shine"></div>
            <img src={sp.logo} alt={sp.name} className="sp-logo-img" />
          </div>
        ))}
      </div>
      <div className="center-btn reveal" style={{ marginTop: '60px' }}>
        <button className="btn outline"><a href="#contact">Become a Sponsor</a></button>
      </div>
    </div>
  </section>
);
export default Sponsors;