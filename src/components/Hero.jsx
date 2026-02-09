import React from 'react';
import { Icons } from './Icons';

const Hero = ({ scrollTo }) => (
  <section id="home" className="hero-section">
    <div className="hero-glow"></div>
    <div className="hero-container">
      <div className="hero-content reveal">
        <div className="hero-tag"><span className="dot"></span> CHENNAI'S BIGGEST JAVA COMMUNITY</div>
        <h1 className="hero-heading">CODE ON<br /><span className="text-gradient">JVM CHENNAI</span></h1>
        <p className="hero-sub">A premium community where Java, Kotlin & JVM enthusiasts connect, learn & build.</p>
        <div className="hero-actions">
          <button className="btn primary" onClick={() => scrollTo('join')}>Join Community <Icons.ChevronRight /></button>
          <button className="btn outline" onClick={() => scrollTo('events')}>View Events</button>
        </div>
      </div>
      <div className="hero-code reveal">
        <div className="code-block">
          <div className="code-header"><span className="c-dot r"></span><span className="c-dot y"></span><span className="c-dot g"></span></div>
          <pre><code>
            <span className="k">class</span> <span className="c">Future</span> <span className="k">extends</span> <span className="c">JVM</span> {'{'}<br /><br />
            &nbsp;&nbsp;<span className="k">void</span> <span className="f">join</span>() {'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c">Community</span>.build(<span className="s">"Chennai"</span>);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c">Java</span>.learn();<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c">Engineers</span>.connect();<br />
            &nbsp;&nbsp;{'}'}<br />
            {'}'}
          </code></pre>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;