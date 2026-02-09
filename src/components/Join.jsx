import React from 'react';
import { Icons } from './Icons';

const Join = () => (
  <section id="join" className="section join-section">
    <div className="join-mesh"></div>
    <div className="container center-content reveal">
      <h2 className="join-heading">JOIN THE <span className="outline-text">ELITE</span></h2>
      <p className="join-sub">Access our private network, job referrals, and architecture debates.</p>
      <div className="join-btns">
        <button className="btn primary big-btn">
          <a href='https://chat.whatsapp.com/L2e0OhSON4XGqmZicY2PfD'>Join WhatsApp Community </a>
          <Icons.ArrowUpRight />
        </button>
      </div>
    </div>
  </section>
);
export default Join;