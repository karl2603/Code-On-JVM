import React from 'react';
import { Icons } from './Icons';

const Footer = () => (
  <footer className="footer-architect">
    <div className="container">
      <div className="footer-content">
        <div className="footer-brand-header">
          <h1 className="footer-giant-text">CODE ON <span className="highlight-orange">JVM</span></h1>
        </div>
        <div className="f-grid">
          <div className="f-col">
            <h4 className="f-head">EXPLORE</h4>
            <a href="#about">About Us</a><a href="#events">Upcoming Events</a><a href="#work">What We Do</a><a href="#team">Our Team</a>
          </div>
          <div className="f-col">
            <h4 className="f-head">CONNECT</h4>
            <a href="https://www.linkedin.com/company/codeonjvmchennai/posts/?feedView=all&viewAsMember=true">LinkedIn</a>
            <a href="https://www.instagram.com/codeonjvmchennai/">Instagram</a>
            <a href="https://www.youtube.com/@CodeOnJVMChennai">YouTube</a>
            <a href="https://luma.com/user/CodeonJVM">Luma</a>
          </div>
          <div className="f-col">
            <h4 className="f-head">LEGAL</h4>
            <a href="#">Code of Conduct</a><a href="#">Privacy Policy</a><a href="#">Terms of Use</a>
          </div>
          <div className="f-col credit-col">
            <h4 className="f-head">CREDIT</h4>
            <p>Designed & Built by <a className="text-white" href='https://www.linkedin.com/in/karlarvindraj/'>Karl</a>.</p>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom-bar">
        <div className="fb-left">&copy; 2026 CODE ON JVM. CHENNAI.</div>
        <button className="back-top-btn" onClick={() => window.scrollTo(0, 0)}>
          Back to Top <span className="icon-up"><Icons.ArrowUp /></span>
        </button>
      </div>
    </div>
  </footer>
);
export default Footer;