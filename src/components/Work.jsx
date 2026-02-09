import React from 'react';
import { Icons } from './Icons';

const Work = () => (
  <section id="work" className="section">
    <div className="container">
      <div className="section-header reveal">
        <span className="eyebrow">DOMAINS</span>
        <h2>What We Do</h2>
      </div>
      <div className="cards-grid">
        {[
          { title: "Meetups", icon: <Icons.Cpu />, text: "Architecture & Scaling." },
          { title: "Workshops", icon: <Icons.Terminal />, text: "Hands-on coding labs." },
          { title: "Hackathons", icon: <Icons.Zap />, text: "Solving complex problems." },
          { title: "Networking", icon: <Icons.Globe />, text: "Connect with leaders." }
        ].map((c, i) => (
          <div key={i} className="holo-card reveal">
            <div className="holo-content">
              <div className="icon-box">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Work;