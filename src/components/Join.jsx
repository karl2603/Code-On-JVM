import React from 'react';
import { Icons } from './Icons';

const Join = () => (
  <section id="join" className="section join-section">
    <div className="join-mesh"></div>
    <div className="container center-content reveal">
      <h2 className="join-heading">JOIN THE <span className="outline-text">ELITE</span></h2>
      <p className="join-sub">Access our private network, job referrals, and architecture debates.</p>


      <div className="join-main-action">
        <button className="btn primary big-btn">
          <a href='https://chat.whatsapp.com/L2e0OhSON4XGqmZicY2PfD'>
            <span style={{ marginRight: '8px' }}>Join WhatsApp Community</span>
            <Icons.ArrowUpRight />
          </a>
        </button>
      </div>


      <div className="bento-wrapper">
        <p className="social-label">OR CONNECT VIA</p>
        <div className="bento-grid">


          <a href="https://www.linkedin.com/company/codeonjvmchennai/posts/?feedView=all&viewAsMember=true" className="bento-card brand-linkedin" target="_blank" rel="noreferrer">
            <div className="bento-icon"><Icons.LinkedIn /></div>
            <div className="bento-info">
              <span className="b-name">LinkedIn</span>
              <span className="b-action">Follow Us</span>
            </div>
            <div className="bento-shine"></div>
          </a>


          <a href="https://www.instagram.com/codeonjvmchennai/" className="bento-card brand-insta" target="_blank" rel="noreferrer">
            <div className="bento-icon"><Icons.Instagram /></div>
            <div className="bento-info">
              <span className="b-name">Instagram</span>
              <span className="b-action">See Photos</span>
            </div>
            <div className="bento-shine"></div>
          </a>


          <a href="https://www.youtube.com/@CodeOnJVMChennai" className="bento-card brand-yt" target="_blank" rel="noreferrer">
            <div className="bento-icon"><Icons.YouTube /></div>
            <div className="bento-info">
              <span className="b-name">YouTube</span>
              <span className="b-action">Watch Tech Talks</span>
            </div>
            <div className="bento-shine"></div>
          </a>


          <a href="https://luma.com/user/CodeonJVM" className="bento-card brand-luma" target="_blank" rel="noreferrer">
            <div className="bento-icon"><Icons.Luma /></div>
            <div className="bento-info">
              <span className="b-name">Luma</span>
              <span className="b-action">Register Events</span>
            </div>
            <div className="bento-shine"></div>
          </a>

        </div>
      </div>
    </div>
  </section>
);
export default Join;