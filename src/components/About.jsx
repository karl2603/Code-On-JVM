import React, { useState, useEffect, useRef } from 'react';

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); } else setCount(Math.ceil(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return [count, ref];
};

const About = () => {
  const [engineers, refEng] = useCountUp(2000);
  const [sessions, refSess] = useCountUp(20);
  const [community, refComm] = useCountUp(100);

  return (
    <section id="about" className="section dark-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal">
            <h2 className="section-title">Beyond Syntax.</h2>
            <p className="lead-text">We are not just a meetup group. We are a collective of engineering excellence.</p>
            <p className="desc-text">Located in the heart of Chennai, we bridge the gap between theory and high-scale enterprise engineering.</p>
            <div className="stats-row">
              <div className="stat" ref={refEng}><h3>{engineers}+</h3><label>Members</label></div>
              <div className="stat" ref={refSess}><h3>{sessions}+</h3><label>Sessions</label></div>
              <div className="stat hl" ref={refComm}><h3>{community}%</h3><label>Community</label></div>
            </div>
          </div>
          <div className="about-visual reveal">
            <div className="jvm-stack-container">
              <div className="stack-layer layer-1"><span>Java</span></div>
              <div className="stack-layer layer-2"><span>JVM</span></div>
              <div className="stack-layer layer-3"><span>Kotlin</span></div>
              <div className="orbit-ring"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;