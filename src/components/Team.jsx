import React from 'react';
import { TEAM } from '../data';

const Team = () => (
  <section id="team" className="section">
    <div className="container">
      <div className="section-header reveal">
        <span className="eyebrow">THE CORE</span>
        <h2>Our Team</h2>
      </div>
      <div className="team-grid">
        {TEAM.map((m, i) => (
          <div key={i} className="team-card reveal">
            <div className="tc-img-wrap">
              <img src={m.img} alt={m.name} className="tc-img" />
              <div className="tc-overlay"></div>
              <div className="tc-info"><h4>{m.name}</h4><span>{m.role}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Team;